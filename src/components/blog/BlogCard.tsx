import React from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "../../data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <article
      className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2 md:items-center" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-900 ${featured ? "h-64 md:h-full" : "h-52"}`}>
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={600}
          height={400}
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-semibold text-white px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-sm border border-white/20">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Unboxed text with subtle typographic separators */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span>{post.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-600 font-medium">{post.author}</span>
          </div>

          <h3 className={`font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}>
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:gap-2.5 transition-all"
          >
            <span>Ler Artigo Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
