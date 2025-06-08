const faders = document.querySelectorAll(".scroll-fade-up");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -20px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("animate");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // optional: animate only once
      }
    });
  },
  { threshold: 0.2 }
);

// Apply to all underline targets
document
  .querySelectorAll(".scroll-underline")
  .forEach((el) => observer.observe(el));
