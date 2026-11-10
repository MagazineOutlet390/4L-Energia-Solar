export interface Review {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  timeAgo: string;
  content: string;
  businessReply?: string;
  photoUrl?: string;
  hasPhoto?: boolean;
}

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Wesley Vieira",
    badge: "3 avaliações · 2 fotos",
    rating: 5,
    timeAgo: "7 meses atrás",
    content: "A entrega foi rápida e o profissional bem prestativo Eu gastava em torno de 280,00 na chácara e hoje só pago o mínimo, se não me engano chegou as placas em menos de 15 dias e em 1 mês já estava instalado."
  },
  {
    id: "review-2",
    author: "LOREN EXPLORADORA DRK LAVINIA",
    badge: "Local Guide · 7 avaliações · 11 fotos",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Equipe super profissional e rápido para fazer serviço recomendo top demais",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-3",
    author: "Elita Maria Teodoro",
    badge: "Local Guide · 15 avaliações",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Excelente atendimento, rapidez e super em conta os valores. Profissionais atenciosos e super dedicados. Muito satisfeita com a empresa e o resultado obtido."
  },
  {
    id: "review-4",
    author: "Mauro Malvezzi junior",
    badge: "2 avaliações · 1 foto",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Acertei em escolher esta empresa, pois desde o primeiro contato eles foram eficientes em todos os aspectos, esclarecem as dúvidas na contratação, instalação rápida e de excelente qualidade, analisam o melhor local para a instalação dos painéis e prestam suporte contínuo.",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-5",
    author: "Jaqueline Anderson",
    badge: "2 avaliações",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Serviço excelente... Equipe top... Entram fazem o serviço e fica tudo limpinho... O Sr . Lauro mtoooo atencioso , antes , durante e após o serviço concluído. Parabéns a toda equipe envolvida!",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-6",
    author: "Andre d varelli",
    badge: "2 avaliações · 7 fotos",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Parabéns a equipe Compriu que me prometeram Instalação rápida e serviço com qualidade. Recomendo!",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-7",
    author: "Giuseppe Fernando",
    badge: "1 avaliação",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Serviço e assistência muito boa e atenção excelente recomendo o serviços deles e o pós venda muito atencioso quando solicitado",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-8",
    author: "Rosaria Milani",
    badge: "2 avaliações",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Ótimo custo benefício assistência excelente pessoal muito prestativo super recomendo",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-9",
    author: "Gedeao Naide",
    badge: "Local Guide · 91 avaliações · 44 fotos",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Uma empresa de família profissionais de total confiança ! Organizados muito detalhistas com a posição das placas procurando sempre a melhor captação de energia ! Foi melhor investimento que e minha família fez e com um time ótimo de profissional ! Parabéns Lauro e sua equipe !!",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-10",
    author: "Sidney Santos",
    badge: "7 avaliações",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Estão de parabéns ! Foi muito rápido minha instalação o vendedor conhece do assunto me explicou perfeitamente e tirou todas minha dúvida Fez todo processo pela parte da CPFL Pessoal da instalação muito cuidadoso com a instalação no telhado deixou tudo em ordem sem quebrar telhas são bem atenciosos e educado pode fechar negócio pontualidade e forte da empresa",
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  },
  {
    id: "review-11",
    author: "Andre Pereira",
    badge: "Local Guide · 17 avaliações · 4 fotos",
    rating: 5,
    timeAgo: "5 meses atrás",
    content: "Produto de boa qualidade, entrega o que promete e tem um ótimo custo benefício. Empresa seria e oferece um atendimento exemplar, tratando desde o início do projeto com muita empatia e conhecimento.",
    photoUrl: "/assets/projects/andre-pereira-campinas.jpeg",
    hasPhoto: true,
    businessReply: "Agradecemos a confiança e estaremos a disposição quando tiver indicação. #EnergiaSolar"
  }
];
