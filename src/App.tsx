import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import "./App.css";
import Plataformas  from "./plataformas/Plataformas";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Gorras from "./gorras/gorras";

function App() {
  const HomePage = (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Cta />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={HomePage} />
        {/* Otras rutas */}
        
        <Route path="/plataformas" element={<Plataformas />} />
        <Route path="/gorras" element={<Gorras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
