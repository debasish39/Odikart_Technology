import React from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiLayers,
} from "react-icons/fi";

import { IoSparklesOutline } from "react-icons/io5";

import { projects } from "../data/projects";

/* ============================================================
   HERO IMAGE
============================================================ */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=90";

/* ============================================================
   WORK PAGE
============================================================ */

export default function Work() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          min-h-[680px]
          overflow-hidden
          bg-black
          sm:min-h-[720px]
          lg:min-h-[820px]
        "
      >

        {/* ==================================================
            HERO IMAGE
        ================================================== */}

        <div className="absolute inset-0">

          <img
            src={HERO_IMAGE}
            alt="Technology team working together"
            className="
              hero-bg-image
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* ==================================================
              NATURAL IMAGE OVERLAY

              No blue/cyan filter.
              Only neutral black for readability.
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-black/20
            "
          />

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
              from-black/25
              to-transparent
            "
          />

          {/* ==================================================
              NATURAL WHITE BOTTOM BLEND
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-44
              bg-gradient-to-t
              from-white
              via-white/55
              to-transparent
            "
          />
        </div>

        {/* ==================================================
            VERY SUBTLE GRID

            Kept extremely light so the image remains
            the main visual.
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
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
            items-center
            px-4
            pb-28
            pt-32
            sm:min-h-[720px]
            sm:px-6
            lg:min-h-[820px]
            lg:px-10
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-12
              lg:grid-cols-[1fr_.7fr]
            "
          >

            {/* ==================================================
                LEFT CONTENT
            ================================================== */}

            <div
              data-aos="fade-right"
              className="max-w-3xl"
            >

              {/* ==================================================
                  EYEBROW
              ================================================== */}

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
                  tracking-[0.22em]
                  text-white/90
                  backdrop-blur-xl
                "
              >
                <span className="relative flex h-2 w-2">
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
                      h-2
                      w-2
                      rounded-full
                      bg-white
                    "
                  />
                </span>

                Our Work
              </div>

              {/* ==================================================
                  SMALL HEADING
              ================================================== */}

              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="
                  mt-8
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.28em]
                  text-white/70
                "
              >
                Selected digital experiences
              </p>

              {/* ==================================================
                  MAIN HEADING
              ================================================== */}

              <h1
                data-aos="fade-up"
                data-aos-delay="160"
                className="
                  mt-4
                  max-w-4xl
                  text-[3.2rem]
                  font-black
                  leading-[0.94]
                  tracking-[-0.065em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[5.5rem]
                "
              >
                Ideas turned into{" "}

                <span
                  className="
                    text-white
                  "
                >
                  products.
                </span>
              </h1>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}

              <p
                data-aos="fade-up"
                data-aos-delay="230"
                className="
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/75
                  sm:text-base
                  lg:text-lg
                "
              >
                A selection of digital product concepts and
                platforms built around useful experiences,
                thoughtful interfaces and practical
                technology.
              </p>

              {/* ==================================================
                  HERO BUTTONS
              ================================================== */}

            <div
  data-aos="fade-up"
  data-aos-delay="300"
  className="
    mt-8
    flex
    w-full
    max-w-full
    items-center
    gap-2
    overflow-hidden
    sm:w-fit
    sm:gap-3
  "
>
  {/* Start a Project */}
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

      shadow-[0_12px_32px_rgba(37,99,235,.25)]

      transition-all
      duration-300

      hover:-translate-y-0.5
      hover:bg-blue-500
      hover:shadow-[0_16px_38px_rgba(37,99,235,.32)]

      active:scale-[.97]

      focus:outline-none
      focus:ring-4
      focus:ring-blue-500/20

      sm:min-w-[145px]
      sm:flex-none
      sm:px-5
      sm:py-3
      sm:text-xs

      md:min-w-[155px]
      md:px-6
      md:py-3.5
      md:text-sm
    "
  >
    <span className="truncate">
      Start a project
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


  {/* Explore Services */}
  <Link
    to="/services"
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
      border-white/20

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
      hover:border-white/30
      hover:bg-white/15

      active:scale-[.97]

      focus:outline-none
      focus:ring-4
      focus:ring-white/10

      sm:min-w-[145px]
      sm:flex-none
      sm:px-5
      sm:py-3
      sm:text-xs

      md:min-w-[155px]
      md:px-6
      md:py-3.5
      md:text-sm
    "
  >
    <span className="truncate">
      Explore services
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
</div>

              {/* ==================================================
                  PILLS
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-delay="360"
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-2
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white/80
                    backdrop-blur-xl
                  "
                >
                  <FiLayers className="text-white/80" />

                  Digital products
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white/80
                    backdrop-blur-xl
                  "
                >
                  <IoSparklesOutline className="text-white/80" />

                  Modern experiences
                </span>
              </div>
            </div>

            {/* ==================================================
                RIGHT HERO VISUAL
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-delay="180"
              className="
                relative
                mx-auto
                hidden
                w-full
                max-w-md
                lg:block
              "
            >

              {/* ==================================================
                  VERY SUBTLE NEUTRAL GLOW
              ================================================== */}

              <div
                className="
                  anime-float
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-48
                  w-48
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              {/* ==================================================
                  GLASS CARD
              ================================================== */}

              <div
                className="
                  anime-shine
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/20
                  bg-white/10
                  p-2
                  shadow-[0_35px_100px_rgba(0,0,0,.30)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    border
                    border-white/10
                    bg-black/60
                  "
                >

                  {/* ==================================================
                      IMAGE PREVIEW
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-56
                      overflow-hidden
                    "
                  >
                    <img
                      src={HERO_IMAGE}
                      alt="Digital product development"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        hover:scale-105
                      "
                    />

                    {/* Neutral bottom readability */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-24
                        bg-gradient-to-t
                        from-black/65
                        to-transparent
                      "
                    />

                    {/* Small image label */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-white/20
                        bg-black/45
                        px-3
                        py-1.5
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-white/90
                        backdrop-blur-md
                      "
                    >
                      Odikart Technology
                    </div>
                  </div>

                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}

                  <div className="p-6">

                    <div className="flex items-center justify-between">

                      <div>
                        <p
                          className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-white/60
                          "
                        >
                          Product studio
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-white/40
                          "
                        >
                          Ideas → experiences
                        </p>
                      </div>

                      <div
                        className="
                          grid
                          h-10
                          w-10
                          place-items-center
                          rounded-xl
                          bg-blue-600
                          text-white
                          shadow-[0_0_30px_rgba(37,99,235,.28)]
                        "
                      >
                        <IoSparklesOutline />
                      </div>
                    </div>

                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-black
                        leading-tight
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      Built for people.

                      <br />

                      <span className="text-white/75">
                        Designed to grow.
                      </span>
                    </h3>

                    <div
                      className="
                        mt-6
                        grid
                        grid-cols-3
                        gap-2
                      "
                    >
                      {["Web", "Mobile", "AI"].map(
                        (item) => (
                          <div
                            key={item}
                            className="
                              rounded-xl
                              border
                              border-white/10
                              bg-white/5
                              px-3
                              py-3
                              text-center
                              text-[10px]
                              font-bold
                              text-white/70
                            "
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  FLOATING BADGE
              ================================================== */}

              <div
                data-aos="zoom-in"
                data-aos-delay="550"
                className="
                  absolute
                  -bottom-6
                  -left-6
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  shadow-[0_20px_55px_rgba(15,23,42,.18)]
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
                      bg-blue-50
                      text-blue-600
                    "
                  >
                    <FiBriefcase />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-black
                        text-slate-950
                      "
                    >
                      Digital products
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-slate-500
                      "
                    >
                      Built with purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              HERO BOTTOM SPACE
          ================================================== */}

          <div className="h-4" />
        </div>
      </section>

      {/* ======================================================
          PROJECT SHOWCASE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f8fafc]
          px-4
          py-16
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
        "
      >

        {/* ==================================================
            LIGHT GRID
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-70
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* ==================================================
            SOFT ACCENT
        ================================================== */}

        <div
          className="
            anime-float
            pointer-events-none
            absolute
            left-[-8rem]
            top-40
            h-72
            w-72
            rounded-full
            bg-blue-500/10
            blur-[100px]
          "
        />

        <div className="relative mx-auto max-w-7xl">

          {/* ==================================================
              SECTION INTRO
          ================================================== */}

          <div
            data-aos="fade-up"
            className="
              mb-10
              flex
              flex-col
              gap-5
              sm:mb-12
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div className="max-w-2xl">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-100
                  bg-white
                  px-3
                  py-1.5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-blue-600
                  shadow-sm
                "
              >
                <FiBriefcase />

                Selected work
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  tracking-[-0.05em]
                  text-slate-950
                  sm:text-4xl
                "
              >
                Built around{" "}

                <span className="text-blue-600">
                  real ideas.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                Explore some of the products and digital
                experiences we've designed around usability,
                clarity and modern technology.
              </p>
            </div>

            {/* Portfolio counter */}

            <div
              className="
                hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                shadow-sm
                md:block
              "
            >
              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                Portfolio
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-bold
                  text-slate-900
                "
              >
                {projects.length}{" "}
                {projects.length === 1
                  ? "project"
                  : "projects"}
              </p>
            </div>
          </div>

          {/* ==================================================
              PROJECT GRID
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {

              const description =
                project.description ||
                project.desc ||
                "A thoughtfully designed digital product focused on useful experiences.";

              const category =
                project.category ||
                project.type ||
                project.tags?.[0] ||
                "Digital Product";

              const image =
                project.image ||
                project.imageUrl ||
                project.thumbnail ||
                project.cover;

              return (
                <article
                  key={project.title}
                  data-aos={
                    index % 2 === 0
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-delay={
                    (index % 4) * 80
                  }
                  className="group"
                >
                  <div
                    className="
                      anime-shine
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_15px_55px_rgba(15,23,42,.06)]
                      transition
                      duration-500
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-[0_25px_70px_rgba(37,99,235,.1)]
                    "
                  >

                    {/* ==================================================
                        PROJECT IMAGE
                    ================================================== */}

                    <div
                      className="
                        relative
                        h-[250px]
                        overflow-hidden
                        bg-slate-100
                        sm:h-[300px]
                      "
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={`${project.title} — Odikart Technology`}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-700
                            ease-out
                            group-hover:scale-[1.055]
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-full
                            items-center
                            justify-center
                            bg-gradient-to-br
                            from-blue-50
                            via-slate-50
                            to-cyan-50
                          "
                        >
                          <FiLayers
                            className="
                              text-5xl
                              text-blue-200
                            "
                          />
                        </div>
                      )}

                      {/* Image overlay */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-slate-950/40
                          via-transparent
                          to-transparent
                          opacity-60
                        "
                      />

                      {/* ==================================================
                          TOP INFORMATION
                      ================================================== */}

                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            rounded-full
                            border
                            border-white/20
                            bg-slate-950/60
                            px-3
                            py-1.5
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.16em]
                            text-white
                            backdrop-blur-md
                          "
                        >
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span
                          className="
                            max-w-[180px]
                            truncate
                            rounded-full
                            border
                            border-white/20
                            bg-white/80
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            text-slate-800
                            backdrop-blur-md
                          "
                        >
                          {category}
                        </span>
                      </div>

                      {/* Hover arrow */}

                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          grid
                          h-11
                          w-11
                          translate-y-2
                          place-items-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/90
                          text-slate-900
                          opacity-0
                          shadow-lg
                          backdrop-blur-md
                          transition
                          duration-300
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <FiArrowUpRight />
                      </div>

                      {/* Image bottom blend */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          bottom-0
                          h-20
                          bg-gradient-to-t
                          from-white
                          to-transparent
                        "
                      />
                    </div>

                    {/* ==================================================
                        PROJECT CONTENT
                    ================================================== */}

                    <div className="p-5 sm:p-6">

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                      >
                        <div className="min-w-0">

                          <h3
                            className="
                              text-xl
                              font-black
                              tracking-[-0.035em]
                              text-slate-950
                              sm:text-2xl
                            "
                          >
                            {project.title}
                          </h3>

                          <p
                            className="
                              mt-3
                              max-w-xl
                              text-sm
                              leading-6
                              text-slate-500
                            "
                          >
                            {description}
                          </p>
                        </div>

                        <div
                          className="
                            hidden
                            h-10
                            w-10
                            shrink-0
                            place-items-center
                            rounded-xl
                            bg-blue-50
                            text-blue-600
                            sm:grid
                          "
                        >
                          <IoSparklesOutline />
                        </div>
                      </div>

                      {/* ==================================================
                          TAGS
                      ================================================== */}

                      {Array.isArray(project.tags) &&
                        project.tags.length > 0 && (
                          <div
                            className="
                              mt-5
                              flex
                              flex-wrap
                              gap-2
                            "
                          >
                            {project.tags
                              .slice(0, 4)
                              .map((tag) => (
                                <span
                                  key={tag}
                                  className="
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    text-slate-500
                                    transition
                                    group-hover:border-blue-100
                                    group-hover:bg-blue-50/60
                                    group-hover:text-blue-600
                                  "
                                >
                                  {tag}
                                </span>
                              ))}
                          </div>
                        )}

                      {/* ==================================================
                          BOTTOM ROW
                      ================================================== */}

                      <div
                        className="
                          mt-6
                          flex
                          items-center
                          justify-between
                          gap-4
                          border-t
                          border-slate-100
                          pt-5
                        "
                      >
                        <div>
                          <p
                            className="
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.16em]
                              text-slate-400
                            "
                          >
                            Project
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              font-bold
                              text-slate-700
                            "
                          >
                            Digital experience
                          </p>
                        </div>

                        <button
                          type="button"
                          className="
                            group/button
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2.5
                            text-xs
                            font-bold
                            text-slate-700
                            shadow-sm
                            transition
                            hover:-translate-y-0.5
                            hover:border-blue-200
                            hover:text-blue-600
                            active:scale-[0.97]
                          "
                        >
                          View project

                          <FiArrowRight
                            className="
                              transition
                              group-hover/button:translate-x-1
                            "
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

    
    </main>
  );
}

