import React from "react";
import { FiArrowRight, FiZap } from "react-icons/fi";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  showIcon = true,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className={`
        relative
        ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      `}
    >
      {/* ======================================================
          SMALL AMBIENT GLOW
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          -top-10
          h-24
          w-40
          rounded-full
          bg-blue-500/10
          blur-[50px]
          ${center ? "left-1/2 -translate-x-1/2" : "left-0"}
        `}
      />

      {/* ======================================================
          EYEBROW
      ====================================================== */}

      {eyebrow && (
        <div
          className={`
            relative
            mb-4
            flex
            items-center
            gap-2

            ${center ? "justify-center" : "justify-start"}
          `}
        >
          {/* Left line */}

          {!center && (
            <span
              className="
                hidden
                h-px
                w-7
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                sm:block
              "
            />
          )}

          {/* Eyebrow pill */}

          <div
            className="
              anime-shine
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-blue-200
              bg-blue-50/80
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.20em]
              text-blue-700
              shadow-sm
              backdrop-blur-xl
              sm:text-[10px]
            "
          >
            {showIcon && (
              <span
                className="
                  grid
                  h-4
                  w-4
                  place-items-center
                  rounded-full
                  bg-blue-100
                  text-blue-600
                "
              >
                <FiZap className="text-[8px]" />
              </span>
            )}

            {eyebrow}
          </div>

          {/* Right line */}

          {!center && (
            <span
              className="
                hidden
                h-px
                w-7
                bg-gradient-to-r
                from-cyan-400
                to-transparent
                sm:block
              "
            />
          )}
        </div>
      )}

      {/* ======================================================
          TITLE
      ====================================================== */}

      <h2
        className="
          relative
          text-3xl
          font-black
          leading-[1.08]
          tracking-[-0.045em]
          text-slate-950
          sm:text-4xl
          lg:text-[2.7rem]
        "
      >
        {title}
      </h2>

      {/* ======================================================
          DESCRIPTION
      ====================================================== */}

      {description && (
        <p
          className={`
            relative
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
            sm:leading-7

            ${center ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}

      {/* ======================================================
          DECORATIVE BOTTOM INDICATOR
      ====================================================== */}

      <div
        className={`
          relative
          mt-5
          flex
          items-center
          gap-2

          ${center ? "justify-center" : "justify-start"}
        `}
      >
        <span
          className="
            h-px
            w-8
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
          "
        />

        <span
          className="
            relative
            h-1.5
            w-1.5
            rounded-full
            bg-blue-500
            shadow-[0_0_12px_rgba(37,99,235,.7)]
          "
        >
          <span
            className="
              absolute
              inset-[-3px]
              rounded-full
              border
              border-blue-300/40
            "
          />
        </span>

        <span
          className="
            h-px
            w-14
            bg-gradient-to-r
            from-blue-300
            to-transparent
          "
        />
      </div>

      {/* ======================================================
          OPTIONAL MICRO ARROW
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          hidden
          opacity-20
          sm:block
          ${center ? "right-0 top-2" : "right-2 top-2"}
        `}
      >
        <FiArrowRight className="text-3xl text-blue-500" />
      </div>
    </div>
  );
}