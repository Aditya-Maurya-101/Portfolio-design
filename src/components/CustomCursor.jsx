import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Desktop only
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const cursorText = textRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    // ==============================================
    // INITIAL STATE
    // ==============================================

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    gsap.set(cursorText, {
      opacity: 0,
      scale: 0.5,
    });

    // ==============================================
    // MOUSE MOVE
    // ==============================================

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: "power3.out",
        overwrite: true,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ==============================================
    // SMOOTH FOLLOWER
    // ==============================================

    const render = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      gsap.set(follower, {
        x: followerX,
        y: followerY,
      });
    };

    gsap.ticker.add(render);

    // ==============================================
    // SHOW CURSOR
    // ==============================================

    const handleMouseEnterWindow = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.to(follower, {
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeaveWindow = () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
      });

      gsap.to(follower, {
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    };

    document.addEventListener(
      "mouseenter",
      handleMouseEnterWindow
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeaveWindow
    );

    // ==============================================
    // CLICK EFFECT
    // ==============================================

    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.55,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(follower, {
        scale: 0.8,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      });

      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // ==============================================
    // HOVER ELEMENTS
    // ==============================================

    const hoverElements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    const enterHover = (event) => {
      const element = event.currentTarget;

      const type =
        element.getAttribute("data-cursor") || "hover";

      if (type === "view") {
        gsap.to(follower, {
          width: 75,
          height: 75,
          backgroundColor: "#ffffff",
          borderColor: "#ffffff",
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(cursor, {
          scale: 0,
          duration: 0.2,
        });

        gsap.to(cursorText, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });

        cursorText.textContent = "VIEW";

        return;
      }

      if (type === "text") {
        gsap.to(follower, {
          width: 65,
          height: 65,
          backgroundColor: "rgba(255,255,255,0.08)",
          borderColor: "rgba(255,255,255,0.45)",
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(cursorText, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        });

        cursorText.textContent = "READ";

        return;
      }

      // Normal hover

      gsap.to(follower, {
        width: 52,
        height: 52,
        backgroundColor: "rgba(255,255,255,0.06)",
        borderColor: "rgba(255,255,255,0.5)",
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cursor, {
        scale: 0.65,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const leaveHover = () => {
      gsap.to(follower, {
        width: 36,
        height: 36,
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,0.25)",
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
      });

      gsap.to(cursorText, {
        opacity: 0,
        scale: 0.5,
        duration: 0.2,
      });
    };

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", enterHover);
      element.addEventListener("mouseleave", leaveHover);
    });

    // ==============================================
    // CLEANUP
    // ==============================================

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnterWindow
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeaveWindow
      );

      gsap.ticker.remove(render);

      hoverElements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          enterHover
        );

        element.removeEventListener(
          "mouseleave",
          leaveHover
        );
      });
    };
  }, []);

  return (
    <>
      {/* ==============================================
          INNER DOT
      ============================================== */}

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          hidden
          h-2
          w-2
          rounded-full
          bg-white
          md:block
        "
      />

      {/* ==============================================
          OUTER FOLLOWER
      ============================================== */}

      <div
        ref={followerRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-9
          w-9
          rounded-full
          border
          border-white/25
          bg-transparent
          md:flex
          md:items-center
          md:justify-center
        "
      >
        {/* HOVER TEXT */}

        <span
          ref={textRef}
          className="
            text-[7px]
            font-medium
            tracking-[0.12em]
            text-black
          "
        />
      </div>
    </>
  );
}

export default CustomCursor;