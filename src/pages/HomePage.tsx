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

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead path="/" />

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
