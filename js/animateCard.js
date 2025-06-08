import {
  animate,
  stagger,
} from "https://cdn.jsdelivr.net/npm/animejs@4.0.2/+esm";

const isDesktop = window.innerWidth >= 640;

if (isDesktop) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const { target } = entry;

        if (target.classList.contains("blog-section")) {
          animate(".blog-card", {
            opacity: [0, 1],
            translateX: (el, i) => (i === 0 ? [-50, 0] : [50, 0]),
            duration: 800,
            delay: stagger(150),
            easing: "easeOutCubic",
          });
        } else if (target.classList.contains("about-section")) {
          animate(".about-card", {
            opacity: [0, 1],
            scale: [0.5, 1],
            translateX: [
              stagger([-40, 40], { grid: [2, 2], from: "center" }),
              0,
            ],
            translateY: [
              stagger([-30, 30], { grid: [2, 2], from: "center" }),
              0,
            ],
            delay: stagger(50, { from: "center" }),
            duration: 1000,
            easing: "easeOutExpo",
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  document
    .querySelectorAll(".blog-section, .about-section")
    .forEach((section) => observer.observe(section));
}
