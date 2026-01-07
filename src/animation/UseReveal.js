import { useEffect } from "react";
import { gsap } from "gsap";

export default function useReveal(className = ".reveal-up") {
  useEffect(() => {
    const elements = document.querySelectorAll(className);

    gsap.fromTo(
      elements,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        clearProps: "all",
      }
    );
  }, [className]);
}
