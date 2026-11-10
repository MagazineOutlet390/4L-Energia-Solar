import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, X } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("4l_cookie_consent");
    if (!consent) {
      // Delay showing slightly so it does not trigger immediately on first paint
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("4l_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("4l_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de Privacidade e Cookies"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 bg-slate-900/95 backdrop-blur-md text-slate-200 border border-slate-800 p-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-2 text-xs leading-relaxed">
          <p>
            Utilizamos cookies essenciais para garantir o funcionamento correto e seguro deste site, em conformidade com a LGPD (Lei Geral de Proteção de Dados).
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Concordar
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Recusar
            </button>
            <Link
              to="/politica-de-privacidade"
              className="text-slate-400 hover:text-white underline text-[11px]"
            >
              Saiba mais
            </Link>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-slate-400 hover:text-white ml-auto"
          aria-label="Fechar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
