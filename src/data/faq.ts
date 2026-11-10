export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quanto posso economizar na conta de luz com energia solar?",
    answer: "A economia pode chegar a até 90% ou 95% do valor total da fatura. No entanto, o valor final não zera completamente porque toda unidade conectada à rede da concessionária (como a CPFL Paulista) precisa pagar o custo de disponibilidade mínima (taxa mínima de 30 kWh para monofásico, 50 kWh para bifásico e 100 kWh para trifásico) e a taxa de iluminação pública (CIP). O valor economizado varia conforme a irradiação local, o dimensionamento correto e os hábitos de consumo."
  },
  {
    question: "Qual é o prazo de instalação?",
    answer: "O cronograma total costuma levar de 30 a 60 dias corridos, divididos em quatro etapas: estudo técnico do local, entrega dos módulos e inversores, montagem física no telhado (que geralmente leva de 1 a 3 dias úteis) e a vistoria com troca do medidor bidirecional pela concessionária (CPFL)."
  },
  {
    question: "Como funciona o financiamento de energia solar?",
    answer: "Trabalhamos com linhas de crédito fotovoltaico especializadas através de diversas instituições financeiras parceiras. Em muitos casos, o valor da parcela mensal do financiamento é equivalente ou até inferior à economia imediata obtida na conta de luz, permitindo que o sistema se pague com a própria energia gerada."
  },
  {
    question: "O sistema funciona em dias chuvosos ou nublados?",
    answer: "Sim! Os painéis solares necessitam de radiação eletromagnética e luz difusa, não apenas de sol direto com céu aberto. Em dias muito nublados ou chuvosos a produção diminui proporcionalmente à luminosidade, mas continua ocorrendo. À noite, sua residência ou empresa utiliza a energia da rede convencional ou créditos de energia acumulados previamente."
  },
  {
    question: "Preciso trocar o relógio de energia?",
    answer: "Sim, o relógio antigo é substituído por um medidor bidirecional homologado. Esse equipamento registra tanto a energia que você consome da rede quanto a energia excedente que os seus painéis solares injetam no sistema elétrico, gerando créditos para abater na sua fatura."
  },
  {
    question: "Qual é a garantia dos equipamentos?",
    answer: "A garantia é fornecida pelos respectivos fabricantes dos componentes e detalhada no contrato de cada projeto. De forma geral, os módulos fotovoltaicos possuem garantia de produto contra defeitos de fabricação (usualmente 10 a 15 anos) e garantia linear de desempenho na geração de energia (frequentemente 25 anos), enquanto os inversores possuem garantia típica de 5 a 10 anos, extensível conforme o modelo."
  },
  {
    question: "Como funciona a manutenção do sistema fotovoltaico?",
    answer: "Sistemas solares não possuem partes móveis e exigem baixíssima manutenção. O cuidado primordial é a limpeza periódica da superfície dos painéis (geralmente a cada 6 ou 12 meses, ou conforme o acúmulo de poeira e fuligem) com água e sabão neutro para garantir o rendimento máximo, além da verificação das conexões elétricas e monitoramento constante via aplicativo."
  },
  {
    question: "Vocês atendem minha cidade?",
    answer: "Nossa base operacional está em Campinas/SP e atendemos ativamente todo o Circuito das Águas Paulista e cidades vizinhas, incluindo Indaiatuba, Socorro, Águas de Lindóia, Lindóia, Amparo, Serra Negra e Monte Alegre do Sul."
  },
  {
    question: "O que é o Mercado Livre de Energia e quem pode migrar?",
    answer: "O Mercado Livre de Energia (Ambiente de Contratação Livre - ACL) permite que consumidores comprem energia elétrica diretamente de geradores e comercializadoras com preços negociados, previsibilidade e escolha da fonte renovável. Desde 2024, qualquer empresa conectada em média ou alta tensão (Grupo A) pode migrar, tornando-se muito vantajoso para contas de energia a partir de aproximadamente R$ 9 mil a R$ 10 mil mensais."
  }
];
