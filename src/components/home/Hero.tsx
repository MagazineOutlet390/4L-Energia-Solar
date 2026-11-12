import React, { useState, useEffect } from "react";
import { ArrowRight, Calculator, MessageCircle, Sun, ShieldCheck } from "lucide-react";
import { ShimmerText } from "../common/ShimmerText";
import { COMPANY, getWhatsAppLink } from "../../data/company";

export const Hero: React.FC = () => {
  const phrases = [
    "Mais economia para sua conta de luz",
    "Independência energética e sustentabilidade",
    "Projetos fotovoltaicos residenciais e empresariais",
    "Assessoria completa em Mercado Livre de Energia"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          // Pause before starting deletion
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("calculadora");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white pt-24 pb-16 overflow-hidden">
      {/* Background with real solar installation photo & lighter balanced scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-solar.jpg"
          alt="Instalação de painéis solares fotovoltaicos sobre telhado com céu azul"
          className="w-full h-full object-cover object-center opacity-65 filter brightness-95"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>Campinas e Circuito das Águas Paulista</span>
        </div>

        {/* H1 Principal integral para SEO semântico */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          Energia Solar em Campinas e Circuito das Águas:{" "}
          <ShimmerText variant="light">
            Mais Economia para sua Conta de Luz
          </ShimmerText>
        </h1>

        {/* Dynamic Typewriter secondary subtitle */}
        <div className="min-h-[2.5rem] flex items-center justify-center mb-8">
          <p className="text-lg sm:text-2xl text-slate-300 font-medium">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-6 bg-amber-400 ml-1 animate-pulse align-middle" />
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Projetos fotovoltaicos residenciais e empresariais homologados pela CPFL com atendimento especializado e transparente em Campinas, Indaiatuba, Socorro, Águas de Lindóia, Lindóia, Amparo, Serra Negra e Monte Alegre do Sul.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#calculadora"
            onClick={scrollToCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-950/30 hover:scale-[1.02] active:scale-98"
          >
            <Calculator className="w-4 h-4" />
            <span>Calcular Minha Economia</span>
          </a>

          <a
            href={getWhatsAppLink("Olá! Gostaria de conversar com a 4L Energia Solar sobre um projeto de energia solar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-98"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{COMPANY.metrics.clients}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>{COMPANY.metrics.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{COMPANY.metrics.financing}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
