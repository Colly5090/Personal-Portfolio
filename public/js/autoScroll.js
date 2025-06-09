document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-auto");

  let scrollAmount = 0;
  let scrollDirection = 1;
  let isPaused = false;

  function autoScroll() {
    if (!scrollContainer) return;

    if (!isPaused) {
      scrollAmount += scrollDirection;
      scrollContainer.scrollLeft = scrollAmount;

      // Loop the cards seamlessly
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollDirection = -1;
      }
      if (scrollAmount <= 0) {
        scrollDirection = 1;
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

  scrollContainer.addEventListener("touchstart", () => {
    isPaused = true;
  });

  scrollContainer.addEventListener("touchend", () => {
    isPaused = false;
  });

  autoScroll();
});
