import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Layers3,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);

  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "REST API", "JWT"],
    },
    {
      number: "03",
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQL"],
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "Postman",
    "GSAP",
    "Lenis",
    "Vite",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==================================================
      // MAIN REVEAL
      // ==================================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".skills-label", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })

        .from(
          ".skills-title",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        )

        .from(
          ".skill-row",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.4"
        )

        .from(
          ".fullstack-box",
          {
            scale: 0.88,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.4"
        )

        .from(
          ".tools-section",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // ==================================================
      // FULL STACK CARD
      // ==================================================

      // Outer orbit
      gsap.to(".fullstack-orbit", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      // Inner orbit opposite direction
      gsap.to(".fullstack-orbit-inner", {
        rotate: -360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      // Main glow breathing
      gsap.to(".fullstack-glow", {
        scale: 1.35,
        opacity: 0.75,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Second glow
      gsap.to(".fullstack-glow-two", {
        scale: 1.25,
        opacity: 0.45,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Center icon floating
      gsap.to(".fullstack-icon", {
        y: -8,
        rotate: 4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Center content floating
      gsap.to(".fullstack-content", {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Card breathing
      gsap.to(".fullstack-box", {
        borderColor: "rgba(255,255,255,0.16)",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==================================================
      // FLOATING PARTICLES
      // ==================================================

      gsap.utils.toArray(".fullstack-particle").forEach((particle, index) => {
        gsap.to(particle, {
          y: index % 2 === 0 ? -18 : 18,
          x: index % 2 === 0 ? 10 : -10,
          opacity: 0.25,
          duration: 2 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.25,
        });
      });

      // ==================================================
      // SKILL ROW HOVER
      // ==================================================

      const rows = gsap.utils.toArray(".skill-row");

      rows.forEach((row) => {
        const arrow = row.querySelector(".skill-arrow");

        const enter = () => {
          gsap.to(row, {
            x: 12,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 6,
            y: -6,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(row, {
            x: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);

        row._enter = enter;
        row._leave = leave;
      });
    }, sectionRef);

    return () => {
      const rows = gsap.utils.toArray(".skill-row");

      rows.forEach((row) => {
        if (row._enter) {
          row.removeEventListener("mouseenter", row._enter);
        }

        if (row._leave) {
          row.removeEventListener("mouseleave", row._leave);
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-transparent
        px-5
        py-28
        text-white
        sm:px-6
        md:px-10
        md:py-36
        lg:py-44
      "
    >
      {/* ==================================================
          FIXED BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          bg-black/70
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/30
          via-black/60
          to-black
        "
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="skills-label flex items-center gap-4">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-neutral-400
              sm:text-xs
            "
          >
            Skills & Expertise
          </span>
        </div>

        <div className="mt-10 overflow-hidden md:mt-14">
          <h2
            className="
              skills-title
              text-[14vw]
              font-semibold
              leading-[0.82]
              tracking-[-0.07em]
              text-white
              sm:text-[11vw]
              md:text-[9vw]
              lg:text-[7vw]
            "
          >
            WHAT I
          </h2>
        </div>

        <div className="overflow-hidden">
          <h2
            className="
              skills-title
              text-[14vw]
              font-semibold
              leading-[0.82]
              tracking-[-0.07em]
              text-neutral-500
              sm:text-[11vw]
              md:text-[9vw]
              lg:text-[7vw]
            "
          >
            WORK WITH.
          </h2>
        </div>

        {/* ==================================================
            DIVIDER
        ================================================== */}

        <div className="mt-12 h-px w-full bg-white/10 md:mt-16" />

        {/* ==================================================
            MAIN SKILLS
        ================================================== */}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

          {/* ==================================================
              LEFT
          ================================================== */}

          <div>
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.number}
                  className="
                    skill-row
                    group
                    border-b
                    border-white/10
                    py-7
                    transition-colors
                    duration-300
                    md:py-9
                  "
                >
                  <div className="flex items-start justify-between gap-5">

                    <div className="flex gap-5 md:gap-8">

                      <span
                        className="
                          pt-1
                          text-[10px]
                          tracking-[0.2em]
                          text-neutral-600
                        "
                      >
                        {group.number}
                      </span>

                      <div>

                        <div className="flex items-center gap-3">

                          <Icon
                            size={19}
                            strokeWidth={1.5}
                            className="
                              text-neutral-500
                              transition-colors
                              duration-300
                              group-hover:text-white
                            "
                          />

                          <h3
                            className="
                              text-2xl
                              font-medium
                              tracking-tight
                              text-white
                              md:text-3xl
                            "
                          >
                            {group.title}
                          </h3>

                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="
                                text-xs
                                text-neutral-500
                                transition-colors
                                duration-300
                                group-hover:text-neutral-300
                              "
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    <ArrowUpRight
                      className="
                        skill-arrow
                        mt-1
                        shrink-0
                        text-neutral-600
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                      size={20}
                    />

                  </div>
                </div>
              );
            })}
          </div>

          {/* ==================================================
              FULL STACK CARD
          ================================================== */}

          <div
            className="
              fullstack-box
              relative
              flex
              min-h-[400px]
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.035]
              backdrop-blur-xl
              md:min-h-[500px]
            "
          >

            {/* ==================================================
                LARGE OUTER GLOW
            ================================================== */}

            <div
              className="
                fullstack-glow
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-48
                w-48
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.08]
                blur-[90px]
              "
            />

            {/* ==================================================
                SECOND GLOW
            ================================================== */}

            <div
              className="
                fullstack-glow-two
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-32
                w-32
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.12]
                blur-[60px]
              "
            />

            {/* ==================================================
                OUTER ORBIT
            ================================================== */}

            <div
              className="
                fullstack-orbit
                pointer-events-none
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-dashed
                border-white/10
                md:h-[350px]
                md:w-[350px]
              "
            />

            {/* ==================================================
                INNER ORBIT
            ================================================== */}

            <div
              className="
                fullstack-orbit-inner
                pointer-events-none
                absolute
                h-[190px]
                w-[190px]
                rounded-full
                border
                border-white/[0.06]
                md:h-[250px]
                md:w-[250px]
              "
            />

            {/* ==================================================
                PARTICLES
            ================================================== */}

            <span
              className="
                fullstack-particle
                absolute
                left-[18%]
                top-[28%]
                h-1.5
                w-1.5
                rounded-full
                bg-white/60
              "
            />

            <span
              className="
                fullstack-particle
                absolute
                right-[20%]
                top-[35%]
                h-1
                w-1
                rounded-full
                bg-white/50
              "
            />

            <span
              className="
                fullstack-particle
                absolute
                bottom-[25%]
                left-[25%]
                h-1
                w-1
                rounded-full
                bg-white/40
              "
            />

            <span
              className="
                fullstack-particle
                absolute
                bottom-[20%]
                right-[25%]
                h-1.5
                w-1.5
                rounded-full
                bg-white/50
              "
            />

            {/* ==================================================
                CORNER LABELS
            ================================================== */}

            <span
              className="
                absolute
                left-6
                top-6
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-600
              "
            >
              MERN
            </span>

            <span
              className="
                absolute
                right-6
                top-6
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-600
              "
            >
              STACK
            </span>

            <span
              className="
                absolute
                bottom-6
                left-6
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-600
              "
            >
              01 / 06
            </span>

            {/* ==================================================
                CENTER CONTENT
            ================================================== */}

            <div
              className="
                fullstack-content
                relative
                z-10
                text-center
              "
            >

              {/* ICON */}

              <div
                className="
                  fullstack-icon
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-white
                  shadow-[0_0_40px_rgba(255,255,255,0.06)]
                "
              >
                <Layers3
                  size={28}
                  strokeWidth={1.3}
                />
              </div>

              {/* LABEL */}

              <p
                className="
                  mt-7
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-neutral-500
                "
              >
                Core Expertise
              </p>

              {/* TITLE */}

              <h3
                className="
                  mt-3
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  md:text-5xl
                "
              >
                FULL STACK
              </h3>

              {/* SUBTITLE */}

              <p
                className="
                  mt-2
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                "
              >
                Development
              </p>

            </div>

          </div>
        </div>

        {/* ==================================================
            TOOLS
        ================================================== */}

        <div className="tools-section mt-20 md:mt-28">

          <div className="flex items-center gap-4">

            <Sparkles
              size={16}
              className="text-neutral-500"
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-neutral-500
              "
            >
              Tools & Workflow
            </span>

          </div>

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              border-t
              border-white/10
              pt-7
            "
          >
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="
                  text-sm
                  text-neutral-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span className="mr-2 text-neutral-700">
                  0{index + 1}
                </span>

                {tool}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;