// Hide Loader after 3 seconds with a fade-out animation
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  const container = document.querySelector(".container");

  setTimeout(() => {
    loader.classList.add("hide"); // Add the fade-out animation
    container.style.display = "flex"; // Show the main content

    // Remove the loader from the DOM after the animation ends
    loader.addEventListener("animationend", () => {
      loader.style.display = "none";
    });
  }, 3000); // 3 seconds
});
