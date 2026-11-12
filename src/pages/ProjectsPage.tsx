import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import { ShimmerText } from "../components/common/ShimmerText";
import { BlogBreadcrumbs } from "../components/blog/BlogBreadcrumbs";
import { Zap, MapPin, TrendingUp, X, MessageCircle, Filter, ShieldCheck, Sun, ArrowRight } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";
import { COMPANY, getWhatsAppLink } from "../data/company";

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<"Todos" | "Residencial" | "Empresarial">("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "Todos") return true;
    return p.category === filter;
  });

  return (
    <>
      <SEOHead path="/meus-projetos" />

      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/hero-solar.jpg"
              alt="Painéis solares fotovoltaicos"
              className="w-full h-full object-cover opacity-45 filter brightness-95"
              width={1920}
              height={1280}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/45" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Portfólio Comprovado</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              <ShimmerText variant="light">Projetos que já geram economia real</ShimmerText>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Conheça algumas instalações residenciais e empresariais realizadas pela 4L Energia Solar no interior paulista.
            </p>

            <div className="flex items-center justify-center gap-8 text-xs text-slate-300 pt-4 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {COMPANY.metrics.clients}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                {COMPANY.metrics.experience}
              </span>
            </div>
          </div>
        </div>

        {/* Visible Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <BlogBreadcrumbs items={[{ label: "Projetos Realizados" }]} />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Filter Bar (Segmented control) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Filtrar Categoria:
              </span>
            </div>
            <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl">
              {(["Todos", "Residencial", "Empresarial"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    filter === cat
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              filteredProjects.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"
            } gap-8`}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className={`w-full h-full object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm text-white border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span>{project.neighborhood}, {project.city}-{project.state}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[11px] text-slate-400 block">Potência</span>
                        <span className="font-bold text-slate-900 flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-amber-500" />
                          {project.powerKwp} kWp
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Economia Informada</span>
                        <span className="font-bold text-emerald-600 flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {project.reportedSavings}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                    >
                      Ver Detalhes do Projeto
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Highlight: +200 Clients & Dual CTAs */}
          <section
            aria-labelledby="portfolio-more-heading"
            className="mt-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl overflow-hidden relative"
          >
            {/* Subtle architectural grid lines */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            <div className="relative z-10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Portfólio em expansão · Campinas e Região
                </p>

                <h2
                  id="portfolio-more-heading"
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight"
                >
                  <ShimmerText variant="light">Esses são apenas alguns dos nossos projetos realizados!</ShimmerText>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Já são mais de 200 clientes atendidos pela 4L Energia Solar. Temos muito mais instalações realizadas e experiências de clientes para compartilhar. Entre em contato e conheça outros projetos do nosso portfólio.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={getWhatsAppLink(
                      "Olá! Vi alguns projetos realizados no site da 4L Energia Solar e gostaria de solicitar um orçamento de energia solar para o meu imóvel."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Solicitar orçamento</span>
                  </a>

                  <a
                    href={getWhatsAppLink(
                      "Olá! Visitei o portfólio da 4L Energia Solar e gostaria de conhecer mais projetos e instalações realizadas pela empresa."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-colors whitespace-nowrap"
                  >
                    <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Conhecer mais projetos</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-400 tabular-nums">
                    +200
                  </div>
                  <div className="text-sm font-bold text-white">
                    clientes atendidos
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
                    {COMPANY.metrics.experience} em instalações residenciais e empresariais no interior paulista.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contextual Internal Navigation */}
          <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Explore Soluções por Região e Conteúdo Técnico
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-semibold">
              <Link
                to="/energia-solar-lindoia"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 transition-colors"
              >
                <span>Energia Solar em Lindóia</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                to="/blog/energia-solar-para-empresas"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 transition-colors"
              >
                <span>Solar para Empresas</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                to="/blog/energia-solar-no-circuito-das-aguas-guia-regional"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 transition-colors"
              >
                <span>Guia Circuito das Águas</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                to="/mercado-livre"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 transition-colors"
              >
                <span>Mercado Livre (ACL)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-800 block mb-1">Nota de Transparência da 4L Energia Solar:</strong>
            Os valores de economia mensal exibidos acima correspondem a informações reais fornecidas pelos respectivos proprietários e clientes. Os resultados obtidos em cada nova instalação dependem do perfil de consumo, orientação do telhado, irradiação local e da tarifa de energia aplicável. Não constituem promessa ou garantia fixa para novos projetos.
          </div>

        </div>

        {/* Modal with Project Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="relative aspect-[16/10] bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  className={`w-full h-full object-cover ${selectedProject.imagePosition || "object-center"}`}
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 focus:outline-none"
                  aria-label="Fechar detalhes"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{selectedProject.neighborhood}, {selectedProject.city} - {selectedProject.state}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">Potência Instalada:</span>
                    <strong className="text-slate-900 text-base">{selectedProject.powerKwp} kWp</strong>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">Economia Média Informada:</span>
                    <strong className="text-emerald-600 text-base">{selectedProject.reportedSavings}</strong>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink(`Olá! Vi o projeto "${selectedProject.title}" no site da 4L e gostaria de um orçamento similar para meu imóvel.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Projeto Similar no WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
