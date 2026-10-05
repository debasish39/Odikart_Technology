
import React from "react";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-slate-200
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
        active:scale-[0.99]
      "
    >
      {/* ======================================================
          ANIME SHINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[120%]
          top-0
          z-20
          h-full
          w-[45%]
          skew-x-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
          opacity-0
          transition-all
          duration-1000
          group-hover:left-[140%]
          group-hover:opacity-100
        "
      />

      {/* ======================================================
          PROJECT VISUAL
      ====================================================== */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          bg-slate-100
        "
      >
        {/* Background gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-600
            via-indigo-500
            to-cyan-400
            opacity-[0.08]
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:opacity-[0.13]
          "
        />

        {/* Radial blue glow */}

        <div
          className="
            absolute
            -left-10
            -top-10
            h-48
            w-48
            rounded-full
            bg-blue-500/20
            blur-[70px]
            transition-all
            duration-700
            group-hover:scale-125
          "
        />

        {/* Cyan glow */}

        <div
          className="
            absolute
            -bottom-16
            -right-10
            h-48
            w-48
            rounded-full
            bg-cyan-400/20
            blur-[70px]
            transition-all
            duration-700
            group-hover:scale-125
          "
        />

        {/* ==================================================
            FAKE PRODUCT UI PREVIEW
        ================================================== */}

        <div
          className="
            absolute
            inset-x-6
            bottom-5
            top-5
            overflow-hidden
            rounded-2xl
            border
            border-white/60
            bg-white/80
            shadow-[0_15px_40px_rgba(15,23,42,0.12)]
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.16)]
          "
        >
          {/* Browser/App top bar */}

          <div
            className="
              flex
              h-8
              items-center
              gap-1.5
              border-b
              border-slate-200/80
              bg-white/80
              px-3
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

            <div
              className="
                ml-2
                h-2
                max-w-[100px]
                flex-1
                rounded-full
                bg-slate-100
              "
            />
          </div>

          {/* Fake dashboard */}

          <div className="grid h-[calc(100%-2rem)] grid-cols-[42px_1fr]">
            {/* Sidebar */}

            <div
              className="
                border-r
                border-slate-200/70
                bg-slate-50/70
                p-2
              "
            >
              <div
                className="
                  mb-3
                  grid
                  h-6
                  w-6
                  place-items-center
                  rounded-lg
                  bg-blue-600
                  text-[8px]
                  font-black
                  text-white
                "
              >
                O
              </div>

              <div className="space-y-2">
                <span className="block h-1.5 rounded-full bg-blue-200" />
                <span className="block h-1.5 rounded-full bg-slate-200" />
                <span className="block h-1.5 rounded-full bg-slate-200" />
                <span className="block h-1.5 rounded-full bg-slate-200" />
              </div>
            </div>

            {/* Main UI */}

            <div className="p-3">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <span className="block h-2 w-20 rounded-full bg-slate-800/80" />
                  <span className="mt-1.5 block h-1.5 w-12 rounded-full bg-slate-200" />
                </div>

                <span className="h-5 w-5 rounded-full bg-blue-100" />
              </div>

              {/* Cards */}

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-lg bg-blue-50" />
                <div className="h-12 rounded-lg bg-cyan-50" />
                <div className="h-12 rounded-lg bg-indigo-50" />
              </div>

              {/* Chart */}

              <div
                className="
                  relative
                  mt-3
                  h-16
                  overflow-hidden
                  rounded-lg
                  border
                  border-slate-100
                  bg-white
                "
              >
                <div className="absolute inset-x-2 bottom-3 h-px bg-slate-100" />
                <div className="absolute inset-x-2 bottom-6 h-px bg-slate-100" />

                <svg
                  viewBox="0 0 200 60"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 48 C25 42, 35 45, 55 32 C75 18, 82 38, 102 27 C120 17, 135 25, 150 15 C170 5, 185 16, 200 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-500"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            PROJECT NUMBER
        ================================================== */}

        <span
          className="
            absolute
            left-4
            top-4
            z-10
            grid
            h-9
            w-9
            place-items-center
            rounded-xl
            border
            border-white/70
            bg-white/75
            text-[10px]
            font-black
            text-slate-700
            shadow-sm
            backdrop-blur-xl
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ==================================================
            CATEGORY
        ================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-4
            z-10
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-white/70
            bg-white/85
            px-3
            py-1.5
            text-[10px]
            font-bold
            text-blue-700
            shadow-lg
            backdrop-blur-xl
          "
        >
          <FiLayers className="text-blue-500" />

          {project.category}
        </div>

        {/* ==================================================
            OPEN ARROW
        ================================================== */}

        <div
          className="
            absolute
            bottom-4
            right-4
            z-10
            grid
            h-10
            w-10
            place-items-center
            rounded-xl
            bg-slate-950
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:bg-blue-600
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
        </div>
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="p-5 sm:p-6">
        {/* Small label */}

        <div
          className="
            mb-3
            flex
            items-center
            gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-slate-400
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

          Featured Project
        </div>

        {/* Title */}

        <h3
          className="
            text-lg
            font-bold
            tracking-tight
            text-slate-950
            transition-colors
            duration-300
            group-hover:text-blue-700
            sm:text-xl
          "
        >
          {project.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2.5
            line-clamp-3
            text-sm
            leading-6
            text-slate-600
          "
        >
          {project.description}
        </p>

        {/* Bottom information */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-4
          "
        >
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-slate-400
            "
          >
            Odikart Technology
          </span>

          <span
            className="
              flex
              items-center
              gap-1
              text-xs
              font-bold
              text-blue-600
              transition-all
              duration-300
              group-hover:gap-2
            "
          >
            View Project

            <FiArrowUpRight />
          </span>
        </div>
      </div>

      {/* ======================================================
          BOTTOM GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
          opacity-0
          transition-all
          duration-500
          group-hover:w-[70%]
          group-hover:opacity-100
        "
      />
    </article>
  );
}
