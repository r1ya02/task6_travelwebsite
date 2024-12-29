// Initialize swiper.js for project slider

const swiper = new Swiper(".card-slider", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".nextArrowBtn",
      prevEl: ".prevArrowBtn",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

// Dark and Light Theme Toggle

function isLight() {
    return localStorage.getItem("dark-mode");
  }
  
  function toggleRootClass() {
    document.querySelector("body").classList.toggle("dark");
  }
  
  function toggleLocalStorageItem() {
    if (isLight()) {
      localStorage.removeItem("dark-mode");
    } else {
      localStorage.setItem("dark-mode", "set");
    }
  }
  
  if (isLight()) {
    toggleRootClass();
  }
  
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });