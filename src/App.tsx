import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import { CookieConsent } from "./components/common/CookieConsent";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { MercadoLivrePage } from "./pages/MercadoLivrePage";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { CityPage } from "./pages/CityPage";
import { CITIES_DATA } from "./data/cities";

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-slate-900 bg-slate-50 antialiased selection:bg-amber-400 selection:text-slate-950">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meus-projetos" element={<ProjectsPage />} />
            <Route path="/mercado-livre" element={<MercadoLivrePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />

            {/* 6 Dedicated Local City Routes */}
            {CITIES_DATA.map((city) => (
              <Route
                key={city.slug}
                path={`/${city.slug}`}
                element={<CityPage cityData={city} />}
              />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
