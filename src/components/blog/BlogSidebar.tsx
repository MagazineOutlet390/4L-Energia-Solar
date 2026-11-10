import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Calculator, ChevronRight, Tag } from "lucide-react";
import { BLOG_CATEGORIES } from "../../data/categories";
import { BLOG_POSTS, BlogPost } from "../../data/blogPosts";
import { getWhatsAppLink } from "../../data/company";

interface BlogSidebarProps {
  currentCategory?: string;
  excludePostSlug?: string;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  currentCategory,
  excludePostSlug,
}) => {
  const recentPosts = BLOG_POSTS.filter((p) => p.slug !== excludePostSlug).slice(0, 4);

  return (
    <aside className="space-y-8">
      {/* Categories Widget */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
          <Tag className="w-4 h-4 text-blue-600" />
          <span>Categorias Editoriais</span>
        </h4>
        <ul className="space-y-2 text-sm">
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = currentCategory === cat.slug;
            return (
              <li key={cat.id}>
                <Link
                  to={`/blog?categoria=${cat.slug}`}
                  className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-colors text-xs font-medium ${
                    isSelected
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
          Artigos Recentes
        </h4>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.slug} className="group">
              <span className="text-[11px] text-slate-400 block mb-1">
                {post.publishedAt} · {post.readingTime}
              </span>
              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Commercial Conversion Card */}
      <div className="bg-gradient-to-br from-blue-900 to-slate-950 text-white rounded-2xl p-6 shadow-md space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
          Avaliação Gratuita
        </span>
        <h4 className="text-lg font-bold leading-snug">
          Quanto sua casa ou empresa pode economizar?
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Envie sua conta de energia ou faça uma simulação na calculadora para receber o estudo prévio da 4L Energia Solar.
        </p>
        <div className="pt-1 space-y-2">
          <Link
            to="/#calculadora"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow"
          >
            <Calculator className="w-4 h-4" />
            <span>Simular na Calculadora</span>
          </Link>
          <a
            href={getWhatsAppLink("Olá! Li um artigo no blog da 4L Energia Solar e gostaria de tirar uma dúvida sobre energia solar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
