import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiCode,
  FiSmartphone,
  FiServer,
  FiCpu,
  FiChevronRight,
} from "react-icons/fi";

const links = [
  { label: "Home", path: "/", icon: FiCode },
  { label: "Services", path: "/services", icon: FiSmartphone },
  { label: "Work", path: "/work", icon: FiServer },
  { label: "About", path: "/about", icon: FiCpu },
  { label: "Process", path: "/process", icon: FiChevronRight },
  { label: "FAQ", path: "/faq", icon: FiChevronRight },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <style>{`
        @keyframes odShine {
          0% {
            transform: translateX(-170%) skewX(-18deg);
          }
          45%, 100% {
            transform: translateX(480%) skewX(-18deg);
          }
        }

        @keyframes odLogoSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes odPulse {
          0%, 100% {
            opacity: .3;
            transform: scale(.94);
          }
          50% {
            opacity: .75;
            transform: scale(1.08);
          }
        }

        @keyframes odDrawerIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes odDrawerItem {
          from {
            opacity: 0;
            transform: translateX(25px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes odOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes odFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .od-shine {
          animation: odShine 4.5s cubic-bezier(.4,0,.2,1) infinite;
        }

        .od-logo-spin {
          animation: odLogoSpin 7s linear infinite;
        }

        .od-pulse {
          animation: odPulse 2.8s ease-in-out infinite;
        }

        .od-drawer {
          animation: odDrawerIn .42s cubic-bezier(.22,1,.36,1) forwards;
        }

        .od-drawer-overlay {
          animation: odOverlay .3s ease forwards;
        }

        .od-drawer-item {
          animation: odDrawerItem .45s cubic-bezier(.22,1,.36,1) forwards;
          animation-delay: var(--delay);
          opacity: 0;
        }

        .od-float {
          animation: odFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .od-shine,
          .od-logo-spin,
          .od-pulse,
          .od-drawer,
          .od-drawer-overlay,
          .od-drawer-item,
          .od-float {
            animation: none !important;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[1000] px-3 py-3 sm:px-4 sm:py-4">
        <div
          className={`pointer-events-auto relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
            scrolled
              ? "min-h-[62px] border-blue-400/20 bg-slate-950/90 shadow-[0_20px_70px_rgba(0,0,0,.38)]"
              : "min-h-[68px] border-white/10 bg-slate-950/75 shadow-[0_18px_60px_rgba(0,0,0,.28)]"
          }`}
        >
          {/* TOP GLOW */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

          {/* NAVBAR SHINE */}
          <div className="od-shine pointer-events-none absolute -left-[20%] -top-10 h-24 w-32 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

          <div className="relative flex min-h-[62px] items-center justify-between gap-4 px-3 sm:px-4">
            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group relative z-10 flex shrink-0 items-center gap-2.5"
            >
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_8px_28px_rgba(37,99,235,.30)] sm:h-11 sm:w-11">
                <span className="od-logo-spin absolute -inset-1 rounded-full border border-white/50 border-b-transparent border-l-transparent" />

                <span className="relative z-10 text-lg font-black tracking-[-.08em] text-white sm:text-xl">
                  O
                </span>

                <span className="od-shine absolute -left-1/2 top-[-100%] h-[300%] w-1/3 rotate-[25deg] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </span>

              <span className="flex flex-col leading-none">
                <strong className="text-[15px] font-bold tracking-tight text-white sm:text-base">
                  Odikart
                </strong>

                <span className="mt-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-[6px] font-bold uppercase tracking-[.28em] text-transparent">
                  Technology
                </span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex md:items-center md:justify-end md:gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `group relative flex min-h-9 items-center rounded-xl px-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/10 text-white"
                        : "text-slate-400 hover:bg-white/[.04] hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>

                      <span
                        className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee] transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <span className="pointer-events-none absolute inset-y-[-50%] -left-1/2 w-1/4 rotate-[22deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[140%] group-hover:opacity-100" />
                    </>
                  )}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="group relative ml-3 flex min-h-10 min-w-[145px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-white via-slate-100 to-blue-100 px-5 text-xs font-bold text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(59,130,246,.25)]"
              >
                <span className="relative z-10">Start a Project</span>

                <FiArrowUpRight className="relative z-10 text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                <span className="od-shine absolute -left-1/2 top-[-100%] h-[300%] w-1/3 rotate-[25deg] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

                <span className="od-pulse pointer-events-none absolute inset-[-30%] rounded-full bg-blue-400/20 blur-2xl" />
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              className="relative z-[1100] grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 md:hidden"
            >
              {open ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {open && (
        <>
          {/* OVERLAY */}
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMenu}
            className="od-drawer-overlay fixed inset-0 z-[1050] cursor-default border-0 bg-black/65 backdrop-blur-md md:hidden"
          />

          {/* DRAWER */}
          <aside className="od-drawer fixed right-0 top-0 z-[1080] flex h-dvh w-[88%] max-w-[390px] flex-col overflow-hidden border-l border-white/10 bg-slate-950/95 shadow-[-30px_0_100px_rgba(0,0,0,.55)] backdrop-blur-2xl md:hidden">
            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -right-32 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* TOP LINE */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-blue-500 via-cyan-300 to-transparent" />

            {/* DRAWER HEADER */}
            <div className="relative flex items-center justify-between border-b border-white/[.08] px-5 py-5">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_10px_35px_rgba(37,99,235,.3)]">
                  <span className="od-logo-spin absolute -inset-1 rounded-full border border-white/40 border-b-transparent border-l-transparent" />
                  <span className="relative text-xl font-black text-white">
                    O
                  </span>
                </span>

                <span className="leading-none">
                  <strong className="block text-base font-bold text-white">
                    Odikart
                  </strong>

                  <span className="mt-1 block text-[7px] font-bold uppercase tracking-[.3em] text-cyan-300">
                    Technology
                  </span>
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-slate-300 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-300"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* DRAWER CONTENT */}
            <div className="relative flex-1 overflow-y-auto px-4 py-6">
              <div className="mb-5 px-2">
                <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-cyan-400">
                  Navigation
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  Build something
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    remarkable.
                  </span>
                </h2>
              </div>

              {/* NAV ITEMS */}
              <nav className="space-y-2">
                {links.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      style={{
                        "--delay": `${index * 70}ms`,
                      }}
                      className={({ isActive }) =>
                        `od-drawer-item group relative flex min-h-[62px] items-center gap-4 overflow-hidden rounded-2xl border px-4 transition-all duration-300 ${
                          isActive
                            ? "border-blue-400/20 bg-blue-500/10 text-white shadow-[0_10px_35px_rgba(37,99,235,.08)]"
                            : "border-white/[.06] bg-white/[.025] text-slate-400 hover:border-cyan-400/20 hover:bg-white/[.05] hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {/* ACTIVE GLOW */}
                          {isActive && (
                            <span className="absolute inset-y-3 left-0 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-300 shadow-[0_0_15px_rgba(34,211,238,.8)]" />
                          )}

                          {/* ICON */}
                          <span
                            className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all ${
                              isActive
                                ? "bg-blue-500/15 text-cyan-300"
                                : "bg-white/[.04] text-slate-500 group-hover:bg-cyan-400/10 group-hover:text-cyan-300"
                            }`}
                          >
                            <Icon className="text-lg" />
                          </span>

                          {/* TEXT */}
                          <span className="relative flex-1">
                            <span className="block text-sm font-semibold">
                              {link.label}
                            </span>

                            <span className="mt-0.5 block text-[10px] text-slate-500">
                              {link.label === "Home" &&
                                "Discover what we build"}
                              {link.label === "Services" &&
                                "Digital solutions for business"}
                              {link.label === "Work" &&
                                "Explore our selected work"}
                              {link.label === "About" &&
                                "Meet Odikart Technology"}
                              {link.label === "Process" &&
                                "How we turn ideas into products"}
                              {link.label === "FAQ" &&
                                "Common questions answered"}
                            </span>
                          </span>

                          {/* ARROW */}
                          <FiChevronRight
                            className={`text-lg transition-transform duration-300 ${
                              isActive
                                ? "text-cyan-300"
                                : "text-slate-600 group-hover:translate-x-1 group-hover:text-cyan-300"
                            }`}
                          />

                          {/* SHINE */}
                          <span className="pointer-events-none absolute inset-y-[-100%] -left-[60%] w-1/3 rotate-[20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[150%] group-hover:opacity-100" />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>

              {/* CTA */}
              <div
                className="od-drawer-item mt-6"
                style={{
                  "--delay": `${links.length * 70}ms`,
                }}
              >
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="group relative flex min-h-[60px] items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-5 text-sm font-bold text-white shadow-[0_15px_45px_rgba(37,99,235,.25)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[.18em] text-blue-100">
                      Let's work together
                    </span>

                    <span className="mt-1 block">
                      Start a Project
                    </span>
                  </span>

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                    <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>

                  <span className="od-shine absolute -left-1/2 top-[-100%] h-[300%] w-1/3 rotate-[25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </Link>
              </div>

              {/* STATUS */}
              <div
                className="od-drawer-item mt-5 rounded-2xl border border-white/[.06] bg-white/[.025] p-4"
                style={{
                  "--delay": `${(links.length + 1) * 70}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Available for new projects
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Let's build your next digital product.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="relative border-t border-white/[.08] px-5 py-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-slate-600">
                  © {new Date().getFullYear()} Odikart Technology
                </p>

                <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-slate-700">
                  Digital Studio
                </span>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
