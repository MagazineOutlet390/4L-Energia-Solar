import React from "react";
import { SEOHead } from "../components/common/SEOHead";
import { Building2, ArrowRight, CheckCircle2, ShieldAlert, FileText, TrendingDown, Clock, MessageCircle, HelpCircle } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "../data/company";

export const MercadoLivrePage: React.FC = () => {
  const b2bFaq = [
    {
      q: "O que é o Ambiente de Contratação Livre (ACL)?",
      a: "É o mercado regulado pela CCEE onde consumidores escolhem livremente sua comercializadora de energia elétrica, contratando volume, preço por MWh e fonte renovável por períodos predefinidos."
    },
    {
      q: "Minha empresa precisa fazer obras ou trocar a fiação?",
      a: "Não. A energia elétrica continua trafegando pelos mesmos fios e postes da concessionária local (ex: CPFL Paulista). A única intervenção técnica é a adequação do sistema de medição e faturamento (SMF) com medidor homologado."
    },
    {
      q: "Existe risco de faltar energia?",
      a: "Não. A segurança física do suprimento permanece sob responsabilidade integral da distribuidora local (CPFL). O Mercado Livre altera apenas a relação comercial de compra da energia."
    },
    {
      q: "Por que a referência comercial é de R$ 9 mil/mês?",
      a: "Qualquer empresa em média ou alta tensão (Grupo A) pode migrar por lei. No entanto, faturas a partir de R$ 9 mil a R$ 10 mil mensais apresentam a melhor relação entre economia obtida e custos de gestão com a comercializadora varejista."
    }
  ];

  return (
    <>
      <SEOHead
        path="/mercado-livre"
        title="Mercado Livre de Energia para Empresas | 4L Energia Solar"
        description="Assessoria completa para migração de empresas ao Mercado Livre de Energia (ACL). Redução de custos e previsibilidade para faturas a partir de R$ 9 mil mensais."
        canonical="https://4lenergiasolar.com.br/mercado-livre"
        ogImage="/assets/og/og-mercado-livre.jpg"
        ogImageAlt="Complexo industrial e empresarial com usina solar na cobertura e infraestrutura de média tensão"
      />

      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* B2B Hero */}
        <section className="bg-slate-950 text-white py-20 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/hero-solar.jpg"
              alt="Instalação solar fotovoltaica e ambiente empresarial"
              className="w-full h-full object-cover opacity-60 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-blue-950/50" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-3.5 h-3.5" />
              <span>Ambiente de Contratação Livre (ACL)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Mercado Livre de Energia para sua Empresa
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Negocie diretamente o preço da sua energia elétrica, proteja seu orçamento contra bandeiras tarifárias e consuma eletricidade 100% renovável com assessoria técnica da 4L Energia Solar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink("Olá! Tenho uma empresa com despesas de energia relevantes e gostaria de avaliar a migração para o Mercado Livre de Energia com a 4L.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-950/50 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Migrar para o Mercado Livre (Falar no WhatsApp)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Overview & Eligibility */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Elegibilidade Empresarial
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Quem Pode Migrar para o Mercado Livre de Energia?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Desde janeiro de 2024, a Portaria nº 50/2022 do Ministério de Minas e Energia autorizou todos os consumidores conectados em média ou alta tensão (Grupo A) a ingressar no mercado livre através do modelo de comercialização varejista.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Critério Comercial:</strong> Faturas de energia mensais a partir de aproximadamente <strong>R$ 9 mil</strong> viabilizam a contratação livre com rentabilidade favorável. A elegibilidade definitiva depende da análise técnica da demanda contratada e da subestação da empresa.
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Comparativo: Mercado Cativo vs. Mercado Livre
              </h3>
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-700 block mb-0.5">Mercado Cativo (Distribuidora):</span>
                  Consumo compulsório da concessionária, tarifa regulada sem possibilidade de negociação, incidência de bandeiras tarifárias sazonais.
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-950">
                  <span className="font-bold text-blue-800 block mb-0.5">Mercado Livre (ACL):</span>
                  Preço do MWh fixado em contrato de médio/longo prazo, liberdade de escolha do supridor, sem bandeiras tarifárias e certificação de energia limpa.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps of Migration */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                As Etapas da Migração Empresarial
              </h2>
              <p className="text-sm text-slate-600">
                Processo transparente e conduzido com total rigor regulatório pela 4L Energia Solar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Estudo de Viabilidade",
                  desc: "Análise gratuita das últimas faturas de energia e do perfil de demanda da empresa."
                },
                {
                  step: "2",
                  title: "Denúncia do Contrato",
                  desc: "Envio formal de rescisão à concessionária (CPFL), respeitando prazos legais."
                },
                {
                  step: "3",
                  title: "Adequação do Medidor",
                  desc: "Ajuste do Sistema de Medição e Faturamento (SMF) conforme as regras da CCEE."
                },
                {
                  step: "4",
                  title: "Início do Fornecimento",
                  desc: "Energia contratada diretamente no ACL com previsibilidade contratual total."
                }
              ].map((s) => (
                <div key={s.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col">
                  <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contract Precautions & FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">
            Perguntas Frequentes sobre o Mercado Livre
          </h2>
          <div className="space-y-4">
            {b2bFaq.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{item.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Final B2B Action */}
          <div className="mt-12 text-center bg-blue-950 text-white p-8 rounded-3xl shadow-xl space-y-4">
            <h3 className="text-2xl font-bold">
              Avalie o Potencial da sua Empresa com a 4L
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Envie a fatura de energia da sua empresa para nosso time e receba um estudo comparativo detalhado.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink("Olá! Gostaria de um estudo de viabilidade para migração da minha empresa para o Mercado Livre de Energia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Consultor B2B</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
