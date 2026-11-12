export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  city: string;
  region: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  typewriterPhrases: string[];
  heroImage: string;
  intro: string;
  whySolarMakesSense: Array<{ title: string; description: string }>;
  whoCanBenefit: Array<{ category: string; detail: string }>;
  howProjectWorks: Array<{ step: string; desc: string }>;
  localSpecifics: string;
  featuredLocalProject?: {
    title: string;
    location: string;
    power: string;
    savings: string;
    summary: string;
  };
  regionalEvidence: {
    headline: string;
    text: string;
  };
  faq: CityFAQ[];
  whatsappMessage: string;
  internalLinks: Array<{ label: string; url: string }>;
}

export const CITIES_DATA: CityData[] = [
  // 1. SOCORRO
  {
    slug: "energia-solar-socorro",
    city: "Socorro",
    region: "Circuito das Águas",
    title: "Energia Solar em Socorro (SP) | 4L Energia Solar",
    metaDescription: "Projetos de energia solar em Socorro para pousadas, hotéis-fazenda, chácaras e residências. Homologação CPFL e orçamento com a 4L Energia Solar.",
    h1: "Energia Solar em Socorro: Economia para Pousadas, Chácaras e Residências",
    heroSubtitle: "Projetos fotovoltaicos sob medida para o setor turístico, propriedades rurais e moradores de Socorro.",
    typewriterPhrases: [
      "Redução de custos operacionais em pousadas",
      "Energia limpa para chácaras e sítios",
      "Projetos dimensionados para o relevo de Socorro"
    ],
    heroImage: "/assets/og/og-socorro.jpg",
    intro: "Reconhecida como um dos principais polos de ecoturismo e turismo de aventura do Estado de São Paulo, a cidade de Socorro reúne pousadas, hotéis-fazenda, restaurantes e inúmeras propriedades rurais. Com sede operacional em Campinas, a 4L Energia Solar atende diretamente o município de Socorro, desenvolvendo projetos fotovoltaicos conectados à rede da CPFL que aliam sustentabilidade ambiental e controle rigoroso de custos de eletricidade.",
    whySolarMakesSense: [
      {
        title: "Compensação de Cargas Turísticas Contínuas",
        description: "Empreendimentos de hospitalidade operam com ar-condicionado, câmaras de refrigeração, lavanderias e bombas de piscina com consumo elevado durante finais de semana e feriados."
      },
      {
        title: "Excelente Irradiação em Áreas Rurais",
        description: "Socorro conta com índices favoráveis de radiação solar global. Sítios e chácaras com boa área de cobertura ou terreno viabilizam usinas de geração distribuída com excelente rendimento anual."
      },
      {
        title: "Valorização Ecológica do Estabelecimento",
        description: "Turistas que buscam contato com a natureza valorizam pousadas que utilizam eletricidade renovável, agregando valor à marca do hotel ou restaurante."
      },
      {
        title: "Proteção Contra Tarifas e Bandeiras Sazonais",
        description: "A geração própria no local ameniza o impacto de bandeiras tarifárias vermelhas que costumam onerar o caixa das empresas em períodos secos."
      }
    ],
    whoCanBenefit: [
      {
        category: "Pousadas e Hotéis-Fazenda",
        detail: "Dimensionamento que atende a sazonalidade de hóspedes, compensando faturas elétricas elevadas geradas por climatização de quartos e áreas sociais."
      },
      {
        category: "Chácaras e Propriedades Rurais",
        detail: "Sistemas para poços artesianos, ordenha, iluminação perimetral e residências de lazer no meio rural de Socorro."
      },
      {
        category: "Comércios e Restaurantes",
        detail: "Alívio imediato no custo de refrigeração de alimentos e cozinhas profissionais no centro e nos corredores turísticos."
      },
      {
        category: "Casas e Residências Urbanas",
        detail: "Geração limpa para o consumo familiar diário, com abatimento de até 90% dos custos da tarifa regulada."
      }
    ],
    howProjectWorks: [
      {
        step: "1. Análise da Demanda Real",
        desc: "Avaliamos as contas de luz do último ano, considerando picos sazonais de ocupação turística ou consumo agrícola."
      },
      {
        step: "2. Vistoria Técnica no Local",
        desc: "Nossos engenheiros inspecionam o telhado ou terreno em Socorro, verificando orientação solar e sombreamentos provocados pela topografia."
      },
      {
        step: "3. Instalação Cuidadosa",
        desc: "Montagem mecânica e elétrica com fixadores de alta durabilidade, sem danificar a cobertura do imóvel."
      },
      {
        step: "4. Homologação CPFL",
        desc: "A 4L cuida de toda a tramitação burocrática até a troca do medidor para o modelo bidirecional."
      }
    ],
    localSpecifics: "Em cidades serranas como Socorro, a análise de horizonte é fundamental: morros e matas próximas podem projetar sombras parciais nas primeiras horas da manhã. Por isso, a 4L realiza simulações tridimensionais de sombreamento para posicionar os módulos com máxima produtividade.",
    regionalEvidence: {
      headline: "Experiência Comprovada no Circuito das Águas",
      text: "A 4L Energia Solar possui projetos operacionais em municípios vizinhos do Circuito das Águas, como em Serra Negra (José Cardoso Bar e Mercearia, 15 kWp, com economia informada de R$ 1.800/mês) e Monte Alegre do Sul (Quitanda do Claudinho, 10 kWp, economia informada de R$ 950/mês, e Residência Lidiane, 6 kWp), demonstrando capacidade técnica de atender clientes rurais e comerciais com excelência."
    },
    faq: [
      {
        question: "Energia solar vale a pena para uma pousada em Socorro?",
        answer: "Sim, especialmente porque os maiores custos de uma pousada (chuveiros, ar-condicionado, lavanderia e câmaras frias) coincidem com o período diurno e finais de semana. A energia gerada durante o dia abastece o empreendimento e o excedente gera créditos na CPFL para compensar o consumo noturno."
      },
      {
        question: "É possível instalar placas solares em chácaras e sítios?",
        answer: "Sim. A instalação pode ser realizada tanto sobre telhados residenciais, galpões de máquinas ou até mesmo em estruturas fixadas no solo, desde que haja boa insolação e proximidade com o padrão de entrada da concessionária."
      },
      {
        question: "O relevo montanhoso de Socorro prejudica a geração de energia?",
        answer: "Não necessariamente. O relevo exige apenas um estudo prévio cuidadoso de engenharia para evitar sombreamentos das encostas. Nossos especialistas definem a inclinação e orientação adequadas para captar a máxima luminosidade disponível."
      },
      {
        question: "Como funciona a manutenção do sistema solar?",
        answer: "Sistemas fotovoltaicos exigem pouca manutenção. Em áreas rurais com poeira de estrada de terra, recomendamos lavagem periódica com água e pano suave a cada 6 ou 12 meses, além de acompanhar a produção diária via aplicativo no smartphone."
      },
      {
        question: "Como solicitar uma visita técnica em Socorro?",
        answer: "Basta entrar em contato pelo WhatsApp oficial da 4L Energia Solar (19) 9 8315-5772 enviando uma foto da sua fatura de energia. Nossa equipe agenda a vistoria técnica e apresenta um estudo preliminar sem custos."
      }
    ],
    whatsappMessage: "Olá! Moro ou tenho um negócio em Socorro e gostaria de receber informações e um orçamento de energia solar.",
    internalLinks: [
      { label: "Projetos Reais da 4L no Circuito das Águas", url: "/meus-projetos" },
      { label: "Energia Solar em Águas de Lindóia", url: "/energia-solar-aguas-de-lindoia" },
      { label: "Energia Solar em Lindóia", url: "/energia-solar-lindoia" },
      { label: "Calculadora de Economia Solar", url: "/#calculadora" }
    ]
  },

  // 2. ÁGUAS DE LINDÓIA
  {
    slug: "energia-solar-aguas-de-lindoia",
    city: "Águas de Lindóia",
    region: "Circuito das Águas",
    title: "Energia Solar em Águas de Lindóia | 4L Energia Solar",
    metaDescription: "Instalação de energia solar em Águas de Lindóia para hotéis, pousadas e residências. Eficiência e redução na conta de luz com a 4L Energia Solar.",
    h1: "Energia Solar em Águas de Lindóia: Eficiência para Hotelaria e Residências",
    heroSubtitle: "Soluções fotovoltaicas dimensionadas para o parque hoteleiro, comércio e casas de veraneio.",
    typewriterPhrases: [
      "Redução de custos elétricos na hotelaria",
      "Climatização e piscinas aquecidas eficientes",
      "Atendimento presencial no Circuito das Águas"
    ],
    heroImage: "/assets/og/og-aguas-de-lindoia.jpg",
    intro: "Conhecida nacionalmente como a 'Capital Termal do Brasil', Águas de Lindóia abriga um dos mais robustos complexos hoteleiros do interior paulista, além de um comércio gastronômico vibrante e residências serranas. A 4L Energia Solar desenvolve projetos de engenharia fotovoltaica pensados especificamente para suprir as exigências de conforto dos estabelecimentos locais, transformando a alta demanda de energia em oportunidade de investimento sustentável e rentável.",
    whySolarMakesSense: [
      {
        title: "Intensidade Energética da Hotelaria",
        description: "Hotéis e pousadas mantêm operação contínua de caldeiras elétricas, saunas, bombas de circulação térmica para piscinas e climatização em todos os quartos."
      },
      {
        title: "Excelente Insolação de Altitude",
        description: "Localizada a quase mil metros de altitude, a cidade desfruta de atmosfera límpida e ótima irradiação solar na maior parte do ano, favorecendo a eficiência dos painéis."
      },
      {
        title: "Controle de Custos Fixos na Baixa Temporada",
        description: "Com a geração fotovoltaica própria, os créditos gerados em meses ensolarados abatem as faturas durante períodos de menor fluxo de hóspedes."
      },
      {
        title: "Alinhamento com Sustentabilidade e Bem-Estar",
        description: "O turismo de saúde e relaxamento de Águas de Lindóia combina de forma natural com a bandeira de sustentabilidade e consumo responsável de recursos."
      }
    ],
    whoCanBenefit: [
      {
        category: "Hotéis e Resorts",
        detail: "Grandes coberturas de telhado ideais para usinas de dezenas de kWp, reduzindo faturas substanciais de energia elétrica."
      },
      {
        category: "Pousadas Tradicionais e Boutiques",
        detail: "Sistemas customizados para integrar-se à arquitetura do imóvel sem comprometer a estética acolhedora das acomodações."
      },
      {
        category: "Restaurantes e Cafés",
        detail: "Compensação de maquinários pesados de cozinha industrial, buffets térmicos e refrigeração."
      },
      {
        category: "Casas e Moradias de Veraneio",
        detail: "Economia contínua para famílias que residem ou passam temporadas na estância hidromineral."
      }
    ],
    howProjectWorks: [
      {
        step: "1. Levantamento de Cargas Críticas",
        desc: "Avaliamos os equipamentos que mais consomem energia no estabelecimento (aquecimento, ar-condicionado, lavanderia)."
      },
      {
        step: "2. Projeto com Engenharia Fotovoltaica",
        desc: "Dimensionamos a potência exata para cobrir a demanda sem sobrecarregar a estrutura física do telhado."
      },
      {
        step: "3. Instalação Especializada",
        desc: "Equipe com cronograma ajustado para minimizar qualquer ruído ou incômodo aos hóspedes e moradores."
      },
      {
        step: "4. Ligação na CPFL e Monitoramento",
        desc: "Homologação integral e configuração do monitoramento diário de geração via internet."
      }
    ],
    localSpecifics: "Para o setor hoteleiro de Águas de Lindóia, a 4L planeja a instalação em horários flexíveis para preservar a tranquilidade dos hóspedes, utilizando equipamentos modernos e inversores com certificação de segurança reforçada.",
    regionalEvidence: {
      headline: "Proximidade e Atendimento Técnico Local",
      text: "Nossa equipe atua a poucos quilômetros de Águas de Lindóia, tendo executado na cidade vizinha de Lindóia o Projeto Empresarial Lindóia no Bairro Lajeado (25 kWp, com economia informada de R$ 2.800/mês), demonstrando profundo conhecimento das características climáticas e regulatórias da região."
    },
    faq: [
      {
        question: "Energia solar consegue suprir o consumo de um hotel em Águas de Lindóia?",
        answer: "Sim. A energia solar é modular: dependendo da área de telhado disponível e da capacidade da subestação, o sistema pode ser projetado para cobrir desde frações estratégicas da fatura até a quase totalidade do consumo energético do hotel."
      },
      {
        question: "Como funciona a energia solar para piscinas aquecidas?",
        answer: "Os painéis fotovoltaicos geram eletricidade para alimentar bombas de calor (trocadores de calor elétricos) e equipamentos de filtragem. Dessa forma, você aquece a água utilizando a energia limpa produzida pelo próprio telhado."
      },
      {
        question: "Empresas com lavanderia pesada se beneficiam?",
        answer: "Com certeza. Lavanderias com lavadoras industriais, secadoras e centrífugas consomem grande quantidade de kWh durante o dia, período em que o gerador fotovoltaico opera em potência máxima."
      },
      {
        question: "É possível financiar o investimento em energia solar?",
        answer: "Sim. Há linhas de financiamento bancário para pessoas jurídicas e físicas com carência inicial, em que a economia obtida na conta de luz é utilizada para quitar as parcelas do financiamento."
      },
      {
        question: "A 4L Energia Solar atende pessoalmente em Águas de Lindóia?",
        answer: "Sim! Nossa equipe visita o imóvel pessoalmente para realizar a medição do telhado, analisar a fatura da CPFL e tirar todas as dúvidas técnicas sem compromisso."
      }
    ],
    whatsappMessage: "Olá! Moro ou tenho um negócio em Águas de Lindóia e gostaria de receber informações e um orçamento de energia solar.",
    internalLinks: [
      { label: "Projeto Empresarial da 4L em Lindóia", url: "/energia-solar-lindoia" },
      { label: "Energia Solar em Socorro", url: "/energia-solar-socorro" },
      { label: "Portfólio de Obras no Circuito das Águas", url: "/meus-projetos" },
      { label: "Simule sua Economia", url: "/#calculadora" }
    ]
  },

  // 3. LINDÓIA
  {
    slug: "energia-solar-lindoia",
    city: "Lindóia",
    region: "Circuito das Águas",
    title: "Energia Solar em Lindóia (SP) | 4L Energia Solar",
    metaDescription: "Energia solar em Lindóia para empresas, comércios e residências. Projeto de 25 kWp no Bairro Lajeado e atendimento técnico da 4L Energia Solar.",
    h1: "Energia Solar em Lindóia: Experiência Real e Economia Comprovada",
    heroSubtitle: "Projetos fotovoltaicos com histórico comprovado no Bairro Lajeado e atendimento técnico na Capital das Águas Minerais.",
    typewriterPhrases: [
      "Projeto Empresarial de 25 kWp no Bairro Lajeado",
      "Economia informada de R$ 2.800 mensais",
      "Atendimento especializado em Lindóia e região"
    ],
    heroImage: "/assets/og/og-lindoia.jpg",
    intro: "Conhecida como a Capital das Águas Minerais, Lindóia reúne um parque produtivo voltado ao envase de água, comércios locais, hotelaria e residências de tranquilidade única. A 4L Energia Solar tem um vínculo histórico especial com a cidade: foi em Lindóia que projetamos e instalamos um dos nossos marcos empresariais no Bairro Lajeado, com 25 kWp de potência instalada e economia informada pelo cliente de aproximadamente R$ 2.800,00 por mês.",
    whySolarMakesSense: [
      {
        title: "Prova Concreta de Retorno na Cidade",
        description: "Em Lindóia, a energia solar não é teoria: empresas locais já colhem na prática reduções substanciais em suas despesas mensais de eletricidade."
      },
      {
        title: "Condições Climáticas Privilegiadas",
        description: "A topografia e a excelente insolação da região do Circuito das Águas garantem índices de horas de sol pleno (HSP) altamente produtivos durante todo o ano."
      },
      {
        title: "Estabilidade Financeira para Empresas Locais",
        description: "Comerciantes e prestadores de serviço conseguem estabilizar um dos custos fixos mais imprevisíveis, direcionando o caixa para melhorias no negócio."
      },
      {
        title: "Economia Residencial para Toda a Família",
        description: "Casas e sítios no município reduzem sua fatura ao limite da taxa básica regulatória da concessionária CPFL."
      }
    ],
    whoCanBenefit: [
      {
        category: "Empresas e Galpões Produtivos",
        detail: "Projetos de médio e grande porte, semelhantes ao case de 25 kWp no Bairro Lajeado, projetados para compensar alta demanda de maquinários."
      },
      {
        category: "Comércio Local e Mercados",
        detail: "Redução de gastos elétricos em padarias, lojas, farmácias e depósitos que utilizam iluminação e refrigeração constante."
      },
      {
        category: "Pousadas e Chalés",
        detail: "Conforto aos turistas sem receio do aumento na conta com ar-condicionado e duchas elétricas."
      },
      {
        category: "Residências e Chácaras",
        detail: "Instalações de 3 kWp a 10 kWp ideais para famílias que desejam viver com conforto sem contas pesadas no final do mês."
      }
    ],
    howProjectWorks: [
      {
        step: "1. Consulta de Fatura e Histórico",
        desc: "Examinamos o consumo em kWh dos últimos 12 meses para definir o número exato de placas solares."
      },
      {
        step: "2. Engenharia e Visita em Lindóia",
        desc: "Analisamos as condições do telhado, padrão elétrico e cabeamento para elaboração da planta técnica."
      },
      {
        step: "3. Execução Ágil e Normatizada",
        desc: "Instalação concluída de forma rápida e segura, com fixadores inoxidáveis e aterramento elétrico completo."
      },
      {
        step: "4. Homologação com a CPFL",
        desc: "Acompanhamos a vistoria da concessionária até a ativação dos créditos de energia solar."
      }
    ],
    localSpecifics: "Nosso histórico no Bairro Lajeado comprova a robustez das soluções da 4L Energia Solar para as características específicas de Lindóia, garantindo segurança na instalação e conformidade com as exigências da CPFL Paulista.",
    featuredLocalProject: {
      title: "Projeto Empresarial Lindóia (Case Real)",
      location: "Bairro Lajeado, Lindóia - SP",
      power: "25 kWp de potência instalada",
      savings: "Economia informada pelo cliente de aproximadamente R$ 2.800,00 por mês",
      summary: "Sistema fotovoltaico comercial projetado e executado pela 4L Energia Solar para atender a demanda energética de atividades produtivas no Bairro Lajeado, gerando economia expressiva comprovada e atestando a presença técnica da nossa empresa na cidade."
    },
    regionalEvidence: {
      headline: "Instalações Reais e Ativas em Lindóia",
      text: "O Projeto Empresarial Lindóia no Bairro Lajeado (25 kWp) é o exemplo mais direto da nossa atuação no município. Além dele, operamos projetos no entorno do Circuito das Águas em Serra Negra (15 kWp) e Monte Alegre do Sul (10 kWp e 6 kWp)."
    },
    faq: [
      {
        question: "A 4L Energia Solar já realizou instalações em Lindóia?",
        answer: "Sim! Um dos nossos projetos empresariais de maior destaque na região está em operação no Bairro Lajeado, em Lindóia, com 25 kWp de potência instalada e economia média informada pelo contratante de R$ 2.800 ao mês."
      },
      {
        question: "Qualquer tipo de telhado pode receber placas solares em Lindóia?",
        answer: "A grande maioria dos telhados (cerâmica, telha de fibrocimento, metálica ou laje de concreto) é perfeitamente adequada. Nossos engenheiros avaliam a integridade das vigas e a orientação solar para garantir fixação sem riscos de infiltrações."
      },
      {
        question: "Quanto tempo dura a instalação das placas solares?",
        answer: "A montagem física no telhado costuma levar de 1 a 3 dias úteis para sistemas residenciais e comerciais de pequeno/médio porte. Todo o trâmite total, incluindo entrega de materiais e vistoria da CPFL, leva tipicamente entre 30 a 60 dias."
      },
      {
        question: "A economia informada no Bairro Lajeado é garantida para todos?",
        answer: "Não. A economia informada de R$ 2.800/mês representa o resultado real daquele consumidor específico. Em cada novo projeto, o dimensionamento é individualizado com base no consumo, na tarifa e na orientação do telhado."
      },
      {
        question: "Como solicitar um orçamento de energia solar em Lindóia?",
        answer: "Basta entrar em contato pelo nosso WhatsApp oficial (19) 9 8315-5772. Nossa equipe analisa sua conta de energia e programa uma visita técnica gratuita no seu imóvel em Lindóia."
      }
    ],
    whatsappMessage: "Olá! Moro ou tenho um negócio em Lindóia e gostaria de receber informações e um orçamento de energia solar.",
    internalLinks: [
      { label: "Ver Detalhes do Projeto no Bairro Lajeado", url: "/meus-projetos" },
      { label: "Energia Solar em Águas de Lindóia", url: "/energia-solar-aguas-de-lindoia" },
      { label: "Energia Solar em Amparo", url: "/energia-solar-amparo" },
      { label: "Simular na Calculadora de Economia", url: "/#calculadora" }
    ]
  },

  // 4. AMPARO
  {
    slug: "energia-solar-amparo",
    city: "Amparo",
    region: "Circuito das Águas",
    title: "Energia Solar em Amparo (SP) | 4L Energia Solar",
    metaDescription: "Projetos fotovoltaicos em Amparo para empresas, galpões, propriedades rurais e residências. Reduza gastos com energia elétrica com a 4L Energia Solar.",
    h1: "Energia Solar em Amparo: Soluções Comerciais, Industriais e Rurais",
    heroSubtitle: "Projetos de engenharia fotovoltaica e assessoria em Mercado Livre para a capital histórica do Circuito das Águas.",
    typewriterPhrases: [
      "Projetos para comércios, galpões e indústrias",
      "Geração distribuída para o setor agropecuário",
      "Assessoria em Mercado Livre de Energia"
    ],
    heroImage: "/assets/og/og-amparo.jpg",
    intro: "Polo histórico, administrativo e educacional do Circuito das Águas Paulista, Amparo combina um setor comercial tradicional, indústrias em expansão, empresas de serviços e forte atividade rural. Com base operacional em Campinas, a 4L Energia Solar atende ativamente o município de Amparo, oferecendo desde soluções de microgeração para residências e sítios até usinas solares de maior porte e consultoria em Mercado Livre de Energia para clientes do Grupo A.",
    whySolarMakesSense: [
      {
        title: "Diversidade de Aplicações Comerciais e Produtivas",
        description: "Amparo conta com padarias, galpões de estocagem, metalúrgicas leves e confecções cujas despesas com eletricidade pesam diretamente no custo das mercadorias."
      },
      {
        title: "Grandes Áreas de Cobertura em Galpões",
        description: "Muitas empresas na cidade possuem telhados metálicos trapezoidais amplos e desimpedidos, ideais para montagens rápidas e econômicas de sistemas solares de alto rendimento."
      },
      {
        title: "Atendimento às Demandas do Setor Rural",
        description: "Propriedades rurais e granjas de Amparo necessitam de energia constante para bombeamento hídrico e estufas, onde a geração própria gera autonomia energética substancial."
      },
      {
        title: "Potencial para Mercado Livre de Energia",
        description: "Empresas com contas a partir de R$ 9 mil mensais podem aliar os benefícios dos painéis solares à migração para o Ambiente de Contratação Livre (ACL)."
      }
    ],
    whoCanBenefit: [
      {
        category: "Empresas, Lojas e Prestadores de Serviços",
        detail: "Sistemas desenhados para zerar o consumo diurno de escritórios, oficinas, academias e comércios no centro e bairros de Amparo."
      },
      {
        category: "Pequenas Indústrias e Galpões",
        detail: "Projetos com dezenas de kWp voltados para compensação da curva de maquinários e motores elétricos pesados."
      },
      {
        category: "Propriedades Rurais e Sítios",
        detail: "Sistemas fotovoltaicos dimensionados para atender tanto a sede familiar quanto as instalações operacionais da propriedade."
      },
      {
        category: "Residências e Condomínios",
        detail: "Economia para famílias que desejam utilizar ar-condicionado e eletrodomésticos sem preocupação com reajustes da concessionária."
      }
    ],
    howProjectWorks: [
      {
        step: "1. Diagnóstico Tarifário",
        desc: "Examinamos se o perfil do cliente se adequa melhor à geração fotovoltaica distribuída, ao Mercado Livre de Energia ou a uma solução combinada."
      },
      {
        step: "2. Avaliação Estrutural em Amparo",
        desc: "Inspeção do telhado ou estrutura do galpão para verificação de sobrecarga e padrão de conexão CPFL."
      },
      {
        step: "3. Engenharia e Montagem",
        desc: "Execução com equipamentos homologados pelo INMETRO, inversores com monitoramento Wi-Fi e fiação normatizada."
      },
      {
        step: "4. Troca do Medidor e Ativação",
        desc: "Homologação burocrática integral conduzida pela 4L junto à CPFL até a geração ativa de créditos."
      }
    ],
    localSpecifics: "Em Amparo, muitas empresas têm perfis tarifários do Grupo A (média tensão) ou Grupo B comercial. A 4L realiza uma análise comparativa precisa para indicar a melhor estratégia regulatória e financeira para cada caso.",
    regionalEvidence: {
      headline: "Presença Técnica Regional Consolidada",
      text: "Atendendo a todo o corredor do Circuito das Águas a partir de Campinas, a 4L Energia Solar conta com projetos operando nas cidades vizinhas de Monte Alegre do Sul (Quitanda do Claudinho e Residência Lidiane), Serra Negra (15 kWp) e Lindóia (25 kWp no Bairro Lajeado)."
    },
    faq: [
      {
        question: "Energia solar é vantajosa para pequenas indústrias e galpões em Amparo?",
        answer: "Sim, muito vantajosa. Empreendimentos com galpões possuem grandes áreas de cobertura com excelente ângulo de insolação, permitindo instalar sistemas de alta potência que reduzem consideravelmente o custo operacional do produto final."
      },
      {
        question: "Empresas de Amparo podem migrar para o Mercado Livre de Energia?",
        answer: "Sim. Todas as empresas atendidas em média ou alta tensão (Grupo A) com despesas a partir de R$ 9 mil a R$ 10 mil mensais podem avaliar a migração para o Mercado Livre, contratando energia mais barata e previsível com assessoria da 4L."
      },
      {
        question: "Como funciona a energia solar em propriedades rurais de Amparo?",
        answer: "O sistema fotovoltaico pode ser instalado no telhado da residência, no galpão de implementos ou no solo. A energia gerada atende bombas d'água, refrigeração e residência, injetando o excedente na rede da CPFL."
      },
      {
        question: "Existe linha de crédito específica para financiar a instalação?",
        answer: "Sim. Trabalhamos com diversas instituições financeiras que disponibilizam crédito fotovoltaico para pessoas físicas, produtores rurais e empresas, com carência e prazos flexíveis."
      },
      {
        question: "Qual o primeiro passo para orçar em Amparo?",
        answer: "O primeiro passo é enviar uma cópia recente da sua fatura de energia da CPFL para nosso WhatsApp (19) 9 8315-5772. Nossa equipe de engenharia apresentará uma simulação personalizada sem custos."
      }
    ],
    whatsappMessage: "Olá! Moro ou tenho um negócio em Amparo e gostaria de receber informações e um orçamento de energia solar.",
    internalLinks: [
      { label: "Mercado Livre de Energia para Empresas", url: "/mercado-livre" },
      { label: "Energia Solar em Monte Alegre do Sul e Região", url: "/meus-projetos" },
      { label: "Energia Solar em Lindóia", url: "/energia-solar-lindoia" },
      { label: "Calculadora Técnica de Economia", url: "/#calculadora" }
    ]
  },

  // 5. CAMPINAS
  {
    slug: "energia-solar-campinas",
    city: "Campinas",
    region: "Sede Operacional",
    title: "Energia Solar em Campinas (SP) | 4L Energia Solar",
    metaDescription: "Empresa de energia solar com sede em Campinas no Jardim Santa Lúcia. Projetos residenciais e comerciais homologados na CPFL pela 4L Energia Solar.",
    h1: "Energia Solar em Campinas: Engenharia e Instalação na Cidade-Sede da 4L",
    heroSubtitle: "Projetos fotovoltaicos residenciais e empresariais com atendimento ágil e homologação completa na CPFL Paulista.",
    typewriterPhrases: [
      "Sede própria na Rua Stecca Pelegrini, Jardim Santa Lúcia",
      "Atendimento direto e equipe técnica local",
      "Projetos residenciais, comerciais e condomínios"
    ],
    heroImage: "/assets/og/og-campinas.jpg",
    intro: "Terceiro maior município do Estado de São Paulo e grande polo de tecnologia, serviços e indústrias, Campinas é o coração operacional da 4L Energia Solar. Localizada na Rua Stecca Pelegrini, no Jardim Santa Lúcia, nossa sede permite que engenheiros e técnicos realizem vistorias ágeis e acompanhem presencialmente cada detalhe da sua instalação, desde residências e condomínios fechados até clínicas, centros comerciais e indústrias.",
    whySolarMakesSense: [
      {
        title: "Proximidade e Agilidade Operacional",
        description: "Por estarmos sediados em Campinas, nossa equipe realiza visitas técnicas com máxima rapidez, garantindo suporte presencial no pré e pós-venda."
      },
      {
        title: "Tarifas da CPFL Paulista e Alto Potencial de Economia",
        description: "Com tarifas residenciais e comerciais relevantes na região de Campinas, a geração própria de energia oferece uma das melhores relações de custo-benefício do país."
      },
      {
        title: "Soluções para Casas, Condomínios e Empresas",
        description: "Atendemos desde residências familiares e condomínios até clínicas médicas, academias, supermercados e sedes corporativas."
      },
      {
        title: "Tramitação Descomplicada com a Concessionária",
        description: "Ampla experiência nos procedimentos técnicos, padrões de entrada e normas de acesso de micro e minigeração da CPFL Paulista."
      }
    ],
    whoCanBenefit: [
      {
        category: "Residências e Casas em Condomínios Fechados",
        detail: "Projetos que integram perfeitamente com a estética do telhado, eliminando custos altos de climatização, piscinas e veículos elétricos."
      },
      {
        category: "Clínicas, Academias e Comércio Urbano",
        detail: "Empresas com consumo contínuo de ar-condicionado e iluminação diurna que buscam cortar custos fixos mensais."
      },
      {
        category: "Pequenas e Médias Indústrias",
        detail: "Sistemas de maior potência para redução de custos com máquinas e possibilidade de migração para o Mercado Livre de Energia."
      },
      {
        category: "Chácaras e Bairros Residenciais",
        detail: "Como demonstrado na avaliação real do cliente Andre Pereira em Campinas, instalamos com cuidado total sem quebra de telhas."
      }
    ],
    howProjectWorks: [
      {
        step: "1. Vistoria Presencial em Campinas",
        desc: "Nossos técnicos visitam seu imóvel no Jardim Santa Lúcia, Barão Geraldo, Sousas, Alphaville ou qualquer bairro de Campinas."
      },
      {
        step: "2. Projeto com Responsabilidade Técnica (ART)",
        desc: "Dimensionamento com engenheiro responsável, respeitando as normas da ABNT e da concessionária CPFL."
      },
      {
        step: "3. Instalação Limpa e Segura",
        desc: "Montagem ágil com equipe própria e equipamentos certificados pelo INMETRO."
      },
      {
        step: "4. Homologação Completa",
        desc: "Acompanhamos a vistoria da CPFL Paulista até a colocação do relógio bidirecional."
      }
    ],
    localSpecifics: "A sede da 4L Energia Solar está localizada em Campinas, no Jardim Santa Lúcia. Diferente de intermediários virtuais, somos uma empresa com endereço real, equipe acessível e histórico comprovado em dezenas de instalações na cidade.",
    regionalEvidence: {
      headline: "Avaliações Reais de Clientes em Campinas",
      text: "Em Campinas, contamos com instalações documentadas e elogiadas no Google, como a do cliente Andre Pereira ('Produto de boa qualidade, entrega o que promete e tem um ótimo custo benefício. Empresa séria e oferece um atendimento exemplar'), comprovando o compromisso da 4L com pontualidade e excelência técnica."
    },
    faq: [
      {
        question: "Onde fica a sede da 4L Energia Solar em Campinas?",
        answer: "Nossa base operacional está situada na Rua Stecca Pelegrini, no bairro Jardim Santa Lúcia, em Campinas - SP, permitindo fácil deslocamento para todas as regiões do município e cidades vizinhas."
      },
      {
        question: "A 4L atende residências e condomínios fechados em Campinas?",
        answer: "Sim! Realizamos projetos em condomínios residenciais de Campinas, respeitando as normas arquitetônicas internas de cada associação e garantindo uma instalação discreta e segura."
      },
      {
        question: "Como funciona a homologação com a CPFL Paulista?",
        answer: "A 4L Energia Solar cuida de todo o processo: entrada do projeto elétrico, emissão de ART, envio da documentação técnica e solicitação da vistoria da CPFL para a troca do medidor pelo modelo bidirecional."
      },
      {
        question: "Quanto posso economizar na conta de luz em Campinas?",
        answer: "A economia na fatura pode chegar a até 90% ou 95% do valor total, dependendo do dimensionamento do sistema, restando ao consumidor apenas a taxa mínima de disponibilidade da rede e a iluminação pública."
      },
      {
        question: "Como solicitar um orçamento presencial em Campinas?",
        answer: "Basta entrar em contato pelo WhatsApp oficial (19) 9 8315-5772. Por estarmos em Campinas, nossa equipe pode realizar a vistoria técnica no seu imóvel com muita agilidade."
      }
    ],
    whatsappMessage: "Olá! Moro ou tenho um negócio em Campinas e gostaria de receber informações e um orçamento de energia solar.",
    internalLinks: [
      { label: "Ver Projetos e Avaliações Reais de Campinas", url: "/meus-projetos" },
      { label: "Energia Solar em Indaiatuba", url: "/energia-solar-indaiatuba" },
      { label: "Sobre a Nossa Empresa e Sede", url: "/sobre" },
      { label: "Simular Economia na Calculadora", url: "/#calculadora" }
    ]
  },

  // 6. INDAIATUBA
  {
    slug: "energia-solar-indaiatuba",
    city: "Indaiatuba",
    region: "Região Metropolitana",
    title: "Energia Solar em Indaiatuba | 4L Energia Solar",
    metaDescription: "Soluções em energia solar para indústrias, galpões, condomínios e empresas em Indaiatuba. Projetos fotovoltaicos e Mercado Livre com a 4L Energia Solar.",
    h1: "Energia Solar em Indaiatuba: Tecnologia para Indústrias, Galpões e Residências",
    heroSubtitle: "Projetos de engenharia fotovoltaica de alta eficiência para um dos maiores polos econômicos da RMC.",
    typewriterPhrases: [
      "Soluções para o polo industrial e logístico",
      "Instalações de alto padrão para condomínios",
      "Assessoria em Mercado Livre para empresas"
    ],
    heroImage: "/assets/og/og-indaiatuba.jpg",
    intro: "Com excelente infraestrutura urbana, polo industrial moderno e dezenas de condomínios residenciais de alto padrão, Indaiatuba é um dos municípios mais dinâmicos do interior de São Paulo. A 4L Energia Solar atende ativamente a cidade de Indaiatuba com soluções integradas de engenharia fotovoltaica para galpões, empresas, comércios e residências, além de assessoria especializada na migração para o Mercado Livre de Energia.",
    whySolarMakesSense: [
      {
        title: "Perfil Industrial e Logístico Exigente",
        description: "Empresas e centros de distribuição em Indaiatuba contam com faturas vultosas de energia elétrica, onde cada kWh economizado melhora diretamente a margem de lucro operacional."
      },
      {
        title: "Grandes Coberturas Metálicas Disponíveis",
        description: "Os distritos industriais de Indaiatuba concentram galpões com excelente capacidade para usinas solares de 30 kWp a centenas de kWp, aproveitando telhados ociosos."
      },
      {
        title: "Casas em Condomínios com Consumo Elevado",
        description: "Residências de médio e alto padrão com climatização completa, automação, aquecimento de piscina e recarga veicular encontram na energia solar a solução ideal para zerar surpresas tarifárias."
      },
      {
        title: "Metas Corporativas de Descarbonização (ESG)",
        description: "Indústrias multinacionais e fornecedoras que operam em Indaiatuba valorizam o suprimento com energia limpa rastreável para cumprimento de metas ambientais."
      }
    ],
    whoCanBenefit: [
      {
        category: "Indústrias e Galpões Logísticos",
        detail: "Projetos fotovoltaicos de maior potência e avaliação para migração ao Mercado Livre de Energia para contas a partir de R$ 9 mil."
      },
      {
        category: "Empresas Comerciais e Prestadores de Serviços",
        detail: "Sistemas desenhados para reduzir o custo fixo de eletricidade em escritórios, lojas, concessionárias e academias."
      },
      {
        category: "Condomínios Residenciais de Alto Padrão",
        detail: "Projetos para residências amplas e áreas comuns de condomínios (portaria, iluminação e salões de festas)."
      },
      {
        category: "Propriedades e Chácaras na Região",
        detail: "Geração distribuída para chácaras de lazer e pequenas propriedades rurais no entorno de Indaiatuba."
      }
    ],
    howProjectWorks: [
      {
        step: "1. Estudo de Viabilidade Tarifária",
        desc: "Análise profunda da fatura de energia para determinar a potência ideal e o modelo regulatório mais vantajoso."
      },
      {
        step: "2. Dimensionamento e Projeto Executivo",
        desc: "Engenharia especializada com estudo de cargas estruturais e especificação de equipamentos certificados."
      },
      {
        step: "3. Instalação com Equipe Especializada",
        desc: "Montagem ágil que respeita rigorosos padrões de segurança do trabalho e integridade do telhado."
      },
      {
        step: "4. Homologação CPFL e Início da Economia",
        desc: "Condução completa do processo burocrático até a liberação do sistema pela concessionária."
      }
    ],
    localSpecifics: "Para o setor corporativo e industrial de Indaiatuba, a 4L Energia Solar oferece suporte técnico de engenharia para avaliar se a empresa deve investir em sistema fotovoltaico próprio, migrar para o Mercado Livre de Energia ou adotar uma estratégia híbrida.",
    regionalEvidence: {
      headline: "Atendimento Direto a Partir de Campinas",
      text: "Devido à proximidade geográfica imediata com a nossa sede em Campinas, Indaiatuba conta com atendimento técnico direto da 4L Energia Solar, com suporte ágil para visitas no local, elaboração de orçamentos e acompanhamento pós-instalação."
    },
    faq: [
      {
        question: "Energia solar é viável para galpões e indústrias em Indaiatuba?",
        answer: "Sim. Galpões industriais possuem grandes áreas de telhado ideais para a instalação de usinas fotovoltaicas que geram grande volume de kWh, reduzindo o custo da eletricidade consumida durante o horário produtivo da fábrica."
      },
      {
        question: "Como funciona a instalação em condomínios fechados em Indaiatuba?",
        answer: "Realizamos o estudo de engenharia considerando o regulamento estético do condomínio, instalando os painéis de forma harmônica no telhado e cuidando de toda a fiação interna sem quebrar telhas ou alterar a fachada."
      },
      {
        question: "Empresas de Indaiatuba podem migrar para o Mercado Livre de Energia?",
        answer: "Sim. Todas as empresas atendidas em média ou alta tensão (Grupo A) com despesas a partir de R$ 9 mil a R$ 10 mil mensais podem negociar energia diretamente no Mercado Livre com assessoria completa da 4L."
      },
      {
        question: "A 4L Energia Solar atende presencialmente em Indaiatuba?",
        answer: "Sim! Por estarmos sediados em Campinas, nossos engenheiros visitam empresas e residências em Indaiatuba com agilidade para realizar o levantamento técnico do imóvel."
      },
      {
        question: "Como receber uma proposta para meu imóvel em Indaiatuba?",
        answer: "Basta entrar em contato pelo nosso WhatsApp oficial (19) 9 8315-5772 e compartilhar sua fatura de energia. Elaboramos um estudo técnico preliminar sem nenhum custo."
      }
    ],
    whatsappMessage: "Olá! Moro ou tenho um negócio em Indaiatuba e gostaria de receber informações e um orçamento de energia solar.",
    internalLinks: [
      { label: "Mercado Livre de Energia para Indústrias", url: "/mercado-livre" },
      { label: "Energia Solar em Campinas", url: "/energia-solar-campinas" },
      { label: "Portfólio de Obras e Projetos", url: "/meus-projetos" },
      { label: "Calcular Economia Estimada", url: "/#calculadora" }
    ]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return CITIES_DATA.find((c) => c.slug === slug);
};
