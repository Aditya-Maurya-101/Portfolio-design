import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   CUSTOM GITHUB SVG ICON
============================================================ */

const GithubIcon = ({ size = 18, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M12 0.5
          C5.65 0.5 .5 5.65 .5 12
          C.5 17.08 3.79 21.39 8.36 22.91
          C8.94 23.02 9.15 22.66 9.15 22.35
          V20.18
          C5.95 20.88 5.27 18.82 5.27 18.82
          C4.74 17.48 3.99 17.12 3.99 17.12
          C2.94 16.4 4.07 16.41 4.07 16.41
          C5.23 16.49 5.84 17.6 5.84 17.6
          C6.87 19.37 8.54 18.86 9.2 18.56
          C9.3 17.81 9.6 17.3 9.93 17.01
          C7.38 16.72 4.7 15.73 4.7 11.32
          C4.7 10.06 5.15 9.03 5.89 8.22
          C5.77 7.93 5.37 6.76 6 5.17
          C6 5.17 6.97 4.86 9.18 6.35
          C10.02 6.12 10.91 6 12 6
          C13.09 6 13.98 6.12 14.82 6.35
          C17.03 4.86 18 5.17 18 5.17
          C18.63 6.76 18.23 7.93 18.11 8.22
          C18.85 9.03 19.3 10.06 19.3 11.32
          C19.3 15.74 16.61 16.71 14.05 17
          C14.46 17.36 14.83 18.08 14.83 19.18
          V22.41
          C14.83 22.72 15.04 23.08 15.63 22.97
          C20.2 21.45 23.5 17.08 23.5 12
          C23.5 5.65 18.35 0.5 12 0.5Z
        "
      />
    </svg>
  );
};

/* ============================================================
   CUSTOM LINKEDIN SVG ICON
============================================================ */

const LinkedinIcon = ({ size = 18, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="
          M20.45 20.45H16.9V14.88
          C16.9 13.55 16.87 11.84 15.05 11.84
          C13.2 11.84 12.91 13.29 12.91 14.78
          V20.45H9.34V9H12.76V10.56H12.81
          C13.29 9.66 14.45 8.71 16.18 8.71
          C19.79 8.71 20.46 11.08 20.46 14.17
          V20.45H20.45ZM5.32 7.43
          A2.07 2.07 0 1 1 5.32 3.29
          A2.07 2.07 0 0 1 5.32 7.43ZM3.54 20.45H7.11V9H3.54V20.45ZM22.22 0H1.77
          C0.79 0 0.01 0.78 0.01 1.74
          V22.26C0.01 23.22 0.79 24 1.77 24
          H22.22C23.2 24 23.99 23.22 23.99 22.26
          V1.74C23.99 0.78 23.2 0 22.22 0Z
        "
      />
    </svg>
  );
};

/* ============================================================
   FOOTER
============================================================ */

function Footer() {
  const footerRef = useRef(null);

  /* ============================================================
     GSAP ANIMATIONS
  ============================================================ */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /* ======================================================
         FOOTER CONTENT
      ====================================================== */

      gsap.from(".footer-content", {
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 20,
        duration: reduceMotion ? 0 : 0.7,
        ease: "power4.out",

        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      /* ======================================================
         FOOTER LINKS
      ====================================================== */

      const links = gsap.utils.toArray(".footer-link");

      links.forEach((link, index) => {
        gsap.from(link, {
          opacity: reduceMotion ? 1 : 0,
          y: reduceMotion ? 0 : 10,
          duration: reduceMotion ? 0 : 0.4,
          delay: reduceMotion ? 0 : index * 0.06,
          ease: "power3.out",

          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* ======================================================
         BACK TO TOP HOVER
      ====================================================== */

      const topButton = footerRef.current?.querySelector(
        ".footer-top-button"
      );

      const handleMouseEnter = () => {
        if (reduceMotion || !topButton) return;

        gsap.to(topButton, {
          y: -4,
          scale: 1.03,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        if (reduceMotion || !topButton) return;

        gsap.to(topButton, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      if (topButton) {
        topButton.addEventListener(
          "mouseenter",
          handleMouseEnter
        );

        topButton.addEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }

      return () => {
        if (topButton) {
          topButton.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );

          topButton.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      };
    }, footerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* ============================================================
     BACK TO TOP
  ============================================================ */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="
        relative
        overflow-hidden
        bg-[#040404]
        px-5
        pb-4
        pt-8
        text-white
        sm:px-6
        sm:pb-5
        sm:pt-10
        md:px-10
        md:pt-12
      "
    >
      {/* ======================================================
          TOP BLUR TRANSITION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/2
          z-0
          h-48
          w-[90%]
          -translate-x-1/2
          rounded-full
          bg-white/[0.045]
          blur-[100px]
          sm:-top-24
          sm:h-56
          sm:w-[75%]
          lg:-top-28
          lg:h-64
          lg:w-[65%]
          lg:blur-[120px]
        "
      />

      {/* ======================================================
          TOP DARK FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-32
          bg-gradient-to-b
          from-[#040404]
          via-[#040404]/80
          to-transparent
        "
      />

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* CENTER GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[220px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.018]
            blur-[90px]
          "
        />

        {/* LEFT SOFT GLOW */}

        <div
          className="
            absolute
            -left-32
            top-[35%]
            h-[240px]
            w-[240px]
            rounded-full
            bg-emerald-500/[0.018]
            blur-[100px]
          "
        />

        {/* RIGHT SOFT GLOW */}

        <div
          className="
            absolute
            -right-32
            top-[45%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-blue-500/[0.015]
            blur-[110px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
            [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        {/* BOTTOM FADE */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-20
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* ======================================================
          MAIN
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        {/* ====================================================
            CONTENT
        ==================================================== */}

        <div
          className="
            footer-content
            grid
            gap-7
            py-7
            sm:py-8
            md:grid-cols-[1.25fr_1fr]
            md:gap-12
            lg:py-10
          "
        >
          {/* ==================================================
              BRAND
          ================================================== */}

          <div>
            <p
              className="
                text-[7px]
                uppercase
                tracking-[0.35em]
                text-neutral-600
              "
            >
              Portfolio
            </p>

            <h2
              className="
                mt-3
                max-w-3xl
                text-[10vw]
                font-semibold
                leading-[0.82]
                tracking-[-0.075em]
                text-white
                sm:text-[8vw]
                md:text-[5.5vw]
                lg:text-[5vw]
              "
            >
              KHUSHBOO.
            </h2>

            <p
              className="
                mt-4
                max-w-lg
                text-xs
                leading-relaxed
                text-neutral-500
                sm:text-sm
              "
            >
              Software developer focused on building
              thoughtful digital experiences through
              clean code, modern technology and
              purposeful design.
            </p>
          </div>

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-6
              sm:grid-cols-3
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {/* EXPLORE */}

            <div>
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-600
                "
              >
                Explore
              </p>

              <div
                className="
                  mt-3
                  flex
                  flex-col
                  gap-2
                "
              >
                <a
                  href="#home"
                  className="
                    footer-link
                    w-fit
                    text-xs
                    text-neutral-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="
                    footer-link
                    w-fit
                    text-xs
                    text-neutral-400
                    transition-colors
                    hover:text-white
                  "
                >
                  About
                </a>

                <a
                  href="#skills"
                  className="
                    footer-link
                    w-fit
                    text-xs
                    text-neutral-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  className="
                    footer-link
                    w-fit
                    text-xs
                    text-neutral-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="
                    footer-link
                    w-fit
                    text-xs
                    text-neutral-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Contact
                </a>
              </div>
            </div>

            {/* SOCIAL */}

            <div>
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-600
                "
              >
                Connect
              </p>

              <div
                className="
                  mt-3
                  flex
                  flex-col
                  gap-2
                "
              >
                {/* GITHUB */}

                <a
                  href="https://github.com/Khushboo-Singh-22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    footer-link
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-xs
                    text-neutral-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <GithubIcon
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span>GitHub</span>

                  <ArrowUpRight
                    size={10}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/khushboo-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    footer-link
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-xs
                    text-neutral-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <LinkedinIcon
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span>LinkedIn</span>

                  <ArrowUpRight
                    size={10}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:khushboosingh1322@gmail.com"
                  className="
                    footer-link
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-xs
                    text-neutral-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <Mail size={15} />

                  <span>Email</span>

                  <ArrowUpRight
                    size={10}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </div>
            </div>

            {/* AVAILABILITY */}

            <div>
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-600
                "
              >
                Status
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-emerald-400
                  "
                />

                <span
                  className="
                    text-xs
                    text-neutral-400
                  "
                >
                  Available for work
                </span>
              </div>

              <p
                className="
                  mt-2
                  max-w-[180px]
                  text-[10px]
                  leading-relaxed
                  text-neutral-600
                "
              >
                Open to internships,
                freelance projects and
                software development
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* ====================================================
            BOTTOM BAR
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-3
            py-4
            sm:py-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-neutral-700
            "
          >
            © {new Date().getFullYear()} Khushboo Singh
          </p>

          {/* CENTER */}

          <p
            className="
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-neutral-700
            "
          >
            Design × Code × Experience
          </p>

          {/* BACK TO TOP */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              footer-top-button
              group
              flex
              w-fit
              items-center
              gap-2
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-neutral-500
              transition-colors
              hover:text-white
            "
          >
            Back To Top

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                transition-colors
                group-hover:border-white/25
                group-hover:bg-white/[0.06]
              "
            >
              <ArrowUp size={11} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;