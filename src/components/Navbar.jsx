import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiChevronRight,
  FiHome,
  FiLayers,
  FiBriefcase,
  FiUsers,
  FiGitBranch,
  FiHelpCircle,
} from "react-icons/fi";

import { IoSparklesOutline } from "react-icons/io5";

/* ============================================================
   NAVIGATION
============================================================ */

const links = [
  {
    label: "Home",
    path: "/",
    icon: FiHome,
  },
  {
    label: "Services",
    path: "/services",
    icon: FiLayers,
  },
  {
    label: "Work",
    path: "/work",
    icon: FiBriefcase,
  },
  {
    label: "About",
    path: "/about",
    icon: FiUsers,
  },
  {
    label: "Process",
    path: "/process",
    icon: FiGitBranch,
  },
  {
    label: "FAQ",
    path: "/faq",
    icon: FiHelpCircle,
  },
];

/* ============================================================
   NAVBAR
============================================================ */

export default function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* ==========================================================
     SCROLL BEHAVIOR
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);

      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY + 8) {
          setHidden(true);
        } else if (currentScrollY < lastScrollY - 8) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  /* ==========================================================
     ROUTE CHANGE
  ========================================================== */

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [location.pathname]);

  /* ==========================================================
     BODY LOCK
  ========================================================== */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ==========================================================
     ESCAPE
  ========================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* ======================================================
          NAVBAR ANIMATIONS
      ====================================================== */}

      <style>{`
        /* =====================================================
           GLASS SHINE
        ===================================================== */

        @keyframes odGlassShine {
          0% {
            transform: translateX(-160%) skewX(-18deg);
            opacity: 0;
          }

          12% {
            opacity: 0.2;
          }

          40% {
            opacity: 0.55;
          }

          65%,
          100% {
            transform: translateX(520%) skewX(-18deg);
            opacity: 0;
          }
        }

        /* =====================================================
           LOGO GLOW
        ===================================================== */

        @keyframes odLogoGlow {
          0%,
          100% {
            box-shadow:
              0 8px 25px rgba(37, 99, 235, 0.10),
              0 0 0 rgba(6, 182, 212, 0);
          }

          50% {
            box-shadow:
              0 12px 32px rgba(37, 99, 235, 0.20),
              0 0 25px rgba(6, 182, 212, 0.12);
          }
        }

        /* =====================================================
           DOT PULSE
        ===================================================== */

        @keyframes odDotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        /* =====================================================
           FLOATING AMBIENT GLOW
        ===================================================== */

        @keyframes odAmbientFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(10px, -8px, 0);
          }
        }

        /* =====================================================
           MOBILE MENU
        ===================================================== */

        @keyframes odMobileMenu {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* =====================================================
           BACKDROP
        ===================================================== */

        @keyframes odBackdrop {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* =====================================================
           MOBILE ITEM
        ===================================================== */

        @keyframes odMenuItem {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           ACTIVE GLOW
        ===================================================== */

        @keyframes odActiveGlow {
          0%,
          100% {
            box-shadow:
              0 5px 20px rgba(37, 99, 235, 0.05);
          }

          50% {
            box-shadow:
              0 8px 28px rgba(37, 99, 235, 0.12);
          }
        }

        /* =====================================================
           LOGO IMAGE FLOAT
        ===================================================== */

        @keyframes odLogoFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-1px);
          }
        }

        /* =====================================================
           CLASSES
        ===================================================== */

        .od-navbar-shine {
          animation:
            odGlassShine
            6s
            cubic-bezier(.4, 0, .2, 1)
            infinite;
        }

        .od-logo-glow {
          animation:
            odLogoGlow
            4s
            ease-in-out
            infinite;
        }

        .od-logo-float {
          animation:
            odLogoFloat
            4s
            ease-in-out
            infinite;
        }

        .od-dot-pulse {
          animation:
            odDotPulse
            2.8s
            ease-in-out
            infinite;
        }

        .od-ambient-float {
          animation:
            odAmbientFloat
            7s
            ease-in-out
            infinite;
        }

        .od-active-glow {
          animation:
            odActiveGlow
            4s
            ease-in-out
            infinite;
        }

        .od-mobile-menu {
          animation:
            odMobileMenu
            .38s
            cubic-bezier(.22, 1, .36, 1);
        }

        .od-backdrop {
          animation:
            odBackdrop
            .25s
            ease-out;
        }

        .od-menu-item {
          animation:
            odMenuItem
            .42s
            cubic-bezier(.22, 1, .36, 1)
            both;
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .od-navbar-shine,
          .od-logo-glow,
          .od-logo-float,
          .od-dot-pulse,
          .od-ambient-float,
          .od-active-glow,
          .od-mobile-menu,
          .od-backdrop,
          .od-menu-item {
            animation: none !important;
          }
        }
      `}</style>

      {/* ======================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[1000]

          px-3
          pt-3

          sm:px-5
          sm:pt-4

          transition-all
          duration-500

          ${
            hidden
              ? "-translate-y-[calc(100%+25px)]"
              : "translate-y-0"
          }
        `}
      >
        <div
          className={`
            relative
            mx-auto
            max-w-7xl
            overflow-hidden

            rounded-[26px]

            border
            border-white/75

            bg-white/[0.58]

            shadow-[0_12px_50px_rgba(15,23,42,.08)]

            backdrop-blur-3xl
            backdrop-saturate-[180%]

            transition-all
            duration-500

            ${
              scrolled
                ? `
                  bg-white/[0.74]
                  shadow-[0_20px_70px_rgba(15,23,42,.13)]
                  ring-1
                  ring-blue-100/60
                `
                : `
                  shadow-[0_12px_45px_rgba(15,23,42,.07)]
                `
            }
          `}
        >
          {/* ==================================================
              TOP GLASS REFLECTION
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-[45%]
              rounded-t-[26px]
              bg-gradient-to-b
              from-white/60
              via-white/15
              to-transparent
              opacity-80
            "
          />

          {/* ==================================================
              LEFT AMBIENT GLOW
          ================================================== */}

          <div
            className="
              od-ambient-float
              pointer-events-none
              absolute
              -left-20
              -top-24
              h-48
              w-48
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          {/* ==================================================
              RIGHT AMBIENT GLOW
          ================================================== */}

          <div
            className="
              od-ambient-float
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-48
              w-48
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />

          {/* ==================================================
              TOP GLASS LIGHT
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-[7%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-90
            "
          />

          {/* ==================================================
              BOTTOM BLUE LIGHT
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[8%]
              right-[8%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-400/40
              to-transparent
            "
          />

          {/* ==================================================
              ANIME GLASS SHINE
          ================================================== */}

          <div
            className="
              od-navbar-shine
              pointer-events-none
              absolute
              -left-[18%]
              -top-10
              h-24
              w-32
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/55
              to-transparent
              blur-sm
            "
          />

          {/* ==================================================
              CONTENT
          ================================================== */}

          <div
            className={`
              relative
              flex
              items-center
              justify-between
              gap-4

              px-3
              sm:px-4

              transition-all
              duration-500

              ${
                scrolled
                  ? "min-h-[58px]"
                  : "min-h-[68px]"
              }
            `}
          >
       {/* ==================================================
    LOGO — IMAGE ONLY
================================================== */}

<Link
  to="/"
  aria-label="Odikart Technology Home"
  className="group flex shrink-0 items-center"
>
  <img
    src="/banner.png"
    alt="Odikart Technology"
    className="
      h-18
      w-[133px]
      object-contain
      transition-transform
      duration-300
      group-hover:scale-105
    "
  />
</Link>
            {/* ==================================================
                DESKTOP NAV
            ================================================== */}

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) => `
                    group
                    relative

                    rounded-full

                    px-3.5
                    py-2.5

                    text-[13px]
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          od-active-glow

                          border
                          border-blue-100/80

                          bg-white/80

                          text-blue-700

                          shadow-[inset_0_1px_0_rgba(255,255,255,.9)]
                        `
                        : `
                          border
                          border-transparent

                          text-slate-600

                          hover:border-white/70
                          hover:bg-white/55
                          hover:text-blue-700
                        `
                    }
                  `}
                >
                  {({ isActive }) => {
                    const Icon = link.icon;

                    return (
                      <span className="flex items-center gap-1.5">
                        <Icon
                          className={`
                            text-sm

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "scale-105 text-blue-600"
                                : "group-hover:scale-105 group-hover:text-blue-600"
                            }
                          `}
                        />

                        <span>{link.label}</span>

                        {isActive && (
                          <span
                            className="
                              od-dot-pulse

                              ml-0.5

                              h-1.5
                              w-1.5

                              rounded-full

                              bg-cyan-500

                              shadow-[0_0_10px_rgba(6,182,212,.55)]
                            "
                          />
                        )}
                      </span>
                    );
                  }}
                </NavLink>
              ))}

              {/* ==================================================
                  CTA
              ================================================== */}

              <Link
                to="/contact"
                className="
                  anime-shine
                  group
                  relative

                  ml-2

                  inline-flex
                  min-h-10

                  items-center
                  gap-2

                  overflow-hidden

                  rounded-full

                  border
                  border-blue-500/20

                  bg-gradient-to-r
                  from-blue-600
                  to-blue-500

                  px-4.5

                  text-xs
                  font-bold
                  text-white

                  shadow-[0_10px_28px_rgba(37,99,235,.20)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:from-blue-700
                  hover:to-blue-600

                  hover:shadow-[0_15px_38px_rgba(37,99,235,.28)]

                  active:scale-[.96]
                "
              >
                <IoSparklesOutline className="text-[13px]" />

                <span>Start a Project</span>

                <FiArrowUpRight
                  className="
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </nav>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="
                group
                grid

                h-11
                w-11

                shrink-0
                place-items-center

                rounded-[14px]

                border
                border-white/80

                bg-white/65

                text-slate-800

                shadow-[0_8px_25px_rgba(15,23,42,.08)]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-blue-200
                hover:bg-white
                hover:text-blue-700

                active:scale-95

                md:hidden
              "
            >
              {open ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu
                  className="
                    text-xl
                    transition
                    group-hover:scale-110
                  "
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================
          MOBILE BACKDROP
      ====================================================== */}

      {open && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="
            od-backdrop

            fixed
            inset-0
            z-[1050]

            cursor-default

            bg-slate-950/25

            backdrop-blur-[7px]

            md:hidden
          "
        />
      )}

      {/* ======================================================
          MOBILE APP MENU
      ====================================================== */}

      {open && (
        <div
          className="
            fixed
            inset-x-0
            bottom-0
            z-[1080]

            px-2
            pb-2

            md:hidden
          "
        >
          <aside
            className="
              od-mobile-menu

              relative

              mx-auto

              flex
              max-h-[88dvh]
              w-full
              max-w-[520px]

              flex-col

              overflow-hidden

              rounded-[30px]

              border
              border-white/80

              bg-white/[0.82]

              shadow-[0_-25px_100px_rgba(15,23,42,.22)]

              backdrop-blur-3xl
              backdrop-saturate-[180%]
            "
          >
            {/* ==================================================
                MOBILE GLOW
            ================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                -right-20
                -top-20

                h-48
                w-48

                rounded-full

                bg-blue-500/10

                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                -left-20
                bottom-10

                h-40
                w-40

                rounded-full

                bg-cyan-400/10

                blur-3xl
              "
            />

            {/* ==================================================
                DRAG HANDLE
            ================================================== */}

            <div className="relative flex justify-center pt-3">
              <span
                className="
                  h-1
                  w-10
                  rounded-full
                  bg-slate-300
                "
              />
            </div>

            {/* ==================================================
                MOBILE HEADER
            ================================================== */}

            <div
              className="
                relative

                flex
                items-center
                justify-between

                border-b
                border-white/70

                px-5
                pb-4
                pt-4
              "
            >
              <div className="flex items-center gap-3">
                {/* ==================================================
                    MOBILE REAL LOGO
                ================================================== */}

                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  aria-label="Odikart Technology Home"
                  className="
                    group

                    relative
                    grid

                    h-11
                    w-11

                    shrink-0

                    place-items-center

                    overflow-hidden

                    rounded-[14px]

                    border
                    border-white/80

                    bg-white/70

                    shadow-[0_8px_25px_rgba(15,23,42,.10)]

                    backdrop-blur-xl
                  "
                >
                  <img
                    src="/banner.png"
                    alt="Odikart Technology"
                    className="
                      relative
                      z-10

                      h-[99%]
                      w-[99%]

                      object-contain

                      transition-transform
                      duration-300

                      group-hover:scale-105
                    "
                  />

                  <span
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-gradient-to-br
                      from-white/60
                      via-transparent
                      to-transparent
                    "
                  />

                  <span
                    className="
                      pointer-events-none

                      absolute

                      -left-[60%]
                      top-[-20%]

                      h-[140%]
                      w-[35%]

                      rotate-[18deg]

                      bg-gradient-to-r
                      from-transparent
                      via-white/70
                      to-transparent

                      blur-sm

                      transition-all
                      duration-700

                      group-hover:left-[120%]
                    "
                  />
                </Link>

                {/* Brand */}

                <div>
                  <p className="text-sm font-black text-slate-950">
                    Odikart Technology
                  </p>

                  <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                    Digital solutions for modern business
                  </p>
                </div>
              </div>

              {/* ==================================================
                  CLOSE
              ================================================== */}

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="
                  grid

                  h-10
                  w-10

                  place-items-center

                  rounded-xl

                  border
                  border-white

                  bg-white/70

                  text-slate-700

                  shadow-sm

                  backdrop-blur-xl

                  transition

                  hover:border-blue-200
                  hover:bg-white
                  hover:text-blue-600

                  active:scale-95
                "
              >
                <FiX />
              </button>
            </div>

            {/* ==================================================
                MOBILE LINKS
            ================================================== */}

            <nav className="relative flex-1 overflow-y-auto px-3 py-4">
              {links.map((link, index) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    style={{
                      animationDelay: `${index * 45}ms`,
                    }}
                    className={({ isActive }) => `
                      od-menu-item
                      group

                      mb-2

                      flex
                      min-h-[58px]

                      items-center
                      gap-3

                      rounded-2xl

                      border

                      px-3

                      transition-all
                      duration-300

                      active:scale-[.98]

                      ${
                        isActive
                          ? `
                            border-blue-200/80

                            bg-white/85

                            text-blue-700

                            shadow-[0_10px_30px_rgba(37,99,235,.09)]

                            backdrop-blur-xl
                          `
                          : `
                            border-transparent

                            bg-white/45

                            text-slate-600

                            hover:border-white
                            hover:bg-white/75
                          `
                      }
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {/* Icon */}

                        <span
                          className={`
                            grid

                            h-10
                            w-10

                            shrink-0

                            place-items-center

                            rounded-xl

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? `
                                  bg-blue-600
                                  text-white

                                  shadow-md
                                  shadow-blue-600/20
                                `
                                : `
                                  bg-white/70
                                  text-slate-500

                                  shadow-sm

                                  group-hover:bg-blue-50
                                  group-hover:text-blue-600
                                `
                            }
                          `}
                        >
                          <Icon className="text-base" />
                        </span>

                        {/* Label */}

                        <span className="flex-1 text-sm font-semibold">
                          {link.label}
                        </span>

                        {/* Indicator */}

                        {isActive ? (
                          <span
                            className="
                              rounded-full

                              border
                              border-blue-100

                              bg-blue-50

                              px-2
                              py-1

                              text-[9px]
                              font-bold

                              uppercase
                              tracking-wider

                              text-blue-700
                            "
                          >
                            Active
                          </span>
                        ) : (
                          <FiChevronRight
                            className="
                              text-slate-300

                              transition

                              group-hover:translate-x-0.5
                              group-hover:text-blue-500
                            "
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}

              {/* ==================================================
                  MOBILE CTA
              ================================================== */}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="
                  anime-shine
                  group

                  mt-3

                  flex
                  min-h-[58px]

                  items-center
                  justify-between

                  rounded-2xl

                  border
                  border-blue-500/20

                  bg-gradient-to-r
                  from-blue-600
                  to-blue-500

                  px-5

                  text-sm
                  font-bold
                  text-white

                  shadow-lg
                  shadow-blue-600/20

                  transition-all
                  duration-300

                  hover:from-blue-700
                  hover:to-blue-600

                  active:scale-[.98]
                "
              >
                <span className="flex items-center gap-2">
                  <IoSparklesOutline />

                  <span>Start a Project</span>
                </span>

                <span
                  className="
                    grid

                    h-9
                    w-9

                    place-items-center

                    rounded-xl

                    bg-white/15

                    ring-1
                    ring-white/10
                  "
                >
                  <FiArrowUpRight
                    className="
                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Link>
            </nav>

            {/* ==================================================
                MOBILE FOOTER
            ================================================== */}

            <div
              className="
                relative

                border-t
                border-white/70

                px-5
                py-4

                text-center
              "
            >
              <div
                className="
                  mx-auto
                  mb-2
                  h-px
                  w-16

                  bg-gradient-to-r
                  from-transparent
                  via-blue-300
                  to-transparent
                "
              />

              <p className="text-[10px] font-medium text-slate-400">
                © {new Date().getFullYear()} Odikart Technology
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}