
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiCpu,
  FiLayers,
  FiMessageCircle,
  FiPlay,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

import { IoSparklesOutline } from "react-icons/io5";

import { services } from "../data/services";
import { projects } from "../data/projects";

import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";

/* ============================================================
   HERO SLIDES
============================================================ */

const heroSlides = [
  {
    eyebrow: "Digital products",
    title: "Ideas into digital experiences.",
    description:
      "Websites, platforms and products designed to look sharp, feel effortless and help your business move.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=90",
    accent: "from-blue-600 to-cyan-500",
    stat: "01",
  },

  {
    eyebrow: "Modern engineering",
    title: "Build once. Grow without limits.",
    description:
      "Scalable frontend, backend and API architecture built around real users and real business needs.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=90",
    accent: "from-indigo-600 to-blue-500",
    stat: "02",
  },

  {
    eyebrow: "Practical AI",
    title: "Make AI useful, not complicated.",
    description:
      "Thoughtful AI integrations that automate work, improve experiences and create measurable value.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=90",
    accent: "from-cyan-600 to-blue-600",
    stat: "03",
  },
];

/* ============================================================
   HERO VISUAL CARDS
============================================================ */

const visualCards = [
  {
    icon: FiCode,
    label: "Web",
    title: "Modern websites",
    text: "Fast, responsive and conversion-focused.",
  },
  {
    icon: FiSmartphone,
    label: "Apps",
    title: "Mobile experiences",
    text: "Useful products people enjoy using.",
  },
  {
    icon: FiCpu,
    label: "AI",
    title: "Smart automation",
    text: "AI where it actually creates value.",
  },
];

/* ============================================================
   PROCESS
============================================================ */

const process = [
  [
    "01",
    "Discover",
    "Understand the idea, users and business goal.",
  ],
  [
    "02",
    "Design",
    "Shape the experience, flows and visual direction.",
  ],
  [
    "03",
    "Build",
    "Engineer the product with a scalable foundation.",
  ],
  [
    "04",
    "Grow",
    "Improve it with feedback, data and new opportunities.",
  ],
];

/* ============================================================
   HOME
============================================================ */

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = heroSlides[activeSlide];

  /* ==========================================================
     AUTO PLAY
  ========================================================== */

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide(
        (current) => (current + 1) % heroSlides.length
      );
    }, 5500);

    return () => window.clearInterval(timer);
  }, [paused]);

  /* ==========================================================
     SLIDER CONTROLS
  ========================================================== */

  const nextSlide = () => {
    setActiveSlide(
      (current) => (current + 1) % heroSlides.length
    );
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + heroSlides.length) %
        heroSlides.length
    );
  };

  /* ==========================================================
     FEATURED SERVICES
  ========================================================== */

  const featuredServices = useMemo(
    () => services.slice(0, 6),
    []
  );

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-white text-slate-950">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="
          premium-hero
          relative
          min-h-[680px]
          overflow-hidden
          bg-black
          sm:min-h-[720px]
          lg:min-h-[860px]
        "
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* ==================================================
            HERO IMAGES
        ================================================== */}

        {heroSlides.map((item, index) => (
          <div
            key={item.stat}
            className={`
              absolute
              inset-0
              transition-opacity
              duration-1000
              ${
                index === activeSlide
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <img
              src={item.image}
              alt=""
              className={`
                h-full
                w-full
                object-cover
                transition-transform
                duration-[7000ms]
                ${
                  index === activeSlide
                    ? "scale-105"
                    : "scale-100"
                }
              `}
            />

            {/* ==================================================
                NATURAL IMAGE OVERLAY
                No blue/cyan color filter
            ================================================== */}

            {/* Very light neutral darkening */}

            <div className="absolute inset-0 bg-black/20" />

            {/* Text readability */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/70
                via-black/35
                to-transparent
              "
            />

            {/* Soft top protection */}

            <div
              className="
                absolute
                inset-x-0
                top-0
                h-32
                bg-gradient-to-b
                from-black/20
                to-transparent
              "
            />

            {/* ==================================================
                NATURAL FADE INTO WHITE
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-36
                bg-gradient-to-t
                from-white
                via-white/45
                to-transparent
              "
            />
          </div>
        ))}

        {/* ==================================================
            LIGHT GRID
        ================================================== */}

        <div
          className="
            light-grid
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
          "
        />

        {/* ==================================================
            HERO CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[680px]
            max-w-7xl
            flex-col
            px-4
            pb-6
            pt-24
            sm:min-h-[720px]
            sm:px-6
            sm:pb-8
            sm:pt-28
            lg:min-h-[860px]
            lg:px-10
            lg:pt-32
          "
        >
          <div
            className="
              grid
              flex-1
              items-center
              gap-10
              lg:grid-cols-[1.02fr_.98fr]
            "
          >

            {/* ==================================================
                HERO COPY
            ================================================== */}

            <div className="max-w-3xl">

              {/* Brand badge */}

              <div
                data-aos="fade-down"
                className="
                  anime-shine
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.22em]
                  text-white/90
                  backdrop-blur-xl
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-white
                      opacity-40
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-white
                    "
                  />
                </span>

                <span>Odikart Technology</span>

                <span className="hidden text-white/30 sm:inline">
                  •
                </span>

                <span className="hidden text-white/70 sm:inline">
                  Digital products & AI
                </span>
              </div>

              {/* Heading */}

              <div className="mt-7 overflow-hidden">

                <p
                  key={`eyebrow-${activeSlide}`}
                  data-aos="fade-up"
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[.3em]
                    text-white/70
                  "
                >
                  {slide.eyebrow}
                </p>

                <h1
                  key={`title-${activeSlide}`}
                  data-aos="fade-up"
                  className="
                    mt-4
                    max-w-3xl
                    text-[2.7rem]
                    font-black
                    leading-[.95]
                    tracking-[-.06em]
                    text-white
                    xs:text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[5.7rem]
                  "
                >
                  {slide.title}
                </h1>

                <p
                  key={`desc-${activeSlide}`}
                  data-aos="fade-up"
                  className="
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-white/75
                    sm:text-base
                    lg:text-lg
                  "
                >
                  {slide.description}
                </p>
              </div>

              {/* ==================================================
                  CTA ROW
              ================================================== */}

              <div
  data-aos="fade-up"
  data-aos-delay="180"
  className="
    mt-8
    flex
    w-full
    max-w-full
    items-center
    gap-2
    overflow-hidden
    rounded-full
    border
    border-white/15
    bg-black/20
    p-1.5
    shadow-[0_18px_55px_rgba(0,0,0,.22)]
    backdrop-blur-xl

    sm:w-fit
    sm:gap-2.5
  "
>
  {/* =====================================================
      START A PROJECT
  ===================================================== */}

  <Link
    to="/contact"
    className="
      anime-shine
      group
      inline-flex
      min-w-0
      flex-1
      items-center
      justify-center
      gap-1.5
      overflow-hidden
      rounded-full

      bg-blue-600
      px-3
      py-2.5

      text-[11px]
      font-bold
      leading-none
      text-white

      shadow-[0_8px_25px_rgba(37,99,235,.28)]

      transition-all
      duration-300

      hover:-translate-y-0.5
      hover:bg-blue-500
      hover:shadow-[0_12px_32px_rgba(37,99,235,.35)]

      active:scale-[.97]

      focus:outline-none
      focus:ring-4
      focus:ring-blue-500/20

      sm:min-w-[145px]
      sm:flex-none
      sm:px-4
      sm:py-3
      sm:text-xs

      md:min-w-[155px]
      md:px-5
      md:py-3.5
      md:text-sm
    "
  >
    <span className="truncate">
      Start a Project
    </span>

    <FiArrowUpRight
      className="
        h-3.5
        w-3.5
        shrink-0

        transition-transform
        duration-300

        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5

        sm:h-4
        sm:w-4
      "
    />
  </Link>


  {/* =====================================================
      EXPLORE OUR WORK
  ===================================================== */}

  <Link
    to="/work"
    className="
      group
      inline-flex
      min-w-0
      flex-1
      items-center
      justify-center
      gap-1.5
      overflow-hidden
      rounded-full

      border
      border-white/15

      bg-white/10

      px-3
      py-2.5

      text-[11px]
      font-bold
      leading-none
      text-white

      backdrop-blur-xl

      transition-all
      duration-300

      hover:-translate-y-0.5
      hover:border-white/25
      hover:bg-white/15

      active:scale-[.97]

      focus:outline-none
      focus:ring-4
      focus:ring-white/10

      sm:min-w-[145px]
      sm:flex-none
      sm:px-4
      sm:py-3
      sm:text-xs

      md:min-w-[155px]
      md:px-5
      md:py-3.5
      md:text-sm
    "
  >
    <span className="truncate">
      Explore our work
    </span>

    <FiArrowRight
      className="
        h-3.5
        w-3.5
        shrink-0

        transition-transform
        duration-300

        group-hover:translate-x-1

        sm:h-4
        sm:w-4
      "
    />
  </Link>
</div>

              {/* ==================================================
                  BENEFITS
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-delay="260"
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-2
                "
              >
                {[
                  "Modern UI",
                  "Scalable backend",
                  "AI-ready",
                  "Business-focused",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-white/70
                    "
                  >
                    <FiCheckCircle className="text-white/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ==================================================
                HERO VISUAL
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="
                relative
                hidden
                lg:block
              "
            >
              <div
                className="
                  relative
                  mx-auto
                  max-w-xl
                "
              >
                {/* Main glass card */}

                <div
                  className="
                    anime-shine
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/15
                    bg-black/15
                    p-3
                    shadow-[0_30px_100px_rgba(0,0,0,.30)]
                    backdrop-blur-xl
                  "
                >
                  {/* Current image */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[1.5rem]
                    "
                  >
                    <img
                      src={slide.image}
                      alt=""
                      className="
                        h-[420px]
                        w-full
                        object-cover
                        transition
                        duration-700
                        hover:scale-105
                      "
                    />

                    {/* Very light neutral image protection */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/55
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Image information */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                      "
                    >
                      <div className="flex items-end justify-between gap-4">

                        <div>
                          <p
                            className="
                              text-[9px]
                              font-black
                              uppercase
                              tracking-[.2em]
                              text-white/60
                            "
                          >
                            Current focus
                          </p>

                          <p
                            className="
                              mt-1
                              text-xl
                              font-black
                              tracking-tight
                              text-white
                            "
                          >
                            {slide.eyebrow}
                          </p>
                        </div>

                        <span
                          className="
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            px-3
                            py-1.5
                            text-[9px]
                            font-black
                            tracking-[.18em]
                            text-white
                            backdrop-blur-md
                          "
                        >
                          {slide.stat}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual cards */}

                  <div
                    className="
                      mt-3
                      grid
                      grid-cols-3
                      gap-2
                    "
                  >
                    {visualCards.map(
                      (
                        card,
                        index
                      ) => {
                        const Icon = card.icon;

                        return (
                          <div
                            key={card.label}
                            className="
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/10
                              p-3
                              backdrop-blur-xl
                            "
                          >
                            <div
                              className="
                                grid
                                h-8
                                w-8
                                place-items-center
                                rounded-xl
                                bg-white/15
                                text-white
                              "
                            >
                              <Icon />
                            </div>

                            <p
                              className="
                                mt-2
                                text-[9px]
                                font-black
                                uppercase
                                tracking-[.14em]
                                text-white/50
                              "
                            >
                              {card.label}
                            </p>

                            <p
                              className="
                                mt-1
                                text-xs
                                font-bold
                                text-white
                              "
                            >
                              {card.title}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              CAROUSEL CONTROLS
          ================================================== */}

          <div
            data-aos="fade-up"
            className="
              mt-8
              flex
              items-center
              justify-between
              gap-5
              border-t
              border-white/10
              pt-5
            "
          >
            <div className="flex items-center gap-3">
              {heroSlides.map((item, index) => (
                <button
                  key={item.stat}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={`
                      h-1
                      rounded-full
                      transition-all
                      duration-500
                      ${
                        index === activeSlide
                          ? "w-12 bg-white"
                          : "w-6 bg-white/25 group-hover:bg-white/50"
                      }
                    `}
                  />

                  <span
                    className={`
                      hidden
                      text-[9px]
                      font-bold
                      tracking-[.15em]
                      sm:inline
                      ${
                        index === activeSlide
                          ? "text-white"
                          : "text-white/35"
                      }
                    `}
                  >
                    {item.stat}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span
                className="
                  mr-2
                  hidden
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.18em]
                  text-white/40
                  sm:inline
                "
              >
                {paused ? "Paused" : "Auto play"}
              </span>

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="
                  grid
                  h-11
                  w-11
                  place-items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition
                  hover:bg-white/10
                  active:scale-95
                  sm:h-10
                  sm:w-10
                "
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="
                  grid
                  h-11
                  w-11
                  place-items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition
                  hover:bg-white/10
                  active:scale-95
                  sm:h-10
                  sm:w-10
                "
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section
        className="
          premium-section
          relative
          overflow-hidden
          bg-white
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-32
        "
      >
        <div
          className="
            light-grid
            pointer-events-none
            absolute
            inset-0
            opacity-50
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-10
            h-80
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/5
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-6xl">
          <div
            className="
              grid
              items-center
              gap-10
              md:gap-12
              lg:grid-cols-[.85fr_1.15fr]
            "
          >
            <div data-aos="fade-right">
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-blue-100
                  bg-blue-50
                  px-3
                  py-1.5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.2em]
                  text-blue-600
                "
              >
                More than development
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-[-.05em]
                  text-slate-950
                  sm:text-5xl
                "
              >
                We design the experience around the{" "}
                <span className="text-blue-600">
                  outcome.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                Technology is only one part of a great
                product. We combine strategy, design,
                engineering and practical AI into
                experiences that make sense for the
                people using them.
              </p>

              <Link
                to="/about"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-100
                  bg-blue-50
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-blue-600
                  shadow-sm
                  transition
                  hover:-translate-y-0.5
                  hover:bg-blue-100
                  active:scale-[.97]
                "
              >
                Discover Odikart

                <FiArrowRight
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

          <div
  data-aos="fade-left"
  className="
    relative
    grid
    gap-4
    sm:grid-cols-2
  "
>
  {/* MAIN FEATURE CARD */}
  <div
    className="
      group
      anime-shine
      relative
      min-h-[430px]
      overflow-hidden
      rounded-[2rem]
      bg-slate-950
      p-6
      text-white
      shadow-[0_25px_80px_rgba(15,23,42,.16)]
      sm:row-span-2
      sm:p-7
    "
  >
    {/* Background image */}
    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90"
      alt=""
      aria-hidden="true"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        opacity-45
        transition-transform
        duration-[1200ms]
        ease-out
        group-hover:scale-105
      "
    />

    {/* Dark readability gradient */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-b
        from-slate-950/20
        via-slate-950/35
        to-slate-950/95
      "
    />

    {/* Blue ambient glow */}
    <div
      className="
        pointer-events-none
        absolute
        -right-20
        -top-20
        h-48
        w-48
        rounded-full
        bg-blue-500/20
        blur-3xl
        transition
        duration-700
        group-hover:bg-cyan-400/25
      "
    />

    {/* Top content */}
    <div className="relative flex items-start justify-between">
      <div
        className="
          grid
          h-12
          w-12
          place-items-center
          rounded-2xl
          border
          border-white/15
          bg-white/10
          text-xl
          text-cyan-300
          shadow-[0_10px_30px_rgba(6,182,212,.12)]
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:border-cyan-300/30
          group-hover:bg-cyan-400/15
        "
      >
        <FiZap />
      </div>

      <span
        className="
          rounded-full
          border
          border-white/15
          bg-white/10
          px-3
          py-1.5
          text-[10px]
          font-bold
          uppercase
          tracking-[.18em]
          text-white/70
          backdrop-blur-md
        "
      >
        01
      </span>
    </div>

    {/* Bottom content */}
    <div
      className="
        relative
        mt-24
        flex
        min-h-[270px]
        flex-col
        justify-end
      "
    >
      <p
        className="
          text-[10px]
          font-black
          uppercase
          tracking-[.22em]
          text-cyan-300
        "
      >
        Product mindset
      </p>

      <h3
        className="
          mt-3
          max-w-sm
          text-3xl
          font-black
          leading-[1.05]
          tracking-[-0.045em]
          sm:text-[2.15rem]
        "
      >
        Clean ideas.
        <br />
        Clear execution.
      </h3>

      <p
        className="
          mt-4
          max-w-sm
          text-sm
          leading-6
          text-slate-300
        "
      >
        Every screen, API and interaction should have a reason to
        exist — turning ideas into focused digital products.
      </p>

      {/* Small visual indicator */}
      <div className="mt-6 flex items-center gap-2">
        <span className="h-1.5 w-10 rounded-full bg-cyan-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>
    </div>
  </div>

  {/* SMALL CARDS */}
  {[
    {
      Icon: FiLayers,
      number: "02",
      title: "Design",
      text: "Interfaces that feel natural, purposeful and easy to use.",
    },
    {
      Icon: FiShield,
      number: "03",
      title: "Engineering",
      text: "Reliable foundations built to perform, evolve and scale.",
    },
  ].map(({ Icon, number, title, text }, index) => (
    <div
      key={title}
      data-aos="zoom-in"
      data-aos-delay={index * 120}
      className="
        group
        anime-shine
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_12px_45px_rgba(15,23,42,.055)]
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-blue-200
        hover:shadow-[0_20px_55px_rgba(37,99,235,.10)]
      "
    >
      {/* Soft hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          bg-blue-100/70
          blur-2xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="relative flex items-start justify-between">
        <div
          className="
            grid
            h-12
            w-12
            place-items-center
            rounded-2xl
            bg-blue-50
            text-lg
            text-blue-600
            transition-all
            duration-300
            group-hover:bg-blue-600
            group-hover:text-white
            group-hover:shadow-[0_10px_25px_rgba(37,99,235,.22)]
          "
        >
          <Icon />
        </div>

        <span
          className="
            text-[10px]
            font-black
            tracking-[.18em]
            text-slate-300
            transition
            group-hover:text-blue-400
          "
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-7">
        <h3
          className="
            text-lg
            font-black
            tracking-[-0.02em]
            text-slate-950
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-xs
            text-sm
            leading-6
            text-slate-500
          "
        >
          {text}
        </p>
      </div>

      {/* Bottom line */}
      <div
        className="
          relative
          mt-7
          h-px
          w-full
          overflow-hidden
          bg-slate-100
        "
      >
        <div
          className="
            h-full
            w-0
            bg-blue-500
            transition-all
            duration-500
            group-hover:w-1/3
          "
        />
      </div>
    </div>
  ))}
</div>
          </div>
        </div>

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-24
            bg-gradient-to-t
            from-white
            via-white/60
            to-transparent
          "
        />
      </section>

      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section
        className="
          premium-section
          soft-section
          relative
          overflow-hidden
          bg-[#f8fafc]
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-32
        "
      >
        <div
          className="
            light-grid
            pointer-events-none
            absolute
            inset-0
            opacity-60
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div className="max-w-2xl">
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-blue-100
                  bg-white
                  px-3
                  py-1.5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.2em]
                  text-blue-600
                  shadow-sm
                "
              >
                What we build
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  tracking-[-.05em]
                  text-slate-950
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Everything your digital idea needs.
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                From a first landing page to a complete
                product ecosystem.
              </p>
            </div>

            <Link
              to="/services"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                font-bold
                text-slate-700
                shadow-[0_8px_25px_rgba(15,23,42,.05)]
                transition
                duration-200
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:text-blue-600
                hover:shadow-[0_14px_35px_rgba(37,99,235,.10)]
                active:scale-[.97]
              "
            >
              View all services

              <FiArrowUpRight
                className="
                  transition
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          <div
            className="
              mt-12
              flex
              snap-x
              gap-5
              overflow-x-auto
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {featuredServices.map(
              (service, index) => (
                <div
                  key={service.slug}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="
                    min-w-[88%]
                    snap-start
                    sm:min-w-[52%]
                    md:min-w-[42%]
                    lg:min-w-[31%]
                    [&>*]:h-full
                  "
                >
                  <ServiceCard
                    service={service}
                    index={index}
                  />
                </div>
              )
            )}
          </div>

          <div
            data-aos="fade-up"
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              text-[9px]
              font-black
              uppercase
              tracking-[.2em]
              text-slate-400
            "
          >
            <FiChevronLeft />
            Swipe to explore
            <FiChevronRight />
          </div>
        </div>
      </section>

      {/* ======================================================
          WORK
      ====================================================== */}

      <section
        className="
          premium-section
          relative
          overflow-hidden
          bg-white
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-32
        "
      >
        <div className="relative mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="
              mx-auto
              max-w-2xl
              text-center
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-3
                py-1.5
                text-[10px]
                font-black
                uppercase
                tracking-[.2em]
                text-slate-500
              "
            >
              Selected work
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                tracking-[-.05em]
                text-slate-950
                sm:text-4xl
                lg:text-5xl
              "
            >
              Work that speaks visually.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              A few examples of digital experiences and
              systems built around practical goals.
            </p>
          </div>

          <div
            className="
              mt-12
              flex
              snap-x
              gap-5
              overflow-x-auto
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {projects.map(
              (project, index) => (
                <div
                  key={project.title}
                  data-aos="zoom-in"
                  data-aos-delay={index * 90}
                  className="
                    min-w-[92%]
                    snap-start
                    sm:min-w-[62%]
                    md:min-w-[48%]
                    lg:min-w-[40%]
                    [&>*]:h-full
                  "
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </div>
              )
            )}
          </div>

          <div className="mt-5 flex justify-center">
            <Link
              to="/work"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-slate-800
                shadow-[0_8px_25px_rgba(15,23,42,.05)]
                transition
                duration-200
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:text-blue-600
                hover:shadow-[0_14px_35px_rgba(37,99,235,.10)]
                active:scale-[.97]
              "
            >
              Explore all projects

              <FiArrowUpRight
                className="
                  transition
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHY ODIKART
      ====================================================== */}

      <section
        className="
          premium-section
          relative
          overflow-hidden
          bg-[#f8fafc]
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,.08),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(6,182,212,.07),transparent_28%)]
          "
        />

        <div
          className="
            light-grid
            pointer-events-none
            absolute
            inset-0
            opacity-40
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[.9fr_1.1fr]
              lg:gap-16
            "
          >
            <div
              data-aos="fade-right"
              className="max-w-2xl"
            >
              <span
                className="
                  anime-shine
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-100
                  bg-white
                  px-4
                  py-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.22em]
                  text-blue-600
                  shadow-sm
                "
              >
                <IoSparklesOutline />
                Why Odikart Technology
              </span>

              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-[-.055em]
                  text-slate-950
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Technology should make your business{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-blue-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  simpler.
                </span>
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="160"
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                Thoughtful design, modern engineering and
                practical AI working together to create
                digital products that people understand and
                businesses can grow.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="220"
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                {[
                  [
                    FiZap,
                    "Fast & modern",
                    "Clean interfaces and quick experiences.",
                  ],
                  [
                    FiShield,
                    "Built responsibly",
                    "Reliable foundations made to scale.",
                  ],
                  [
                    FiCpu,
                    "AI when useful",
                    "Automation where it creates real value.",
                  ],
                  [
                    FiTrendingUp,
                    "Future-ready",
                    "Flexible products that can evolve.",
                  ],
                ].map(
                  ([Icon, title, text]) => (
                    <div
                      key={title}
                      className="
                        anime-shine
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-[0_10px_35px_rgba(15,23,42,.045)]
                        transition
                        duration-500
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:shadow-[0_20px_50px_rgba(37,99,235,.10)]
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            grid
                            h-10
                            w-10
                            shrink-0
                            place-items-center
                            rounded-xl
                            bg-blue-50
                            text-blue-600
                            transition
                            duration-300
                            group-hover:bg-blue-600
                            group-hover:text-white
                          "
                        >
                          <Icon />
                        </div>

                        <div>
                          <p
                            className="
                              text-sm
                              font-bold
                              text-slate-950
                            "
                          >
                            {title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-slate-500
                            "
                          >
                            {text}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <Link
                to="/about"
                data-aos="fade-up"
                data-aos-delay="280"
                className="
                  anime-shine
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-slate-950
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_14px_35px_rgba(15,23,42,.16)]
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-600
                  active:scale-[.97]
                "
              >
                Discover Odikart

                <FiArrowRight
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* ==================================================
                WHY IMAGE
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="relative"
            >
              <div
                className="
                  anime-float
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-40
                  w-40
                  rounded-full
                  bg-blue-500/15
                  blur-3xl
                "
              />

              <div
                className="
                  anime-float
                  pointer-events-none
                  absolute
                  -bottom-10
                  -left-10
                  h-40
                  w-40
                  rounded-full
                  bg-cyan-400/15
                  blur-3xl
                  [animation-delay:1.5s]
                "
              />

              <div
                className="
                  anime-shine
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-[0_30px_90px_rgba(15,23,42,.10)]
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    bg-slate-950
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90"
                    alt=""
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      opacity-45
                      transition
                      duration-700
                      hover:scale-105
                      sm:h-[500px]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-blue-950/85
                      via-slate-950/70
                      to-cyan-950/80
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,.28),transparent_32%)]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      p-6
                      sm:p-8
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          grid
                          h-12
                          w-12
                          place-items-center
                          rounded-2xl
                          bg-blue-500
                          text-xl
                          text-white
                          shadow-[0_0_35px_rgba(37,99,235,.35)]
                        "
                      >
                        <FiZap />
                      </div>

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/15
                          bg-white/10
                          px-3
                          py-1.5
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[.18em]
                          text-cyan-200
                          backdrop-blur-xl
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            animate-pulse
                            rounded-full
                            bg-cyan-300
                          "
                        />
                        Product mindset
                      </span>
                    </div>

                    <div
                      className="
                        absolute
                        bottom-7
                        left-6
                        right-6
                        sm:bottom-8
                        sm:left-8
                        sm:right-8
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[.22em]
                          text-cyan-300
                        "
                      >
                        Clean ideas. Clear execution.
                      </p>

                      <h3
                        className="
                          mt-3
                          max-w-xl
                          text-3xl
                          font-black
                          leading-tight
                          tracking-[-.04em]
                          text-white
                          sm:text-4xl
                        "
                      >
                        Every screen, API and interaction
                        should have a reason to exist.
                      </h3>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {[
                          "Design",
                          "Engineering",
                          "AI",
                          "Growth",
                        ].map((item) => (
                          <span
                            key={item}
                            className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/10
                              px-3
                              py-1.5
                              text-[10px]
                              font-bold
                              text-white/80
                              backdrop-blur-md
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="320"
                className="
                  anime-shine
                  absolute
                  -bottom-6
                  left-5
                  hidden
                  max-w-[280px]
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/95
                  p-4
                  shadow-[0_20px_55px_rgba(15,23,42,.12)]
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      grid
                      h-10
                      w-10
                      place-items-center
                      rounded-xl
                      bg-cyan-50
                      text-cyan-600
                    "
                  >
                    <FiPlay />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-black
                        text-slate-950
                      "
                    >
                      Built for what comes next.
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-4
                        text-slate-500
                      "
                    >
                      One focused digital experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft bridge */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-24
            bg-gradient-to-t
            from-[#f8fafc]
            via-[#f8fafc]/60
            to-transparent
          "
        />
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section
        className="
          premium-section
          soft-section
          relative
          overflow-hidden
          bg-[#f8fafc]
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-32
        "
      >
        <div
          className="
            light-grid
            pointer-events-none
            absolute
            inset-0
            opacity-50
          "
        />

        <div className="relative mx-auto max-w-6xl">
          <div
            data-aos="fade-up"
            className="
              mx-auto
              max-w-2xl
              text-center
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-3
                py-1.5
                text-[10px]
                font-black
                uppercase
                tracking-[.2em]
                text-blue-600
                shadow-sm
              "
            >
              How we work
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                tracking-[-.05em]
                text-slate-950
                sm:text-4xl
                lg:text-5xl
              "
            >
              Simple process. Serious execution.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              A clear path from first conversation to a
              product that keeps getting better.
            </p>
          </div>

          <div
            className="
              mt-12
              flex
              snap-x
              gap-4
              overflow-x-auto
              pb-4
              md:grid
              md:grid-cols-4
              md:overflow-visible
              md:pb-0
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {process.map(
              ([number, title, text], index) => (
                <div
                  key={number}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="
                    premium-card
                    group
                    relative
                    min-w-[86%]
                    snap-start
                    rounded-[2rem]
                    border
                    border-slate-200/90
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(15,23,42,.055)]
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-200
                    hover:shadow-[0_25px_60px_rgba(37,99,235,.12)]
                    active:scale-[.99]
                    sm:min-w-[55%]
                    md:min-w-0
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        grid
                        h-11
                        w-11
                        place-items-center
                        rounded-2xl
                        bg-blue-600
                        text-xs
                        font-black
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                      "
                    >
                      {number}
                    </div>

                    <span
                      className="
                        text-4xl
                        font-black
                        text-slate-100
                        transition
                        group-hover:text-blue-50
                      "
                    >
                      {number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-7
                      font-bold
                      text-slate-950
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {text}
                  </p>
                </div>
              )
            )}
          </div>

          <div
            data-aos="fade-up"
            className="
              mx-auto
              mt-10
              flex
              max-w-4xl
              flex-col
              items-center
              justify-between
              gap-5
              rounded-[2rem]
              border
              border-slate-200
              bg-white
              p-6
              text-center
              shadow-sm
              sm:flex-row
              sm:text-left
              sm:px-8
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  grid
                  h-12
                  w-12
                  shrink-0
                  place-items-center
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                "
              >
                <FiMessageCircle />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  Have a product in mind?
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                  "
                >
                  Tell us what you want to build and
                  we'll figure out the technology together.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="
                anime-shine
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-2xl
                bg-slate-950
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_12px_30px_rgba(15,23,42,.14)]
                transition
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-600
                active:scale-[.97]
              "
            >
              Let's talk

              <FiArrowRight
                className="
                  transition
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <div className="w-full overflow-hidden">
        <CTA />
      </div>
    </main>
  );
}


