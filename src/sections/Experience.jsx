import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Smartphone,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   EXPERIENCE DATA
============================================================ */

const experience = {
  number: "01",
  company: "DIGILEARNING TECH PVT. LTD.",
  role: "Flutter Developer Intern",
  location: "Thane, Maharashtra",
  duration: "Oct 2025 — Jan 2026",
  type: "INTERNSHIP",

  description:
    "Worked on cross-platform mobile applications using Flutter and Dart, integrating REST APIs and Firebase services while focusing on performance, authentication and real-device testing.",

  highlights: [
    "Developed and deployed 1+ cross-platform mobile applications using Flutter (Dart).",
    "Built a real-time weather application using external REST APIs for dynamic data fetching and display.",
    "Implemented Firebase Authentication with Email/Password for secure user login and session management.",
    "Integrated Firebase Firestore / Realtime Database for efficient data storage and real-time updates.",
    "Tested and debugged applications on real Android devices.",
  ],

  technologies: [
    "Flutter",
    "Dart",
    "REST APIs",
    "Firebase",
    "Firestore",
    "Realtime Database",
  ],
};

/* ============================================================
   EXPERIENCE COMPONENT
============================================================ */

function Experience() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /* ======================================================
         HEADER ANIMATION
      ====================================================== */

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      headerTimeline
        .from(".experience-kicker", {
          y: reduceMotion ? 0 : 25,
          opacity: 0,
          duration: reduceMotion ? 0 : 0.7,
          ease: "power3.out",
        })
        .from(
          ".experience-heading",
          {
            yPercent: reduceMotion ? 0 : 100,
            opacity: 0,
            duration: reduceMotion ? 0 : 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".experience-intro",
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
        gsap.to(".experience-orb-one", {
          x: 100,
          y: 80,
          scale: 1.15,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".experience-orb-two", {
          x: -90,
          y: -70,
          scale: 1.2,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ======================================================
         MAIN EXPERIENCE CARD
      ====================================================== */

      const card = sectionRef.current.querySelector(
        ".experience-card"
      );

      const line = sectionRef.current.querySelector(
        ".experience-line"
      );

      const content = sectionRef.current.querySelector(
        ".experience-content"
      );

      const highlights = gsap.utils.toArray(
        ".experience-highlight"
      );

      const techItems = gsap.utils.toArray(
        ".experience-tech"
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from(card, {
          opacity: 0,
          y: reduceMotion ? 0 : 60,
          duration: reduceMotion ? 0 : 0.9,
          ease: "power4.out",
        })
        .from(
          line,
          {
            scaleY: reduceMotion ? 1 : 0,
            transformOrigin: "top center",
            duration: reduceMotion ? 0 : 0.9,
            ease: "power4.inOut",
          },
          "-=0.6"
        )
        .from(
          content,
          {
            opacity: 0,
            y: reduceMotion ? 0 : 25,
            duration: reduceMotion ? 0 : 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .from(
          highlights,
          {
            opacity: 0,
            x: reduceMotion ? 0 : -20,
            duration: reduceMotion ? 0 : 0.5,
            stagger: reduceMotion ? 0 : 0.08,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          techItems,
          {
            opacity: 0,
            y: reduceMotion ? 0 : 12,
            duration: reduceMotion ? 0 : 0.4,
            stagger: reduceMotion ? 0 : 0.05,
            ease: "power3.out",
          },
          "-=0.25"
        );

      /* ======================================================
         ICON FLOAT
      ====================================================== */

      if (!reduceMotion) {
        gsap.to(".experience-icon", {
          y: -8,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ======================================================
         CARD HOVER
      ====================================================== */

      const experienceCard =
        sectionRef.current.querySelector(
          ".experience-card"
        );

      const icon =
        sectionRef.current.querySelector(
          ".experience-icon"
        );

      const arrow =
        sectionRef.current.querySelector(
          ".experience-arrow"
        );

      const glow =
        sectionRef.current.querySelector(
          ".experience-glow"
        );

      const handleEnter = () => {
        if (reduceMotion) return;

        gsap.to(experienceCard, {
          y: -6,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(icon, {
          rotate: 5,
          scale: 1.08,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(arrow, {
          x: 6,
          y: -6,
          rotate: 5,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(glow, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        if (reduceMotion) return;

        gsap.to(experienceCard, {
          y: 0,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(icon, {
          rotate: 0,
          scale: 1,
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

        gsap.to(glow, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      experienceCard.addEventListener(
        "mouseenter",
        handleEnter
      );

      experienceCard.addEventListener(
        "mouseleave",
        handleLeave
      );

      /* ======================================================
         CLEANUP
      ====================================================== */

      return () => {
        experienceCard.removeEventListener(
          "mouseenter",
          handleEnter
        );

        experienceCard.removeEventListener(
          "mouseleave",
          handleLeave
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
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
            experience-orb-one
            absolute
            -left-40
            top-[8%]
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
            experience-orb-two
            absolute
            -right-40
            bottom-[10%]
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
            bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.025),transparent_42%)]
          "
        />
      </div>

      {/* ======================================================
          CONTENT
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
        {/* TOP LINE */}

        <div className="h-px w-full bg-white/10" />

        {/* ====================================================
            KICKER
        ==================================================== */}

        <div
          className="
            experience-kicker
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
                sm:tracking-[0.35em]
              "
            >
              Professional Journey
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
            01 Experience
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
              experience-heading
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
            EXPERIENCE.
          </h2>
        </div>

        {/* ====================================================
            INTRO
        ==================================================== */}

        <div
          className="
            experience-intro
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
            Practical development experience building
            cross-platform applications, integrating APIs
            and Firebase services, and working with
            real-world application workflows.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-neutral-600
            "
          >
            <BriefcaseBusiness
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
              Work × Growth
            </span>
          </div>
        </div>

        {/* ====================================================
            EXPERIENCE CARD
        ==================================================== */}

        <div className="mt-12 sm:mt-16 md:mt-24">
          <article
            className="
              experience-card
              group
              relative
              overflow-hidden
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.018]
              shadow-2xl
              transition-colors
              duration-500
              hover:border-white/[0.14]
            "
          >
            {/* GLOW */}

            <div
              className="
                experience-glow
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-emerald-500/[0.07]
                opacity-0
                blur-[100px]
              "
            />

            {/* TOP META */}

            <div
              className="
                relative
                flex
                flex-col
                gap-4
                border-b
                border-white/[0.07]
                p-5
                sm:p-7
                md:flex-row
                md:items-center
                md:justify-between
                md:px-9
                md:py-6
              "
            >
              <div className="flex items-center gap-4">
                {/* ICON */}

                <div
                  className="
                    experience-icon
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-white
                    sm:h-12
                    sm:w-12
                  "
                >
                  <Smartphone
                    size={19}
                    strokeWidth={1.3}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.28em]
                      text-neutral-600
                    "
                  >
                    {experience.type}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-neutral-400
                    "
                  >
                    {experience.duration}
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-neutral-600
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  {experience.location}
                </span>
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div
              className="
                relative
                grid
                lg:grid-cols-[0.8fr_1.2fr]
              "
            >
              {/* LEFT */}

              <div
                className="
                  experience-content
                  border-b
                  border-white/[0.07]
                  p-5
                  sm:p-7
                  lg:border-b-0
                  lg:border-r
                  lg:p-10
                  xl:p-12
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-600
                  "
                >
                  {experience.number} / Career
                </span>

                <h3
                  className="
                    mt-5
                    max-w-xl
                    text-3xl
                    font-medium
                    leading-[0.95]
                    tracking-[-0.055em]
                    text-white
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  {experience.role}
                </h3>

                <p
                  className="
                    mt-5
                    text-sm
                    uppercase
                    tracking-[0.08em]
                    text-neutral-400
                  "
                >
                  {experience.company}
                </p>

                <p
                  className="
                    mt-6
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-neutral-500
                    sm:text-base
                  "
                >
                  {experience.description}
                </p>

                {/* ICON ROW */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-neutral-600
                  "
                >
                  <Code2
                    size={16}
                    strokeWidth={1.3}
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.28em]
                    "
                  >
                    Mobile Development
                  </span>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  relative
                  p-5
                  sm:p-7
                  lg:p-10
                  xl:p-12
                "
              >
                {/* SECTION LABEL */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-neutral-600
                    "
                  >
                    Responsibilities
                  </span>

                  <ArrowUpRight
                    className="
                      experience-arrow
                      text-neutral-600
                    "
                    size={18}
                    strokeWidth={1.2}
                  />
                </div>

                {/* HIGHLIGHTS */}

                <div className="mt-7 space-y-5">
                  {experience.highlights.map(
                    (item, index) => (
                      <div
                        key={item}
                        className="
                          experience-highlight
                          group/highlight
                          flex
                          gap-4
                        "
                      >
                        <span
                          className="
                            mt-1
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            text-[7px]
                            text-neutral-600
                            transition-colors
                            duration-300
                            group-hover/highlight:border-white/30
                            group-hover/highlight:text-white
                          "
                        >
                          0{index + 1}
                        </span>

                        <p
                          className="
                            text-sm
                            leading-relaxed
                            text-neutral-400
                            transition-colors
                            duration-300
                            group-hover/highlight:text-neutral-200
                            sm:text-[15px]
                          "
                        >
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* TECHNOLOGIES */}

                <div
                  className="
                    mt-10
                    border-t
                    border-white/[0.07]
                    pt-7
                  "
                >
                  <div className="flex items-center gap-3">
                    <Database
                      size={14}
                      strokeWidth={1.2}
                      className="text-neutral-600"
                    />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-neutral-600
                      "
                    >
                      Technologies
                    </span>
                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-x-5
                      gap-y-3
                    "
                  >
                    {experience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            experience-tech
                            text-[8px]
                            uppercase
                            tracking-[0.17em]
                            text-neutral-500
                            transition-colors
                            duration-300
                            hover:text-white
                            sm:text-[9px]
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM BAR */}

            <div
              className="
                relative
                flex
                flex-col
                gap-4
                border-t
                border-white/[0.07]
                px-5
                py-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-7
                lg:px-10
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-neutral-600
                "
              >
                <Sparkles
                  size={14}
                  strokeWidth={1.2}
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                  "
                >
                  Real World Experience
                </span>
              </div>

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-700
                "
              >
                {experience.duration}
              </span>
            </div>
          </article>
        </div>

        {/* ====================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:mt-20
          "
        >
          <p
            className="
              max-w-xl
              text-xs
              leading-relaxed
              text-neutral-600
              sm:text-sm
            "
          >
            Building practical experience through
            real applications, modern development tools
            and continuous technical learning.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-neutral-600
              "
            >
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;