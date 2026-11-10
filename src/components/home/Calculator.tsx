import React, { useState, useId } from "react";
import { Calculator as CalcIcon, Send, Sparkles, AlertCircle, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "../../data/company";

export const Calculator: React.FC = () => {
  const [billValue, setBillValue] = useState<number>(450);
  const [propertyType, setPropertyType] = useState<"residencial" | "comercial">("residencial");
  const [selectedCity, setSelectedCity] = useState<string>("Campinas");
  const [customKwh, setCustomKwh] = useState<string>("");
  
  // Lead submission fields
  const [leadName, setLeadName] = useState<string>("");
  const [leadPhone, setLeadPhone] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  // Technical Calculation Premises (CPFL Paulista / Circuito das Águas)
  // Average B1 Residential Tariff in CPFL area ~ R$ 0.90 / kWh (TUSD + TE + taxes)
  // Commercial B3 / A4 Tariff ~ R$ 0.85 / kWh
  // Regional Irradiance (HSP): 4.7 kWh/m²/day
  // Performance Ratio (PR): 0.80 (accounting for thermal loss, inverter efficiency, cabling)
  // Monthly solar generation per kWp installed: 4.7 * 30 * 0.80 = ~112.8 kWh/month per kWp
  // Mandatory availability cost: Residencial (Bifásico 50 kWh ~ R$ 45), Comercial (Trifásico 100 kWh ~ R$ 85)
  // CIP (Iluminação pública) ~ R$ 25 to R$ 40
  const tariffPerKwh = propertyType === "residencial" ? 0.90 : 0.85;
  const availabilityKwh = propertyType === "residencial" ? 50 : 100;
  const averageCip = propertyType === "residencial" ? 30 : 50;

  // Derive estimated consumption (kWh)
  const effectiveConsumableBill = Math.max(0, billValue - averageCip);
  const calculatedKwh = customKwh && !isNaN(Number(customKwh)) && Number(customKwh) > 0
    ? Number(customKwh)
    : Math.round(effectiveConsumableBill / tariffPerKwh);

  // Compensable consumption (net of availability cost)
  const compensableKwh = Math.max(0, calculatedKwh - availabilityKwh);

  // Estimated required system power (kWp)
  // 1 kWp produces ~112.8 kWh/month
  const rawPowerKwp = compensableKwh / 112.8;
  const suggestedPowerKwp = Math.max(1.5, Math.round(rawPowerKwp * 10) / 10);

  // Estimated monthly generation
  const monthlyGenerationKwh = Math.round(suggestedPowerKwp * 112.8);

  // Estimated monthly savings in R$
  // Under Lei 14.300/2022, Fio B phase-in (~60% of Fio B in 2026), average effective net savings ~82% to 88%
  const estimatedSavingsPercent = propertyType === "residencial" ? 0.85 : 0.88;
  const estimatedMonthlySavings = Math.round((compensableKwh * tariffPerKwh) * estimatedSavingsPercent);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  // Approximate panels count (assuming 550W panels)
  const panelsCount = Math.ceil((suggestedPowerKwp * 1000) / 550);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim()) {
      setFormError("Por favor, preencha o seu nome.");
      return;
    }
    if (!leadPhone.trim() || leadPhone.replace(/\D/g, "").length < 8) {
      setFormError("Por favor, preencha um número de WhatsApp válido.");
      return;
    }
    setFormError("");

    const message = `*Nova Simulação de Energia Solar - 4L Energia Solar*\n\n` +
      `*Nome:* ${leadName.trim()}\n` +
      `*WhatsApp do Cliente:* ${leadPhone.trim()}\n` +
      `*Cidade:* ${selectedCity}\n` +
      `*Tipo de Imóvel:* ${propertyType === "residencial" ? "Residencial" : "Comercial / Empresarial"}\n` +
      `*Valor Médio da Conta:* R$ ${billValue.toLocaleString("pt-BR")},00\n` +
      `*Consumo Estimado:* ${calculatedKwh} kWh/mês\n` +
      `*Potência Sugerida:* ${suggestedPowerKwp} kWp (~${panelsCount} módulos de 550W)\n` +
      `*Economia Mensal Estimada:* R$ ${estimatedMonthlySavings.toLocaleString("pt-BR")},00\n` +
      `*Economia Anual Estimada:* R$ ${estimatedAnnualSavings.toLocaleString("pt-BR")},00\n\n` +
      `_Gostaria de solicitar um estudo técnico personalizado com a 4L Energia Solar._`;

    setHasSubmitted(true);
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const nameId = useId();
  const phoneId = useId();

  return (
    <section id="calculadora" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Simulador Fotovoltaico Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Calcule sua Economia com Energia Solar
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Simule a potência necessária e a redução estimada na sua fatura da CPFL considerando tarifas reais, irradiação de Campinas e Circuito das Águas e regras da Lei 14.300/2022.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-6">
            
            {/* Input 1: Monthly Bill Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Valor Médio Mensal da Conta de Energia
                </label>
                <span className="text-2xl font-bold text-amber-400">
                  R$ {billValue.toLocaleString("pt-BR")},00
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="8000"
                step="50"
                value={billValue}
                onChange={(e) => setBillValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>R$ 150</span>
                <span>R$ 2.000</span>
                <span>R$ 4.000</span>
                <span>R$ 8.000+</span>
              </div>
            </div>

            {/* Input 2: Property Type (Segmented control) */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Tipo de Imóvel
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPropertyType("residencial")}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all ${
                    propertyType === "residencial"
                      ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-950/40"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  Residencial / Chácara
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType("comercial")}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all ${
                    propertyType === "comercial"
                      ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-950/40"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  Comercial / Empresa
                </button>
              </div>
            </div>

            {/* Input 3: City Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Cidade de Instalação
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {COMPANY.regionsServed.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                  <option value="Outra localidade">Outra localidade próxima</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Consumo em kWh <span className="text-xs text-slate-400">(opcional)</span>
                </label>
                <input
                  type="number"
                  placeholder={`Aprox. ${calculatedKwh} kWh`}
                  value={customKwh}
                  onChange={(e) => setCustomKwh(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Technical Premises Info */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 font-medium text-slate-200">
                <AlertCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Premissas Técnicas Adotadas:</span>
              </div>
              <p>
                Tarifa de referência CPFL Paulista (~R$ {tariffPerKwh.toFixed(2)}/kWh), irradiação média regional (4,7 HSP), fator de perdas térmicas e cabeamento (~20%), dedução regulatória de disponibilidade ({availabilityKwh} kWh) e CIP média (R$ {averageCip},00).
              </p>
            </div>

            {/* Lead capture form to send via WhatsApp */}
            <form onSubmit={handleWhatsAppSend} className="pt-2 border-t border-slate-800/80 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Receber Estudo Completo no WhatsApp</span>
              </h3>
              
              {formError && (
                <p className="text-xs font-semibold text-rose-400 bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/50">
                  {formError}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={nameId} className="sr-only">Seu Nome</label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor={phoneId} className="sr-only">WhatsApp com DDD</label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    placeholder="WhatsApp (ex: 19 99999-9999)"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/40 hover:scale-[1.01] active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Simulação para a 4L no WhatsApp</span>
              </button>

              {hasSubmitted && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-800/40">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Simulação aberta no WhatsApp! Nossa equipe responderá em breve.</span>
                </div>
              )}
            </form>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-blue-950/50 border border-blue-900/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Resultado Preliminar
              </span>
              <span className="text-xs text-slate-300">
                {selectedCity} - SP
              </span>
            </div>

            <div className="py-6 space-y-6">
              {/* Highlighted monthly savings */}
              <div>
                <span className="text-xs font-medium text-slate-400 block mb-1">
                  Economia Estimada por Mês
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                  R$ {estimatedMonthlySavings.toLocaleString("pt-BR")},00
                  <span className="text-xs font-normal text-slate-400 ml-1.5">/mês</span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">
                  Até R$ {estimatedAnnualSavings.toLocaleString("pt-BR")},00 economizados por ano.
                </span>
              </div>

              {/* Technical indicators */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] font-medium text-slate-400 block mb-1">
                    Potência Recomendada
                  </span>
                  <span className="text-xl font-bold text-white tracking-tight">
                    {suggestedPowerKwp} kWp
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    ~{panelsCount} módulos 550W
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] font-medium text-slate-400 block mb-1">
                    Geração Média
                  </span>
                  <span className="text-xl font-bold text-amber-400 tracking-tight">
                    {monthlyGenerationKwh} kWh
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    mensais estimados
                  </span>
                </div>
              </div>

              {/* Legal & Technical Disclaimer */}
              <div className="p-3 rounded-lg bg-slate-900/90 text-[11px] text-slate-400 leading-relaxed border border-slate-800">
                <strong className="text-slate-300 block mb-0.5">Ressalva Legal e Técnica:</strong>
                Este cálculo é uma simulação preliminar para estimativa de viabilidade. O dimensionamento definitivo requer avaliação técnica presencial da orientação e inclinação do telhado, sombreamentos locais e padrão de entrada perante as normas da concessionária (CPFL).
              </div>
            </div>

            {/* Quick Contact Action */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink(`Olá! Fiz uma simulação de energia solar no site da 4L para conta de R$ ${billValue},00 em ${selectedCity} e gostaria de solicitar um orçamento formal.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <span>Tirar Dúvidas com Especialista</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
