import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fades/blurs in any [data-reveal] element as it enters the viewport. */
export function useScrollReveals() {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    if (elements.length === 0) return;

    gsap.set(elements, { opacity: 0, y: 48, filter: "blur(10px)" });

    const batches = ScrollTrigger.batch(elements, {
      start: "top 88%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          overwrite: true,
        }),
    });

    ScrollTrigger.refresh();

    return () => {
      batches.forEach((trigger) => trigger.kill());
    };
  }, []);
}
