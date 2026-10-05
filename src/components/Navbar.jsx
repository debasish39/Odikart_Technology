
import React, { useEffect, useState } from "react";
import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

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

/* ============================================================
   NAVIGATION DATA
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

      setScrolled(currentScrollY > 20);

      /*
       * Hide navbar while scrolling DOWN.
       * Show navbar while scrolling UP.
       */
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
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ========================================================== */

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [location.pathname]);

  /* ==========================================================
     LOCK BODY SCROLL WHEN MENU IS OPEN
  ========================================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ==========================================================
     CLOSE MENU WITH ESC
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
        @keyframes odNavbarShine {
          0% {
            transform: translateX(-180%) skewX(-18deg);
            opacity: 0;
          }

          15% {
            opacity: 0.7;
          }

          55%,
          100% {
            transform: translateX(480%) skewX(-18deg);
            opacity: 0;
          }
        }

        @keyframes odMobileMenu {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes odBackdrop {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes odMenuItem {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes odLogoGlow {
          0%,
          100% {
            box-shadow:
              0 0 0 rgba(37, 99, 235, 0),
              0 8px 25px rgba(37, 99, 235, 0.18);
          }

          50% {
            box-shadow:
              0 0 22px rgba(6, 182, 212, 0.22),
              0 8px 30px rgba(37, 99, 235, 0.25);
          }
        }

        .od-navbar-shine {
          animation:
            odNavbarShine
            5s
            cubic-bezier(.4,0,.2,1)
            infinite;
        }

        .od-mobile-menu {
          animation:
            odMobileMenu
            .35s
            cubic-bezier(.22,1,.36,1);
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
            .4s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .od-logo-glow {
          animation:
            odLogoGlow
            4s
            ease-in-out
            infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .od-navbar-shine,
          .od-mobile-menu,
          .od-backdrop,
          .od-menu-item,
          .od-logo-glow {
            animation: none;
          }
        }
      `}</style>

      {/* ======================================================
          DESKTOP / MOBILE FLOATING NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[1000]
          px-3
          pt-3
          transition-all
          duration-500
          sm:px-5
          sm:pt-4

          ${
            hidden
              ? "-translate-y-[calc(100%+20px)]"
              : "translate-y-0"
          }
        `}
      >
        <div
          className={`
            pointer-events-auto
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[22px]
            border
            border-slate-200/80
            bg-white/90
            backdrop-blur-2xl
            transition-all
            duration-500

            ${
              scrolled
                ? "shadow-[0_16px_50px_rgba(15,23,42,.14)]"
                : "shadow-[0_10px_40px_rgba(15,23,42,.07)]"
            }
          `}
        >
          {/* ==================================================
              TOP CYAN LINE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          {/* ==================================================
              ANIME SHINE
          ================================================== */}

          <div
            className="
              od-navbar-shine
              pointer-events-none
              absolute
              -left-[20%]
              -top-10
              h-24
              w-32
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-blue-200/50
              to-transparent
              blur-sm
            "
          />

          {/* ==================================================
              NAV CONTENT
          ================================================== */}

          <div
            className={`
              relative
              flex
              items-center
              justify-between
              gap-3
              px-3
              transition-all
              duration-500
              sm:px-4

              ${
                scrolled
                  ? "min-h-[58px]"
                  : "min-h-[68px]"
              }
            `}
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              className="
                group
                flex
                min-w-0
                items-center
                gap-2.5
              "
              aria-label="Odikart Technology Home"
            >
              {/* Logo Icon */}

              <span
                className={`
                  od-logo-glow
                  grid
                  shrink-0
                  place-items-center
                  rounded-[13px]
                  bg-gradient-to-br
                  from-blue-600
                  via-blue-600
                  to-cyan-500
                  font-black
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? "h-9 w-9 text-base"
                      : "h-10 w-10 text-lg"
                  }
                `}
              >
                O
              </span>

              {/* Logo Text */}

              <span
                className={`
                  overflow-hidden
                  leading-none
                  transition-all
                  duration-500

                  ${
                    scrolled
                      ? "max-w-[150px]"
                      : "max-w-[180px]"
                  }
                `}
              >
                <strong
                  className="
                    block
                    text-[15px]
                    font-bold
                    tracking-tight
                    text-slate-950
                    sm:text-base
                  "
                >
                  Odikart
                </strong>

                <span
                  className="
                    mt-1
                    block
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    bg-clip-text
                    text-[6px]
                    font-bold
                    uppercase
                    tracking-[.28em]
                    text-transparent
                  "
                >
                  Technology
                </span>
              </span>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                items-center
                gap-1
                md:flex
              "
            >
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) => `
                    relative
                    rounded-xl
                    px-3
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-blue-50
                          font-semibold
                          text-blue-700
                          shadow-sm
                        `
                        : `
                          text-slate-600
                          hover:bg-slate-50
                          hover:text-blue-700
                        `
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}

                      {isActive && (
                        <span
                          className="
                            absolute
                            bottom-0.5
                            left-1/2
                            h-0.5
                            w-4
                            -translate-x-1/2
                            rounded-full
                            bg-blue-600
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* =================================================
                  DESKTOP CTA
              ================================================= */}

              <Link
                to="/contact"
                className="
                  anime-shine
                  group
                  ml-2
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-4
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-600/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  hover:shadow-xl
                "
              >
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

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

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
                border-slate-200
                bg-slate-50
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-700
                active:scale-95
                md:hidden
              "
            >
              {open ? (
                <FiX
                  className="
                    text-xl
                    transition-transform
                    duration-300
                  "
                />
              ) : (
                <FiMenu
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          MOBILE BACKDROP
      ======================================================== */}

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
            bg-slate-950/30
            backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* ========================================================
          MOBILE APP-STYLE BOTTOM SHEET
      ======================================================== */}

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
              mx-auto
              flex
              max-h-[88dvh]
              w-full
              max-w-[520px]
              flex-col
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-[0_-20px_80px_rgba(15,23,42,.22)]
            "
          >
            {/* ==================================================
                SHEET HANDLE
            ================================================== */}

            <div className="flex justify-center pt-3">
              <span
                className="
                  h-1
                  w-10
                  rounded-full
                  bg-slate-200
                "
              />
            </div>

            {/* ==================================================
                MOBILE HEADER
            ================================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                px-5
                pb-4
                pt-4
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                  "
                >
                  O
                </span>

                <div>
                  <p
                    className="
                      text-sm
                      font-bold
                      text-slate-950
                    "
                  >
                    Odikart Technology
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-medium
                      text-slate-400
                    "
                  >
                    Digital solutions for modern business
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  text-slate-700
                  transition
                  active:scale-95
                "
              >
                <FiX />
              </button>
            </div>

            {/* ==================================================
                MOBILE NAVIGATION
            ================================================== */}

            <nav
              className="
                flex-1
                overflow-y-auto
                px-3
                py-4
              "
            >
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
                      active:scale-[0.98]

                      ${
                        isActive
                          ? `
                            border-blue-200
                            bg-blue-50
                            text-blue-700
                            shadow-sm
                          `
                          : `
                            border-transparent
                            bg-white
                            text-slate-600
                            hover:border-slate-200
                            hover:bg-slate-50
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
                                  bg-slate-100
                                  text-slate-500
                                  group-hover:bg-blue-50
                                  group-hover:text-blue-600
                                `
                            }
                          `}
                        >
                          <Icon className="text-base" />
                        </span>

                        {/* Label */}

                        <span
                          className="
                            flex-1
                            text-sm
                            font-semibold
                          "
                        >
                          {link.label}
                        </span>

                        {/* Active indicator */}

                        {isActive ? (
                          <span
                            className="
                              rounded-full
                              bg-blue-100
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
                  bg-blue-600
                  px-5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-300
                  active:scale-[0.98]
                "
              >
                <span>Start a Project</span>

                <span
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-xl
                    bg-white/15
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
                border-t
                border-slate-100
                px-5
                py-4
                text-center
              "
            >
              <p
                className="
                  text-[10px]
                  font-medium
                  text-slate-400
                "
              >
                © {new Date().getFullYear()} Odikart Technology
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
