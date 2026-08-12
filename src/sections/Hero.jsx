import {
  ArrowDown,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      // ==============================================
      // HERO CONTENT ANIMATION
      // ==============================================

      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-title-line",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-scroll",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      // ==============================================
      // CENTER GLOW
      // ==============================================

      gsap.to(".hero-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==============================================
      // FLOATING DEVELOPER TEXT
      // ==============================================

      gsap.to(".hero-floating", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==============================================
      // MOUSE WHEEL
      // ==============================================

      gsap.to(".mouse-wheel", {
        y: 5,
        opacity: 0.4,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // ==============================================
      // BACKGROUND IMAGE SLOW ZOOM
      // ==============================================

      gsap.to(".hero-background", {
        scale: 1.06,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==============================================
      // SIDE GLOW ANIMATION
      // ==============================================

      gsap.to(".hero-side-glow", {
        opacity: 0.75,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* ==================================================
          HERO BACKGROUND IMAGE
      ================================================== */}

      <div
        className="
          hero-background
          pointer-events-none
          absolute
          inset-0
          z-0
          scale-[1.01]
          bg-cover
          bg-center
          bg-no-repeat
          will-change-transform
        "
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* ==================================================
          DARK OVERLAY
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-black/55
        "
      />

      {/* ==================================================
          MAIN GRADIENT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-b
          from-black/25
          via-black/45
          to-black
        "
      />

      {/* ==================================================
          LEFT SIDE WHITE BLUR
      ================================================== */}

      <div
        className="
          hero-side-glow
          pointer-events-none
          absolute
          left-[-5%]
          top-0
          z-[3]
          h-full
          w-[28%]
          bg-gradient-to-r
          from-white/[0.07]
          via-white/[0.035]
          to-transparent
          blur-[55px]
          opacity-60
        "
      />

      {/* ==================================================
          RIGHT SIDE WHITE BLUR
      ================================================== */}

      <div
        className="
          hero-side-glow
          pointer-events-none
          absolute
          right-[-5%]
          top-0
          z-[3]
          h-full
          w-[28%]
          bg-gradient-to-l
          from-white/[0.07]
          via-white/[0.035]
          to-transparent
          blur-[55px]
          opacity-60
        "
      />

      {/* ==================================================
          TOP WHITE FADE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-[3]
          h-[24%]
          w-full
          bg-gradient-to-b
          from-white/[0.055]
          via-white/[0.025]
          to-transparent
          blur-[35px]
        "
      />

      {/* ==================================================
          BOTTOM BLACK FADE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-[3]
          h-[30%]
          w-full
          bg-gradient-to-t
          from-black
          via-black/80
          to-transparent
          blur-[25px]
        "
      />

      {/* ==================================================
          TOP LEFT CORNER GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[-120px]
          z-[3]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.045]
          blur-[110px]
        "
      />

      {/* ==================================================
          TOP RIGHT CORNER GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[-120px]
          z-[3]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.045]
          blur-[110px]
        "
      />

      {/* ==================================================
          BOTTOM LEFT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-[-100px]
          z-[3]
          h-[350px]
          w-[350px]
          rounded-full
          bg-white/[0.025]
          blur-[110px]
        "
      />

      {/* ==================================================
          BOTTOM RIGHT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          right-[-100px]
          z-[3]
          h-[350px]
          w-[350px]
          rounded-full
          bg-white/[0.025]
          blur-[110px]
        "
      />

      {/* ==================================================
          CENTER SOFT WHITE GLOW
      ================================================== */}

      <div
        className="
          hero-glow
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[3]
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.03]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* ==================================================
          BACKGROUND GRID
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[4]
          opacity-[0.02]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          justify-center
          px-5
          pb-32
          pt-32
          sm:px-6
          md:px-10
          lg:pt-36
        "
      >
        {/* ==================================================
            INTRO
        ================================================== */}

        <div className="hero-badge mb-7 flex items-center gap-3 sm:mb-8">
          <span className="h-2 w-2 rounded-full bg-white" />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-neutral-300
              sm:text-xs
              sm:tracking-[0.3em]
              md:text-sm
            "
          >
            Hello, I'm Khushboo
          </p>
        </div>

        {/* ==================================================
            TITLE
        ================================================== */}

        <div className="overflow-hidden">
          <h1
            className="
              hero-title-line
              whitespace-nowrap
              text-[16vw]
              font-semibold
              leading-[0.9]
              tracking-[-0.065em]
              text-white
              sm:text-[14vw]
              sm:leading-[0.85]
              md:text-[12vw]
              lg:text-[10vw]
              lg:leading-[0.82]
            "
          >
            FULL STACK
          </h1>
        </div>

        {/* ==================================================
            SECOND TITLE
        ================================================== */}

        <div className="mt-3 overflow-hidden sm:mt-0">
          <div className="hero-floating">
            <h1
              className="
                hero-title-line
                whitespace-nowrap
                text-[16vw]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
                text-neutral-400
                sm:text-[14vw]
                sm:leading-[0.85]
                md:text-[12vw]
                lg:text-[10vw]
                lg:leading-[0.82]
              "
            >
              DEVELOPER
              <span className="text-white">.</span>
            </h1>
          </div>
        </div>

        {/* ==================================================
            DESCRIPTION + BUTTONS
        ================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            justify-between
            gap-8
            sm:mt-12
            lg:mt-16
            lg:flex-row
            lg:items-end
          "
        >
          {/* DESCRIPTION */}

          <p
            className="
              hero-description
              max-w-xl
              text-sm
              leading-relaxed
              text-neutral-300
              sm:text-base
              md:text-lg
            "
          >
            I build modern, scalable and interactive web
            experiences using clean code, thoughtful
            design and powerful technologies.
          </p>

          {/* BUTTONS */}

          <div className="hero-buttons flex flex-wrap gap-3">
            {/* VIEW PROJECTS */}

            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-105
                sm:px-6
              "
            >
              View Projects

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            {/* VIEW RESUME */}

            <a
              href="https://drive.google.com/file/d/1H0TIEUvSuFOm2iPRTcilyCYmIIpkxl9C/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/20
                px-5
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
                sm:px-6
              "
            >
              View Resume

              <FileText
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>
          </div>
        </div>

        {/* ==================================================
            SCROLL TO EXPLORE
        ================================================== */}

        <a
          href="#about"
          className="
            hero-scroll
            absolute
            bottom-22
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-3
            whitespace-nowrap
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-neutral-400
            transition-colors
            duration-300
            hover:text-white
            md:bottom-12
            md:left-10
            md:translate-x-0
          "
        >
          {/* MOUSE ICON */}

          <span
            className="
              relative
              flex
              h-7
              w-5
              items-start
              justify-center
              rounded-full
              border
              border-neutral-500
              pt-1
            "
          >
            <span
              className="
                mouse-wheel
                h-1.5
                w-1
                rounded-full
                bg-white
              "
            />
          </span>

          <span>Scroll to explore</span>

          <ArrowDown
            size={14}
            className="animate-bounce"
          />
        </a>
      </div>

      {/* ==================================================
          CORNER TEXT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-5
          hidden
          text-right
          md:block
          lg:right-10
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-neutral-400
          "
        >
          Creative Developer
        </p>

        <p
          className="
            mt-1
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Based in India
        </p>
      </div>
    </section>
  );
}

export default Hero;