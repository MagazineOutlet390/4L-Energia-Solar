import { COMPANY } from "./company";
import { BLOG_POSTS, BlogPost } from "./blogPosts";
import { CITIES_DATA, CityData } from "./cities";

export const SITE_URL = "https://4lenergiasolar.com.br";

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
  keywords?: string[];
  changeFreq: "daily" | "weekly" | "monthly";
  priority: number;
  jsonLd?: object | object[];
}

/**
 * Registry central de metadados de SEO para as páginas estáticas e principais da 4L Energia Solar.
 * Qualquer alteração em SEO Title, Meta Description ou Imagem Open Graph pode ser feita diretamente aqui.
 */
export const CORE_PAGES_METADATA: Record<string, PageMetadata> = {
  "/": {
    path: "/",
    title: "4L Energia Solar | Campinas e Circuito das Águas Paulista",
    description: "Projetos e instalação de energia solar fotovoltaica em Campinas e Circuito das Águas. Quase 10 anos de experiência e mais de 200 clientes. Simule sua economia.",
    canonical: `${SITE_URL}/`,
    ogTitle: "4L Energia Solar | Campinas e Circuito das Águas Paulista",
    ogDescription: "Projetos e instalação de energia solar fotovoltaica residencial e empresarial com engenharia de precisão e homologação na CPFL Paulista.",
    ogType: "website",
    ogImage: "/assets/og/og-home.jpg",
    ogImageAlt: "Instalação fotovoltaica residencial moderna sobre telhado cerâmico com céu ensolarado",
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
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": COMPANY.name,
        "description": "Projetos e instalação de energia solar fotovoltaica residencial e comercial em Campinas e região.",
        "url": `${SITE_URL}/`,
        "telephone": "+5519983155772",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Stecca Pelegrini",
          "addressLocality": "Campinas",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "areaServed": COMPANY.regionsServed.map((city) => ({
          "@type": "City",
          "name": city
        }))
      }
    ]
  },

  "/mercado-livre": {
    path: "/mercado-livre",
    title: "Mercado Livre de Energia para Empresas | 4L Energia Solar",
    description: "Assessoria completa para migração de empresas ao Mercado Livre de Energia (ACL). Redução de custos e previsibilidade para faturas a partir de R$ 9 mil mensais.",
    canonical: `${SITE_URL}/mercado-livre`,
    ogTitle: "Mercado Livre de Energia para Empresas | 4L Energia Solar",
    ogDescription: "Reduza custos de energia elétrica e tenha previsibilidade orçamentária com a assessoria técnica especializada da 4L Energia Solar no Mercado Livre (ACL).",
    ogType: "website",
    ogImage: "/assets/og/og-mercado-livre.jpg",
    ogImageAlt: "Complexo industrial e empresarial com usina solar na cobertura e infraestrutura de média tensão",
    twitterCard: "summary_large_image",
    keywords: [
      "mercado livre de energia",
      "migração ACL empresas",
      "energia elétrica grupo A",
      "redução de custos corporativos",
      "gestão energética B2B"
    ],
    changeFreq: "monthly",
    priority: 0.9
  },

  "/meus-projetos": {
    path: "/meus-projetos",
    title: "Projetos Fotovoltaicos Entregues | 4L Energia Solar",
    description: "Conheça instalações reais de energia solar residencial e comercial realizadas pela 4L Energia Solar em Campinas, Lindóia, Serra Negra e Monte Alegre do Sul.",
    canonical: `${SITE_URL}/meus-projetos`,
    ogTitle: "Portfólio de Projetos Solares Entregues | 4L Energia Solar",
    ogDescription: "Instalações fotovoltaicas residenciais e comerciais operando com homologação CPFL e gerando economia real comprovada no interior paulista.",
    ogType: "website",
    ogImage: "/assets/og/og-projetos.jpg",
    ogImageAlt: "Visão aérea de telhados residenciais modernos com sistemas fotovoltaicos instalados",
    twitterCard: "summary_large_image",
    keywords: [
      "projetos energia solar",
      "instalações fotovoltaicas entregues",
      "portfólio solar campinas",
      "fotos usinas solares interior sp"
    ],
    changeFreq: "weekly",
    priority: 0.9
  },

  "/sobre": {
    path: "/sobre",
    title: "Sobre a 4L Energia Solar | Experiência e Rigor Técnico",
    description: "História e atuação técnica da 4L Energia Solar: quase 10 anos de experiência, homologação CPFL e mais de 200 clientes atendidos em Campinas e Circuito das Águas.",
    canonical: `${SITE_URL}/sobre`,
    ogTitle: "Sobre a 4L Energia Solar | Experiência e Rigor Técnico",
    ogDescription: "Conheça o compromisso técnico, a metodologia de engenharia e a dedicação aos clientes da 4L Energia Solar em Campinas e no Circuito das Águas.",
    ogType: "website",
    ogImage: "/assets/og/og-sobre.jpg",
    ogImageAlt: "Engenheiros fotovoltaicos com plantas técnicas em vistoria de usina solar",
    twitterCard: "summary_large_image",
    keywords: [
      "sobre 4L energia solar",
      "engenharia solar campinas",
      "instalador solar credenciado",
      "empresa de energia solar interior sp"
    ],
    changeFreq: "monthly",
    priority: 0.7
  },

  "/politica-de-privacidade": {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade e LGPD | 4L Energia Solar",
    description: "Diretrizes de privacidade, segurança da informação e tratamento de dados pessoais da 4L Energia Solar em estrita conformidade com a LGPD (Lei nº 13.709/2018).",
    canonical: `${SITE_URL}/politica-de-privacidade`,
    ogTitle: "Política de Privacidade e Proteção de Dados | 4L Energia Solar",
    ogDescription: "Termos de transparência e conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) no site da 4L Energia Solar.",
    ogType: "website",
    ogImage: "/assets/og/og-politica-de-privacidade.jpg",
    ogImageAlt: "Diretrizes de conformidade jurídica e segurança da informação da 4L Energia Solar",
    twitterCard: "summary",
    changeFreq: "monthly",
    priority: 0.4
  },

  "/blog": {
    path: "/blog",
    title: "Blog de Energia Solar e Eficiência | 4L Energia Solar",
    description: "Artigos técnicos sobre tecnologia fotovoltaica, dimensionamento, Marco Legal da GD (Lei 14.300), tarifas de energia e Mercado Livre para empresas.",
    canonical: `${SITE_URL}/blog`,
    ogTitle: "Blog 4L Energia Solar | Portal de Conteúdo e Engenharia Solar",
    ogDescription: "Informação técnica confiável, análises regulatórias e guias práticos sobre energia solar fotovoltaica para consumidores e empresários.",
    ogType: "website",
    ogImage: "/assets/og/og-blog.jpg",
    ogImageAlt: "Mesa de trabalho de engenharia solar com diagramas elétricos e tablet com métricas de geração",
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
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog 4L Energia Solar",
        "description": "Portal de conteúdo especializado em energia solar fotovoltaica e eficiência energética.",
        "url": `${SITE_URL}/blog`
      }
    ]
  }
};

/**
 * Retorna os metadados específicos para cada página de cidade (SEO Local).
 */
export function getCityPageMetadata(city: CityData): PageMetadata {
  const cityOgImage = `/assets/og/og-${city.slug.replace("energia-solar-", "")}.jpg`;

  return {
    path: `/${city.slug}`,
    title: city.title,
    description: city.metaDescription,
    canonical: `${SITE_URL}/${city.slug}`,
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
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Instalação de Energia Solar em ${city.city}`,
        "description": city.metaDescription,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": COMPANY.name,
          "telephone": "+5519983155772",
          "url": `${SITE_URL}/`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Stecca Pelegrini",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": city.city
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `Energia Solar em ${city.city}`,
            "item": `${SITE_URL}/${city.slug}`
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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
  };
}

/**
 * Retorna os metadados específicos para cada artigo do Blog.
 */
export function getBlogPostMetadata(post: BlogPost): PageMetadata {
  return {
    path: `/blog/${post.slug}`,
    title: `${post.title} | Blog 4L Energia Solar`,
    description: post.description,
    canonical: `${SITE_URL}/blog/${post.slug}`,
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogType: "article",
    ogImage: post.coverImage,
    ogImageAlt: post.coverImageAlt,
    twitterCard: "summary_large_image",
    keywords: post.tags,
    changeFreq: "weekly",
    priority: 0.8,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": `${SITE_URL}${post.coverImage}`,
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt,
        "author": {
          "@type": "Organization",
          "name": post.author,
          "url": `${SITE_URL}/`
        },
        "publisher": {
          "@type": "Organization",
          "name": COMPANY.name,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo.jpeg`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${SITE_URL}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${SITE_URL}/blog/${post.slug}`
          }
        ]
      }
    ]
  };
}

/**
 * Retorna metadados para qualquer rota do site, buscando nas páginas principais,
 * cidades ou artigos do blog.
 */
export function getMetadataForPath(currentPath: string): PageMetadata {
  const normalizedPath = currentPath === "" ? "/" : currentPath;

  // 1. Checa páginas principais
  if (CORE_PAGES_METADATA[normalizedPath]) {
    return CORE_PAGES_METADATA[normalizedPath];
  }

  // 2. Checa páginas de cidades
  const cleanCitySlug = normalizedPath.replace(/^\//, "");
  const cityMatch = CITIES_DATA.find((c) => c.slug === cleanCitySlug);
  if (cityMatch) {
    return getCityPageMetadata(cityMatch);
  }

  // 3. Checa artigos do blog
  if (normalizedPath.startsWith("/blog/")) {
    const postSlug = normalizedPath.replace("/blog/", "");
    const postMatch = BLOG_POSTS.find((p) => p.slug === postSlug);
    if (postMatch) {
      return getBlogPostMetadata(postMatch);
    }
  }

  // Fallback padrão seguro
  return CORE_PAGES_METADATA["/"];
}

/**
 * Retorna o inventário completo de todas as rotas indexáveis do site com seus metadados.
 */
export function getAllRoutesMetadata(): PageMetadata[] {
  const routes: PageMetadata[] = [];

  // Core pages
  Object.values(CORE_PAGES_METADATA).forEach((page) => routes.push(page));

  // City pages
  CITIES_DATA.forEach((city) => routes.push(getCityPageMetadata(city)));

  // Blog posts
  BLOG_POSTS.forEach((post) => routes.push(getBlogPostMetadata(post)));

  return routes;
}
