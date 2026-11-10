import React from "react";
import { Wrench, PiggyBank, Leaf, Smartphone, Headset, Banknote } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Wrench,
      title: "Instalação Profissional",
      description: "Equipe técnica dedicada e cuidadosa com a estrutura do telhado, garantindo fixação segura de trilhos sem danificar telhas e com fiação fotovoltaica normatizada.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: PiggyBank,
      title: "Economia Real na Conta de Luz",
      description: "Projetos dimensionados para abater o consumo da concessionária de forma eficiente, reduzindo os gastos mensais e gerando proteção contra reajustes tarifários.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Leaf,
      title: "Energia Limpa e Sustentável",
      description: "Geração de eletricidade 100% renovável e sem emissão de gases de efeito estufa, valorizando o imóvel e fortalecendo a responsabilidade ambiental.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Smartphone,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe diariamente a produção de cada módulo fotovoltaico e o consumo da sua residência ou empresa pelo celular através de aplicativo intuitivo.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: Headset,
      title: "Suporte Especializado e Pós-Venda",
      description: "Atendimento transparente e próximo desde o estudo de viabilidade, tramitação completa perante a CPFL Paulista até o suporte contínuo após a entrega.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Banknote,
      title: "Financiamento Solar Facilitado",
      description: "Parcerias com bancos que oferecem carência inicial e parcelas planejadas para serem pagas com a própria economia gerada na fatura de energia.",
      color: "text-teal-500",
      bg: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Diferenciais de Engenharia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Por Que Escolher a 4L Energia Solar?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Com quase 10 anos de experiência e mais de 200 clientes atendidos em Campinas e no Circuito das Águas, priorizamos rigor técnico, transparência nas estimativas e acompanhamento integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5 shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
