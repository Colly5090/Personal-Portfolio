document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");
  const dropdown = document.getElementById("filterDropdown");

  // Reusable function for filtering
  function filterItems(filter) {
    items.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }

  // Desktop button click
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Remove active state from all buttons
      buttons.forEach((btn) =>
        btn.classList.remove("text-yellow-400", "font-bold")
      );
      this.classList.add("text-yellow-400", "font-bold");

      filterItems(filter);
    });
  });

  // Mobile dropdown change
  if (dropdown) {
    dropdown.addEventListener("change", function () {
      const filter = this.value;
      filterItems(filter);
    });
  }
});
