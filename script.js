window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
  
    // Check the scroll position
    if (window.scrollY > 50) {
      // If scrolled down, change the background color to white
      navbar.style.backgroundColor = "rgba(0,0,0, 0.9)";
      navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.6)";
    } else {
      // If at the top, revert to the original color
      navbar.style.backgroundColor = "rgba(0,0,0)";
      navbar.style.boxShadow = "none";
    }
  });