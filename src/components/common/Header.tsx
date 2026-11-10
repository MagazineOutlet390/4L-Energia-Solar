import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Sun } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "../../data/company";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Meus Projetos", path: "/meus-projetos" },
    { label: "Mercado Livre", path: "/mercado-livre" },
    { label: "Sobre a 4L", path: "/sobre" },
    { label: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3"
          : "bg-slate-950/70 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Single Brand element with Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="4L Energia Solar - Início"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 shadow-md flex items-center justify-center shrink-0">
              <img
                src="/logo.jpeg"
                alt="4L Energia Solar Logo"
                className="w-full h-full object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                4L Energia Solar
              </span>
              <span className="text-[11px] font-medium text-slate-300 tracking-wider uppercase">
                Campinas & Região
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Single-line, unboxed, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive(link.path)
                    ? "text-amber-400 font-semibold border-b-2 border-amber-400"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com a 4L Energia Solar para saber mais sobre projetos fotovoltaicos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-md shadow-emerald-950/40 whitespace-nowrap shrink-0"
              aria-label="Falar no WhatsApp com a 4L Energia Solar"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>(19) 9 8315-5772</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-slate-900 text-amber-400 font-semibold"
                    : "text-slate-200 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <a
                href={getWhatsAppLink("Olá! Gostaria de solicitar um orçamento de energia solar com a 4L.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Falar no WhatsApp (19) 9 8315-5772</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
