import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 light-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div data-aos="fade-up">
            <Link
              to="/"
              aria-label="Odikart Technology Home"
              className="group inline-flex items-center"
            >
              <img
                src="/banner.png"
                alt="Odikart Technology"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className=" max-w-md text-sm leading-7 text-slate-500">
              Modern websites, mobile apps, APIs, e-commerce platforms and
              AI-powered digital products built for growing businesses.
            </p>

            {/* Contact info */}
            <div className="mt-3 space-y-1">
              <a
                href="mailto:info@odikart.in"
                className="group flex w-fit items-center gap-2.5 text-sm text-slate-500 transition hover:text-blue-600"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                  <FiMail className="h-4 w-4" />
                </span>

                <span>info@odikart.in</span>
              </a>

              <div className="flex items-center gap-2.5 text-sm text-slate-500">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500">
                  <FiMapPin className="h-4 w-4" />
                </span>

                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Explore
            </p>

            <nav className="mt-1 flex gap-1 flex-col text-sm leading-6 text-slate-500">
              <Link
                to="/"
                className="group flex w-fit items-center gap-1.5 text-sm text-slate-500 transition hover:text-blue-600"
              >
                Home
                <FiArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>

            

              <Link
                to="/work"
                className="group flex w-fit items-center gap-1.5 text-sm text-slate-500 transition hover:text-blue-600"
              >
                Our work
                <FiArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>

             
             
              <Link
                to="/faq"
                className="group flex w-fit items-center gap-1.5 text-sm text-slate-500 transition hover:text-blue-600"
              >
                FAQ
                <FiArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-950">
              Start a project
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              Have an idea in mind? Let's turn it into a modern digital
              product.
            </p>

            <Link
              to="/contact"
              className="
                anime-shine
                group
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_12px_35px_rgba(37,99,235,.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-500
                hover:shadow-[0_16px_40px_rgba(37,99,235,.28)]
                active:scale-[.97]
                focus:outline-none
                focus:ring-4
                focus:ring-blue-500/20
              "
            >
              Start a conversation

              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
     
          className="
            mt-3
            flex
            flex-col
            gap-4
            border-t
            border-slate-100
            pt-1
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[11px] leading-5 text-slate-400">
            © {new Date().getFullYear()} Odikart Technology. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-slate-400">
            <Link
              to="/privacy-policy"
              className="transition hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-blue-600"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}