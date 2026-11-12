# 4L Energia Solar — Portal Institucional & Blog Técnico

Portal oficial e hub de conteúdo da **4L Energia Solar** construído com React, Vite, TypeScript e Tailwind CSS. Desenvolvido para máxima velocidade de carregamento, SEO orgânico de alta performance e compatibilidade nativa com o **Cloudflare Pages**.

---

## 1. Visão Geral do Projeto

- **Empresa:** 4L Energia Solar
- **Base Operacional:** Rua Stecca Pelegrini, Jardim Santa Lúcia, Campinas - SP
- **WhatsApp Oficial:** (19) 9 8315-5772 (`https://wa.me/5519983155772`)
- **Atendimento Regional:** Campinas, Indaiatuba, Socorro, Águas de Lindóia, Lindóia, Amparo, Serra Negra, Monte Alegre do Sul
- **Páginas Principais:**
  - `/` (Home com Calculadora Técnica de Economia)
  - `/meus-projetos` (Portfólio com filtros e dados informados de economia)
  - `/mercado-livre` (Landing page B2B para contas a partir de R$ 9 mil)
  - `/sobre` (Institucional transparente)
  - `/politica-de-privacidade` (LGPD e proteção de dados)
  - `/blog` (Portal editorial e artigos individuais em `/blog/:slug`)

---

## 2. Comandos de Desenvolvimento e Build

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento local (Porta 3000)
npm run dev

# 3. Compilação estática e pré-renderização de todas as rotas e artigos do blog
npm run build

# 4. Pré-visualizar o build gerado
npm run preview

# 5. Validação de tipos TypeScript
npm run lint
```

---

## 3. Variáveis de Ambiente (.env)

O projeto está preparado para rastreamento de conversões e métricas através das variáveis:

```env
# Google Analytics 4 (Opcional)
VITE_GA4_ID="G-XXXXXXXXXX"

# Google Tag Manager (Opcional)
VITE_GTM_ID="GTM-XXXXXXX"

# Meta Pixel (Opcional)
VITE_META_PIXEL_ID="XXXXXXXXXXXXXXXX"
```

---

## 4. COMO PUBLICAR NOVOS ARTIGOS NO BLOG (Passo a Passo)

O blog não depende de Sanity, WordPress ou bancos de dados externos. Todo o conteúdo editorial é gerenciado diretamente nos arquivos do projeto. A meta editorial é de **dois artigos por semana**.

### Passo 1: Abrir o arquivo de artigos
Abra o arquivo `src/data/blogPosts.ts`.

### Passo 2: Adicionar um novo artigo ao array `BLOG_POSTS`
Insira um novo objeto no início do array com a seguinte estrutura:

```typescript
{
  title: "Título Completo e Descritivo do Artigo",
  slug: "titulo-completo-e-descritivo-do-artigo", // URL amigável única
  description: "Meta description para o Google (140 a 160 caracteres).",
  excerpt: "Resumo introdutório exibido nos cards e no início do artigo.",
  publishedAt: "2026-11-15", // Data no formato AAAA-MM-DD
  updatedAt: "2026-11-15",
  author: "4L Energia Solar",
  category: "Energia Solar Residencial", // Uma das 8 categorias oficiais
  categorySlug: "energia-solar-residencial",
  tags: ["Economia", "Painéis Solares", "CPFL"],
  coverImage: "/assets/blog/como-funciona-solar.jpg", // Imagem em public/
  coverImageAlt: "Descrição detalhada da imagem para acessibilidade e SEO",
  readingTime: "6 min de leitura",
  featured: false, // Defina true se desejar destacar no topo do blog
  ctaText: "Quer saber quanto pode economizar? Solicite um estudo com a 4L.",
  ctaTarget: "calculator", // "whatsapp" | "calculator" | "mercado-livre"
  content: `
## Primeiro Subtítulo H2 (Gera índice automático)

Texto do artigo com explicação técnica aprofundada...

### Subtítulo H3 de Apoio

- Item com marcador técnico
- Detalhes sobre dimensionamento

## Fontes Técnicas e Referências
- ANEEL (Resolução 1.000/2021)
- ABSOLAR
  `
}
```

### Passo 3: Adicionar imagens
Coloque as imagens em `public/assets/blog/` e referencie como `/assets/blog/nome-da-imagem.jpg`.

### Passo 4: Definir a categoria
Utilize uma das categorias cadastradas em `src/data/categories.ts`:
1. `energia-solar-residencial`
2. `energia-solar-comercial-e-industrial`
3. `mercado-livre-de-energia`
4. `economia-e-eficiencia-energetica`
5. `equipamentos-e-tecnologia-fotovoltaica`
6. `instalacao-manutencao-e-monitoramento`
7. `financiamento-e-investimento-em-energia-solar`
8. `energia-solar-no-circuito-das-aguas-e-regiao`

### Passo 5: Gerar o Build
Execute:
```bash
npm run build
```
O script `scripts/prerender.ts` automaticamente:
- Criará o diretório estático `dist/blog/slug-do-artigo/index.html` com o H1, texto, metadados e schema `BlogPosting` embutidos no HTML inicial.
- Incluirá o novo artigo no `dist/sitemap.xml`.

### Passo 6: Publicar no Cloudflare Pages
Envie o commit para o repositório GitHub (`git push origin main`). O Cloudflare Pages detectará o novo commit e fará o deploy automático em segundos!

---

## 5. Como Editar Projetos, Avaliações e FAQs

- **Projetos:** Edite `src/data/projects.ts`. Cada obra contém título, cidade, bairro, potência (kWp) e economia mensal informada.
- **Avaliações do Google:** Edite `src/data/reviews.ts`. Contém as 11 transcrições fiéis das avaliações reais recebidas.
- **Perguntas Frequentes:** Edite `src/data/faq.ts`.

---

## 6. Configuração no Cloudflare Pages

1. Conecte o repositório GitHub ao painel do Cloudflare Pages.
2. Em **Build settings**:
   - **Framework preset:** `None` / `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Os arquivos `public/_headers` e `public/_redirects` já estão inclusos para garantir roteamento direto e cabeçalhos de segurança HTTP.
4. Para apontar o domínio personalizado `4lenergiasolar.com.br`, acesse **Custom Domains** no Cloudflare Pages e adicione o domínio com gerenciamento de DNS pelo Cloudflare.

---

## 7. GESTÃO CENTRALIZADA DE SEO, META TAGS E OPEN GRAPH

Todos os metadados de SEO, Open Graph, Twitter Cards e dados estruturados Schema.org estão centralizados e organizados no arquivo:

📁 `src/data/seoMetadata.ts`

Essa arquitetura garante que você possa atualizar títulos, descrições e imagens sociais em um único local, com propagação automática tanto na navegação client-side (SPA) quanto no HTML estático pré-renderizado entregue aos mecanismos de busca (Google, Bing) e robôs de redes sociais (WhatsApp, Facebook, LinkedIn, Twitter/X).

### 1. Como Alterar o SEO Title de uma Página
Abra `src/data/seoMetadata.ts`, localize a rota desejada em `CORE_PAGES_METADATA` e altere a propriedade `title`:
```typescript
"/mercado-livre": {
  title: "Mercado Livre de Energia para Empresas | 4L Energia Solar",
  // ...
}
```
*Recomendação técnica:* Mantenha entre 50 e 60 caracteres, mencionando a palavra-chave primária e o nome da marca.

### 2. Como Alterar a Meta Description
No mesmo arquivo, edite a propriedade `description`:
```typescript
"/mercado-livre": {
  description: "Assessoria completa para migração de empresas ao Mercado Livre de Energia (ACL). Redução de custos e previsibilidade para faturas a partir de R$ 9 mil mensais.",
  // ...
}
```
*Recomendação técnica:* Mantenha entre 140 e 160 caracteres, descrevendo com objetividade o benefício e uma chamada à ação discreta.

### 3. Como Substituir a Imagem Open Graph (Social Share)
1. Salve a nova imagem em formato JPG na proporção 16:9 ou 1,91:1 (resolução ideal: **1200 × 630 pixels**) na pasta `public/assets/og/`.
2. Em `src/data/seoMetadata.ts`, aponte a propriedade `ogImage`:
```typescript
"/mercado-livre": {
  ogImage: "/assets/og/sua-nova-imagem.jpg",
  ogImageAlt: "Descrição contextual da imagem para acessibilidade",
  // ...
}
```

### 4. Como Adicionar Metadados de uma Nova Página
Basta registrar a nova rota no objeto `CORE_PAGES_METADATA`:
```typescript
"/nova-pagina": {
  path: "/nova-pagina",
  title: "Título Exclusivo da Nova Página | 4L Energia Solar",
  description: "Descrição exclusiva e persuasiva com 140 a 160 caracteres.",
  canonical: `${SITE_URL}/nova-pagina`,
  ogTitle: "Título para Compartilhamento",
  ogDescription: "Resumo para redes sociais",
  ogType: "website",
  ogImage: "/assets/og/og-nova-pagina.jpg",
  ogImageAlt: "Texto alternativo da imagem",
  twitterCard: "summary_large_image",
  changeFreq: "weekly",
  priority: 0.8
}
```
Ao executar `npm run build`, a nova página será automaticamente pré-renderizada e adicionada ao `sitemap.xml`.

### 5. Como Configurar Metadados de um Novo Artigo do Blog
Cada novo artigo cadastrado em `src/data/blogPosts.ts` herda automaticamente a estrutura de metadados via função `getBlogPostMetadata(post)` em `src/data/seoMetadata.ts`:
- O **SEO Title** prioriza `post.seoTitle` (recomendado ~50–60 caracteres) com fallback automático para `${post.title} | Blog 4L Energia Solar`.
- A **Meta Description** prioriza `post.seoDescription` (recomendado ~140–160 caracteres) com fallback para `post.description`.
- O **Open Graph Title / Description** priorizam `post.ogTitle` e `post.ogDescription` (ou `seoTitle`/`seoDescription`).
- A **Open Graph Image** utiliza `post.ogImage || post.coverImage` (padrão **1200 × 630 px** em `public/assets/blog/`).
- A URL canônica aponta para `https://4lenergiasolar.com.br/blog/${post.slug}`.
- O schema JSON-LD `BlogPosting` é embutido no HTML com autor, data e publisher.
Para personalizar um artigo específico, ajuste `seoTitle`, `seoDescription`, `ogImage` e `ogImageAlt` diretamente no objeto do artigo em `src/data/blogPosts.ts`. Rotas inexistentes retornam `404.html` com `noindex, nofollow`.

