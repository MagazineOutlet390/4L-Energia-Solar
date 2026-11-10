import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Sun } from "lucide-react";

export const CoverageAreas: React.FC = () => {
  const cities = [
    {
      name: "Campinas",
      region: "Sede Operacional",
      description: "Atendimento residencial de alto padrão e projetos empresariais com homologação rápida na CPFL.",
      badge: "Base Operacional",
      slug: "energia-solar-campinas"
    },
    {
      name: "Indaiatuba",
      region: "Região Metropolitana",
      description: "Soluções fotovoltaicas para condomínios fechados, galpões e empresas industriais.",
      badge: "RMC",
      slug: "energia-solar-indaiatuba"
    },
    {
      name: "Socorro",
      region: "Circuito das Águas",
      description: "Geração de energia limpa para pousadas, turismo de aventura e propriedades rurais.",
      badge: "Circuito das Águas",
      slug: "energia-solar-socorro"
    },
    {
      name: "Águas de Lindóia",
      region: "Circuito das Águas",
      description: "Eficiência energética e redução drástica de faturas para hotéis e residências serranas.",
      badge: "Circuito das Águas",
      slug: "energia-solar-aguas-de-lindoia"
    },
    {
      name: "Lindóia",
      region: "Circuito das Águas",
      description: "Projetos comerciais e residenciais com histórico comprovado de economia no Bairro Lajeado.",
      badge: "Circuito das Águas",
      slug: "energia-solar-lindoia"
    },
    {
      name: "Amparo",
      region: "Circuito das Águas",
      description: "Atendimento comercial e rural na capital histórica do Circuito das Águas Paulista.",
      badge: "Circuito das Águas",
      slug: "energia-solar-amparo"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span>Presença Regional Consolidada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Áreas de Atendimento no Interior Paulista
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Com base operacional estabelecida em Campinas/SP, nossa equipe técnica atua diretamente em toda a Região Metropolitana e no Circuito das Águas Paulista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.name}
              to={`/${city.slug}`}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {city.badge}
                  </span>
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                <span className="text-xs text-slate-400 block mb-3 font-medium">
                  {city.region}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {city.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>Ver Soluções em {city.name}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
