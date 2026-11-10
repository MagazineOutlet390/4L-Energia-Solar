export interface CompanyInfo {
  name: string;
  legalNotice: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappUrl: string;
  address: string;
  city: string;
  state: string;
  regionsServed: string[];
  metrics: {
    clients: string;
    experience: string;
    financing: string;
    rating: string;
  };
}

export const COMPANY: CompanyInfo = {
  name: "4L Energia Solar",
  legalNotice: "Projetos e instalação de sistemas fotovoltaicos residenciais e empresariais e assessoria em Mercado Livre de Energia.",
  whatsapp: "(19) 9 8315-5772",
  whatsappRaw: "5519983155772",
  whatsappUrl: "https://wa.me/5519983155772",
  address: "Rua Stecca Pelegrini, Jardim Santa Lúcia, Campinas - SP",
  city: "Campinas",
  state: "SP",
  regionsServed: [
    "Campinas",
    "Indaiatuba",
    "Socorro",
    "Águas de Lindóia",
    "Lindóia",
    "Amparo",
    "Serra Negra",
    "Monte Alegre do Sul"
  ],
  metrics: {
    clients: "+200 clientes atendidos",
    experience: "Quase 10 anos de experiência",
    financing: "Financiamento bancário disponível",
    rating: "5.0 no Google (Avaliações Reais)"
  }
};

export const getWhatsAppLink = (contextMessage: string): string => {
  return `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(contextMessage)}`;
};
