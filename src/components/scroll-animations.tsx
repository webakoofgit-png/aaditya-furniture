import { useEffect } from "react";
export function ScrollAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!reduced.matches) {
            const animation = entry.target.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" },
            );
            animations.add(animation);
            animation.onfinish = () => {
              animations.delete(animation);
            };
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".category-card, .product-card, .gallery-card, .craft-image, .craft-copy, .proof-points > div, .value-grid article, .home-step, .material-grid article",
      )
      .forEach((node) => observer.observe(node));
    const stop = () => {
      if (reduced.matches) {
        observer.disconnect();
        animations.forEach((a) => a.cancel());
      }
    };
    reduced.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      reduced.removeEventListener("change", stop);
    };
  }, []);
  return null;
}
