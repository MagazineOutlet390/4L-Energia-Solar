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
    image: "/assets/projects/andre-pereira-campinas.jpeg",
    description: "Sistema fotovoltaico comercial dimensionado para compensação de demanda produtiva no Bairro Lajeado, Lindóia. Economia média informada de R$ 2.800 mensais.",
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
    image: "/assets/projects/andre-pereira-campinas.jpeg",
    description: "Instalação fotovoltaica comercial em Serra Negra atendendo maquinário de refrigeração e iluminação comercial, com economia informada de R$ 1.800 ao mês.",
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
    image: "/assets/projects/andre-pereira-campinas.jpeg",
    description: "Projeto comercial com 10 kWp de potência em Monte Alegre do Sul voltado para redução de custos com câmaras frias e estufas, com economia informada de R$ 950/mês.",
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
    image: "/assets/projects/andre-pereira-campinas.jpeg",
    description: "Sistema fotovoltaico residencial instalado no Bairro Mostardas, gerando energia limpa para consumo diário com economia informada de R$ 280 mensais.",
    highlight: false
  },
  {
    id: "residencia-andre-campinas",
    title: "Instalação Residencial Campinas",
    category: "Residencial",
    city: "Campinas",
    state: "SP",
    neighborhood: "Jardim Santa Lúcia e Região",
    powerKwp: 8.5,
    reportedSavings: "Redução até taxa mínima",
    image: "/assets/projects/andre-pereira-campinas.jpeg",
    description: "Instalação sobre telhado cerâmico documentada por cliente real (Andre Pereira), com módulos de alta eficiência e homologação completa perante a CPFL Paulista.",
    highlight: true
  }
];
