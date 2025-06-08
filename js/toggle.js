document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const toggleContent = document.getElementById("toggleContent");

  toggleButton.addEventListener("click", function () {
    const isHidden = toggleContent.classList.contains("hidden");

    // Toggle visibility
    toggleContent.classList.toggle("hidden");
    toggleContent.classList.remove("animate-slide-fade-in");

    // Trigger reflow
    void toggleContent.offsetWidth;

    if (!isHidden) {
      // Collapsing
      toggleButton.setAttribute("aria-expanded", "false");
    } else {
      // Expanding
      toggleContent.classList.add("animate-slide-fade-in");
      toggleButton.setAttribute("aria-expanded", "true");
    }

    // Toggle icon
    const icon = toggleButton.querySelector("i");
    if (isHidden) {
      icon.classList.remove("fa-angles-down");
      icon.classList.add("fa-angles-up");
    } else {
      icon.classList.remove("fa-angles-up");
      icon.classList.add("fa-angles-down");
    }
  });
});
