import React from "react";
import { Link } from "react-router-dom";
import { Building2, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const MercadoLivreHighlight: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border border-blue-800/40 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Soluções Corporativas B2B</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Reduza seus custos de energia e avalie as oportunidades do Mercado Livre de Energia para sua empresa.
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Empresas com despesas mensais de eletricidade próximas ou superiores a <strong className="text-amber-400">R$ 9 mil</strong> já podem negociar o fornecimento diretamente no Ambiente de Contratação Livre (ACL), obtendo previsibilidade de despesas e energia 100% renovável sem obras civis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem bandeiras tarifárias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Previsibilidade orçamentária</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Energia limpa certificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Assessoria completa da 4L</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/mercado-livre"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-950/50"
                >
                  <span>Conheça o Mercado Livre de Energia</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 p-7 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Elegibilidade Comercial
              </h3>
              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>
                  Desde janeiro de 2024, todos os consumidores atendidos em média e alta tensão (Grupo A) estão autorizados pela legislação a migrar para o Mercado Livre de Energia.
                </p>
                <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-800/40 text-blue-200">
                  <strong className="block text-white mb-1">Referência Comercial:</strong>
                  O patamar de R$ 9 mil/mês representa uma referência comercial comum onde os ganhos econômicos superam os custos de gestão. A elegibilidade definitiva depende das características técnicas da unidade consumidora.
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Estudo de viabilidade gratuito pela equipe 4L</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
