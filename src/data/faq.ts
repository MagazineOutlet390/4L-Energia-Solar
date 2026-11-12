export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Sistema Fotovoltaico e Dimensionamento",
    question: "Como funciona um sistema fotovoltaico e qual o papel dos módulos e inversores?",
    answer:
      "Em um sistema fotovoltaico conectado à rede (on-grid), os módulos fotovoltaicos (painéis solares) captam a radiação solar e geram energia elétrica em corrente contínua. Em seguida, o inversor solar — ou os microinversores — converte essa energia em corrente alternada compatível com a rede do imóvel e realiza o monitoramento contínuo da geração. Quando há excedente durante o dia, a energia é injetada na rede da concessionária e convertida em créditos de energia."
  },
  {
    category: "Dimensionamento e Consumo",
    question: "Como é feito o dimensionamento de um sistema solar a partir do consumo em kWh?",
    answer:
      "O dimensionamento analisa o histórico de consumo mensal em kWh dos últimos 12 meses na fatura da distribuidora, o padrão de ligação (monofásico, bifásico ou trifásico), a irradiação solar da região (Campinas e Circuito das Águas), a área útil, inclinação e orientação do telhado e eventuais sombras. A partir desses dados técnicos, calcula-se a potência em kWp e a quantidade de módulos mais adequada para residência, comércio ou indústria."
  },
  {
    category: "Economia na Conta de Luz",
    question: "Quanto posso economizar na conta de luz com energia solar?",
    answer:
      "Em sistemas corretamente dimensionados, a redução na fatura costuma ser expressiva, podendo alcançar grande parte do consumo compensável em kWh. A conta de luz não chega a zero porque toda unidade conectada à rede elétrica continua sujeita ao custo de disponibilidade mínima da distribuidora (30 kWh monofásico, 50 kWh bifásico e 100 kWh trifásico), à contribuição de iluminação pública (CIP) e aos encargos previstos pela Lei nº 14.300/2022 sobre a energia injetada."
  },
  {
    category: "Homologação e Conexão",
    question: "Como funciona a homologação, a troca do medidor e a conexão à rede da CPFL?",
    answer:
      "Após o estudo técnico e a montagem física dos módulos e inversores no imóvel, a equipe de engenharia protocola o projeto junto à distribuidora (como a CPFL Paulista) para aprovação de acesso. Concluída a instalação, a concessionária realiza a vistoria técnica e substitui o relógio convencional por um medidor bidirecional homologado, equipamento que mede tanto a energia consumida da rede quanto o excedente gerado pelos painéis solares."
  },
  {
    category: "Geração de Energia",
    question: "O sistema fotovoltaico gera energia em dias nublados ou chuvosos?",
    answer:
      "Sim. Os módulos fotovoltaicos utilizam a radiação solar e a luz difusa, não apenas o sol direto em céu limpo. Em dias nublados ou chuvosos a geração de energia ocorre em menor intensidade proporcionalmente à luminosidade disponível. Durante a noite, o imóvel utiliza automaticamente a rede elétrica da distribuidora, compensando o consumo com os créditos de energia acumulados nos períodos de maior geração."
  },
  {
    category: "Financiamento e Retorno",
    question: "Como funciona o financiamento e do que depende o retorno do investimento?",
    answer:
      "Existem linhas de financiamento voltadas especificamente para projetos de energia solar em instituições financeiras parceiras, analisadas conforme o perfil cadastral de cada cliente. Já o retorno do investimento varia conforme o consumo mensal em kWh, a tarifa de energia aplicada pela distribuidora, a incidência solar do telhado, o porte do sistema (residencial, comercial ou industrial) e a regra tarifária vigente — sendo avaliado caso a caso no estudo técnico."
  },
  {
    category: "Manutenção e Monitoramento",
    question: "Quais são os cuidados de manutenção e como funciona o monitoramento do sistema?",
    answer:
      "Como não possuem peças móveis, sistemas solares fotovoltaicos exigem manutenção simples. O principal cuidado é a limpeza periódica da superfície dos módulos (com água e sabão neutro, conforme o acúmulo de poeira ou fuligem local) e inspeções elétricas preventivas programadas. O monitoramento da geração em kWh é acompanhado pelo próprio cliente em aplicativo conectado ao inversor solar."
  },
  {
    category: "Atendimento Regional",
    question: "Quais cidades a 4L Energia Solar atende?",
    answer:
      "A sede operacional da 4L Energia Solar está localizada em Campinas-SP (Rua Stecca Pelegrini, Jardim Santa Lúcia). A partir dessa base, a equipe técnica atende presencialmente Campinas, Indaiatuba, Socorro, Águas de Lindóia, Lindóia, Amparo, Serra Negra, Monte Alegre do Sul e municípios próximos da região."
  },
  {
    category: "Mercado Livre de Energia",
    question: "O que é o Mercado Livre de Energia e quais empresas podem migrar?",
    answer:
      "O Mercado Livre de Energia (Ambiente de Contratação Livre — ACL) é o ambiente em que empresas conectadas em média ou alta tensão (Grupo A) podem negociar a compra de energia elétrica diretamente com comercializadoras, buscando previsibilidade contratual e escolha de fonte renovável sem necessidade de obras na fiação interna. Na prática comercial, faturas mensais a partir de aproximadamente R$ 9 mil costumam apresentar melhor relação entre economia potencial e custos operacionais de migração."
  }
];

export const MERCADO_LIVRE_FAQ: FAQItem[] = [
  {
    question: "O que é o Ambiente de Contratação Livre (ACL)?",
    answer:
      "É o mercado regulado pela CCEE onde consumidores escolhem livremente sua comercializadora de energia elétrica, contratando volume, preço por MWh e fonte renovável por períodos predefinidos."
  },
  {
    question: "Minha empresa precisa fazer obras ou trocar a fiação?",
    answer:
      "Não. A energia elétrica continua trafegando pelos mesmos fios e postes da concessionária local (ex: CPFL Paulista). A única intervenção técnica é a adequação do sistema de medição e faturamento (SMF) com medidor homologado."
  },
  {
    question: "Existe risco de faltar energia?",
    answer:
      "Não. A segurança física do suprimento permanece sob responsabilidade integral da distribuidora local (CPFL). O Mercado Livre altera apenas a relação comercial de compra da energia."
  },
  {
    question: "Por que a referência comercial é de R$ 9 mil/mês?",
    answer:
      "Qualquer empresa em média ou alta tensão (Grupo A) pode migrar por lei. No entanto, faturas a partir de R$ 9 mil a R$ 10 mil mensais apresentam a melhor relação entre economia obtida e custos de gestão com a comercializadora varejista."
  }
];
