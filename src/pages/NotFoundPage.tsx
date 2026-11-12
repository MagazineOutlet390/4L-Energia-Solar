import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/common/SEOHead";
import { Home, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../data/company";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Página Não Encontrada (404) | 4L Energia Solar"
        description="A página solicitada não foi encontrada no portal da 4L Energia Solar. Retorne ao início para explorar nossos projetos, cidades e artigos técnicos."
        noindex
      />

      <main className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-slate-50 px-4">
        <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <span className="text-6xl font-black text-blue-600 tracking-tighter">
            404
          </span>
          <h1 className="text-2xl font-bold text-slate-900">
            Página Não Encontrada
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            O link acessado pode ter sido alterado ou a página não está mais disponível.
          </p>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Voltar para a Página Inicial</span>
            </Link>

            <a
              href={getWhatsAppLink("Olá! Não consegui encontrar o que procurava no site da 4L Energia Solar e gostaria de ajuda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
