import React from "react";
import { FileSearch, Compass, Wrench, CheckCircle } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: FileSearch,
      title: "Análise da Conta e Perfil",
      description: "Avaliamos seu histórico de consumo dos últimos 12 meses na fatura da concessionária, identificando a sazonalidade e a demanda energética real do seu imóvel."
    },
    {
      step: "02",
      icon: Compass,
      title: "Estudo Técnico e Projeto",
      description: "Realizamos o estudo de irradiação solar, inclinação do telhado e sombreamento, elaborando o projeto de engenharia com os equipamentos ideais."
    },
    {
      step: "03",
      icon: Wrench,
      title: "Instalação dos Equipamentos",
      description: "Nossa equipe realiza a montagem das estruturas, fixação dos módulos solares e conexão elétrica do inversor de forma limpa, segura e pontual."
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Homologação e Geração",
      description: "Cuidamos de toda a tramitação regulatória junto à CPFL até a vistoria e troca do medidor bidirecional, liberando o sistema para gerar economia imediata."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Como Funciona a Instalação com a 4L?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Do primeiro contato até o acompanhamento diário no aplicativo, cuidamos de todas as etapas burocráticas e técnicas do seu projeto solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-start"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-900/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-300">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
