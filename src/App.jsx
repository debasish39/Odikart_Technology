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


/* =========================================================
   PAGE TRANSITION
========================================================= */

function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Refresh AOS after the new page is rendered
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      key={location.pathname}
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      {/* Anime page shine */}
      <div className="page-anime-shine absolute inset-y-0 -left-[30%] w-[20%]" />
    </div>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {

  /* -------------------------------------------------------
     AOS INITIALIZATION
  ------------------------------------------------------- */

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      // once: true,
      offset: 70,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    // Refresh after initial page rendering
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-slate-950
      "
    >

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <Navbar />


      {/* ===================================================
          ROUTE / PAGE TRANSITION
      =================================================== */}

      <PageTransition />


      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <main className="min-h-screen">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* SERVICE DETAILS */}
          <Route
            path="/services/:slug"
            element={<ServiceDetails />}
          />

          {/* WORK */}
          <Route
            path="/work"
            element={<Work />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* PROCESS */}
          <Route
            path="/process"
            element={<Process />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* FAQ */}
          <Route
            path="/faq"
            element={<FAQ />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <Footer />


      {/* ===================================================
          WHATSAPP
      =================================================== */}

      <WhatsAppButton />

    </div>
  );
}
