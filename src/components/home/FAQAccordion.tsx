import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { ShimmerText } from "../common/ShimmerText";
import { FAQ_ITEMS } from "../../data/faq";

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tira-Dúvidas Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            <ShimmerText variant="dark">Perguntas Frequentes sobre Energia Solar</ShimmerText>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Respostas claras, completas e sem promessas irreais sobre dimensionamento, prazos, garantias e economia.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contextual Guides Link Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <span className="font-bold text-slate-800">
            Quer aprofundar algum tema técnico?
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold text-blue-600">
            <Link to="/blog/como-funciona-a-energia-solar" className="hover:text-blue-800 inline-flex items-center gap-1">
              <span>Como funciona</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/blog/como-calcular-a-economia-com-paineis-solares" className="hover:text-blue-800 inline-flex items-center gap-1">
              <span>Cálculo de economia</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/mercado-livre" className="hover:text-blue-800 inline-flex items-center gap-1">
              <span>Mercado Livre (ACL)</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/blog" className="hover:text-blue-800 inline-flex items-center gap-1">
              <span>Todos os artigos</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
