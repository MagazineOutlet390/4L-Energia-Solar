export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "residencial",
    name: "Energia Solar Residencial",
    slug: "energia-solar-residencial",
    description: "Orientações práticas para economizar na conta de luz em casas, condomínios e chácaras."
  },
  {
    id: "comercial-industrial",
    name: "Energia Solar Comercial e Industrial",
    slug: "energia-solar-comercial-e-industrial",
    description: "Soluções de engenharia fotovoltaica para empresas, comércios, galpões e indústrias."
  },
  {
    id: "mercado-livre",
    name: "Mercado Livre de Energia",
    slug: "mercado-livre-de-energia",
    description: "Estratégias de contratação no Ambiente de Contratação Livre (ACL) para empresas do Grupo A."
  },
  {
    id: "economia-eficiencia",
    name: "Economia e Eficiência Energética",
    slug: "economia-e-eficiencia-energetica",
    description: "Análise de tarifas, gestão de consumo, compensação de créditos e cálculo de payback."
  },
  {
    id: "equipamentos-tecnologia",
    name: "Equipamentos e Tecnologia Fotovoltaica",
    slug: "equipamentos-e-tecnologia-fotovoltaica",
    description: "Comparações entre módulos, microinversores, inversores string e baterias solares."
  },
  {
    id: "instalacao-manutencao",
    name: "Instalação, Manutenção e Monitoramento",
    slug: "instalacao-manutencao-e-monitoramento",
    description: "Boas práticas de fixação no telhado, segurança elétrica, limpeza de placas e monitoramento."
  },
  {
    id: "financiamento-investimento",
    name: "Financiamento e Investimento em Energia Solar",
    slug: "financiamento-e-investimento-em-energia-solar",
    description: "Linhas de crédito fotovoltaico, taxas de juros, retorno financeiro e incentivos fiscais."
  },
  {
    id: "circuito-das-aguas",
    name: "Energia Solar no Circuito das Águas e Região",
    slug: "energia-solar-no-circuito-das-aguas-e-regiao",
    description: "Informações sobre irradiação solar e particularidades em Campinas, Socorro, Lindóia, Amparo e região."
  }
];
