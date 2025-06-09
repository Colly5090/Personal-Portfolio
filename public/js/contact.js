document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const successMessage = document.getElementById("form-message");
  let timeoutId;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Show the message container
    successMessage.classList.remove("hidden");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success: green message
        successMessage.textContent =
          "✅ Thank you! Your message has been sent.";
        successMessage.classList.remove("opacity-0", "text-red-400");
        successMessage.classList.add("text-green-400", "opacity-100");

        form.reset();
      } else {
        // Server responded with an error
        successMessage.textContent = "❌ Oops! Something went wrong.";
        successMessage.classList.remove("opacity-0", "text-green-400");
        successMessage.classList.add("text-red-400", "opacity-100");
      }
    } catch (error) {
      // Network error
      successMessage.textContent = "❌ Network error. Please try again.";
      successMessage.classList.remove("opacity-0", "text-green-400");
      successMessage.classList.add("text-red-400", "opacity-100");
    }

    // Clear previous timeout and start a new one to hide message
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      successMessage.classList.remove("opacity-100");
      successMessage.classList.add("opacity-0");

      // Fully hide the element from the layout after fade-out
      setTimeout(() => {
        successMessage.classList.add("hidden");
        successMessage.textContent = ""; // optional cleanup
      }, 500); // matches your fade transition duration
    }, 4000);
  });
});
