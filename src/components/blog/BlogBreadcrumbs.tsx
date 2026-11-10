import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BlogBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const BlogBreadcrumbs: React.FC<BlogBreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-500">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="text-slate-500 hover:text-slate-900 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              {item.url && !isLast ? (
                <Link to={item.url} className="text-slate-500 hover:text-slate-900">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3 h-3 text-slate-400" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
