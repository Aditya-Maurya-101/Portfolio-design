import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Code2,
  Layout,
  Server,
  Database,
  Smartphone,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);

  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites built with clean and scalable code.",
      icon: Code2,
      tags: "React · JavaScript · Tailwind",
    },
    {
      number: "02",
      title: "UI / UX Development",
      description:
        "Thoughtful interfaces with strong visual hierarchy, smooth interactions and responsive layouts.",
      icon: Layout,
      tags: "UI · UX · Responsive",
    },
    {
      number: "03",
      title: "Backend Development",
      description:
        "Reliable APIs and server-side systems designed for scalable real-world applications.",
      icon: Server,
      tags: "Node.js · Express · REST API",
    },
    {
      number: "04",
      title: "Database Solutions",
      description:
        "Efficient data structures and database solutions for modern web applications.",
      icon: Database,
      tags: "MongoDB · MySQL · SQL",
    },
    {
      number: "05",
      title: "Responsive Design",
      description:
        "Seamless experiences that adapt naturally across mobile, tablet and desktop.",
      icon: Smartphone,
      tags: "Mobile · Tablet · Desktop",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==================================================
      // HEADER REVEAL
      // ==================================================

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      headerTimeline
        .from(".services-top-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.1,
          ease: "power4.inOut",
        })
        .from(
          ".services-label",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".services-heading-line",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".services-intro",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // ==================================================
      // BACKGROUND ORB ANIMATIONS
      // ==================================================

      gsap.to(".services-orb-1", {
        x: 160,
        y: 100,
        scale: 1.2,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".services-orb-2", {
        x: -140,
        y: -100,
        scale: 1.25,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".services-orb-3", {
        x: 100,
        y: -80,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==================================================
      // BACKGROUND BEAMS
      // ==================================================

      gsap.to(".services-beam-1", {
        x: 100,
        rotate: 8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".services-beam-2", {
        x: -100,
        rotate: -6,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==================================================
      // CENTER GLOW
      // ==================================================

      gsap.to(".services-center-glow", {
        scale: 1.2,
        opacity: 0.65,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==================================================
      // HEADING MOTION
      // ==================================================

      gsap.to(".services-heading-accent", {
        x: 18,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ==================================================
      // SERVICE ROW REVEAL
      // ==================================================

      gsap.utils.toArray(".service-row").forEach((row, index) => {
        const line = row.querySelector(".service-line");
        const number = row.querySelector(".service-number");
        const icon = row.querySelector(".service-icon");
        const title = row.querySelector(".service-title");
        const descriptions = row.querySelectorAll(
          ".service-description"
        );
        const arrow = row.querySelector(".service-arrow");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .from(row, {
            opacity: 0,
            y: 45,
            duration: 0.7,
            delay: index * 0.03,
            ease: "power3.out",
          })
          .from(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.9,
              ease: "power4.inOut",
            },
            "-=0.5"
          )
          .from(
            [number, icon, title, ...descriptions, arrow],
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
              stagger: 0.04,
              ease: "power3.out",
            },
            "-=0.5"
          );
      });

      // ==================================================
      // SERVICE HOVER
      // ==================================================

      const rows = gsap.utils.toArray(".service-row");

      rows.forEach((row) => {
        const title = row.querySelector(".service-title");
        const icon = row.querySelector(".service-icon");
        const arrow = row.querySelector(".service-arrow");
        const number = row.querySelector(".service-number");
        const descriptions = row.querySelectorAll(
          ".service-description"
        );

        const enter = () => {
          gsap.to(title, {
            x: 14,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(icon, {
            x: 8,
            rotate: 6,
            scale: 1.08,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 8,
            y: -8,
            rotate: 4,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(number, {
            color: "#ffffff",
            duration: 0.3,
          });

          gsap.to(descriptions, {
            color: "rgb(212 212 212)",
            duration: 0.3,
          });
        };

        const leave = () => {
          gsap.to(title, {
            x: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(icon, {
            x: 0,
            rotate: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(number, {
            color: "rgb(82 82 82)",
            duration: 0.3,
          });

          gsap.to(descriptions, {
            color: "rgb(115 115 115)",
            duration: 0.3,
          });
        };

        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);

        row._enter = enter;
        row._leave = leave;
      });

      // ==================================================
      // MARQUEE
      // ==================================================

      gsap.to(".services-marquee", {
        xPercent: -30,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    // ==================================================
    // CLEANUP
    // ==================================================

    return () => {
      const rows = gsap.utils.toArray(".service-row");

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
      id="services"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050507]
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
          SERVICES ONLY BACKGROUND
          NO HERO IMAGE
          NO hero-bg.jpg
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* BASE */}

        <div className="absolute inset-0 bg-[#050507]" />

        {/* LARGE CYAN ORB */}

        <div
          className="
            services-orb-1
            absolute
            -left-[15%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/[0.045]
            blur-[140px]
          "
        />

        {/* LARGE VIOLET ORB */}

        <div
          className="
            services-orb-2
            absolute
            -right-[15%]
            top-[30%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-violet-500/[0.05]
            blur-[160px]
          "
        />

        {/* BLUE ORB */}

        <div
          className="
            services-orb-3
            absolute
            bottom-[5%]
            left-[30%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[140px]
          "
        />

        {/* CENTER GLOW */}

        <div
          className="
            services-center-glow
            absolute
            left-1/2
            top-[45%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-400/[0.025]
            blur-[160px]
          "
        />

        {/* DIAGONAL BEAM 1 */}

        <div
          className="
            services-beam-1
            absolute
            -left-[20%]
            top-[22%]
            h-px
            w-[140%]
            rotate-[25deg]
            bg-gradient-to-r
            from-transparent
            via-cyan-300/[0.08]
            to-transparent
          "
        />

        {/* DIAGONAL BEAM 2 */}

        <div
          className="
            services-beam-2
            absolute
            -left-[20%]
            top-[63%]
            h-px
            w-[140%]
            rotate-[-18deg]
            bg-gradient-to-r
            from-transparent
            via-violet-300/[0.07]
            to-transparent
          "
        />

        {/* VERTICAL LINE */}

        <div
          className="
            absolute
            left-[12%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-cyan-300/[0.04]
            to-transparent
          "
        />

        <div
          className="
            absolute
            right-[18%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-violet-300/[0.035]
            to-transparent
          "
        />

        {/* DOT GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)]
            [background-size:38px_38px]
          "
        />

        {/* CENTER RADIAL */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.07),transparent_42%)]
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
          "
        />

        {/* BOTTOM FADE */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-72
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">

        {/* TOP LINE */}

        <div className="services-top-line h-px w-full bg-white/15" />

        {/* HEADER */}

        <div
          className="
            services-label
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-4">
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
              What I Do
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
            05 Services
          </span>
        </div>

        {/* HEADING */}

        <div className="mt-12 overflow-hidden md:mt-16">
          <h2
            className="
              services-heading-line
              whitespace-nowrap
              text-[15vw]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
              text-white
              sm:text-[12vw]
              md:text-[9vw]
              lg:text-[7vw]
            "
          >
            BUILDING
          </h2>
        </div>

        <div className="overflow-hidden">
          <h2
            className="
              services-heading-line
              services-heading-accent
              w-fit
              whitespace-nowrap
              text-[15vw]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
              text-neutral-500
              sm:text-[12vw]
              md:text-[9vw]
              lg:text-[7vw]
            "
          >
            EXPERIENCES.
          </h2>
        </div>

        {/* INTRO */}

        <div
          className="
            services-intro
            mt-10
            grid
            gap-7
            border-t
            border-white/10
            pt-7
            md:mt-14
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <p
            className="
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-300
              md:text-lg
            "
          >
            I build modern digital products where design, engineering and
            interaction work together to create a seamless experience.
          </p>

          <div className="flex items-center gap-3 text-neutral-500">
            <Sparkles
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
              Full Stack Development
            </span>
          </div>
        </div>

        {/* SERVICES */}

        <div className="mt-14 md:mt-20">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="
                  service-row
                  group
                  relative
                  cursor-default
                  overflow-hidden
                "
              >
                {/* LINE */}

                <div className="service-line h-px w-full bg-white/10" />

                {/* CONTENT */}

                <div
                  className="
                    relative
                    grid
                    min-h-[190px]
                    grid-cols-[40px_1fr_auto]
                    items-center
                    gap-4
                    py-8
                    sm:grid-cols-[55px_1fr_auto]
                    sm:gap-6
                    md:min-h-[220px]
                    md:grid-cols-[70px_1fr_300px_auto]
                    md:gap-8
                    md:py-10
                  "
                >
                  {/* NUMBER */}

                  <span
                    className="
                      service-number
                      self-start
                      pt-2
                      text-[9px]
                      tracking-[0.2em]
                      text-neutral-600
                      md:text-[10px]
                    "
                  >
                    {service.number}
                  </span>

                  {/* TITLE AREA */}

                  <div className="min-w-0">

                    <div className="flex items-center gap-4 md:gap-6">

                      {/* ICON */}

                      <div
                        className="
                          service-icon
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.035]
                          text-neutral-400
                          backdrop-blur-sm
                          md:h-12
                          md:w-12
                        "
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.3}
                        />
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          service-title
                          min-w-0
                          text-[8vw]
                          font-medium
                          leading-none
                          tracking-[-0.055em]
                          text-white
                          sm:text-4xl
                          md:text-5xl
                          lg:text-6xl
                        "
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* TAGS */}

                    <p
                      className="
                        mt-5
                        pl-14
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-neutral-600
                        sm:text-[10px]
                        md:pl-[72px]
                      "
                    >
                      {service.tags}
                    </p>
                  </div>

                  {/* DESKTOP DESCRIPTION */}

                  <p
                    className="
                      service-description
                      hidden
                      max-w-xs
                      text-sm
                      leading-relaxed
                      text-neutral-600
                      md:block
                    "
                  >
                    {service.description}
                  </p>

                  {/* ARROW */}

                  <ArrowUpRight
                    className="
                      service-arrow
                      shrink-0
                      text-neutral-600
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                    size={24}
                    strokeWidth={1.2}
                  />
                </div>

                {/* MOBILE DESCRIPTION */}

                <p
                  className="
                    service-description
                    mb-8
                    ml-14
                    max-w-xl
                    text-xs
                    leading-relaxed
                    text-neutral-600
                    md:hidden
                  "
                >
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* FINAL LINE */}

          <div className="service-line h-px w-full bg-white/10" />
        </div>

        {/* MARQUEE */}

        <div
          className="
            mt-16
            overflow-hidden
            border-y
            border-white/10
            py-5
            md:mt-24
          "
        >
          <div className="services-marquee flex w-max items-center gap-8">
            {[
              "WEB DEVELOPMENT",
              "UI / UX",
              "BACKEND",
              "DATABASE",
              "RESPONSIVE DESIGN",
              "INTERACTIVE EXPERIENCES",
              "WEB DEVELOPMENT",
              "UI / UX",
              "BACKEND",
              "DATABASE",
            ].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-8"
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-600
                    sm:text-[10px]
                  "
                >
                  {item}
                </span>

                <span className="h-1 w-1 rounded-full bg-neutral-700" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-7
            md:mt-24
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-neutral-600
              "
            >
              Have a project in mind?
            </p>

            <h3
              className="
                mt-3
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
              Let's create something meaningful.
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
              border-white/30
              pb-2
              text-sm
              font-medium
              text-white
              transition-colors
              duration-300
              hover:border-white
            "
          >
            Start a conversation

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

export default Services;    