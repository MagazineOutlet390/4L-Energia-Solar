import React, { useEffect } from "react";
import { getMetadataForPath, SITE_URL } from "../../data/seoMetadata";

export interface SEOHeadProps {
  path?: string;
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: "summary_large_image" | "summary";
  keywords?: string[];
  jsonLd?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  path,
  title: propTitle,
  description: propDescription,
  canonical: propCanonical,
  ogTitle: propOgTitle,
  ogDescription: propOgDescription,
  ogType: propOgType,
  ogImage: propOgImage,
  ogImageAlt: propOgImageAlt,
  twitterCard: propTwitterCard,
  keywords: propKeywords,
  jsonLd: propJsonLd
}) => {
  useEffect(() => {
    // Detect path or use provided path
    const currentPath = path || window.location.pathname;
    const defaults = getMetadataForPath(currentPath);

    const title = propTitle || defaults.title;
    const description = propDescription || defaults.description;
    const canonical = propCanonical || defaults.canonical || `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;
    const ogTitle = propOgTitle || defaults.ogTitle || title;
    const ogDescription = propOgDescription || defaults.ogDescription || description;
    const ogType = propOgType || defaults.ogType || "website";
    const ogImage = propOgImage || defaults.ogImage || "/assets/og/og-home.jpg";
    const ogImageAlt = propOgImageAlt || defaults.ogImageAlt || title;
    const twitterCard = propTwitterCard || defaults.twitterCard || "summary_large_image";
    const keywords = propKeywords || defaults.keywords;
    const jsonLd = propJsonLd || defaults.jsonLd;

    // 1. Language on <html>
    document.documentElement.lang = "pt-BR";

    // 2. Document Title
    document.title = title;

    // Helper: Meta Name
    const setMetaName = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Helper: Meta Property
    const setMetaProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Helper: Link Tag
    const setLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    };

    // 3. Meta Description & Keywords
    setMetaName("description", description);
    if (keywords && keywords.length > 0) {
      setMetaName("keywords", keywords.join(", "));
    }

    // 4. Canonical
    setLinkTag("canonical", canonical);

    // 5. OpenGraph Tags
    const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

    setMetaProperty("og:site_name", "4L Energia Solar");
    setMetaProperty("og:locale", "pt_BR");
    setMetaProperty("og:type", ogType);
    setMetaProperty("og:title", ogTitle);
    setMetaProperty("og:description", ogDescription);
    setMetaProperty("og:url", canonical);
    setMetaProperty("og:image", absoluteOgImage);
    setMetaProperty("og:image:alt", ogImageAlt);
    setMetaProperty("og:image:width", "1200");
    setMetaProperty("og:image:height", "630");

    // 6. Twitter Card Tags
    setMetaName("twitter:card", twitterCard);
    setMetaName("twitter:title", ogTitle);
    setMetaName("twitter:description", ogDescription);
    setMetaName("twitter:image", absoluteOgImage);
    setMetaName("twitter:image:alt", ogImageAlt);

    // 7. Dynamic JSON-LD Structured Data
    const existingScripts = document.querySelectorAll('script[data-schema="dynamic"]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-schema", "dynamic");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [
    path,
    propTitle,
    propDescription,
    propCanonical,
    propOgTitle,
    propOgDescription,
    propOgType,
    propOgImage,
    propOgImageAlt,
    propTwitterCard,
    propKeywords,
    propJsonLd
  ]);

  return null;
};
