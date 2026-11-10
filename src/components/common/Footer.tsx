import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, ShieldCheck, Sun, Star } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "../../data/company";
import { BLOG_CATEGORIES } from "../../data/categories";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white p-0.5 shadow shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="4L Energia Solar"
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                4L Energia Solar
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              Projetos e instalação de sistemas solares fotovoltaicos residenciais e empresariais, além de assessoria especializada para o Mercado Livre de Energia. Base operacional em Campinas e atendimento personalizado no Circuito das Águas Paulista.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                {COMPANY.metrics.experience}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                {COMPANY.metrics.clients}
              </span>
            </div>
          </div>

          {/* Column 2: Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Soluções
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/meus-projetos" className="hover:text-white transition-colors">
                  Energia Solar Residencial
                </Link>
              </li>
              <li>
                <Link to="/meus-projetos" className="hover:text-white transition-colors">
                  Energia Solar Empresarial
                </Link>
              </li>
              <li>
                <Link to="/mercado-livre" className="hover:text-white transition-colors">
                  Mercado Livre de Energia
                </Link>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Calculadora de Economia
                </a>
              </li>
              <li>
                <Link to="/meus-projetos" className="hover:text-white transition-colors">
                  Portfólio de Obras
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Blog & Categorias (Seção 13) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Blog & Conhecimento
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-amber-400 font-medium hover:text-amber-300 transition-colors">
                  Todos os Artigos
                </Link>
              </li>
              {BLOG_CATEGORIES.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/blog?categoria=${cat.slug}`}
                    className="hover:text-white transition-colors truncate block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Áreas Atendidas & Contato */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Atendimento & Contato
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  {COMPANY.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={`tel:${COMPANY.whatsappRaw}`}
                  className="text-xs text-slate-200 hover:text-white"
                >
                  {COMPANY.whatsapp}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de falar com a equipe técnica da 4L Energia Solar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Oficial</span>
                </a>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-[11px] font-medium text-slate-300 uppercase tracking-wider mb-2">
                Páginas Regionais:
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                <Link to="/energia-solar-campinas" className="hover:text-white transition-colors underline-offset-2 hover:underline">Campinas</Link>
                <span>·</span>
                <Link to="/energia-solar-indaiatuba" className="hover:text-white transition-colors underline-offset-2 hover:underline">Indaiatuba</Link>
                <span>·</span>
                <Link to="/energia-solar-socorro" className="hover:text-white transition-colors underline-offset-2 hover:underline">Socorro</Link>
                <span>·</span>
                <Link to="/energia-solar-aguas-de-lindoia" className="hover:text-white transition-colors underline-offset-2 hover:underline">Águas de Lindóia</Link>
                <span>·</span>
                <Link to="/energia-solar-lindoia" className="hover:text-white transition-colors underline-offset-2 hover:underline">Lindóia</Link>
                <span>·</span>
                <Link to="/energia-solar-amparo" className="hover:text-white transition-colors underline-offset-2 hover:underline">Amparo</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © {currentYear} {COMPANY.name}. Todos os direitos reservados. CNPJ e projetos homologados conforme normas ANEEL/CPFL.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-slate-300 transition-colors">
              Política de Privacidade & LGPD
            </Link>
            <Link to="/sobre" className="hover:text-slate-300 transition-colors">
              Sobre a 4L
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
