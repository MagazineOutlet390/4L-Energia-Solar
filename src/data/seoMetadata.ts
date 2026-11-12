import { COMPANY } from "./company";
import { BLOG_POSTS, BlogPost } from "./blogPosts";
import { CITIES_DATA, CityData } from "./cities";
import { FAQ_ITEMS, MERCADO_LIVRE_FAQ } from "./faq";
import { PROJECTS } from "./projects";

export const SITE_URL = "https://4lenergiasolar.com.br";

// Identificadores canônicos @id para grafo semântico Schema.org
export const SCHEMA_IDS = {
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
  logo: `${SITE_URL}/#logo`,
  website: `${SITE_URL}/#website`,
  blog: `${SITE_URL}/blog#blog`,
  serviceResidential: `${SITE_URL}/#service-residencial`,
  serviceCommercial: `${SITE_URL}/#service-comercial`,
  serviceMercadoLivre: `${SITE_URL}/mercado-livre#service`
} as const;

export interface PageMetadata {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage: string;
  ogImageAlt?: string;
  twitterCard?: "summary_large_image" | "summary";
  robots?: string;
  keywords?: string[];
  changeFreq: "daily" | "weekly" | "monthly";
  priority: number;
  jsonLd?: object | object[];
}

/**
 * Nós estruturais compartilhados (Organization, LocalBusiness e WebSite)
 * com apenas informações verificadas da empresa.
 */
function getBaseGraphNodes(): object[] {
  return [
    {
      "@type": "Organization",
      "@id": SCHEMA_IDS.organization,
      "name": COMPANY.name,
      "url": `${SITE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "@id": SCHEMA_IDS.logo,
        "url": `${SITE_URL}/logo.jpeg`,
        "width": 1500,
        "height": 1000,
        "caption": "Logotipo oficial da 4L Energia Solar"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5519983155772",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": ["Portuguese"]
      }
    },
    {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": SCHEMA_IDS.localBusiness,
      "name": COMPANY.name,
      "description": COMPANY.legalNotice,
      "url": `${SITE_URL}/`,
      "image": `${SITE_URL}/assets/og/og-home.jpg`,
      "logo": { "@id": SCHEMA_IDS.logo },
      "parentOrganization": { "@id": SCHEMA_IDS.organization },
      "telephone": "+5519983155772",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Stecca Pelegrini, Jardim Santa Lúcia",
        "addressLocality": "Campinas",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "areaServed": COMPANY.regionsServed.map((city) => ({
        "@type": "City",
        "name": city
      }))
    },
    {
      "@type": "WebSite",
      "@id": SCHEMA_IDS.website,
      "url": `${SITE_URL}/`,
      "name": COMPANY.name,
      "description":
        "Portal institucional e de conteúdo técnico sobre energia solar fotovoltaica em Campinas e Circuito das Águas Paulista.",
      "inLanguage": "pt-BR",
      "publisher": { "@id": SCHEMA_IDS.organization }
    }
  ];
}

function buildWebPageNode(params: {
  canonical: string;
  title: string;
  description: string;
  ogImage: string;
  pageType?: "WebPage" | "CollectionPage" | "AboutPage";
  breadcrumbId?: string;
  mainEntity?: object;
}): object {
  const absoluteImg = params.ogImage.startsWith("http")
    ? params.ogImage
    : `${SITE_URL}${params.ogImage}`;

  return {
    "@type": params.pageType || "WebPage",
    "@id": `${params.canonical}#webpage`,
    "url": params.canonical,
    "name": params.title,
    "description": params.description,
    "inLanguage": "pt-BR",
    "isPartOf": { "@id": SCHEMA_IDS.website },
    "about": { "@id": SCHEMA_IDS.localBusiness },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": absoluteImg,
      "width": 1200,
      "height": 630
    },
    ...(params.breadcrumbId ? { "breadcrumb": { "@id": params.breadcrumbId } } : {}),
    ...(params.mainEntity ? { "mainEntity": params.mainEntity } : {})
  };
}

function buildBreadcrumbNode(
  canonical: string,
  items: Array<{ name: string; url: string }>
): object {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Registry central de metadados de SEO e grafo Schema.org para as páginas estáticas e principais da 4L Energia Solar.
 */
export const CORE_PAGES_METADATA: Record<string, PageMetadata> = {
  "/": {
    path: "/",
    title: "4L Energia Solar | Campinas e Circuito das Águas Paulista",
    description:
      "Projetos e instalação de energia solar fotovoltaica em Campinas e Circuito das Águas. Quase 10 anos de experiência e mais de 200 clientes. Simule sua economia.",
    canonical: `${SITE_URL}/`,
    ogTitle: "4L Energia Solar | Campinas e Circuito das Águas Paulista",
    ogDescription:
      "Projetos e instalação de energia solar fotovoltaica residencial e empresarial com engenharia de precisão e homologação na CPFL Paulista.",
    ogType: "website",
    ogImage: "/assets/og/og-home.jpg",
    ogImageAlt:
      "Instalação fotovoltaica residencial moderna sobre telhado cerâmico com céu ensolarado",
    twitterCard: "summary_large_image",
    keywords: [
      "energia solar campinas",
      "painéis solares circuito das águas",
      "instalação solar fotovoltaica",
      "economia na conta de luz",
      "energia solar residencial",
      "energia solar empresarial"
    ],
    changeFreq: "weekly",
    priority: 1.0,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical: `${SITE_URL}/`,
          title: "4L Energia Solar | Campinas e Circuito das Águas Paulista",
          description:
            "Projetos e instalação de energia solar fotovoltaica em Campinas e Circuito das Águas. Quase 10 anos de experiência e mais de 200 clientes. Simule sua economia.",
          ogImage: "/assets/og/og-home.jpg"
        }),
        {
          "@type": "Service",
          "@id": SCHEMA_IDS.serviceResidential,
          "name": "Energia Solar Fotovoltaica Residencial",
          "serviceType": "Projeto, instalação e homologação de sistemas fotovoltaicos residenciais",
          "description":
            "Dimensionamento personalizado, instalação de módulos e inversores e homologação junto à distribuidora para casas, condomínios e chácaras.",
          "provider": { "@id": SCHEMA_IDS.localBusiness },
          "areaServed": COMPANY.regionsServed.map((city) => ({
            "@type": "City",
            "name": city
          }))
        },
        {
          "@type": "Service",
          "@id": SCHEMA_IDS.serviceCommercial,
          "name": "Energia Solar Fotovoltaica Comercial e Empresarial",
          "serviceType": "Projeto e instalação de usinas solares comerciais e empresariais",
          "description":
            "Sistemas fotovoltaicos dimensionados para comércios, galpões, pousadas, propriedades rurais e indústrias em Campinas e Circuito das Águas.",
          "provider": { "@id": SCHEMA_IDS.localBusiness },
          "areaServed": COMPANY.regionsServed.map((city) => ({
            "@type": "City",
            "name": city
          }))
        },
        {
          "@type": "Service",
          "@id": SCHEMA_IDS.serviceMercadoLivre,
          "name": "Assessoria em Mercado Livre de Energia (ACL)",
          "serviceType": "Assessoria para migração empresarial ao Ambiente de Contratação Livre",
          "description":
            "Estudo de viabilidade técnica e acompanhamento completo para empresas do Grupo A em média e alta tensão migrarem ao Mercado Livre de Energia.",
          "url": `${SITE_URL}/mercado-livre`,
          "provider": { "@id": SCHEMA_IDS.localBusiness },
          "areaServed": COMPANY.regionsServed.map((city) => ({
            "@type": "City",
            "name": city
          }))
        },
        {
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }
      ]
    }
  },

  "/mercado-livre": {
    path: "/mercado-livre",
    title: "Mercado Livre de Energia para Empresas | 4L Energia Solar",
    description:
      "Assessoria completa para migração de empresas ao Mercado Livre de Energia (ACL). Redução de custos e previsibilidade para faturas a partir de R$ 9 mil mensais.",
    canonical: `${SITE_URL}/mercado-livre`,
    ogTitle: "Mercado Livre de Energia para Empresas | 4L Energia Solar",
    ogDescription:
      "Reduza custos de energia elétrica e tenha previsibilidade orçamentária com a assessoria técnica especializada da 4L Energia Solar no Mercado Livre (ACL).",
    ogType: "website",
    ogImage: "/assets/og/og-mercado-livre.jpg",
    ogImageAlt:
      "Complexo industrial e empresarial com usina solar na cobertura e infraestrutura de média tensão",
    twitterCard: "summary_large_image",
    keywords: [
      "mercado livre de energia",
      "migração ACL empresas",
      "energia elétrica grupo A",
      "redução de custos corporativos",
      "gestão energética B2B"
    ],
    changeFreq: "monthly",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical: `${SITE_URL}/mercado-livre`,
          title: "Mercado Livre de Energia para Empresas | 4L Energia Solar",
          description:
            "Assessoria completa para migração de empresas ao Mercado Livre de Energia (ACL). Redução de custos e previsibilidade para faturas a partir de R$ 9 mil mensais.",
          ogImage: "/assets/og/og-mercado-livre.jpg",
          breadcrumbId: `${SITE_URL}/mercado-livre#breadcrumb`,
          mainEntity: { "@id": SCHEMA_IDS.serviceMercadoLivre }
        }),
        buildBreadcrumbNode(`${SITE_URL}/mercado-livre`, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: "Mercado Livre de Energia", url: `${SITE_URL}/mercado-livre` }
        ]),
        {
          "@type": "Service",
          "@id": SCHEMA_IDS.serviceMercadoLivre,
          "name": "Assessoria em Mercado Livre de Energia (ACL)",
          "serviceType": "Estudo de viabilidade e migração para o Ambiente de Contratação Livre",
          "description":
            "Análise de faturas do Grupo A, denúncia do contrato regulado junto à distribuidora, adequação do Sistema de Medição e Faturamento (SMF) e contratação no ACL.",
          "url": `${SITE_URL}/mercado-livre`,
          "provider": { "@id": SCHEMA_IDS.localBusiness },
          "areaServed": COMPANY.regionsServed.map((city) => ({
            "@type": "City",
            "name": city
          }))
        },
        {
          "@type": "FAQPage",
          "@id": `${SITE_URL}/mercado-livre#faq`,
          "mainEntity": MERCADO_LIVRE_FAQ.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }
      ]
    }
  },

  "/meus-projetos": {
    path: "/meus-projetos",
    title: "Projetos Fotovoltaicos Realizados | 4L Energia Solar",
    description:
      "Conheça instalações reais de energia solar residencial e comercial realizadas pela 4L Energia Solar em Lindóia, Serra Negra e Monte Alegre do Sul.",
    canonical: `${SITE_URL}/meus-projetos`,
    ogTitle: "Projetos Fotovoltaicos Realizados | 4L Energia Solar",
    ogDescription:
      "Instalações fotovoltaicas residenciais e comerciais homologadas na CPFL em Lindóia, Serra Negra e Monte Alegre do Sul pela 4L Energia Solar.",
    ogType: "website",
    ogImage: "/assets/og/og-projetos.jpg",
    ogImageAlt:
      "Visão aérea de telhados residenciais modernos com sistemas fotovoltaicos instalados",
    twitterCard: "summary_large_image",
    keywords: [
      "projetos energia solar",
      "instalações fotovoltaicas entregues",
      "portfólio solar circuito das águas",
      "fotos usinas solares interior sp"
    ],
    changeFreq: "weekly",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical: `${SITE_URL}/meus-projetos`,
          title: "Projetos Fotovoltaicos Realizados | 4L Energia Solar",
          description:
            "Conheça instalações reais de energia solar residencial e comercial realizadas pela 4L Energia Solar em Lindóia, Serra Negra e Monte Alegre do Sul.",
          ogImage: "/assets/og/og-projetos.jpg",
          pageType: "CollectionPage",
          breadcrumbId: `${SITE_URL}/meus-projetos#breadcrumb`,
          mainEntity: { "@id": `${SITE_URL}/meus-projetos#portfolio-list` }
        }),
        buildBreadcrumbNode(`${SITE_URL}/meus-projetos`, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: "Projetos Realizados", url: `${SITE_URL}/meus-projetos` }
        ]),
        {
          "@type": "ItemList",
          "@id": `${SITE_URL}/meus-projetos#portfolio-list`,
          "name": "Exemplos de Projetos Fotovoltaicos Realizados pela 4L Energia Solar",
          "numberOfItems": PROJECTS.length,
          "itemListElement": PROJECTS.map((project, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "CreativeWork",
              "@id": `${SITE_URL}/meus-projetos#${project.id}`,
              "name": `${project.title} (${project.powerKwp} kWp — ${project.city}-${project.state})`,
              "description": project.description,
              "image": `${SITE_URL}${project.image}`,
              "creator": { "@id": SCHEMA_IDS.localBusiness },
              "locationCreated": {
                "@type": "Place",
                "name": `${project.neighborhood}, ${project.city} - ${project.state}`
              }
            }
          }))
        }
      ]
    }
  },

  "/sobre": {
    path: "/sobre",
    title: "Sobre a 4L Energia Solar | Experiência e Rigor Técnico",
    description:
      "Conheça a atuação técnica da 4L Energia Solar: quase 10 anos de experiência e mais de 200 clientes atendidos em Campinas e Circuito das Águas.",
    canonical: `${SITE_URL}/sobre`,
    ogTitle: "Sobre a 4L Energia Solar | Experiência e Rigor Técnico",
    ogDescription:
      "Conheça o compromisso técnico, a metodologia de engenharia e a dedicação aos clientes da 4L Energia Solar em Campinas e no Circuito das Águas.",
    ogType: "website",
    ogImage: "/assets/og/og-sobre.jpg",
    ogImageAlt:
      "Engenheiros fotovoltaicos com plantas técnicas em vistoria de usina solar",
    twitterCard: "summary_large_image",
    keywords: [
      "sobre 4L energia solar",
      "engenharia solar campinas",
      "instalador solar credenciado",
      "empresa de energia solar interior sp"
    ],
    changeFreq: "monthly",
    priority: 0.7,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical: `${SITE_URL}/sobre`,
          title: "Sobre a 4L Energia Solar | Experiência e Rigor Técnico",
          description:
            "Conheça a atuação técnica da 4L Energia Solar: quase 10 anos de experiência e mais de 200 clientes atendidos em Campinas e Circuito das Águas.",
          ogImage: "/assets/og/og-sobre.jpg",
          pageType: "AboutPage",
          breadcrumbId: `${SITE_URL}/sobre#breadcrumb`,
          mainEntity: { "@id": SCHEMA_IDS.localBusiness }
        }),
        buildBreadcrumbNode(`${SITE_URL}/sobre`, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: "Sobre a 4L Energia Solar", url: `${SITE_URL}/sobre` }
        ])
      ]
    }
  },

  "/politica-de-privacidade": {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade e LGPD | 4L Energia Solar",
    description:
      "Diretrizes de privacidade, segurança da informação e tratamento de dados pessoais da 4L Energia Solar em estrita conformidade com a LGPD (Lei nº 13.709/2018).",
    canonical: `${SITE_URL}/politica-de-privacidade`,
    ogTitle: "Política de Privacidade e Proteção de Dados | 4L Energia Solar",
    ogDescription:
      "Termos de transparência e conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) no site da 4L Energia Solar.",
    ogType: "website",
    ogImage: "/assets/og/og-politica-de-privacidade.jpg",
    ogImageAlt:
      "Diretrizes de conformidade jurídica e segurança da informação da 4L Energia Solar",
    twitterCard: "summary",
    changeFreq: "monthly",
    priority: 0.4,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical: `${SITE_URL}/politica-de-privacidade`,
          title: "Política de Privacidade e LGPD | 4L Energia Solar",
          description:
            "Diretrizes de privacidade, segurança da informação e tratamento de dados pessoais da 4L Energia Solar em estrita conformidade com a LGPD (Lei nº 13.709/2018).",
          ogImage: "/assets/og/og-politica-de-privacidade.jpg",
          breadcrumbId: `${SITE_URL}/politica-de-privacidade#breadcrumb`
        }),
        buildBreadcrumbNode(`${SITE_URL}/politica-de-privacidade`, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: "Política de Privacidade", url: `${SITE_URL}/politica-de-privacidade` }
        ])
      ]
    }
  },

  "/blog": {
    path: "/blog",
    title: "Blog de Energia Solar e Eficiência | 4L Energia Solar",
    description:
      "Artigos técnicos sobre tecnologia fotovoltaica, dimensionamento, Marco Legal da GD (Lei 14.300), tarifas de energia e Mercado Livre para empresas.",
    canonical: `${SITE_URL}/blog`,
    ogTitle: "Blog 4L Energia Solar | Portal de Conteúdo e Engenharia Solar",
    ogDescription:
      "Informação técnica confiável, análises regulatórias e guias práticos sobre energia solar fotovoltaica para consumidores e empresários.",
    ogType: "website",
    ogImage: "/assets/og/og-blog.jpg",
    ogImageAlt:
      "Mesa de trabalho de engenharia solar com diagramas elétricos e tablet com métricas de geração",
    twitterCard: "summary_large_image",
    keywords: [
      "blog energia solar",
      "artigos fotovoltaicos",
      "marco legal da geração distribuída",
      "lei 14300 energia solar",
      "como calcular economia solar"
    ],
    changeFreq: "daily",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical: `${SITE_URL}/blog`,
          title: "Blog de Energia Solar e Eficiência | 4L Energia Solar",
          description:
            "Artigos técnicos sobre tecnologia fotovoltaica, dimensionamento, Marco Legal da GD (Lei 14.300), tarifas de energia e Mercado Livre para empresas.",
          ogImage: "/assets/og/og-blog.jpg",
          pageType: "CollectionPage",
          breadcrumbId: `${SITE_URL}/blog#breadcrumb`,
          mainEntity: { "@id": SCHEMA_IDS.blog }
        }),
        buildBreadcrumbNode(`${SITE_URL}/blog`, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` }
        ]),
        {
          "@type": "Blog",
          "@id": SCHEMA_IDS.blog,
          "name": "Blog 4L Energia Solar",
          "description":
            "Portal de conteúdo especializado em energia solar fotovoltaica, eficiência energética e soluções para consumidores residenciais e empresariais.",
          "url": `${SITE_URL}/blog`,
          "inLanguage": "pt-BR",
          "publisher": { "@id": SCHEMA_IDS.organization },
          "blogPost": BLOG_POSTS.map((post) => ({
            "@id": `${SITE_URL}/blog/${post.slug}#article`
          }))
        }
      ]
    }
  }
};

/**
 * Retorna os metadados específicos e grafo Schema.org para cada página de cidade (SEO Local).
 * Nota: Cidades atendidas são declaradas estritamente em areaServed (sem criar filiais físicas).
 */
export function getCityPageMetadata(city: CityData): PageMetadata {
  const cityOgImage = `/assets/og/og-${city.slug.replace("energia-solar-", "")}.jpg`;
  const canonical = `${SITE_URL}/${city.slug}`;

  return {
    path: `/${city.slug}`,
    title: city.title,
    description: city.metaDescription,
    canonical,
    ogTitle: `${city.h1} | 4L Energia Solar`,
    ogDescription: city.metaDescription,
    ogType: "website",
    ogImage: cityOgImage,
    ogImageAlt: `Instalação de energia solar fotovoltaica em ${city.city} realizada pela 4L Energia Solar`,
    twitterCard: "summary_large_image",
    keywords: [
      `energia solar em ${city.city}`,
      `instalação de energia solar ${city.city}`,
      `painéis solares ${city.city}`,
      `empresa de energia solar ${city.city}`,
      `orçamento energia solar ${city.city}`
    ],
    changeFreq: "weekly",
    priority: 0.9,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical,
          title: city.title,
          description: city.metaDescription,
          ogImage: cityOgImage,
          breadcrumbId: `${canonical}#breadcrumb`,
          mainEntity: { "@id": `${canonical}#service` }
        }),
        buildBreadcrumbNode(canonical, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: `Energia Solar em ${city.city}`, url: canonical }
        ]),
        {
          "@type": "Service",
          "@id": `${canonical}#service`,
          "name": `Instalação de Energia Solar em ${city.city}`,
          "serviceType": `Projeto, instalação e homologação de sistemas fotovoltaicos em ${city.city}`,
          "description": city.metaDescription,
          "url": canonical,
          "provider": { "@id": SCHEMA_IDS.localBusiness },
          "areaServed": {
            "@type": "City",
            "name": city.city
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${canonical}#faq`,
          "mainEntity": city.faq.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }
      ]
    }
  };
}

/**
 * Retorna os metadados específicos e grafo Schema.org para cada artigo do Blog.
 */
export function getBlogPostMetadata(post: BlogPost): PageMetadata {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const title = post.seoTitle || `${post.title} | Blog 4L Energia Solar`;
  const description = post.seoDescription || post.description;
  const ogImage = post.ogImage || post.coverImage;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    path: `/blog/${post.slug}`,
    title,
    description,
    canonical,
    ogTitle: post.ogTitle || post.seoTitle || post.title,
    ogDescription: post.ogDescription || post.seoDescription || post.excerpt,
    ogType: "article",
    ogImage,
    ogImageAlt: post.ogImageAlt || post.coverImageAlt,
    twitterCard: "summary_large_image",
    keywords: post.tags,
    changeFreq: "weekly",
    priority: 0.8,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ...getBaseGraphNodes(),
        buildWebPageNode({
          canonical,
          title,
          description,
          ogImage,
          breadcrumbId: `${canonical}#breadcrumb`,
          mainEntity: { "@id": `${canonical}#article` }
        }),
        buildBreadcrumbNode(canonical, [
          { name: "Início", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.category, url: `${SITE_URL}/blog?categoria=${post.categorySlug}` },
          { name: post.title, url: canonical }
        ]),
        {
          "@type": "BlogPosting",
          "@id": `${canonical}#article`,
          "headline": post.title,
          "description": description,
          "image": {
            "@type": "ImageObject",
            "url": absoluteOgImage,
            "width": 1200,
            "height": 630
          },
          "datePublished": post.publishedAt,
          "dateModified": post.updatedAt,
          "inLanguage": "pt-BR",
          "articleSection": post.category,
          "keywords": post.tags.join(", "),
          "isPartOf": { "@id": SCHEMA_IDS.blog },
          "mainEntityOfPage": { "@id": `${canonical}#webpage` },
          "author": { "@id": SCHEMA_IDS.organization },
          "publisher": { "@id": SCHEMA_IDS.organization }
        }
      ]
    }
  };
}

/**
 * Retorna metadados para qualquer rota do site, buscando nas páginas principais,
 * cidades ou artigos do blog.
 */
export function getMetadataForPath(currentPath: string): PageMetadata {
  const normalizedPath = currentPath === "" ? "/" : currentPath;

  if (CORE_PAGES_METADATA[normalizedPath]) {
    return CORE_PAGES_METADATA[normalizedPath];
  }

  const cleanCitySlug = normalizedPath.replace(/^\//, "");
  const cityMatch = CITIES_DATA.find((c) => c.slug === cleanCitySlug);
  if (cityMatch) {
    return getCityPageMetadata(cityMatch);
  }

  if (normalizedPath.startsWith("/blog/")) {
    const postSlug = normalizedPath.replace("/blog/", "");
    const postMatch = BLOG_POSTS.find((p) => p.slug === postSlug);
    if (postMatch) {
      return getBlogPostMetadata(postMatch);
    }
  }

  return CORE_PAGES_METADATA["/"];
}

/**
 * Retorna o inventário completo de todas as rotas indexáveis do site com seus metadados.
 */
export function getAllRoutesMetadata(): PageMetadata[] {
  const routes: PageMetadata[] = [];

  Object.values(CORE_PAGES_METADATA).forEach((page) => routes.push(page));
  CITIES_DATA.forEach((city) => routes.push(getCityPageMetadata(city)));
  BLOG_POSTS.forEach((post) => routes.push(getBlogPostMetadata(post)));

  return routes;
}
