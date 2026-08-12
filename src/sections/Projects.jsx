import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   GITHUB ICON
   Custom SVG because lucide-react doesn't provide brand icons.
============================================================ */

const GithubIcon = ({ size = 16, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        d="
          M12 .5
          C5.65 .5 .5 5.65 .5 12
          c0 5.08 3.29 9.39 7.86 10.91
          .58.11.79-.25.79-.56v-2.17
          c-3.2.7-3.88-1.36-3.88-1.36
          -.53-1.34-1.28-1.7-1.28-1.7
          -1.05-.72.08-.71.08-.71
          1.16.08 1.77 1.19 1.77 1.19
          1.03 1.77 2.7 1.26 3.36.96
          .1-.75.4-1.26.73-1.55
          -2.55-.29-5.23-1.28-5.23-5.69
          0-1.26.45-2.29 1.19-3.1
          -.12-.29-.52-1.46.11-3.05
          0 0 .97-.31 3.18 1.18
          a11.1 11.1 0 0 1 5.79 0
          c2.21-1.5 3.18-1.18 3.18-1.18
          .63 1.59.23 2.76.11 3.05
          .74.81 1.19 1.84 1.19 3.1
          0 4.42-2.69 5.39-5.25 5.68
          .41.36.78 1.08.78 2.18v3.23
          c0 .31.21.67.8.56
          A10.98 10.98 0 0 0 23.5 12
          C23.5 5.65 18.35.5 12 .5Z
        "
      />
    </svg>
  );
};

/* ============================================================
   PROJECT DATA
============================================================ */

const projects = [
  {
    number: "01",
    title: "ÉLANÉ Luxury Fashion",
    category: "REACT / VITE",

    description:
      "Premium luxury fashion landing page featuring cinematic visuals, editorial typography, smooth animations and responsive layouts.",

    image: "/projects/elane-luxury-fashion.jpg.png",

    live: "https://elane-luxury-fashion.vercel.app/",

    github:
      "https://github.com/Khushboo-Singh-22/elane-luxury-fashion",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "SCSS",
      "Framer Motion",
    ],
  },

  {
    number: "02",
    title: "AI Resume Builder",
    category: "MERN / AI",

    description:
      "AI-powered resume builder with ATS scoring, resume templates, live preview, PDF export and AI-powered resume enhancement.",

    image: "/projects/ai-resume-builder.jpg.png",

    live: "https://resume-builder-caqw.vercel.app/",

    github:
      "https://github.com/Khushboo-Singh-22/Resume-Builder",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
    ],
  },

  {
    number: "03",
    title: "E-Commerce Website",
    category: "REACT / VITE",

    description:
      "Modern responsive e-commerce experience with product listing, product details, checkout UI and Indian Rupee price formatting.",

    image: "/projects/ecommerce.jpg.png",

    live:
      "https://e-commerce-website-three-ochre.vercel.app/",

    github:
      "https://github.com/Khushboo-Singh-22/E-Commerce-Website",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "Responsive UI",
    ],
  },

  {
    number: "04",
    title: "Post Web App",
    category: "MERN STACK",

    description:
      "Full-stack social posting platform with image uploads, post creation, feed management and delete functionality.",

    image: "/projects/post-web.jpg.png",

    live: "https://post-web-yq3l.vercel.app/",

    github:
      "https://github.com/Khushboo-Singh-22/Post-web",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "ImageKit",
    ],
  },
];

/* ============================================================
   PROJECTS COMPONENT
============================================================ */

function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /* ======================================================
         HEADER
      ====================================================== */

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      headerTimeline
        .from(".projects-kicker", {
          y: reduceMotion ? 0 : 25,
          opacity: 0,
          duration: reduceMotion ? 0 : 0.7,
          ease: "power3.out",
        })
        .from(
          ".projects-heading",
          {
            yPercent: reduceMotion ? 0 : 100,
            opacity: 0,
            duration: reduceMotion ? 0 : 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".projects-intro",
          {
            y: reduceMotion ? 0 : 25,
            opacity: 0,
            duration: reduceMotion ? 0 : 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        );

      /* ======================================================
         BACKGROUND ORBS
      ====================================================== */

      if (!reduceMotion) {
        gsap.to(".projects-orb-one", {
          x: 100,
          y: 80,
          scale: 1.12,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".projects-orb-two", {
          x: -90,
          y: -70,
          scale: 1.18,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".projects-orb-three", {
          x: 70,
          y: -50,
          scale: 1.1,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ======================================================
         PROJECT CARDS REVEAL
      ====================================================== */

      const projectItems =
        gsap.utils.toArray(".project-item");

      projectItems.forEach((project, index) => {
        const image = project.querySelector(
          ".project-image"
        );

        const content = project.querySelector(
          ".project-content"
        );

        const line = project.querySelector(
          ".project-line"
        );

        const meta = project.querySelector(
          ".project-meta"
        );

        const card = project.querySelector(
          ".project-card"
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .from(project, {
            opacity: 0,
            y: reduceMotion ? 0 : 45,
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : index * 0.06,
            ease: "power4.out",
          })

          .from(
            line,
            {
              scaleX: reduceMotion ? 1 : 0,
              transformOrigin: "left center",
              duration: reduceMotion ? 0 : 0.65,
              ease: "power4.inOut",
            },
            "-=0.45"
          )

          .from(
            meta,
            {
              opacity: 0,
              y: reduceMotion ? 0 : 12,
              duration: reduceMotion ? 0 : 0.4,
              ease: "power3.out",
            },
            "-=0.4"
          )

          .from(
            card,
            {
              opacity: 0,
              y: reduceMotion ? 0 : 25,
              duration: reduceMotion ? 0 : 0.7,
              ease: "power4.out",
            },
            "-=0.3"
          )

          .from(
            content,
            {
              y: reduceMotion ? 0 : 18,
              opacity: 0,
              duration: reduceMotion ? 0 : 0.55,
              ease: "power3.out",
            },
            "-=0.45"
          );
      });

      /* ======================================================
         IMAGE PARALLAX
         Desktop only
      ====================================================== */

      if (
        !reduceMotion &&
        window.matchMedia("(min-width: 1024px)").matches
      ) {
        gsap.utils
          .toArray(".project-image")
          .forEach((image) => {
            gsap.to(image, {
              yPercent: -3,
              ease: "none",

              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            });
          });
      }

      /* ======================================================
         HOVER
      ====================================================== */

      projectItems.forEach((project) => {
        const image = project.querySelector(
          ".project-image"
        );

        const title = project.querySelector(
          ".project-name"
        );

        const arrow = project.querySelector(
          ".project-arrow"
        );

        const overlay = project.querySelector(
          ".project-overlay"
        );

        const card = project.querySelector(
          ".project-card"
        );

        if (
          !image ||
          !title ||
          !arrow ||
          !overlay ||
          !card
        ) {
          return;
        }

        const enter = () => {
          if (reduceMotion) return;

          gsap.to(image, {
            scale: 1.045,
            duration: 0.65,
            ease: "power3.out",
            overwrite: true,
          });

          gsap.to(title, {
            y: -4,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 5,
            y: -5,
            rotate: 5,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(overlay, {
            opacity: 0.08,
            duration: 0.35,
          });

          gsap.to(card, {
            y: -6,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const leave = () => {
          if (reduceMotion) return;

          gsap.to(image, {
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          });

          gsap.to(title, {
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(overlay, {
            opacity: 0.28,
            duration: 0.35,
          });

          gsap.to(card, {
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        project.addEventListener(
          "mouseenter",
          enter
        );

        project.addEventListener(
          "mouseleave",
          leave
        );

        project._enter = enter;
        project._leave = leave;
      });

      /* ======================================================
         MARQUEE
      ====================================================== */

      if (!reduceMotion) {
        gsap.to(".projects-marquee", {
          xPercent: -30,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      }

      /* ======================================================
         REFRESH SCROLLTRIGGER
      ====================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    /* ========================================================
       CLEANUP
    ======================================================== */

    return () => {
      const projectItems =
        gsap.utils.toArray(".project-item");

      projectItems.forEach((project) => {
        if (project._enter) {
          project.removeEventListener(
            "mouseenter",
            project._enter
          );
        }

        if (project._leave) {
          project.removeEventListener(
            "mouseleave",
            project._leave
          );
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#040404]
        px-5
        py-24
        text-white
        sm:px-6
        sm:py-28
        md:px-10
        md:py-36
        lg:py-40
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-[#040404]" />

        {/* ORB ONE */}

        <div
          className="
            projects-orb-one
            absolute
            -left-40
            top-[5%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-emerald-500/[0.035]
            blur-[110px]
            sm:h-[380px]
            sm:w-[380px]
            lg:h-[450px]
            lg:w-[450px]
            lg:blur-[150px]
          "
        />

        {/* ORB TWO */}

        <div
          className="
            projects-orb-two
            absolute
            -right-40
            top-[42%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[115px]
            sm:h-[420px]
            sm:w-[420px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[160px]
          "
        />

        {/* ORB THREE */}

        <div
          className="
            projects-orb-three
            absolute
            bottom-[8%]
            left-[35%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-purple-500/[0.025]
            blur-[105px]
            lg:h-[400px]
            lg:w-[400px]
            lg:blur-[150px]
          "
        />

        {/* DOT GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        {/* LEFT LINE */}

        <div
          className="
            absolute
            left-[8%]
            top-0
            hidden
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.025]
            to-transparent
            lg:block
          "
        />

        {/* RIGHT LINE */}

        <div
          className="
            absolute
            right-[8%]
            top-0
            hidden
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.025]
            to-transparent
            lg:block
          "
        />

        {/* CENTER LINE */}

        <div
          className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.015]
            to-transparent
            md:block
          "
        />

        {/* TOP FADE */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-48
            bg-gradient-to-b
            from-black
            to-transparent
            md:h-64
          "
        />

        {/* BOTTOM FADE */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-black
            to-transparent
            md:h-72
          "
        />

        {/* RADIAL */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.025),transparent_40%)]
          "
        />
      </div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* TOP LINE */}

        <div className="h-px w-full bg-white/10" />

        {/* ====================================================
            KICKER
        ==================================================== */}

        <div
          className="
            projects-kicker
            mt-7
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-white
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-neutral-400
                sm:text-xs
              "
            >
              My Projects
            </span>
          </div>

          <span
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-neutral-600
              sm:block
            "
          >
            04 Projects
          </span>
        </div>

        {/* ====================================================
            HEADING
        ==================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            sm:mt-12
            md:mt-16
          "
        >
          <h2
            className="
              projects-heading
              text-[17vw]
              font-semibold
              leading-[0.8]
              tracking-[-0.075em]
              text-white
              sm:text-[13vw]
              md:text-[9vw]
              lg:text-[7.5vw]
          "
          >
            PROJECTS.
          </h2>
        </div>

        {/* ====================================================
            INTRO
        ==================================================== */}

        <div
          className="
            projects-intro
            mt-8
            grid
            gap-5
            border-t
            border-white/10
            pt-6
            sm:mt-10
            sm:pt-7
            md:mt-14
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <p
            className="
              max-w-2xl
              text-sm
              leading-relaxed
              text-neutral-400
              sm:text-base
              md:text-lg
            "
          >
            A collection of real-world projects built
            with modern technologies, thoughtful
            interfaces and scalable development
            practices.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-neutral-600
            "
          >
            <Code2
              size={15}
              strokeWidth={1.4}
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
              "
            >
              Design × Code
            </span>
          </div>
        </div>

        {/* ====================================================
            PROJECT GRID

            MOBILE  = 1
            TABLET  = 2
            DESKTOP = 4
        ==================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-x-5
            gap-y-14
            sm:mt-16
            sm:grid-cols-2
            sm:gap-x-6
            sm:gap-y-16
            lg:mt-24
            lg:grid-cols-4
            lg:gap-x-5
            lg:gap-y-0
            xl:gap-x-7
          "
        >
          {projects.map((project) => (
            <article
              key={project.number}
              className="
                project-item
                group
                relative
                min-w-0
              "
            >
              {/* TOP LINE */}

              <div
                className="
                  project-line
                  mb-5
                  h-px
                  w-full
                  bg-white/10
                "
              />

              {/* META */}

              <div
                className="
                  project-meta
                  mb-4
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <span
                  className="
                    shrink-0
                    text-[9px]
                    tracking-[0.25em]
                    text-neutral-600
                  "
                >
                  {project.number}
                </span>

                <span
                  className="
                    truncate
                    text-right
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-neutral-600
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* ==================================================
                  CARD
              ================================================== */}

              <div
                className="
                  project-card
                  relative
                  overflow-hidden
                  rounded-sm
                  border
                  border-white/[0.07]
                  bg-white/[0.015]
                  will-change-transform
                  transition-colors
                  duration-500
                "
              >
                {/* ==================================================
                    FULL WIDTH IMAGE
                ================================================== */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} website`}
                  className="
                    group/image
                    relative
                    block
                    w-full
                    overflow-hidden
                    bg-neutral-900
                  "
                >
                  <img
                    src={project.image}
                    alt={`${project.title} live website preview`}
                    loading="lazy"
                    decoding="async"
                    className="
                      project-image
                      block
                      h-auto
                      w-full
                      object-cover
                      object-top
                      will-change-transform
                    "
                    onError={(event) => {
                      event.currentTarget.style.opacity = "0";
                    }}
                  />

                  {/* DARK OVERLAY */}

                  <div
                    className="
                      project-overlay
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black
                      opacity-30
                    "
                  />

                  {/* BOTTOM GRADIENT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-24
                      bg-gradient-to-t
                      from-black/60
                      to-transparent
                    "
                  />

                  {/* LIVE BADGE */}

                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      bg-black/40
                      px-2.5
                      py-1.5
                      backdrop-blur-md
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        animate-pulse
                        rounded-full
                        bg-green-400
                      "
                    />

                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-white/80
                      "
                    >
                      Live
                    </span>
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      absolute
                      bottom-3
                      right-3
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/40
                      text-white
                      backdrop-blur-md
                      transition-transform
                      duration-300
                      group-hover/image:scale-110
                    "
                  >
                    <ArrowUpRight
                      className="project-arrow"
                      size={16}
                      strokeWidth={1.3}
                    />
                  </div>
                </a>

                {/* ==================================================
                    CONTENT UNDER IMAGE
                ================================================== */}

                <div
                  className="
                    project-content
                    p-4
                    sm:p-5
                    lg:p-4
                    xl:p-5
                  "
                >
                  {/* CATEGORY */}

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-neutral-600
                    "
                  >
                    {project.category}
                  </span>

                  {/* TITLE */}

                  <h3
                    className="
                      project-name
                      mt-3
                      text-2xl
                      font-medium
                      leading-[0.95]
                      tracking-[-0.055em]
                      text-white
                      sm:text-[27px]
                      lg:text-[25px]
                      xl:text-[29px]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      text-xs
                      leading-relaxed
                      text-neutral-500
                      sm:text-[13px]
                      lg:text-xs
                      xl:text-[13px]
                    "
                  >
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-x-3
                      gap-y-2
                    "
                  >
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            text-[7px]
                            uppercase
                            tracking-[0.13em]
                            text-neutral-600
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  {/* LINKS */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      items-center
                      gap-4
                    "
                  >
                    {/* LIVE */}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/link
                        flex
                        items-center
                        gap-1.5
                        border-b
                        border-white/20
                        pb-1.5
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-white
                        transition-all
                        duration-300
                        hover:border-white
                      "
                    >
                      View Live

                      <ArrowUpRight
                        size={12}
                        className="
                          transition-transform
                          duration-300
                          group-hover/link:translate-x-1
                          group-hover/link:-translate-y-1
                        "
                      />
                    </a>

                    {/* GITHUB */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/github
                        flex
                        items-center
                        gap-1.5
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-neutral-600
                        transition-colors
                        duration-300
                        hover:text-white
                      "
                    >
                      GitHub

                      <GithubIcon
                        size={13}
                        className="
                          transition-transform
                          duration-300
                          group-hover/github:scale-110
                        "
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ====================================================
            FINAL LINE
        ==================================================== */}

        <div
          className="
            mt-14
            h-px
            w-full
            bg-white/10
            sm:mt-16
            lg:mt-20
          "
        />

        {/* ====================================================
            MARQUEE
        ==================================================== */}

        <div
          className="
            mt-14
            overflow-hidden
            border-y
            border-white/10
            py-5
            sm:mt-16
            lg:mt-20
          "
        >
          <div
            className="
              projects-marquee
              flex
              w-max
              items-center
              gap-8
            "
          >
            {[
              "ÉLANÉ LUXURY FASHION",
              "AI RESUME BUILDER",
              "E-COMMERCE",
              "POST WEB",
              "REACT",
              "MERN",
              "JAVASCRIPT",
              "FULL STACK",
              "ÉLANÉ LUXURY FASHION",
              "AI RESUME BUILDER",
              "E-COMMERCE",
              "POST WEB",
            ].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="
                  flex
                  items-center
                  gap-8
                "
              >
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-neutral-600
                    sm:text-[10px]
                    sm:tracking-[0.3em]
                  "
                >
                  {item}
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-neutral-700
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================
            CTA
        ==================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-6
            sm:mt-16
            lg:mt-20
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <Sparkles
                size={15}
                className="text-neutral-600"
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-600
                  sm:text-[9px]
                "
              >
                More Experiments
              </span>
            </div>

            <h3
              className="
                mt-4
                max-w-2xl
                text-2xl
                font-medium
                leading-tight
                tracking-[-0.04em]
                text-white
                sm:text-3xl
                md:text-4xl
              "
            >
              Always building, learning and
              experimenting.
            </h3>
          </div>

          <a
            href="#contact"
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              border-b
              border-white/25
              pb-2
              text-sm
              text-white
              transition-colors
              duration-300
              hover:border-white
            "
          >
            Let's work together

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
        </div>
      </div>
    </section>
  );
}

export default Projects;