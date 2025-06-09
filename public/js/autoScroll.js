document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-auto");

  let scrollAmount = 0;
  let isPaused = false;

  function autoScroll() {
    if (!scrollContainer) return;

    if (!isPaused) {
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      // Loop the cards seamlessly
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      }
    }

    requestAnimationFrame(autoScroll);
  }

  // Pause on mouse enter
  scrollContainer.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  // Resume on mouse leave
  scrollContainer.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  autoScroll();
});
