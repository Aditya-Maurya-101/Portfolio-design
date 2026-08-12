import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      revealTimeline
        .from(".about-label", {
          y: 25,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".about-heading-line",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".about-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.4"
        )
        .from(
          ".about-description",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".about-stat",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // DIGITAL CONTINUOUS ANIMATION

      const digitalAnimation = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      digitalAnimation
        .to(".digital-heading", {
          x: 10,
          y: -3,
          skewX: -1,
          letterSpacing: "0.01em",
          duration: 2.8,
          ease: "sine.inOut",
        })
        .to(".digital-heading", {
          x: -7,
          y: 2,
          skewX: 0.8,
          letterSpacing: "-0.015em",
          duration: 3.2,
          ease: "sine.inOut",
        })
        .to(".digital-heading", {
          x: 0,
          y: 0,
          skewX: 0,
          letterSpacing: "-0.065em",
          duration: 2.8,
          ease: "sine.inOut",
        });

      // DIGITAL OPACITY

      gsap.to(".digital-heading", {
        opacity: 0.65,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
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
      {/* BACKGROUND */}

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

      {/* DARK OVERLAY */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          bg-black/65
        "
      />

      {/* GRADIENT OVERLAY */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/30
          via-black/55
          to-black
        "
      />

      {/* BACKGROUND GRID */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[2]
          opacity-[0.05]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* LABEL */}

        <div className="about-label mb-10 flex items-center gap-4 md:mb-14">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-neutral-400
              sm:text-xs
            "
          >
            About Me
          </span>
        </div>

        {/* HEADING */}

        <div className="about-heading-wrapper">

          {/* BUILDING */}

          <div className="overflow-hidden">
            <h2
              className="
                about-heading-line
                w-fit
                text-[16vw]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
                text-white
                sm:text-[14vw]
                md:text-[10vw]
                lg:text-[7vw]
                will-change-transform
              "
            >
              BUILDING
            </h2>
          </div>

          {/* DIGITAL */}

          <div className="overflow-hidden">
            <h2
              className="
                digital-heading
                about-heading-line
                w-fit
                text-[16vw]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
                text-neutral-500
                sm:text-[14vw]
                md:text-[10vw]
                lg:text-[7vw]
                will-change-transform
              "
            >
              DIGITAL
            </h2>
          </div>

          {/* EXPERIENCES */}

          <div className="overflow-hidden">
            <h2
              className="
                about-heading-line
                w-fit
                text-[16vw]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
                text-white
                sm:text-[14vw]
                md:text-[10vw]
                lg:text-[7vw]
                will-change-transform
              "
            >
              EXPERIENCES.
            </h2>
          </div>

        </div>

        {/* DIVIDER */}

        <div className="about-line mt-12 h-px w-full bg-white/15 md:mt-16" />

        {/* DESCRIPTION + STATS */}

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-24">

          {/* DESCRIPTION */}

          <div className="about-description">

            <p
              className="
                max-w-2xl
                text-base
                leading-relaxed
                text-neutral-200
                sm:text-lg
                md:text-xl
              "
            >
              I'm a Full Stack MERN Developer focused on building
              responsive, scalable and user-friendly web applications.
              I enjoy turning ideas into functional digital experiences
              using modern technologies, clean architecture and thoughtful UI.
            </p>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-relaxed
                text-neutral-400
                sm:text-base
              "
            >
              My experience includes developing AI-powered applications,
              REST APIs, authentication systems, dashboards and real-world
              products. I've also worked as a Flutter Developer Intern,
              giving me exposure to both web and mobile development.
            </p>

            {/* EXPLORE MY WORK */}

            <a
              href="#projects"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                border-b
                border-white/30
                pb-2
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-white
              "
            >
              Explore my work

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">

            {/* PROJECTS */}

            <div className="about-stat">
              <h3
                className="
                  text-4xl
                  font-light
                  tracking-tight
                  sm:text-5xl
                "
              >
                4+
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  sm:text-xs
                "
              >
                Projects Built
              </p>
            </div>

            {/* EXPERIENCE */}

            <div className="about-stat">
              <h3
                className="
                  text-4xl
                  font-light
                  tracking-tight
                  sm:text-5xl
                "
              >
                3
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  sm:text-xs
                "
              >
                Months Experience
              </p>
            </div>

            {/* MERN */}

            <div className="about-stat">
              <h3
                className="
                  text-4xl
                  font-light
                  tracking-tight
                  sm:text-5xl
                "
              >
                MERN
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  sm:text-xs
                "
              >
                Full Stack
              </p>
            </div>

            {/* AI */}

            <div className="about-stat">
              <h3
                className="
                  text-4xl
                  font-light
                  tracking-tight
                  sm:text-5xl
                "
              >
                AI
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  sm:text-xs
                "
              >
                Powered Solutions
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;