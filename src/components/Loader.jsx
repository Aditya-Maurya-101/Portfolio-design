import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const portfolioRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      // ==============================================
      // INITIAL STATES
      // ==============================================

      gsap.set(logoRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(portfolioRef.current, {
        opacity: 0,
        y: 15,
      });

      gsap.set(progressRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // ==============================================
      // LOADER TIMELINE
      // ==============================================

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });

      // LOGO
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      })

        // PORTFOLIO TEXT
        .to(
          portfolioRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.35"
        )

        // PROGRESS
        .to(
          counter,
          {
            value: 100,
            duration: 2.3,
            ease: "power2.inOut",

            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent =
                  Math.round(counter.value);
              }

              if (progressRef.current) {
                gsap.set(progressRef.current, {
                  scaleX: counter.value / 100,
                });
              }
            },
          },
          "-=0.1"
        )

        // SMALL PAUSE
        .to({}, {
          duration: 0.2,
        })

        // EXIT
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        });
    }, loaderRef);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#030303]
        text-white
      "
    >
      {/* ==============================================
          BACKGROUND GLOW
      ============================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* ==============================================
          SUBTLE GRID
      ============================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* ==============================================
          MAIN CONTENT
      ============================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[1500px]
          flex-col
          items-center
          px-6
        "
      >
        {/* ==========================================
            LOGO
        ========================================== */}

        <div
          ref={logoRef}
          className="
            text-center
            text-[15vw]
            font-semibold
            leading-none
            tracking-[-0.075em]
            sm:text-7xl
            md:text-8xl
          "
        >
          KHUSHBOO
          <span className="text-neutral-500">.</span>
        </div>

        {/* ==========================================
            PORTFOLIO
        ========================================== */}

        <div
          ref={portfolioRef}
          className="
            mt-3
            flex
            items-center
            gap-3
            sm:mt-4
          "
        >
          <span className="h-px w-7 bg-white/20 sm:w-10" />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.45em]
              text-neutral-500
              sm:text-[9px]
              sm:tracking-[0.5em]
            "
          >
            Portfolio
          </span>

          <span className="h-px w-7 bg-white/20 sm:w-10" />
        </div>

        {/* ==========================================
            LOADING SECTION
        ========================================== */}

        <div
          className="
            mt-12
            w-full
            max-w-[380px]
            sm:mt-14
            sm:max-w-[440px]
          "
        >
          {/* TOP INFO */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.35em]
                text-neutral-600
                sm:text-[8px]
              "
            >
              Loading Experience
            </span>

            <span
              className="
                text-xs
                font-medium
                tabular-nums
                text-neutral-400
              "
            >
              <span ref={counterRef}>0</span>
              <span className="ml-0.5 text-neutral-600">
                %
              </span>
            </span>
          </div>

          {/* PROGRESS BAR */}

          <div
            className="
              mt-3
              h-px
              w-full
              overflow-hidden
              bg-white/10
            "
          >
            <div
              ref={progressRef}
              className="
                h-full
                w-full
                bg-white
                will-change-transform
              "
            />
          </div>
        </div>
      </div>

      {/* ==============================================
          BOTTOM LEFT
      ============================================== */}

      <div
        className="
          absolute
          bottom-6
          left-6
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-neutral-700
          sm:bottom-8
          sm:left-8
        "
      >
        Creative Developer
      </div>

      {/* ==============================================
          BOTTOM RIGHT
      ============================================== */}

      <div
        className="
          absolute
          bottom-6
          right-6
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-neutral-700
          sm:bottom-8
          sm:right-8
        "
      >
        2026
      </div>
    </div>
  );
}

export default Loader;