import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    // Lenis → GSAP ScrollTrigger sync
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker → Lenis
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP lag smoothing from
    // interfering with Lenis
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;