import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import { BlogBreadcrumbs } from "../components/blog/BlogBreadcrumbs";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { BlogCard } from "../components/blog/BlogCard";
import { Calendar, Clock, User, MessageCircle, Calculator, ArrowRight, List, Share2 } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "../data/blogPosts";
import { getWhatsAppLink } from "../data/company";

export const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts from same category or fallback
  const relatedPosts = useMemo(() => {
    const sameCategory = BLOG_POSTS.filter(
      (p) => p.categorySlug === post.categorySlug && p.slug !== post.slug
    );
    if (sameCategory.length >= 2) return sameCategory.slice(0, 2);
    return BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  }, [post]);

  // Extract H2 headings for Table of Contents
  const tocHeadings = useMemo(() => {
    const lines = post.content.split("\n");
    const headings: string[] = [];
    lines.forEach((line) => {
      const match = line.match(/^##\s+(.+)$/);
      if (match) {
        headings.push(match[1].trim());
      }
    });
    return headings;
  }, [post.content]);

  // JSON-LD Article Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.coverImage.startsWith("http")
      ? post.coverImage
      : `https://4lenergiasolar.com.br${post.coverImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "4L Energia Solar",
      "url": "https://4lenergiasolar.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "4L Energia Solar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://4lenergiasolar.com.br/logo.jpeg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://4lenergiasolar.com.br/blog/${post.slug}`
    }
  };

  // Simple Markdown renderer for headings and paragraphs
  const renderContent = (content: string) => {
    const sections = content.split("\n\n");
    return sections.map((sec, idx) => {
      const trimmed = sec.trim();
      if (trimmed.startsWith("## ")) {
        const title = trimmed.replace("## ", "");
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <h2
            key={idx}
            id={id}
            className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4 pt-4 border-t border-slate-100 scroll-mt-28"
          >
            {title}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        const title = trimmed.replace("### ", "");
        return (
          <h3 key={idx} className="text-lg font-bold text-slate-900 mt-6 mb-2">
            {title}
          </h3>
        );
      }
      if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
        const items = trimmed.split("\n");
        return (
          <ul key={idx} className="list-disc pl-5 my-4 space-y-2 text-slate-700 text-sm sm:text-base leading-relaxed">
            {items.map((it, i) => (
              <li key={i}>{it.replace(/^[-*]\s+|\d+\.\s+/, "")}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <>
      <SEOHead
        path={`/blog/${post.slug}`}
        title={`${post.title} | Blog 4L Energia Solar`}
        description={post.description}
        canonical={`https://4lenergiasolar.com.br/blog/${post.slug}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogType="article"
        ogImage={post.coverImage}
        ogImageAlt={post.coverImageAlt}
        twitterCard="summary_large_image"
        keywords={post.tags}
        jsonLd={articleJsonLd}
      />

      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          <BlogBreadcrumbs
            items={[
              { label: "Blog", url: "/blog" },
              { label: post.category, url: `/blog?categoria=${post.categorySlug}` },
              { label: post.title }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-6">
            
            {/* Article Content Column */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              
              {/* Category & Read Time */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <Link
                  to={`/blog?categoria=${post.categorySlug}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {post.category}
                </Link>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </div>

              {/* H1 Principal */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {post.title}
              </h1>

              {/* Resumo Introdutório */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-medium border-l-2 border-blue-500 pl-4 py-1">
                {post.excerpt}
              </p>

              {/* Author & Publication Dates */}
              <div className="flex flex-wrap items-center gap-4 py-4 border-y border-slate-100 text-xs text-slate-500 mb-8">
                <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <User className="w-4 h-4 text-blue-600" />
                  {post.author}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Publicado em: {post.publishedAt}
                </span>
                {post.updatedAt && post.updatedAt !== post.publishedAt && (
                  <>
                    <span>·</span>
                    <span className="text-slate-400">
                      Atualizado em: {post.updatedAt}
                    </span>
                  </>
                )}
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl overflow-hidden bg-slate-900 mb-8 border border-slate-200">
                <img
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  className="w-full h-auto max-h-[450px] object-cover"
                  width={900}
                  height={500}
                />
              </div>

              {/* Table of Contents if article has 2+ headings */}
              {tocHeadings.length >= 2 && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                    <List className="w-4 h-4 text-blue-600" />
                    <span>Neste artigo você vai encontrar:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {tocHeadings.map((heading, i) => {
                      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                      return (
                        <li key={i}>
                          <a
                            href={`#${id}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1.5"
                          >
                            <span className="text-slate-400">·</span>
                            <span>{heading}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Main Body */}
              <div className="prose max-w-none text-slate-700">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Contextual In-Article Call to Action */}
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-950 text-white space-y-4 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Recomendação Técnica 4L Energia Solar
                </span>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  {post.ctaText || "Deseja saber quanto pode economizar no seu caso específico?"}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink(`Olá! Li o artigo "${post.title}" no blog da 4L e gostaria de uma avaliação para meu imóvel.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar no WhatsApp com Engenharia</span>
                  </a>
                  <Link
                    to="/#calculadora"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Fazer Simulação na Calculadora</span>
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-14 pt-10 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Artigos Relacionados
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedPosts.map((rel) => (
                      <BlogCard key={rel.slug} post={rel} />
                    ))}
                  </div>
                </div>
              )}

            </article>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <BlogSidebar
                currentCategory={post.categorySlug}
                excludePostSlug={post.slug}
              />
            </div>

          </div>

        </div>
      </main>
    </>
  );
};
