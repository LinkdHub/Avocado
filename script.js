// Hide Avocado Loader after 3 seconds
window.addEventListener("load", function () {
  const loader = document.querySelector(".avocado-loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Delay for fade-out effect
  }, 3000); // 3 seconds
});
