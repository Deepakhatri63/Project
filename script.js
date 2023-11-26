// document.addEventListener("DOMContentLoaded", function() {
//     var infoTitle = document.querySelector(".info-title");
//     var infoPara = document.querySelector(".info-para");
//     // var square = document.querySelector(".square");

//     function isInViewport(element) {
//         var rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function handleScroll() {
//         if (isInViewport(infoTitle)) {
//             infoTitle.classList.add("animated");
//         }
//         if (isInViewport(infoPara)) {
//             infoPara.classList.add("animated");
//         }
//         // if (isInViewport(square)) {
//         //     infoPara.classList.add("animated");
//         // }
//     }

//     // Initial check in case the elements are already in the viewport on page load
//     handleScroll();

//     // Listen for scroll events
//     window.addEventListener("scroll", handleScroll);
// });
