import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "../../data/company";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-solar.jpg"
          alt="Painéis solares fotovoltaicos sobre telhado com céu azul"
          className="w-full h-full object-cover opacity-60 filter brightness-95"
          width={1920}
          height={600}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-blue-950/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
          Atendimento Personalizado
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Comece a transformar sua conta de luz em uma oportunidade de economia.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Envie sua última fatura de energia para nossa equipe de engenharia e receba um estudo prévio de viabilidade técnica sem compromisso.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink("Olá! Gostaria de enviar minha fatura de energia para avaliação técnica com a 4L Energia Solar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xl shadow-emerald-950/50 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp (19) 9 8315-5772</span>
          </a>

          <a
            href="#calculadora"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <span>Simular na Calculadora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
