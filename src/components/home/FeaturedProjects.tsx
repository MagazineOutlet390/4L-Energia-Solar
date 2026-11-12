import React from "react";
import { Link } from "react-router-dom";
import { Zap, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { ShimmerText } from "../common/ShimmerText";
import { PROJECTS } from "../../data/projects";

export const FeaturedProjects: React.FC = () => {
  const featured = PROJECTS.filter((p) => p.highlight).slice(0, 3);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Resultados Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              <ShimmerText variant="dark">Projetos em Destaque</ShimmerText>
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Conheça algumas instalações residenciais e empresariais executadas pela 4L Energia Solar com economia informada pelos próprios clientes.
            </p>
          </div>
          <Link
            to="/meus-projetos"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap"
          >
            <span>Ver Todos os Projetos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className={`w-full h-full object-cover ${project.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm text-white border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{project.neighborhood}, {project.city}-{project.state}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Potência</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      {project.powerKwp} kWp
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Economia Informada</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.reportedSavings}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
