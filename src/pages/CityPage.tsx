import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import { ShimmerText } from "../components/common/ShimmerText";
import { BlogBreadcrumbs } from "../components/blog/BlogBreadcrumbs";
import { CityData } from "../data/cities";
import { COMPANY, getWhatsAppLink } from "../data/company";
import { 
  Sun, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Calculator, 
  ChevronDown, 
  ArrowRight, 
  Building2, 
  HelpCircle,
  Zap
} from "lucide-react";

interface CityPageProps {
  cityData: CityData;
}

export const CityPage: React.FC<CityPageProps> = ({ cityData }) => {
  // Typewriter effect for city phrases
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Accordion open state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    const phrases = cityData.typewriterPhrases;
    if (!phrases || phrases.length === 0) return;

    const fullText = phrases[currentPhraseIdx];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIdx, cityData]);

  return (
    <>
      <SEOHead path={`/${cityData.slug}`} />

      <main className="pt-20 bg-slate-50 min-h-screen">
        
        {/* City Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={cityData.heroImage}
              alt={`Energia solar fotovoltaica em ${cityData.city}`}
              className="w-full h-full object-cover object-center opacity-65 filter brightness-95"
              width={1200}
              height={630}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/35" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>{cityData.region} · Atendimento 4L Energia Solar</span>
            </div>

            {/* Single H1 with Primary Keyword and City */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
              <ShimmerText variant="light">{cityData.h1}</ShimmerText>
            </h1>

            {/* Typewriter subtitle */}
            <div className="min-h-[2.5rem] flex items-center justify-center mb-6">
              <p className="text-lg sm:text-2xl text-slate-300 font-medium">
                <span>{displayText}</span>
                <span className="inline-block w-0.5 h-6 bg-amber-400 ml-1 animate-pulse align-middle" />
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {cityData.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={getWhatsAppLink(cityData.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento em {cityData.city}</span>
              </a>

              <Link
                to="/#calculadora"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-950/30 hover:scale-[1.02] active:scale-98"
              >
                <Calculator className="w-4 h-4" />
                <span>Simular Economia</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {COMPANY.metrics.clients}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                {COMPANY.metrics.experience}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                Sede em Campinas / Atendimento em {cityData.city}
              </span>
            </div>

          </div>
        </section>

        {/* Breadcrumbs (1:1 parity with Schema.org BreadcrumbList) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <BlogBreadcrumbs items={[{ label: `Energia Solar em ${cityData.city}` }]} />
        </div>

        {/* Section 1: Introduction & Operational Proximity */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Atendimento Técnico Regional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                <ShimmerText variant="dark">
                  Apresentação da 4L Energia Solar para {cityData.city}
                </ShimmerText>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {cityData.intro}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                {cityData.localSpecifics}
              </p>
            </div>
            
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Base e Deslocamento</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Nossa base está situada em Campinas (Jardim Santa Lúcia), garantindo deslocamento presencial de engenheiros e técnicos para vistorias, medição de telhados e acompanhamento da homologação perante a CPFL em {cityData.city}.
              </p>
              <div className="pt-2 border-t border-slate-200 text-slate-500">
                <span className="font-semibold text-slate-700">Homologação:</span> CPFL Paulista / Normas ANEEL.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Solar Makes Sense in this City */}
        <section className="py-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
                Viabilidade Técnica
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                <ShimmerText variant="dark">
                  Por Que a Energia Solar Faz Sentido em {cityData.city}?
                </ShimmerText>
              </h2>
              <p className="text-sm text-slate-600">
                Fundamentos econômicos e operacionais alinhados ao perfil das atividades e consumidores de {cityData.city}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityData.whySolarMakesSense.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center mb-4">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Who Can Benefit */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Segmentos Atendidos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              <ShimmerText variant="dark">
                Quem Pode se Beneficiar em {cityData.city}?
              </ShimmerText>
            </h2>
            <p className="text-sm text-slate-600">
              Soluções personalizadas conforme o tipo de ligação, estrutura do imóvel e padrão de consumo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityData.whoCanBenefit.map((beneficiary, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {beneficiary.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {beneficiary.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Section: Featured Local Project (e.g. Lindóia 25 kWp) */}
        {cityData.featuredLocalProject && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-800/40 shadow-xl">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Evidência Real de Instalação na Cidade</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {cityData.featuredLocalProject.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 py-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {cityData.featuredLocalProject.location}
                  </span>
                  <span>·</span>
                  <span className="font-bold text-amber-400">
                    {cityData.featuredLocalProject.power}
                  </span>
                  <span>·</span>
                  <span className="font-bold text-emerald-400">
                    {cityData.featuredLocalProject.savings}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cityData.featuredLocalProject.summary}
                </p>
                <div className="pt-2">
                  <Link
                    to="/meus-projetos"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline"
                  >
                    <span>Ver detalhes deste e de outros projetos no portfólio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: How Project Works */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Metodologia
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                <ShimmerText variant="dark">
                  Como Funciona a Implantação em {cityData.city}?
                </ShimmerText>
              </h2>
              <p className="text-sm text-slate-600">
                Do estudo tarifário à vistoria da CPFL, nossa equipe cuida de cada detalhe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cityData.howProjectWorks.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col"
                >
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {step.step}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Regional Evidence & Neighboring Proof */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              {cityData.regionalEvidence.headline}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {cityData.regionalEvidence.text}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link
                to="/meus-projetos"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                <span>Conheça todas as obras fotovoltaicas entregues pela 4L</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/blog/energia-solar-no-circuito-das-aguas-guia-regional"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-700"
              >
                <span>Leia o guia regional de energia solar no Circuito das Águas e RMC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Local FAQ */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Perguntas Frequentes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                <ShimmerText variant="dark">
                  Dúvidas sobre Energia Solar em {cityData.city}
                </ShimmerText>
              </h2>
              <p className="text-sm text-slate-600">
                Respostas práticas para as principais questões de quem deseja instalar painéis fotovoltaicos na localidade.
              </p>
            </div>

            <div className="space-y-3.5">
              {cityData.faq.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base">{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 7: Final City CTA */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Atendimento em {cityData.city}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              <ShimmerText variant="light">
                Solicite uma avaliação técnica gratuita para seu imóvel em {cityData.city}
              </ShimmerText>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Envie sua conta de luz para nossa equipe e receba um estudo prévio de potência, estimativa de economia e viabilidade de financiamento.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(cityData.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp (19) 9 8315-5772</span>
              </a>

              <Link
                to="/#calculadora"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700"
              >
                <Calculator className="w-4 h-4" />
                <span>Simular na Calculadora</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 8: Internal Links */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 text-xs text-slate-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-bold text-slate-800 uppercase tracking-wider">
              Navegação e Outras Regiões:
            </span>
            <div className="flex flex-wrap gap-4">
              {cityData.internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.url}
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
