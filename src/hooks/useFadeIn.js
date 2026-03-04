// ── useFadeIn ──────────────────────────────────────────────
// Observes the ref container itself entering the viewport,
// then adds "visible" to all .fade-in children with stagger.
// Uses MutationObserver to catch dynamically rendered children.

import { useEffect, useRef } from "react";

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const activateItems = () => {
      const items = container.querySelectorAll(".fade-in:not(.visible)");
      items.forEach((el, i) => {
        el.style.transitionDelay = `${i * 60}ms`;
        el.classList.add("visible");
      });
    };

    // Intersection observer — fires when section scrolls into view
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay to ensure React has finished rendering children
            setTimeout(activateItems, 50);
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    sectionObserver.observe(container);
    return () => sectionObserver.disconnect();
  }, []);

  return ref;
}
