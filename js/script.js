document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  const defaultTab = document.querySelector('.tab-link[data-tab="about"]');
  if (defaultTab) {
    defaultTab.classList.add("text-yellow-500");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active state from all tabs
      tabs.forEach((t) =>
        t.classList.remove(
          "text-yellow-500",
          "rounded-md",
          "px-2",
          "bg-gray-700"
        )
      );

      // Hide all content sections
      contents.forEach((content) => content.classList.add("hidden"));

      // Add active state to the clicked tab
      this.classList.add(
        "text-yellow-500",
        "rounded-md",
        "px-2",
        "bg-gray-700"
      );

      // Show the corresponding content
      const activeTab = this.getAttribute("data-tab");
      document.getElementById(activeTab).classList.remove("hidden");
    });
  });
});
