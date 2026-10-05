import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiZap,
  FiChevronDown,
} from "react-icons/fi";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  buttonText,
  buttonLink = "/contact",
}) {
  const backgroundImage =
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=90";

  return (
    <section
      className="
        relative
        isolate
        min-h-[650px]
        overflow-hidden
        bg-slate-950
        px-4
        pb-20
        pt-32
        sm:min-h-[700px]
        sm:px-6
        sm:pb-24
        sm:pt-40
        lg:min-h-[720px]
        lg:pt-44
      "
    >
      {/* ======================================================
          REAL BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-[-30]
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />

      {/* ======================================================
          IMAGE DARKENING
          Keeps the image visible while making text readable.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[-20]
          bg-slate-950/35
        "
      />

      {/* ======================================================
          BLUE TECHNOLOGY TINT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[-19]
          bg-blue-950/20
        "
      />

      {/* ======================================================
          WHITE CENTER GRADIENT
          Only the middle gets lighter.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[-18]
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(255,255,255,0.92)_0%,
            rgba(255,255,255,0.78)_35%,
            rgba(255,255,255,0.28)_65%,
            rgba(255,255,255,0)_100%
          )]
        "
      />

      {/* ======================================================
          TOP WHITE FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[-17]
          h-36
          bg-gradient-to-b
          from-white/75
          to-transparent
        "
      />

      {/* ======================================================
          BOTTOM WHITE FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[-17]
          h-40
          bg-gradient-to-t
          from-white
          via-white/70
          to-transparent
        "
      />

      {/* ======================================================
          LIGHT GRID
      ====================================================== */}

      <div
        className="
          light-grid
          pointer-events-none
          absolute
          inset-0
          z-[-10]
          opacity-30
        "
      />

      {/* ======================================================
          BLUE GLOW
      ====================================================== */}

      <div
        className="
          anime-float
          pointer-events-none
          absolute
          left-[-40px]
          top-40
          z-[-5]
          h-48
          w-48
          rounded-full
          bg-blue-500/20
          blur-[90px]
          sm:left-[5%]
        "
      />

      {/* ======================================================
          CYAN GLOW
      ====================================================== */}

      <div
        className="
          anime-float
          pointer-events-none
          absolute
          right-[-50px]
          top-48
          z-[-5]
          h-56
          w-56
          rounded-full
          bg-cyan-400/20
          blur-[100px]
          sm:right-[5%]
        "
        style={{
          animationDelay: "-3s",
        }}
      />

      {/* ======================================================
          TOP LIGHT LINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          z-0
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-300/70
          to-transparent
        "
      />

      {/* ======================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[520px]
          max-w-5xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* ====================================================
            EYEBROW
        ==================================================== */}

        {eyebrow && (
          <div
            data-aos="fade-up"
            className="
              anime-shine
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200/70
              bg-white/85
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-700
              shadow-lg
              shadow-blue-900/10
              backdrop-blur-xl
              sm:text-[11px]
            "
          >
            <span
              className="
                grid
                h-5
                w-5
                place-items-center
                rounded-full
                bg-blue-100
                text-blue-600
              "
            >
              <FiZap className="text-[10px]" />
            </span>

            {eyebrow}
          </div>
        )}

        {/* ====================================================
            TITLE
        ==================================================== */}

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="
            mx-auto
            max-w-4xl
            text-[2.5rem]
            font-black
            leading-[1.05]
            tracking-[-0.055em]
            text-slate-950
            drop-shadow-[0_2px_15px_rgba(255,255,255,.5)]
            sm:text-5xl
            md:text-6xl
            lg:text-[4.3rem]
          "
        >
          {title}{" "}

          {highlight && (
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              {highlight}
            </span>
          )}
        </h1>

        {/* ====================================================
            DESCRIPTION
        ==================================================== */}

        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="180"
            className="
              mx-auto
              mt-6
              max-w-2xl
              rounded-2xl
              bg-white/35
              px-4
              py-2
              text-sm
              leading-7
              text-slate-700
              backdrop-blur-[2px]
              sm:text-lg
              sm:leading-8
            "
          >
            {description}
          </p>
        )}

        {/* ====================================================
            BUTTONS
        ==================================================== */}

        {buttonText && (
          <div
            data-aos="fade-up"
            data-aos-delay="260"
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:w-auto
              sm:flex-row
            "
          >
            {/* Primary */}

            <Link
              to={buttonLink}
              className="
                anime-shine
                group
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                px-7
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-blue-900/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-2xl
                active:scale-[0.98]
                sm:w-auto
              "
            >
              {buttonText}

              <span
                className="
                  grid
                  h-7
                  w-7
                  place-items-center
                  rounded-lg
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

            {/* Secondary */}

            <Link
              to="/services"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-2xl
                border
                border-white/70
                bg-white/80
                px-7
                text-sm
                font-semibold
                text-slate-700
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-blue-700
                active:scale-[0.98]
                sm:w-auto
              "
            >
              Explore Services
            </Link>
          </div>
        )}

        {/* ====================================================
            TRUST POINTS
        ==================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="340"
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            rounded-full
            border
            border-white/60
            bg-white/45
            px-4
            py-2.5
            text-[10px]
            font-semibold
            text-slate-600
            backdrop-blur-md
            sm:text-xs
          "
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Modern UI
          </span>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Scalable
          </span>

          <span className="hidden h-3 w-px bg-slate-300 sm:block" />

          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            AI Ready
          </span>
        </div>
      </div>

      {/* ======================================================
          BOTTOM DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-10
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-300
          to-transparent
        "
      />

      {/* ======================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        data-aos="fade-in"
        data-aos-delay="700"
        className="
          absolute
          bottom-5
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-1
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-slate-400
          sm:flex
        "
      >
        <span>Explore</span>

        <FiChevronDown className="animate-bounce text-blue-500" />
      </div>
    </section>
  );
}