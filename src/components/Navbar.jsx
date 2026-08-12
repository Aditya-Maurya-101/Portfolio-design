import {
  Home,
  UserRound,
  Code2,
  BriefcaseBusiness,
  FolderOpen,
  Briefcase,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "About",
      href: "#about",
      icon: UserRound,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Code2,
    },
    {
      name: "Services",
      href: "#services",
      icon: BriefcaseBusiness,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderOpen,
    },
    {
      name: "Experience",
      href: "#experience",
      icon: Briefcase,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  // ==================================================
  // GSAP ANIMATIONS
  // ==================================================

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==============================================
      // DESKTOP NAVBAR INITIAL ANIMATION
      // ==============================================

      const desktopTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      desktopTimeline
        .from(".desktop-navbar", {
          y: -40,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".navbar-logo",
          {
            x: -30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".desktop-nav-link",
          {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.4"
        )
        .from(
          ".connect-button",
          {
            x: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );

      // ==============================================
      // MOBILE TOP LOGO
      // ==============================================

      gsap.fromTo(
        ".mobile-logo",
        {
          y: -25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power4.out",
        }
      );

      // ==============================================
      // MOBILE BOTTOM NAVBAR
      // ==============================================

      gsap.fromTo(
        ".mobile-navbar",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.5,
          ease: "power4.out",
        }
      );

      // ==============================================
      // MOBILE NAV LINKS
      // ==============================================

      gsap.fromTo(
        ".mobile-nav-link",
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }, navbarRef);

    // ==================================================
    // DESKTOP + MOBILE SCROLL
    // ==================================================

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ==============================================
      // DESKTOP
      // ==============================================

      if (window.innerWidth >= 768) {
        // At very top
        if (currentScrollY <= 10) {
          gsap.to(".desktop-navbar", {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            overwrite: true,
          });

          lastScrollY.current = currentScrollY;
          return;
        }

        // ============================================
        // SCROLL DOWN
        // Hide navbar immediately
        // ============================================

        if (currentScrollY > lastScrollY.current) {
          gsap.to(".desktop-navbar", {
            y: -100,
            opacity: 0,
            duration: 0.25,
            ease: "power3.out",
            overwrite: true,
          });
        }

        // ============================================
        // SCROLL UP
        // Show navbar immediately
        // ============================================

        else if (currentScrollY < lastScrollY.current) {
          gsap.to(".desktop-navbar", {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power3.out",
            overwrite: true,
          });
        }

        lastScrollY.current = currentScrollY;
        return;
      }

      // ==============================================
      // MOBILE
      // ONLY MOBILE LOGO HIDES / SHOWS
      // ==============================================

      if (currentScrollY <= 20) {
        gsap.to(".mobile-logo", {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });

        lastScrollY.current = currentScrollY;
        return;
      }

      // ==============================================
      // MOBILE SCROLL DOWN
      // ==============================================

      if (currentScrollY > lastScrollY.current) {
        gsap.to(".mobile-logo", {
          y: -70,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      }

      // ==============================================
      // MOBILE SCROLL UP
      // ==============================================

      else if (currentScrollY < lastScrollY.current) {
        gsap.to(".mobile-logo", {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // ==================================================
    // RESIZE
    // ==================================================

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        gsap.set(".desktop-navbar", {
          y: 0,
          opacity: 1,
        });
      } else {
        gsap.set(".mobile-logo", {
          y: 0,
          opacity: 1,
        });
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("resize", handleResize);

    // ==================================================
    // CLEANUP
    // ==================================================

    return () => {
      ctx.revert();

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      {/* ==================================================
          DESKTOP NAVBAR
      ================================================== */}

      <nav
        className="
          desktop-navbar
          fixed
          left-0
          top-0
          z-50
          hidden
          w-full
          md:block
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            items-center
            justify-between
            gap-6
            px-6
            py-5
            lg:px-10
          "
        >
          {/* ==================================================
              LOGO
          ================================================== */}

          <a
            href="#home"
            className="
              navbar-logo
              shrink-0
              text-xl
              font-semibold
              tracking-[0.2em]
              text-white
            "
          >
            KHUSHBOO
            <span className="text-neutral-500">.</span>
          </a>

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-1
              items-center
              justify-center
              gap-4
              xl:gap-6
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  desktop-nav-link
                  whitespace-nowrap
                  text-sm
                  text-neutral-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ==================================================
              LET'S CONNECT
          ================================================== */}

          <a
            href="#contact"
            className="
              connect-button
              group
              flex
              shrink-0
              items-center
              gap-2
              whitespace-nowrap
              rounded-full
              border
              border-white/25
              bg-white/[0.04]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >
            <span>Let's Connect</span>

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </nav>

      {/* ==================================================
          MOBILE TOP LOGO
      ================================================== */}

      <nav
        className="
          fixed
          left-0
          top-0
          z-[999]
          block
          w-full
          md:hidden
        "
      >
        <div className="px-5 pt-5 sm:px-6 sm:pt-6">
          <a
            href="#home"
            className="
              mobile-logo
              inline-block
              text-lg
              font-semibold
              tracking-[0.2em]
              text-white
              drop-shadow-lg
            "
          >
            KHUSHBOO
            <span className="text-neutral-500">.</span>
          </a>
        </div>
      </nav>

      {/* ==================================================
          MOBILE BOTTOM NAVBAR
          ALWAYS FIXED
      ================================================== */}

      <nav
        className="
          mobile-navbar
          fixed
          bottom-3
          left-1/2
          z-[999]
          w-[calc(100%-20px)]
          -translate-x-1/2
          md:hidden
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            border
            border-white/10
            bg-black/40
            px-1
            py-1
            shadow-2xl
            backdrop-blur-2xl
            backdrop-saturate-150
            sm:px-2
            sm:py-1.5
          "
        >
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                className="
                  mobile-nav-link
                  group
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  items-center
                  justify-center
                  gap-0.5
                  rounded-lg
                  px-1
                  py-1.5
                  text-neutral-400
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:text-white
                  active:scale-90
                  sm:px-2
                  sm:py-2
                "
              >
                {/* ICON */}

                <Icon
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    sm:h-[18px]
                    sm:w-[18px]
                  "
                />

                {/* TEXT */}

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    tracking-wide
                    sm:text-[9px]
                  "
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;