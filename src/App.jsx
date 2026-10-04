import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Work from "./pages/Work";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => AOS.refreshHard(), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      mirror: false,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] text-white">
      <Navbar />
      <PageTransition />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}