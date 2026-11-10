import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import { BlogCard } from "../components/blog/BlogCard";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { BlogBreadcrumbs } from "../components/blog/BlogBreadcrumbs";
import { Search, BookOpen, Sun, ChevronLeft, ChevronRight, X } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "../data/blogPosts";
import { BLOG_CATEGORIES } from "../data/categories";

const POSTS_PER_PAGE = 6;

export const BlogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategorySlug = searchParams.get("categoria") || "";
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        !activeCategorySlug || post.categorySlug === activeCategorySlug;
      const matchesSearch =
        !searchTerm.trim() ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategorySlug, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategorySelect = (slug: string) => {
    if (activeCategorySlug === slug) {
      searchParams.delete("categoria");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ categoria: slug });
    }
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm("");
    searchParams.delete("categoria");
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog 4L Energia Solar",
    "description": "Portal de conteúdo especializado em energia solar fotovoltaica, eficiência energética e soluções para consumidores residenciais e empresariais.",
    "url": "https://4lenergiasolar.com.br/blog",
    "publisher": {
      "@type": "Organization",
      "name": "4L Energia Solar",
      "logo": "https://4lenergiasolar.com.br/logo.jpeg"
    }
  };

  return (
    <>
      <SEOHead
        path="/blog"
        title="Blog de Energia Solar e Eficiência | 4L Energia Solar"
        description="Artigos técnicos sobre tecnologia fotovoltaica, dimensionamento, Marco Legal da GD (Lei 14.300), tarifas de energia e Mercado Livre para empresas."
        canonical="https://4lenergiasolar.com.br/blog"
        ogImage="/assets/og/og-blog.jpg"
        ogImageAlt="Mesa de trabalho de engenharia solar com diagramas elétricos e tablet com métricas de geração"
        jsonLd={blogJsonLd}
      />

      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Editorial Hero */}
        <section className="relative bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/hero-solar.jpg"
              alt="Módulos solares fotovoltaicos e sustentabilidade"
              className="w-full h-full object-cover opacity-45 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/45" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal de Conteúdo Técnico</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Blog 4L Energia Solar
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Informação técnica aprofundada, estudos tarifários, legislação e análises financeiras para residências e empresas de Campinas e região.
            </p>
          </div>
        </section>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-6">
            <BlogBreadcrumbs items={[{ label: "Blog", url: "/blog" }]} />
          </div>

          {/* Search Bar & Filter Tabs */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-10 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Internal search field (lightweight, zero heavy deps) */}
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Pesquisar artigos por tema ou palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label="Limpar pesquisa"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {(activeCategorySlug || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline whitespace-nowrap self-start sm:self-auto"
                >
                  Limpar todos os filtros
                </button>
              )}
            </div>

            {/* Category horizontal selector */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block mb-3">
                Categorias Editoriais:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategorySelect("")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    !activeCategorySlug
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Todas as Categorias ({BLOG_POSTS.length})
                </button>
                {BLOG_CATEGORIES.map((cat) => {
                  const isSelected = activeCategorySlug === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.slug)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white font-semibold shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Posts Grid Column */}
            <div className="lg:col-span-8 space-y-8">
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                  <p className="text-base font-bold text-slate-800">
                    Nenhum artigo encontrado para os critérios selecionados.
                  </p>
                  <p className="text-sm text-slate-500">
                    Tente buscar por termos mais genéricos ou limpe os filtros de categoria.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                  >
                    Ver Todos os Artigos
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paginatedPosts.map((post, idx) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        featured={idx === 0 && currentPage === 1 && !activeCategorySlug && !searchTerm}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pt-8 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Página anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                              currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Próxima página"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <BlogSidebar currentCategory={activeCategorySlug} />
            </div>

          </div>

        </div>
      </main>
    </>
  );
};
