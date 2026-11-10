import React, { useState, useRef } from "react";
import { Star, CheckCircle2, MessageSquare, ExternalLink, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { GOOGLE_REVIEWS, Review } from "../../data/reviews";

export const GoogleReviewsCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicate reviews array to create a completely seamless infinite loop
  const duplicatedReviews: Review[] = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200">
              {/* Google G SVG */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Avaliações Reais do Google · Nota 5.0</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              O que dizem os clientes da 4L Energia Solar
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              Depoimentos reais e espontâneos publicados no perfil oficial da empresa por clientes de Campinas e municípios da região.
            </p>
          </div>

          {/* Controls: Pause/Play & Manual scroll buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              title={isPaused ? "Retomar movimento contínuo" : "Pausar movimento contínuo"}
              aria-label={isPaused ? "Retomar movimento contínuo" : "Pausar movimento contínuo"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>Reproduzir</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-600" />
                  <span>Pausar</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleManualScroll("left")}
              className="p-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleManualScroll("right")}
              className="p-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Track with Scrims */}
      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto no-scrollbar py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Soft edge fade scrims on desktop */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />

        <div
          className={`flex gap-6 px-4 ${
            isPaused ? "animate-marquee-paused" : "animate-marquee"
          } hover:[animation-play-state:paused]`}
        >
          {duplicatedReviews.map((review, idx) => (
            <article
              key={`${review.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Header: Author + Google icon + Stars */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {review.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {review.author}
                      </h3>
                      {review.badge ? (
                        <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                          {review.badge}
                        </p>
                      ) : (
                        <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                          Cliente Verificado
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Google Mini Icon */}
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Rating & Timestamp */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    · {review.timeAgo}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{review.content}"
                </p>
              </div>

              {/* Business Reply if exists */}
              {review.businessReply && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3 text-blue-600 shrink-0" />
                      Resposta da 4L Energia Solar (proprietário):
                    </span>
                    <p className="italic text-slate-500 leading-relaxed">
                      "{review.businessReply}"
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Footer CTA to Google */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-200/80 pt-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Todas as avaliações são transcrições literais do perfil Google Meu Negócio da 4L Energia Solar.</span>
        </div>

        <a
          href="https://maps.google.com/?q=4L+Energia+Solar+Campinas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>Ver todas as avaliações no Google</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
