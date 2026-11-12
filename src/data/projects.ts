/**
 * Modelo de projeto fotovoltaico real exibido em /meus-projetos e na Home.
 * Para adicionar novos cases reais no futuro, basta incluir um novo objeto no
 * array PROJECTS abaixo e salvar a respectiva fotografia em public/assets/projects/.
 * A grade, os filtros por categoria e o modal de detalhes se ajustam automaticamente.
 */
export interface Project {
  id: string;
  title: string;
  category: "Residencial" | "Empresarial";
  city: string;
  state: string;
  neighborhood: string;
  powerKwp: number;
  reportedSavings: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  gallery?: string[];
  description: string;
  highlight?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "projeto-empresarial-lindoia",
    title: "Projeto Empresarial Lindóia",
    category: "Empresarial",
    city: "Lindóia",
    state: "SP",
    neighborhood: "Bairro Lajeado",
    powerKwp: 25,
    reportedSavings: "R$ 2.800/mês",
    image: "/assets/projects/projeto-empresarial-lindoia.webp",
    imageAlt:
      "Instalação fotovoltaica de 25 kWp sobre telhado cerâmico no Projeto Empresarial Lindóia em Lindóia-SP",
    imagePosition: "object-center",
    description:
      "Sistema fotovoltaico comercial dimensionado para compensação de demanda produtiva no Bairro Lajeado, Lindóia. Economia média informada de R$ 2.800 mensais.",
    highlight: true
  },
  {
    id: "jose-cardoso-bar-mercearia",
    title: "José Cardoso Bar e Mercearia",
    category: "Empresarial",
    city: "Serra Negra",
    state: "SP",
    neighborhood: "Bairro Cardoso Residencial",
    powerKwp: 15,
    reportedSavings: "R$ 1.800/mês",
    image: "/assets/projects/jose-cardoso-bar-mercearia.webp",
    imageAlt:
      "Painéis solares fotovoltaicos de 15 kWp instalados no telhado do José Cardoso Bar e Mercearia em Serra Negra-SP",
    imagePosition: "object-[center_65%]",
    description:
      "Instalação fotovoltaica comercial em Serra Negra atendendo maquinário de refrigeração e iluminação comercial, com economia informada de R$ 1.800 ao mês.",
    highlight: true
  },
  {
    id: "quitanda-do-claudinho",
    title: "Quitanda do Claudinho",
    category: "Empresarial",
    city: "Monte Alegre do Sul",
    state: "SP",
    neighborhood: "Bairro Mostardas",
    powerKwp: 10,
    reportedSavings: "R$ 950/mês",
    image: "/assets/projects/quitanda-do-claudinho.webp",
    imageAlt:
      "Módulos solares fotovoltaicos de 10 kWp instalados sobre telhado cerâmico na Quitanda do Claudinho em Monte Alegre do Sul-SP",
    imagePosition: "object-[center_65%]",
    description:
      "Projeto comercial com 10 kWp de potência em Monte Alegre do Sul voltado para redução de custos com câmaras frias e estufas, com economia informada de R$ 950/mês.",
    highlight: true
  },
  {
    id: "residencia-lidiane",
    title: "Residência Lidiane",
    category: "Residencial",
    city: "Monte Alegre do Sul",
    state: "SP",
    neighborhood: "Bairro Mostardas",
    powerKwp: 6,
    reportedSavings: "R$ 280/mês",
    image: "/assets/projects/residencia-lidiane.webp",
    imageAlt:
      "Sistema solar residencial de 6 kWp instalado sobre telhado cerâmico na Residência Lidiane em Monte Alegre do Sul-SP",
    imagePosition: "object-center",
    description:
      "Sistema fotovoltaico residencial instalado no Bairro Mostardas, gerando energia limpa para consumo diário com economia informada de R$ 280 mensais.",
    highlight: false
  }
];
