let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

// ------------------------------\-\-\- On scrolling this Action will be performed -/-/-/---------------------------

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
  };

  // ------------------------------------------------\-\-\- For Search Bar -/-/-/-------------------------------------
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
  });

   //javascript for scroll to top button
   const scrollBtn = document.querySelector(".scroll");
  
   window.addEventListener("scroll", function () {
     scrollBtn.classList.toggle("active", window.scrollY > 500);
   });
   
   //javascript for scroll back to top on click scroll-to-top button
   scrollBtn.addEventListener("click", () => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   });