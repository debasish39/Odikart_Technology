import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
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
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always move to the top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

function ScrollToTopButton() {
  const [show, setShow] = React.useState(false);

  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        /* -----------------------------------------------
           AT TOP
        ------------------------------------------------ */

        if (currentScrollY <= 100) {
          setShow(false);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }


        /* -----------------------------------------------
           SCROLLING UP
        ------------------------------------------------ */

        if (currentScrollY < lastScrollY.current) {
          setShow(true);
        }


        /* -----------------------------------------------
           SCROLLING DOWN
        ------------------------------------------------ */

        else if (currentScrollY > lastScrollY.current) {
          setShow(false);
        }


        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    // Set initial position
    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setShow(false);
  };


  /* =======================================================
     HIDDEN
  ======================================================= */

  if (!show) return null;


  /* =======================================================
     BUTTON
  ======================================================= */

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="
        group

        fixed
        bottom-7
        left-1/2

        z-[900]

        -translate-x-1/2

        flex
        items-center
        gap-2.5

        rounded-full

        border
        border-slate-200/90

        bg-white/95

        px-4
        py-2.5

        text-slate-700

        shadow-[0_10px_35px_rgba(15,23,42,0.12)]

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-blue-200


        hover:text-blue-600

        hover:shadow-[0_14px_40px_rgba(37,99,235,0.22)]

        active:scale-95
      "
    >
      {/* Arrow Circle */}
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center

          rounded-full

          border
          border-blue-200

          bg-blue-50

          text-blue-600

          transition-all
          duration-300

          group-hover:border-white/50
          group-hover:bg-white/15
          group-hover:text- blue-600
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          className="
            h-4
            w-4

            transition-transform
            duration-300

            group-hover:-translate-y-0.5
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18V6"
          />

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11l5-5 5 5"
          />
        </svg>
      </span>

      {/* Text */}
      <span
        className="
          whitespace-nowrap
          text-[13px]
          font-semibold
          tracking-[-0.01em]
        "
      >
        Back to top
      </span>
    </button>
  );
}
/* =========================================================
   PAGE TRANSITION
========================================================= */

function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    // Refresh AOS after the new page has rendered
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      key={location.pathname}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[9999]
      "
    >
      {/* Anime page shine */}
      <div
        className="
          page-anime-shine
          absolute
          inset-y-0
          -left-[30%]
          w-[20%]
        "
      />
    </div>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {

  /* =======================================================
     AOS INITIALIZATION
  ======================================================= */

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      offset: 70,
      mirror: false,
      anchorPlacement: "top-bottom",
      once: false,
    });

    // Refresh after initial page rendering
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  /* =======================================================
     RENDER
  ======================================================= */

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
          SCROLL TO TOP
      =================================================== */}

      <ScrollToTop />


      {/* ===================================================
          PAGE TRANSITION
      =================================================== */}

      <PageTransition />


      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <main className="min-h-screen">

        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              SERVICES
          ================================================= */}

          <Route
            path="/services"
            element={<Services />}
          />


          {/* =================================================
              SERVICE DETAILS
          ================================================= */}

          <Route
            path="/services/:slug"
            element={<ServiceDetails />}
          />


          {/* =================================================
              WORK
          ================================================= */}

          <Route
            path="/work"
            element={<Work />}
          />


          {/* =================================================
              ABOUT
          ================================================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =================================================
              PROCESS
          ================================================= */}

          <Route
            path="/process"
            element={<Process />}
          />


          {/* =================================================
              CONTACT
          ================================================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =================================================
              FAQ
          ================================================= */}

          <Route
            path="/faq"
            element={<FAQ />}
          />


          {/* =================================================
              404
          ================================================= */}

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
          WHATSAPP BUTTON
      =================================================== */}

      <WhatsAppButton />
<ScrollToTopButton />
    </div>
  );
}