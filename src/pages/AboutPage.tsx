import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import { ShimmerText } from "../components/common/ShimmerText";
import { BlogBreadcrumbs } from "../components/blog/BlogBreadcrumbs";
import { ShieldCheck, MapPin, Users, MessageCircle, Sun, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "../data/company";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead path="/sobre" />

      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Header */}
        <section className="relative bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/hero-solar.jpg"
              alt="Instalação solar fotovoltaica"
              className="w-full h-full object-cover opacity-45 filter brightness-95"
              width={1920}
              height={1280}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/45" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Institucional</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              <ShimmerText variant="light">Sobre a 4L Energia Solar</ShimmerText>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Compromisso com engenharia fotovoltaica de precisão, atendimento transparente e acompanhamento dedicado em Campinas e região.
            </p>
          </div>
        </section>

        {/* Visible Breadcrumbs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <BlogBreadcrumbs items={[{ label: "Sobre a 4L Energia Solar" }]} />
        </div>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              <ShimmerText variant="dark">Nossa Trajetória e Atuação</ShimmerText>
            </h2>
            <div className="prose text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                A <strong>4L Energia Solar</strong> nasceu com o propósito de transformar a relação que famílias e empresas mantêm com o consumo de eletricidade, unindo viabilidade econômica, sustentabilidade e rigor técnico de engenharia.
              </p>
              <p>
                Com quase 10 anos de experiência acumulada e mais de 200 clientes atendidos em diversas cidades do interior paulista, nossa atuação abrange desde o dimensionamento de sistemas residenciais e propriedades rurais até usinas comerciais e assessoria de migração para o{" "}
                <Link to="/mercado-livre" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Mercado Livre de Energia
                </Link>.
              </p>
              <p>
                Nossa sede operacional está localizada em{" "}
                <Link to="/energia-solar-campinas" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Campinas/SP
                </Link>
                , na Rua Stecca Pelegrini, no Jardim Santa Lúcia. A partir desta base, nossas equipes técnicas atendem de forma direta e presencial os municípios de Campinas,{" "}
                <Link to="/energia-solar-indaiatuba" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Indaiatuba
                </Link>
                ,{" "}
                <Link to="/energia-solar-socorro" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Socorro
                </Link>
                ,{" "}
                <Link to="/energia-solar-aguas-de-lindoia" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Águas de Lindóia
                </Link>
                ,{" "}
                <Link to="/energia-solar-lindoia" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Lindóia
                </Link>
                ,{" "}
                <Link to="/energia-solar-amparo" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Amparo
                </Link>
                , Serra Negra, Monte Alegre do Sul e localidades vizinhas.
              </p>
            </div>
          </div>

          {/* Pillars of Integrity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Precisão Técnica Sem Exageros
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Não prometemos economia impossível ou conta zerada. Nossas simulações consideram a legislação real (Lei 14.300/2022), tarifas da CPFL e custos regulatórios.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Atendimento Próximo e Familiar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reconhecida nas avaliações do Google pela pontualidade, cuidado com a limpeza na obra e atenção do Sr. Lauro e equipe em todas as etapas.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Presença e Suporte Regional
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Vistorias no local com análise estrutural do telhado e suporte contínuo após a homologação e troca do medidor bidirecional.
              </p>
            </div>
          </div>

          {/* Explore links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/meus-projetos"
              className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors shadow-sm"
            >
              <span>Ver Projetos Realizados</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              to="/#calculadora"
              className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors shadow-sm"
            >
              <span>Simular Economia Solar</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              to="/blog"
              className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 hover:text-blue-700 transition-colors shadow-sm"
            >
              <span>Acessar Blog Técnico</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          {/* Contact Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold">Deseja conversar com a nossa equipe?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Estamos à disposição para esclarecer suas dúvidas sobre energia solar e financiamento.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com a 4L Energia Solar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm whitespace-nowrap shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </section>
      </main>
    </>
  );
};
