import React from "react";
import { SEOHead } from "../components/common/SEOHead";
import { Hero } from "../components/home/Hero";
import { MetricsBar } from "../components/home/MetricsBar";
import { Calculator } from "../components/home/Calculator";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { HowItWorks } from "../components/home/HowItWorks";
import { CoverageAreas } from "../components/home/CoverageAreas";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { MercadoLivreHighlight } from "../components/home/MercadoLivreHighlight";
import { GoogleReviewsCarousel } from "../components/home/GoogleReviewsCarousel";
import { MapAndContact } from "../components/home/MapAndContact";
import { FAQAccordion } from "../components/home/FAQAccordion";
import { FinalCTA } from "../components/home/FinalCTA";
import { COMPANY } from "../data/company";
import { FAQ_ITEMS } from "../data/faq";

export const HomePage: React.FC = () => {
  // Schema.org LocalBusiness & Organization & FAQPage
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": COMPANY.name,
      "description": COMPANY.legalNotice,
      "url": "https://4lenergiasolar.com.br/",
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
      })),
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.slice(0, 6).map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  ];

  return (
    <>
      <SEOHead
        path="/"
        title="4L Energia Solar | Campinas e Circuito das Águas Paulista"
        description="Projetos e instalação de energia solar fotovoltaica em Campinas e Circuito das Águas. Quase 10 anos de experiência e mais de 200 clientes. Simule sua economia."
        canonical="https://4lenergiasolar.com.br/"
        ogImage="/assets/og/og-home.jpg"
        ogImageAlt="Instalação fotovoltaica residencial moderna sobre telhado cerâmico com céu ensolarado"
        jsonLd={homeJsonLd}
      />

      <main>
        <Hero />
        <MetricsBar />
        <Calculator />
        <WhyChooseUs />
        <HowItWorks />
        <FeaturedProjects />
        <CoverageAreas />
        <MercadoLivreHighlight />
        <GoogleReviewsCarousel />
        <MapAndContact />
        <FAQAccordion />
        <FinalCTA />
      </main>
    </>
  );
};
