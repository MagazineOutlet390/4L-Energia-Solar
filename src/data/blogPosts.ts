export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  categorySlug: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  readingTime: string;
  featured: boolean;
  content: string;
  ctaText?: string;
  ctaTarget?: "whatsapp" | "calculator" | "mercado-livre";
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Como Funciona a Energia Solar: Guia Completo do Efeito Fotovoltaico à Rede Elétrica",
    slug: "como-funciona-a-energia-solar",
    seoTitle: "Como Funciona a Energia Solar Fotovoltaica | 4L Blog",
    seoDescription: "Entenda o funcionamento de um sistema solar on-grid: do efeito fotovoltaico nos módulos e papel do inversor à compensação de créditos na CPFL.",
    description: "Entenda o funcionamento técnico de um sistema fotovoltaico conectado à rede, desde a conversão de fótons em corrente elétrica até a compensação de créditos na CPFL.",
    excerpt: "Descubra como os fótons solares são convertidos em eletricidade limpa nos módulos de silício, transformados pelo inversor e injetados na rede da concessionária.",
    publishedAt: "2026-10-15",
    updatedAt: "2026-11-02",
    author: "4L Energia Solar",
    category: "Equipamentos e Tecnologia Fotovoltaica",
    categorySlug: "equipamentos-e-tecnologia-fotovoltaica",
    tags: ["Efeito Fotovoltaico", "Inversores", "Geração Distribuída", "Tecnologia Solar"],
    coverImage: "/assets/blog/como-funciona-solar.jpg",
    coverImageAlt: "Close-up detalhado de módulos fotovoltaicos de silício monocristalino sob luz solar",
    readingTime: "6 min de leitura",
    featured: true,
    ctaText: "Quer descobrir quanto pode economizar com energia solar? Solicite uma avaliação gratuita da sua conta de luz.",
    ctaTarget: "calculator",
    content: `
## O Que É e Como Ocorre o Efeito Fotovoltaico

A geração solar fotovoltaica baseia-se em um fenômeno físico descoberto em 1839 por Alexandre Edmond Becquerel e posteriormente explicado por Albert Einstein em 1905: o **efeito fotovoltaico**.

Quando a luz do sol atinge as células fotovoltaicas — geralmente fabricadas com lâminas purificadas de silício dopadas com fósforo e boro —, os fótons (partículas de luz) colidem com os elétrons do material semicondutor. Essa colisão transfere energia aos elétrons, liberando-os para se movimentarem através de um campo elétrico interno, criando um fluxo contínuo de **corrente contínua (CC)**.

## Os Componentes Centrais de um Sistema Solar Fotovoltaico Conectado à Rede (On-Grid)

Um sistema solar residencial ou empresarial moderno é composto por quatro elementos de engenharia principais:

### 1. Módulos Fotovoltaicos (Painéis Solares)
Responsáveis pela captação da radiação solar e conversão direta em corrente contínua. Os painéis atuais utilizam tecnologias como silício monocristalino com células tipo PERC ou TOPCon, oferecendo eficiências superiores a 21% e excelente desempenho mesmo sob radiação difusa.

### 2. Inversor Solar (ou Microinversores)
O inversor é o cérebro eletrônico do sistema. Sua função primária é converter a corrente contínua (CC) gerada pelas placas em **corrente alternada (CA)** a 127V ou 220V, em perfeita sincronia com a frequência de 60 Hz da rede elétrica da distribuidora (como a CPFL Paulista). Além disso, os inversores realizam o monitoramento em tempo real da produção.

### 3. Estruturas de Fixação e Cabeamento Solar
Trilhos de alumínio anodizado e fixadores em aço inoxidável projetados para resistir a rajadas de vento severas, garantindo que a fixação no telhado preserve a integridade das telhas sem riscos de infiltração ou danos estruturais.

### 4. Medidor Bidirecional Homologado
Substitui o relógio convencional após a vistoria técnica da concessionária. Ele mede tanto a eletricidade que a residência consome da rede pública nos momentos sem sol quanto a energia excedente que os painéis injetam na rede durante o dia.

## O Ciclo da Energia: Do Telhado à Conta de Luz

1. **Geração durante o dia**: Os módulos geram energia limpa enquanto houver luz solar. Essa energia alimenta instantaneamente os aparelhos elétricos ligados na casa ou na empresa (geladeiras, ar-condicionado, computadores, maquinários).
2. **Injeção do excedente na rede**: Quando a produção do sistema supera o consumo do imóvel no momento, o excedente é exportado para a rede elétrica pública através do medidor bidirecional.
3. **Créditos de energia (SCEE)**: A energia injetada é contabilizada pela concessionária e convertida em créditos de energia (kWh). Esses créditos têm validade regulatória de até 60 meses e abatem o consumo noturno ou em dias de baixa radiação.
4. **Abatimento na fatura mensal**: No fechamento da conta, a distribuidora compensa os kWh consumidos com os créditos acumulados, restando ao consumidor arcar somente com a taxa mínima de disponibilidade e a taxa de iluminação pública.

Para entender em detalhes como esses créditos e a Lei 14.300 afetam o valor da fatura, leia nosso guia sobre [como calcular a economia com painéis solares](/blog/como-calcular-a-economia-com-paineis-solares) ou utilize o [simulador fotovoltaico da 4L Energia Solar](/#calculadora) e conheça [projetos reais já em operação](/meus-projetos).

## Fontes Técnicas e Regulatórias
- **ANEEL (Agência Nacional de Energia Elétrica)**: Resolução Normativa nº 1.000/2021 e Lei Federal nº 14.300/2022 (Marco Legal da GD).
- **ABSOLAR (Associação Brasileira de Energia Solar Fotovoltaica)**: Relatórios anuais de geração distribuída no Brasil.
    `
  },
  {
    title: "Energia Solar para Empresas: Redução de Custos Fixos, Payback e Competitividade",
    slug: "energia-solar-para-empresas",
    seoTitle: "Energia Solar para Empresas: Payback e Custos | 4L Blog",
    seoDescription: "Análise de energia solar para empresas em Campinas e região: redução de despesas operacionais, payback estimado e previsibilidade na conta de luz.",
    description: "Análise técnica e financeira de sistemas fotovoltaicos para comércios, galpões e indústrias em Campinas e Circuito das Águas. Como reduzir despesas operacionais e blindar o caixa contra reajustes tarifários.",
    excerpt: "Entenda por que a energia solar se tornou um investimento financeiro de alto retorno para empresas, reduzindo despesas operacionais e oferecendo previsibilidade de longo prazo.",
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-05",
    author: "4L Energia Solar",
    category: "Energia Solar Comercial e Industrial",
    categorySlug: "energia-solar-comercial-e-industrial",
    tags: ["Energia Solar B2B", "Redução de Custos", "Payback Comercial", "Eficiência Energética"],
    coverImage: "/assets/blog/solar-empresas.jpg",
    coverImageAlt: "Vista aérea de usina solar sobre telhado de grande centro logístico e empresarial",
    readingTime: "7 min de leitura",
    featured: true,
    ctaText: "Converse com a 4L Energia Solar e avalie as possibilidades de redução de custos para sua empresa.",
    ctaTarget: "whatsapp",
    content: `
## O Impacto da Eletricidade nas Despesas Operacionais das Empresas

No setor empresarial — incluindo supermercados, padarias, pousadas, galpões logísticos, oficinas e pequenas indústrias —, a fatura de eletricidade frequentemente figura entre as três maiores despesas fixas operacionais.

Com os sucessivos aumentos tarifários das distribuidoras e a incidência de bandeiras tarifárias em períodos de escassez hídrica, empresas que dependem exclusivamente da rede convencional sofrem com volatilidade nos custos de produção e prestação de serviços.

## Principais Benefícios da Instalação Fotovoltaica Empresarial

### 1. Redução Imediata de Custos Operacionais (OPEX)
Ao produzir a própria energia no local de consumo, a empresa reduz substancialmente o montante faturado pela concessionária, liberando fluxo de caixa para expansão, contratações e reinvestimento no negócio.

### 2. Payback Acelerado e Alta Taxa Interna de Retorno (TIR)
Projetos comerciais costumam apresentar payback entre 3 a 5 anos, devido ao fato de o horário de maior atividade comercial coincidir precisamente com a curva máxima de irradiação solar (entre 10h e 16h), maximizando o autoconsumo instantâneo sem perdas de transmissão.

### 3. Blindagem Contra Reajustes Tarifários e Inflação Energética
O custo do kWh gerado pelo sistema instalado fica praticamente fixo ao longo dos 25 anos de vida útil projetada dos módulos, eliminando a vulnerabilidade a novos aumentos das tarifas públicas.

### 4. Sustentabilidade Real e Valorização da Marca (ESG)
Clientes e parceiros corporativos valorizam organizações que adotam práticas concretas de descarbonização e consumo sustentável.

## Casos Práticos de Aplicação na Região

- **Pousadas e Hotéis no Circuito das Águas**: Alto consumo com aquecimento de água, ar-condicionado e lavanderia em cidades como [Águas de Lindóia](/energia-solar-aguas-de-lindoia) e Serra Negra.
- **Quitandas, Mercados e Refrigeração**: Como documentado no caso da *Quitanda do Claudinho* em Monte Alegre do Sul (10 kWp, economia informada de R$ 950/mês) e do *José Cardoso Bar e Mercearia* em Serra Negra (15 kWp, economia informada de R$ 1.800/mês), presentes em nosso [portfólio de projetos realizados](/meus-projetos), a refrigeração constante torna a energia solar ideal para compensar a carga permanente.
- **Empresas e Oficinas em Lindóia e Campinas**: Instalações como o *Projeto Empresarial Lindóia* (25 kWp, com economia informada de R$ 2.800/mês), atendidas por nossa engenharia de [energia solar em Lindóia](/energia-solar-lindoia) e [Campinas](/energia-solar-campinas), demonstram estabilidade operacional comprovada.

## Ressalvas Técnicas de Engenharia
O dimensionamento corporativo exige análise prévia detalhada da demanda contratada (para unidades do Grupo A), capacidade portante do telhado estrutural, subestação e padrões de entrada da concessionária. Para empresas com faturas mensais a partir de R$ 9 mil em média ou alta tensão, também vale avaliar o serviço de [assessoria em Mercado Livre de Energia](/mercado-livre) ou ler nossa análise sobre [quando o Mercado Livre de Energia vale a pena](/blog/mercado-livre-de-energia-vale-a-pena).
    `
  },
  {
    title: "Como Calcular a Economia com Painéis Solares: Tarifa, Fio B e Regras da Lei 14.300",
    slug: "como-calcular-a-economia-com-paineis-solares",
    seoTitle: "Como Calcular a Economia com Energia Solar | 4L Blog",
    seoDescription: "Aprenda a calcular a economia com painéis solares considerando tarifa, custo de disponibilidade, Fio B da Lei 14.300 e irradiação solar regional.",
    description: "Metodologia transparente para simular sua economia real na conta de energia. Entenda o custo de disponibilidade, tarifa de energia e a transição do Marco Legal da GD.",
    excerpt: "Aprenda o passo a passo para calcular a economia real do seu sistema fotovoltaico sem fórmulas mágicas e entendendo cada componente da fatura da concessionária.",
    publishedAt: "2026-10-28",
    updatedAt: "2026-11-08",
    author: "4L Energia Solar",
    category: "Economia e Eficiência Energética",
    categorySlug: "economia-e-eficiencia-energetica",
    tags: ["Cálculo Solar", "Lei 14.300", "Tarifa de Energia", "Economia na Conta"],
    coverImage: "/assets/blog/calcular-economia-solar.jpg",
    coverImageAlt: "Inversor solar fotovoltaico moderno e medidor bidirecional digital em parede técnica",
    readingTime: "5 min de leitura",
    featured: false,
    ctaText: "Faça uma simulação instantânea dos parâmetros da sua conta de energia na nossa calculadora.",
    ctaTarget: "calculator",
    content: `
## Por Que a Conta de Luz Não Fica em R$ 0,00?

Uma das dúvidas mais comuns de quem pesquisa sobre energia solar é: *"Se eu produzir toda a minha energia, minha conta virá zerada?"*

A resposta técnica e honesta é **não**. Existem componentes tarifários obrigatórios estabelecidos pela legislação que permanecem em qualquer imóvel conectado à rede de distribuição:

1. **Custo de Disponibilidade (Taxa Mínima)**:
   - Padrão Monofásico: 30 kWh
   - Padrão Bifásico: 50 kWh
   - Padrão Trifásico: 100 kWh
2. **Contribuição de Iluminação Pública (CIP / COSIP)**: Cobrada pelos municípios diretamente na fatura de energia.
3. **Tarifa de Uso do Sistema de Distribuição (Fio B)**: Regulamentada pela Lei nº 14.300/2022, incide progressivamente sobre a parcela de energia injetada na rede e posteriormente compensada.

## Fórmula Básica de Dimensionamento

Para estimar a capacidade necessária do sistema fotovoltaico em quilowatt-pico (kWp):

$$\\text{Potência Necessária (kWp)} = \\frac{\\text{Consumo Médio Mensal (kWh)}}{30 \\times \\text{HSP} \\times \\text{PR}}$$

Onde:
- **Consumo Médio Mensal (kWh)**: Média do consumo faturado nos últimos 12 meses.
- **HSP (Horas de Sol Pleno)**: Índice de irradiação solar da região (em Campinas e Circuito das Águas, a média anual varia em torno de 4,6 a 4,9 kWh/m²/dia).
- **PR (Performance Ratio)**: Taxa de desempenho global do sistema, que considera perdas térmicas nos módulos, cabeamento, poeira e eficiência do inversor (normalmente entre 0,78 e 0,82).

## Exemplo Real Simplificado

Considerando um consumo residencial médio de **500 kWh/mês** com padrão bifásico na área atendida por nosso serviço de [energia solar em Campinas](/energia-solar-campinas):
- Descontando o custo mínimo de disponibilidade (50 kWh), a meta de geração líquida é de aproximadamente 450 kWh/mês.
- Com irradiação média de 4,7 HSP e PR de 0,80, a potência estimada do gerador é de aproximadamente **4,0 kWp**.
- Esse sistema é composto tipicamente por 7 a 8 módulos fotovoltaicos de alta eficiência (550W a 600W cada).

## A Importância do Estudo Técnico Personalizado
Cada imóvel possui particularidades: orientação do telhado (preferencialmente Norte, ou Leste/Oeste com pequenos ajustes de inclinação), inclinação das águas, tipo de telha e sombreamento causado por árvores ou construções vizinhas. Por essa razão, a [simulação na calculadora solar](/#calculadora) serve como balizador preliminar, complementando a explicação técnica sobre [como funciona a energia solar fotovoltaica](/blog/como-funciona-a-energia-solar) antes da vistoria técnica presencial em Campinas e no [Circuito das Águas Paulista](/blog/energia-solar-no-circuito-das-aguas-guia-regional).
    `
  },
  {
    title: "Mercado Livre de Energia: Como Funciona e Por Que Empresas Acima de R$ 9 Mil Devem Avaliar",
    slug: "mercado-livre-de-energia-vale-a-pena",
    seoTitle: "Mercado Livre de Energia: Vale a Pena? | 4L Blog",
    seoDescription: "Guia prático para empresas do Grupo A sobre a migração ao Mercado Livre de Energia (ACL). Regras, segurança jurídica e contas acima de R$ 9 mil.",
    description: "O guia prático para empresas do Grupo A compreenderem a migração para o Ambiente de Contratação Livre (ACL). Diferenças contratuais, segurança jurídica e economia.",
    excerpt: "Descubra como empresas com faturas a partir de R$ 9 mil mensais podem negociar fornecimento diretamente com comercializadoras e obter previsibilidade de custos.",
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-09",
    author: "4L Energia Solar",
    category: "Mercado Livre de Energia",
    categorySlug: "mercado-livre-de-energia",
    tags: ["Mercado Livre", "Grupo A", "ACL", "Gestão Energética B2B"],
    coverImage: "/assets/blog/mercado-livre-solar.jpg",
    coverImageAlt: "Subestação de transmissão e parque de energia solar em área aberta",
    readingTime: "8 min de leitura",
    featured: false,
    ctaText: "Descubra se sua empresa pode se beneficiar da migração para o Mercado Livre de Energia.",
    ctaTarget: "mercado-livre",
    content: `
## O Que É o Mercado Livre de Energia (ACL)?

No Brasil, existem dois ambientes de contratação de energia elétrica:

1. **Ambiente de Contratação Regulada (ACR - Mercado Cativo)**: Modelo tradicional onde residências e pequenos comércios compram energia compulsoriamente da distribuidora local (como a CPFL Paulista), sem liberdade para escolher o fornecedor, o preço ou a fonte energética, ficando sujeitos a bandeiras tarifárias e reajustes regulatórios anuais.
2. **Ambiente de Contratação Livre (ACL - Mercado Livre)**: Modelo onde consumidores compram energia elétrica diretamente de geradores ou comercializadoras autorizadas pela CCEE (Câmara de Comercialização de Energia Elétrica), negociando preço por MWh, prazo contratual, volume e fonte geradora (100% renovável).

## Abertura do Mercado: Quem Pode Migrar?

Historicamente, o Mercado Livre de Energia era restrito a grandes indústrias e consumidores eletrointensivos. No entanto, desde 1º de janeiro de 2024, **todos os consumidores atendidos em média e alta tensão (Grupo A)** passaram a ter o direito legal de migrar para o mercado livre, independentemente do volume de demanda contratada.

Na prática comercial, empresas com gastos a partir de **R$ 9 mil a R$ 10 mil mensais** já encontram viabilidade econômica atrativa para realizar a migração através de comercializadoras varejistas.

## Vantagens Concretas para a Sua Empresa

- **Previsibilidade Orçamentária**: O custo da energia é pactuado em contrato de médio/longo prazo, eliminando surpresas com bandeiras tarifárias amarela ou vermelha.
- **Possibilidade de Economia Expressiva**: Redução potencial no custo da energia consumida em relação à tarifa do mercado regulado.
- **Energia Limpa Certificada (I-REC)**: Possibilidade de aquisição comprovada de energia de fontes solares, eólicas ou biomassa.
- **Sem Obras Estruturais no Prédio**: A energia continua chegando pela mesma rede de distribuição física da concessionária; a mudança é exclusivamente comercial e contratual.

## O Que É Necessário para Migrar?
1. Estudo de viabilidade técnica e financeira da fatura de energia, disponível diretamente em nossa página de [Mercado Livre de Energia para empresas](/mercado-livre).
2. Denúncia do contrato de fornecimento regulado junto à concessionária (respeitando o prazo regulatório de aviso prévio).
3. Adequação do sistema de medição e faturamento (SMF) conforme as normas da distribuidora e da CCEE.
4. Adesão a uma comercializadora varejista qualificada.

Empresas instaladas em polos industriais como [Indaiatuba](/energia-solar-indaiatuba) e [Campinas](/energia-solar-campinas) frequentemente combinam a migração ao ACL com usinas próprias em telhados comerciais — tema que detalhamos também no artigo sobre [energia solar para empresas](/blog/energia-solar-para-empresas).
    `
  },
  {
    title: "Energia Solar no Circuito das Águas e Região: Potencial de Geração e Cuidados Específicos",
    slug: "energia-solar-no-circuito-das-aguas-guia-regional",
    seoTitle: "Energia Solar no Circuito das Águas Paulista | 4L Blog",
    seoDescription: "Panorama de irradiação solar, relevo serrano e cuidados técnicos em projetos fotovoltaicos para Socorro, Águas de Lindóia, Serra Negra e Campinas.",
    description: "Particularidades de irradiação, relevo e clima em Campinas, Socorro, Águas de Lindóia, Lindóia, Amparo, Serra Negra e Monte Alegre do Sul.",
    excerpt: "Conheça o panorama da irradiação solar na região do Circuito das Águas Paulista e como as características topográficas influenciam o projeto fotovoltaico.",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-09",
    author: "4L Energia Solar",
    category: "Energia Solar no Circuito das Águas e Região",
    categorySlug: "energia-solar-no-circuito-das-aguas-e-regiao",
    tags: ["Circuito das Águas", "Campinas", "Socorro", "Serra Negra", "Irradiação Regional"],
    coverImage: "/assets/blog/circuito-aguas-solar.jpg",
    coverImageAlt: "Propriedade rural com telhado solar em colinas verdes no Circuito das Águas Paulista",
    readingTime: "5 min de leitura",
    featured: false,
    ctaText: "Mora em Campinas ou no Circuito das Águas? Solicite uma visita técnica da nossa equipe regional.",
    ctaTarget: "whatsapp",
    content: `
## O Cenário Solar do Circuito das Águas Paulista

O Circuito das Águas Paulista — que reúne municípios como [Socorro](/energia-solar-socorro), [Águas de Lindóia](/energia-solar-aguas-de-lindoia), [Lindóia](/energia-solar-lindoia), [Amparo](/energia-solar-amparo), Serra Negra e Monte Alegre do Sul, além de [Campinas](/energia-solar-campinas) e [Indaiatuba](/energia-solar-indaiatuba) — apresenta excelentes índices de irradiação solar global horizontal, com médias que oscilam entre 4,6 e 4,9 kWh/m²/dia.

Essa taxa de radiação supera expressivamente os índices de países líderes europeus na transição energética (como Alemanha e Reino Unido), tornando a energia solar um dos investimentos de maior rentabilidade e segurança para moradores e empresários locais.

## Particularidades Técnicas Regionais

### 1. Topografia e Relevo Montanhoso
Cidades serranas como Serra Negra e Monte Alegre do Sul possuem relevo acidentado e vales. No dimensionamento fotovoltaico, nossos engenheiros avaliam cuidadosamente o horizonte solar e potenciais sombreamentos nas primeiras horas da manhã e finais da tarde, ajustando a inclinação e a disposição das *strings* ou utilizando microinversores para garantir produtividade máxima.

### 2. Setor Hoteleiro, Gastronômico e Turismo Rural
A vocação turística de Águas de Lindóia, Lindóia e Socorro concentra consumos elevados com ar-condicionado em chalés, piscinas aquecidas, saunas e cozinhas profissionais. A implantação de sistemas solares reduz diretamente o custo operacional das hospedagens, mantendo a competitividade das tarifas aos turistas — como ocorre nos [projetos comerciais e residenciais entregues na região](/meus-projetos), a exemplo do *Projeto Empresarial Lindóia* (25 kWp).

### 3. Propriedades Rurais e Chácaras de Recreio
Conforme relatado na avaliação real do cliente Wesley Vieira, que possuía uma chácara com despesas de aproximadamente R$ 280,00 e hoje paga apenas a taxa mínima, e na instalação da *Residência Lidiane* em Monte Alegre do Sul (6 kWp, economia informada de R$ 280/mês), a energia solar atende com perfeição propriedades de veraneio e chácaras com poços artesianos, bombas d'água e iluminação externa contínua.

## Atendimento Local pela 4L Energia Solar
Com sede operacional estabelecida em Campinas-SP, conforme detalhado na página [Sobre a 4L Energia Solar](/sobre), nossa equipe atende pessoalmente todas as cidades do Circuito das Águas, oferecendo suporte presencial rápido, vistorias no local e acompanhamento contínuo da geração.
    `
  }
];
