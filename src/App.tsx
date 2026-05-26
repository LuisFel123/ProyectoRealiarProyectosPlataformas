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
import Gorras from "./gorras/Gorras";
import {Ropa} from "./components/ropa/Ropa";
import Login from "./components/login/Login";
import Registro from "./components/registrar/Registro";
import ReestablecerContrasena from "./components/rContrasena/Recuperar";
import Dashboard from "./components/principal/Dashboard";

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

  

  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={HomePage} />
        {/* Otras rutas */}
        
        <Route path="/plataformas" element={<Plataformas />} />
        <Route path="/gorras" element={<Gorras />} />
        <Route path="/ropa" element={<Ropa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/reestablecer-contrasena" element={<ReestablecerContrasena />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
