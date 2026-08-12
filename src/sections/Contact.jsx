import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   GITHUB ICON
============================================================ */

const GithubIcon = ({ size = 18, className = "" }) => {
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
   LINKEDIN ICON
============================================================ */

const LinkedinIcon = ({ size = 18, className = "" }) => {
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
          M20.45 20.45h-3.56v-5.57
          c0-1.33-.03-3.04-1.85-3.04
          -1.85 0-2.14 1.45-2.14 2.94
          v5.67H9.34V9h3.42v1.56h.05
          c.48-.9 1.64-1.85 3.37-1.85
          3.61 0 4.28 2.37 4.28 5.46
          v6.28ZM5.32 7.43
          a2.07 2.07 0 1 1 0-4.14
          2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.57V9H3.54v11.45ZM22.22 0H1.77
          C.79 0 .01.78.01 1.74v20.52
          C.01 23.22.79 24 1.77 24h20.45
          c.98 0 1.77-.78 1.77-1.74V1.74
          C23.99.78 23.2 0 22.22 0Z
        "
      />
    </svg>
  );
};

/* ============================================================
   CONTACT DATA
============================================================ */

const contactInfo = {
  name: "Khushboo Singh",

  phone: "+91 9004718098",

  email: "khushboosingh1322@gmail.com",

  location: "Mumbai, Maharashtra, India",

  github: "https://github.com/Khushboo-Singh-22",

  linkedin: "https://linkedin.com/in/khushboo-singh",
};

/* ============================================================
   CONTACT COMPONENT
============================================================ */

function Contact() {
  const sectionRef = useRef(null);

  const [copied, setCopied] = useState("");

  /* ============================================================
     GSAP
  ============================================================ */

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
        .from(".contact-kicker", {
          y: reduceMotion ? 0 : 25,
          opacity: 0,
          duration: reduceMotion ? 0 : 0.7,
          ease: "power3.out",
        })

        .from(
          ".contact-heading",
          {
            yPercent: reduceMotion ? 0 : 100,
            opacity: 0,
            duration: reduceMotion ? 0 : 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )

        .from(
          ".contact-intro",
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
        gsap.to(".contact-orb-one", {
          x: 100,
          y: 80,
          scale: 1.15,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".contact-orb-two", {
          x: -90,
          y: -70,
          scale: 1.2,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".contact-orb-three", {
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
         CONTACT CARDS REVEAL
      ====================================================== */

      const cards = gsap.utils.toArray(".contact-card");

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: reduceMotion ? 0 : 35,
          duration: reduceMotion ? 0 : 0.7,
          delay: reduceMotion ? 0 : index * 0.08,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* ======================================================
         BIG CTA
      ====================================================== */

      gsap.from(".contact-cta", {
        opacity: 0,
        y: reduceMotion ? 0 : 35,
        duration: reduceMotion ? 0 : 0.8,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".contact-cta",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      /* ======================================================
         ICON FLOAT
      ====================================================== */

      if (!reduceMotion) {
        gsap.to(".contact-main-icon", {
          y: -7,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ======================================================
         CARD HOVER
      ====================================================== */

      cards.forEach((card) => {
        const icon = card.querySelector(".contact-icon");
        const arrow = card.querySelector(".contact-arrow");
        const glow = card.querySelector(".contact-card-glow");

        const enter = () => {
          if (reduceMotion) return;

          gsap.to(card, {
            y: -6,
            duration: 0.4,
            ease: "power3.out",
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1.08,
              rotate: 4,
              duration: 0.4,
              ease: "power3.out",
            });
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 5,
              y: -5,
              rotate: 5,
              duration: 0.4,
              ease: "power3.out",
            });
          }

          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              duration: 0.45,
            });
          }
        };

        const leave = () => {
          if (reduceMotion) return;

          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.4,
              ease: "power3.out",
            });
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              y: 0,
              rotate: 0,
              duration: 0.4,
              ease: "power3.out",
            });
          }

          if (glow) {
            gsap.to(glow, {
              opacity: 0,
              duration: 0.45,
            });
          }
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        card._enter = enter;
        card._leave = leave;
      });
    }, sectionRef);

    /* ========================================================
       CLEANUP
    ======================================================== */

    return () => {
      const cards = gsap.utils.toArray(".contact-card");

      cards.forEach((card) => {
        if (card._enter) {
          card.removeEventListener("mouseenter", card._enter);
        }

        if (card._leave) {
          card.removeEventListener("mouseleave", card._leave);
        }
      });

      ctx.revert();
    };
  }, []);

  /* ============================================================
     COPY FUNCTION
  ============================================================ */

  const copyToClipboard = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  /* ============================================================
     PHONE / WHATSAPP URL
  ============================================================ */

  const cleanPhone = contactInfo.phone.replace(/\D/g, "");

  const whatsappMessage =
    "Hi Khushboo, I found your portfolio and would like to connect.";

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /* ============================================================
     RETURN
  ============================================================ */

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            contact-orb-one
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
            contact-orb-two
            absolute
            -right-40
            top-[38%]
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
            contact-orb-three
            absolute
            bottom-[5%]
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
            bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.025),transparent_42%)]
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
            contact-kicker
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
              Get In Touch
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
            Available For Work
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
              contact-heading
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
            CONTACT.
          </h2>
        </div>

        {/* ====================================================
            INTRO
        ==================================================== */}

        <div
          className="
            contact-intro
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
            Have an opportunity, project or idea?
            Let's connect and build something
            meaningful together.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-neutral-600
            "
          >
            <Send
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
              Let's Talk
            </span>
          </div>
        </div>

        {/* ====================================================
            MAIN CONTACT CTA
        ==================================================== */}

        <div
          className="
            contact-cta
            relative
            mt-12
            overflow-hidden
            rounded-sm
            border
            border-white/[0.08]
            bg-white/[0.018]
            p-6
            sm:mt-16
            sm:p-8
            md:p-10
            lg:mt-24
            lg:p-12
          "
        >
          <div
            className="
              absolute
              -right-40
              -top-40
              h-[420px]
              w-[420px]
              rounded-full
              bg-emerald-500/[0.035]
              blur-[120px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <div
                className="
                  contact-main-icon
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  sm:h-16
                  sm:w-16
                "
              >
                <Mail
                  size={24}
                  strokeWidth={1.2}
                />
              </div>

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-600
                "
              >
                Start A Conversation
              </p>

              <h3
                className="
                  mt-4
                  max-w-3xl
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
                Let's create something
                great together.
              </h3>
            </div>

            {/* DIRECT EMAIL */}

            <a
              href={`mailto:${contactInfo.email}?subject=Portfolio%20Inquiry`}
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                border-b
                border-white/25
                pb-3
                text-sm
                text-white
                transition-all
                duration-300
                hover:border-white
                sm:text-base
              "
            >
              Send an Email

              <ArrowUpRight
                size={18}
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

        {/* ====================================================
            CONTACT GRID
        ==================================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-4
            sm:mt-7
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* ==================================================
              PHONE
          ================================================== */}

          <div
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-colors
              duration-500
              hover:border-white/[0.14]
              sm:p-6
            "
          >
            <div
              className="
                contact-card-glow
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-emerald-500/[0.08]
                opacity-0
                blur-[60px]
              "
            />

            <div
              className="
                relative
                flex
                items-start
                justify-between
              "
            >
              <div
                className="
                  contact-icon
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                "
              >
                <Phone
                  size={16}
                  strokeWidth={1.3}
                />
              </div>

              <ArrowUpRight
                className="contact-arrow text-neutral-700"
                size={16}
              />
            </div>

            <p
              className="
                relative
                mt-7
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-neutral-600
              "
            >
              Phone
            </p>

            <a
              href={`tel:${cleanPhone}`}
              className="
                relative
                mt-2
                block
                text-sm
                text-neutral-300
                transition-colors
                hover:text-white
              "
            >
              {contactInfo.phone}
            </a>

            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  contactInfo.phone,
                  "phone"
                )
              }
              className="
                relative
                mt-5
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-neutral-600
                transition-colors
                hover:text-white
              "
            >
              {copied === "phone" ? (
                <>
                  <Check size={12} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={12} />
                  Copy Number
                </>
              )}
            </button>
          </div>

          {/* ==================================================
              EMAIL
          ================================================== */}

          <div
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-colors
              duration-500
              hover:border-white/[0.14]
              sm:p-6
            "
          >
            <div
              className="
                contact-card-glow
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-blue-500/[0.08]
                opacity-0
                blur-[60px]
              "
            />

            <div
              className="
                relative
                flex
                items-start
                justify-between
              "
            >
              <div
                className="
                  contact-icon
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                "
              >
                <Mail
                  size={16}
                  strokeWidth={1.3}
                />
              </div>

              <ArrowUpRight
                className="contact-arrow text-neutral-700"
                size={16}
              />
            </div>

            <p
              className="
                relative
                mt-7
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-neutral-600
              "
            >
              Email
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="
                relative
                mt-2
                block
                break-all
                text-sm
                text-neutral-300
                transition-colors
                hover:text-white
              "
            >
              {contactInfo.email}
            </a>

            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  contactInfo.email,
                  "email"
                )
              }
              className="
                relative
                mt-5
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-neutral-600
                transition-colors
                hover:text-white
              "
            >
              {copied === "email" ? (
                <>
                  <Check size={12} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={12} />
                  Copy Email
                </>
              )}
            </button>
          </div>

          {/* ==================================================
              WHATSAPP
          ================================================== */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-colors
              duration-500
              hover:border-white/[0.14]
              sm:p-6
            "
          >
            <div
              className="
                contact-card-glow
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-green-500/[0.08]
                opacity-0
                blur-[60px]
              "
            />

            <div
              className="
                relative
                flex
                items-start
                justify-between
              "
            >
              <div
                className="
                  contact-icon
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                "
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.3}
                />
              </div>

              <ArrowUpRight
                className="contact-arrow text-neutral-700"
                size={16}
              />
            </div>

            <p
              className="
                relative
                mt-7
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-neutral-600
              "
            >
              WhatsApp
            </p>

            <p
              className="
                relative
                mt-2
                text-sm
                text-neutral-300
              "
            >
              Direct WhatsApp
            </p>

            <span
              className="
                relative
                mt-5
                block
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-neutral-600
                transition-colors
                group-hover:text-white
              "
            >
              Start Chat →
            </span>
          </a>

          {/* ==================================================
              LOCATION
          ================================================== */}

          <div
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-colors
              duration-500
              hover:border-white/[0.14]
              sm:p-6
            "
          >
            <div
              className="
                contact-card-glow
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-purple-500/[0.08]
                opacity-0
                blur-[60px]
              "
            />

            <div
              className="
                relative
                flex
                items-start
                justify-between
              "
            >
              <div
                className="
                  contact-icon
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                "
              >
                <MapPin
                  size={16}
                  strokeWidth={1.3}
                />
              </div>

              <ArrowUpRight
                className="contact-arrow text-neutral-700"
                size={16}
              />
            </div>

            <p
              className="
                relative
                mt-7
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-neutral-600
              "
            >
              Location
            </p>

            <p
              className="
                relative
                mt-2
                text-sm
                leading-relaxed
                text-neutral-300
              "
            >
              {contactInfo.location}
            </p>

            <span
              className="
                relative
                mt-5
                block
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-neutral-600
              "
            >
              India
            </span>
          </div>
        </div>

        {/* ====================================================
            SOCIAL LINKS
        ==================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
          "
        >
          {/* GITHUB */}

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              contact-card
              group
              flex
              items-center
              justify-between
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-white/[0.16]
              sm:p-6
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  contact-icon
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                "
              >
                <GithubIcon
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-600
                  "
                >
                  GitHub
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-neutral-300
                  "
                >
                  Khushboo-Singh-22
                </p>
              </div>
            </div>

            <ArrowUpRight
              className="
                contact-arrow
                text-neutral-600
                transition-colors
                group-hover:text-white
              "
              size={18}
            />
          </a>

          {/* LINKEDIN */}

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              contact-card
              group
              flex
              items-center
              justify-between
              rounded-sm
              border
              border-white/[0.08]
              bg-white/[0.015]
              p-5
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-white/[0.16]
              sm:p-6
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  contact-icon
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                "
              >
                <LinkedinIcon
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-600
                  "
                >
                  LinkedIn
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-neutral-300
                  "
                >
                  Connect professionally
                </p>
              </div>
            </div>

            <ArrowUpRight
              className="
                contact-arrow
                text-neutral-600
                transition-colors
                group-hover:text-white
              "
              size={18}
            />
          </a>
        </div>

        {/* ====================================================
            DIRECT ACTIONS
        ==================================================== */}

        <div
          className="
            mt-12
            border-t
            border-white/10
            pt-8
            sm:mt-16
            sm:pt-10
            lg:mt-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-600
                "
              >
                Prefer A Quick Conversation?
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-medium
                  tracking-[-0.04em]
                  text-white
                  sm:text-3xl
                "
              >
                Reach me directly.
              </h3>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >
              {/* CALL */}

              <a
                href={`tel:${cleanPhone}`}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-neutral-300
                  transition-all
                  duration-300
                  hover:border-white/25
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <Phone size={14} />
                Call Me
              </a>

              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-neutral-300
                  transition-all
                  duration-300
                  hover:border-white/25
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${contactInfo.email}`}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-neutral-300
                  transition-all
                  duration-300
                  hover:border-white/25
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* ====================================================
            FOOTER SIGNATURE
        ==================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:mt-20
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-neutral-700
            "
          >
            © {new Date().getFullYear()} {contactInfo.name}
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-neutral-700
            "
          >
            <Sparkles size={13} />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
              "
            >
              Design × Code × Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;