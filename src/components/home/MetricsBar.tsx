import React from "react";
import { Users, Calendar, Banknote, Star } from "lucide-react";
import { COMPANY } from "../../data/company";

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      value: "+200",
      label: "Clientes Atendidos",
      subtext: "Residencial e empresarial",
      color: "text-blue-500"
    },
    {
      icon: Calendar,
      value: "Quase 10",
      label: "Anos de Experiência",
      subtext: "Engenharia e instalação",
      color: "text-amber-500"
    },
    {
      icon: Banknote,
      value: "100%",
      label: "Financiamento Disponível",
      subtext: "Parcelas que cabem na economia",
      color: "text-emerald-500"
    },
    {
      icon: Star,
      value: "5.0 ★",
      label: "Avaliações no Google",
      subtext: "Depoimentos reais auditados",
      color: "text-amber-400"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all hover:bg-slate-50"
              >
                <div className={`p-2.5 rounded-lg bg-slate-100 ${item.color} mb-3`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                  {item.label}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
