import React from "react";
import { MapPin, Phone, MessageCircle, Navigation, Clock } from "lucide-react";
import { ShimmerText } from "../common/ShimmerText";
import { COMPANY, getWhatsAppLink } from "../../data/company";

export const MapAndContact: React.FC = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Rua Stecca Pelegrini, Jardim Santa Lúcia, Campinas - SP"
  )}`;

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Nossa Localização
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                <ShimmerText variant="dark">Sede Operacional em Campinas</ShimmerText>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ponto de partida das nossas equipes técnicas e de engenharia para atender com agilidade residências, chácaras e empresas de toda a região e Circuito das Águas.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-0.5">
                    Endereço Oficial:
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-0.5">
                    Telefone e WhatsApp:
                  </span>
                  <a
                    href={getWhatsAppLink("Olá! Gostaria de agendar um atendimento com a equipe da 4L Energia Solar.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    {COMPANY.whatsapp}
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Atendimento técnico e comercial direto
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-0.5">
                    Horário de Atendimento:
                  </span>
                  <p className="text-sm text-slate-700">
                    Segunda a Sexta das 08h às 18h · Sábados das 08h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar (Google Maps)</span>
              </a>

              <a
                href={getWhatsAppLink("Olá! Gostaria de falar com o time da 4L Energia Solar sobre um projeto fotovoltaico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed (Lazy loaded) */}
          <div className="lg:col-span-7 h-96 sm:h-[450px] rounded-2xl overflow-hidden border border-slate-300 shadow-lg relative bg-slate-100">
            <iframe
              title="Mapa de Localização 4L Energia Solar - Campinas"
              src="https://maps.google.com/maps?q=Rua+Stecca+Pelegrini,+Jardim+Santa+L%C3%BAcia,+Campinas+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
