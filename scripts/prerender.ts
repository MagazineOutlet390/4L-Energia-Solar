import fs from "fs";
import path from "path";
import { getAllRoutesMetadata, SITE_URL } from "../src/data/seoMetadata";
import { BLOG_POSTS } from "../src/data/blogPosts";
import { CITIES_DATA } from "../src/data/cities";

const DIST_DIR = path.resolve(process.cwd(), "dist");
const BASE_URL = SITE_URL;

async function runPrerender() {
  console.log("🚀 Iniciando pré-renderização estática de SEO e geração de sitemap...");

  if (!fs.existsSync(DIST_DIR)) {
    console.error("❌ O diretório dist não existe. Execute o build do Vite primeiro!");
    process.exit(1);
  }

  const templatePath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html não encontrado!");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");
  const allRoutes = getAllRoutesMetadata();

  console.log(`📋 Total de rotas indexáveis a processar: ${allRoutes.length}`);

  // Dicionário de HTML semântico pré-renderizado para o corpo de cada página
  const getSemanticBodyHtml = (routePath: string): string => {
    if (routePath === "/") {
      return `
        <header class="bg-slate-950 text-white p-4">
          <nav><a href="/">4L Energia Solar</a> | <a href="/meus-projetos">Projetos</a> | <a href="/mercado-livre">Mercado Livre</a> | <a href="/blog">Blog</a></nav>
        </header>
        <main class="max-w-7xl mx-auto p-6">
          <h1 class="text-4xl font-bold">Energia Solar em Campinas e Circuito das Águas: Mais Economia para sua Conta de Luz</h1>
          <p class="mt-4 text-lg">Projetos fotovoltaicos residenciais e empresariais homologados pela CPFL com atendimento presencial em Campinas, Indaiatuba, Socorro, Águas de Lindóia, Lindóia, Amparo, Serra Negra e Monte Alegre do Sul.</p>
        </main>
      `;
    }

    if (routePath === "/meus-projetos") {
      return `
        <main class="max-w-7xl mx-auto p-6">
          <h1 class="text-3xl font-bold">Projetos que já geram economia real</h1>
          <p class="mt-2">Conheça algumas instalações residenciais e empresariais realizadas pela 4L Energia Solar no interior paulista.</p>
        </main>
      `;
    }

    if (routePath === "/mercado-livre") {
      return `
        <main class="max-w-7xl mx-auto p-6">
          <h1 class="text-3xl font-bold">Mercado Livre de Energia para sua Empresa</h1>
          <p class="mt-2">Assessoria completa para migração ao Ambiente de Contratação Livre (ACL) para empresas com faturas a partir de R$ 9 mil/mês.</p>
        </main>
      `;
    }

    if (routePath === "/sobre") {
      return `
        <main class="max-w-7xl mx-auto p-6">
          <h1 class="text-3xl font-bold">Sobre a 4L Energia Solar</h1>
          <p class="mt-2">Engenharia fotovoltaica de precisão e quase 10 anos de experiência acumulada no interior paulista.</p>
        </main>
      `;
    }

    if (routePath === "/politica-de-privacidade") {
      return `
        <main class="max-w-7xl mx-auto p-6">
          <h1 class="text-3xl font-bold">Política de Privacidade e Proteção de Dados</h1>
          <p class="mt-2">Conformidade integral com a LGPD (Lei Federal nº 13.709/2018).</p>
        </main>
      `;
    }

    if (routePath === "/blog") {
      return `
        <main class="max-w-7xl mx-auto p-6">
          <h1 class="text-3xl font-bold">Blog 4L Energia Solar</h1>
          <p class="mt-2">Portal de conteúdo especializado em energia solar fotovoltaica, eficiência energética e soluções para consumidores residenciais e empresariais.</p>
        </main>
      `;
    }

    // Se for página de cidade
    const cityMatch = CITIES_DATA.find((c) => `/${c.slug}` === routePath);
    if (cityMatch) {
      return `
        <article class="max-w-5xl mx-auto p-6">
          <nav aria-label="breadcrumb"><a href="/">Início</a> &gt; <span>${cityMatch.city}</span></nav>
          <header class="mt-4">
            <span class="text-xs uppercase text-blue-600 font-bold">${cityMatch.region}</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold mt-2">${cityMatch.h1}</h1>
            <p class="mt-2 text-lg text-slate-600">${cityMatch.heroSubtitle}</p>
          </header>
          <div class="mt-8 prose">
            <p>${cityMatch.intro}</p>
            <p>${cityMatch.localSpecifics}</p>
          </div>
          <section class="mt-8">
            <h2 class="text-2xl font-bold">Por Que a Energia Solar Faz Sentido em ${cityMatch.city}?</h2>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              ${cityMatch.whySolarMakesSense.map((r) => `<div><h3 class="font-bold">${r.title}</h3><p class="text-sm">${r.description}</p></div>`).join("")}
            </div>
          </section>
          <section class="mt-8">
            <h2 class="text-2xl font-bold">Perguntas Frequentes sobre Energia Solar em ${cityMatch.city}</h2>
            <div class="mt-4 space-y-4">
              ${cityMatch.faq.map((f) => `<div><h3 class="font-bold">${f.question}</h3><p class="text-sm">${f.answer}</p></div>`).join("")}
            </div>
          </section>
        </article>
      `;
    }

    // Se for artigo do blog
    const blogMatch = BLOG_POSTS.find((p) => `/blog/${p.slug}` === routePath);
    if (blogMatch) {
      return `
        <article class="max-w-4xl mx-auto p-6">
          <nav aria-label="breadcrumb"><a href="/">Início</a> &gt; <a href="/blog">Blog</a> &gt; <span>${blogMatch.title}</span></nav>
          <header class="mt-4">
            <span class="text-xs uppercase text-blue-600 font-bold">${blogMatch.category}</span>
            <h1 class="text-3xl font-extrabold mt-2">${blogMatch.title}</h1>
            <p class="mt-2 text-lg text-slate-600">${blogMatch.excerpt}</p>
            <div class="mt-4 text-xs text-slate-500">Publicado por ${blogMatch.author} em ${blogMatch.publishedAt} · ${blogMatch.readingTime}</div>
          </header>
          <div class="mt-8 prose">
            <p>${blogMatch.description}</p>
          </div>
        </article>
      `;
    }

    return "";
  };

  // Pré-renderiza cada rota em um arquivo index.html na pasta correspondente
  for (const r of allRoutes) {
    let pageHtml = baseHtml;

    // 1. Language pt-BR
    pageHtml = pageHtml.replace(/<html(\s+[^>]*)?>/i, '<html lang="pt-BR">');

    // 2. Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${r.title}</title>`
    );

    // 3. Meta Description
    if (pageHtml.includes('name="description"')) {
      pageHtml = pageHtml.replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
        `<meta name="description" content="${r.description}" />`
      );
    } else {
      pageHtml = pageHtml.replace("</head>", `  <meta name="description" content="${r.description}" />\n</head>`);
    }

    // 4. Canonical Link
    const canonicalTag = `<link rel="canonical" href="${r.canonical}" />`;
    if (pageHtml.includes('rel="canonical"')) {
      pageHtml = pageHtml.replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
        canonicalTag
      );
    } else {
      pageHtml = pageHtml.replace("</head>", `  ${canonicalTag}\n</head>`);
    }

    // 5. OpenGraph Tags
    const ogTitle = r.ogTitle || r.title;
    const ogDescription = r.ogDescription || r.description;
    const ogImageAbsolute = r.ogImage.startsWith("http") ? r.ogImage : `${BASE_URL}${r.ogImage}`;
    const ogImageAlt = r.ogImageAlt || r.title;
    const ogType = r.ogType || "website";

    // Remove tags existentes para evitar duplicidade
    pageHtml = pageHtml.replace(/<meta\s+property="og:.*?"\s+content=".*?"\s*\/?>\n?/gi, "");
    pageHtml = pageHtml.replace(/<meta\s+name="twitter:.*?"\s+content=".*?"\s*\/?>\n?/gi, "");

    const ogAndTwitterTags = `  <meta property="og:site_name" content="4L Energia Solar" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDescription}" />
  <meta property="og:url" content="${r.canonical}" />
  <meta property="og:image" content="${ogImageAbsolute}" />
  <meta property="og:image:alt" content="${ogImageAlt}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="${r.twitterCard || "summary_large_image"}" />
  <meta name="twitter:title" content="${ogTitle}" />
  <meta name="twitter:description" content="${ogDescription}" />
  <meta name="twitter:image" content="${ogImageAbsolute}" />
  <meta name="twitter:image:alt" content="${ogImageAlt}" />`;

    pageHtml = pageHtml.replace("</head>", `${ogAndTwitterTags}\n</head>`);

    // 6. JSON-LD Structured Data
    if (r.jsonLd) {
      const items = Array.isArray(r.jsonLd) ? r.jsonLd : [r.jsonLd];
      const jsonLdTags = items
        .map(
          (item) =>
            `  <script type="application/ld+json" data-schema="prerendered">${JSON.stringify(
              item
            )}</script>`
        )
        .join("\n");
      pageHtml = pageHtml.replace("</head>", `${jsonLdTags}\n</head>`);
    }

    // 7. Semantic HTML inside <div id="root">
    const semanticBody = getSemanticBodyHtml(r.path);
    if (semanticBody) {
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${semanticBody}</div>`
      );
    }

    // 8. Gravação física do arquivo no diretório correspondente
    if (r.path === "/") {
      fs.writeFileSync(path.join(DIST_DIR, "index.html"), pageHtml, "utf-8");
      console.log(`✅ Pré-renderizado: / -> dist/index.html`);
    } else {
      const cleanPath = r.path.startsWith("/") ? r.path.slice(1) : r.path;
      const targetDir = path.join(DIST_DIR, cleanPath);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), pageHtml, "utf-8");
      console.log(`✅ Pré-renderizado: ${r.path} -> dist/${cleanPath}/index.html`);
    }
  }

  // 9. Geração do Sitemap.xml completo e canônico
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${r.changeFreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf-8");
  // Cópia para public/sitemap.xml para persistência de desenvolvimento
  const publicDir = path.resolve(process.cwd(), "public");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");
  console.log(`✅ sitemap.xml gerado com sucesso com ${allRoutes.length} URLs canônicas!`);

  console.log("🎉 Auditoria e pré-renderização estática de metadados concluída!");
}

runPrerender().catch((err) => {
  console.error("❌ Falha na pré-renderização:", err);
  process.exit(1);
});
