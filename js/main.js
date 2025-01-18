<<<<<<< HEAD
// header.js
window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

    // preloader
   // Simulating loading time
   window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").classList.add("fade-out");
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust time as needed
};

// patnership 
$(document).ready(function() {
    $(".partner-slider").owlCarousel({
        nav: false,        // Disable next/prev arrows
        dots: false,       // Disable pagination dots
        loop: true,        // Loop the carousel items
        items: 4,          // Number of items to display
        margin: 10,        // Optional: space between items
        autoplay: true,    // Enable auto-scrolling
        autoplayTimeout: 3000,  // Time in ms between item transitions (3000 ms = 3 seconds)
        autoplayHoverPause: true, // Pause auto-scrolling when hovering over the carousel
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});


// service-slider
$(document).ready(function() {
    $(".services-slider").owlCarousel({
       nav: !0,               // Disable next/prev arrows
       dots: !1,            // Disable pagination dots
        loop: true,               // Loop the carousel items
        items: 1,                 // Number of items to display at once (adjust as needed)
        autoplayTimeout: 5000,    // Set time between transitions (5000 ms = 5 seconds)
        smartSpeed: 200,
         margin: 30,
          autoplayHoverPause: !0,
           autoplay: !0,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

// FAQ section

function toggleFaq(element) {
    const faqItem = element.parentNode;
    const isOpen = faqItem.classList.contains("open");
  
    // Close all open items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("open");
    });
  
    // Toggle current item
    if (!isOpen) {
      faqItem.classList.add("open");
    }
  }
  
=======
// header.js
window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

    // preloader
   // Simulating loading time
   window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").classList.add("fade-out");
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust time as needed
};

// patnership 
$(document).ready(function() {
    $(".partner-slider").owlCarousel({
        nav: false,        // Disable next/prev arrows
        dots: false,       // Disable pagination dots
        loop: true,        // Loop the carousel items
        items: 4,          // Number of items to display
        margin: 10,        // Optional: space between items
        autoplay: true,    // Enable auto-scrolling
        autoplayTimeout: 3000,  // Time in ms between item transitions (3000 ms = 3 seconds)
        autoplayHoverPause: true, // Pause auto-scrolling when hovering over the carousel
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});


// service-slider
$(document).ready(function() {
    $(".services-slider").owlCarousel({
       nav: !0,               // Disable next/prev arrows
       dots: !1,            // Disable pagination dots
        loop: true,               // Loop the carousel items
        items: 1,                 // Number of items to display at once (adjust as needed)
        autoplayTimeout: 5000,    // Set time between transitions (5000 ms = 5 seconds)
        smartSpeed: 200,
         margin: 30,
          autoplayHoverPause: !0,
           autoplay: !0,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

// FAQ section

function toggleFaq(element) {
    const faqItem = element.parentNode;
    const isOpen = faqItem.classList.contains("open");
  
    // Close all open items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("open");
    });
  
    // Toggle current item
    if (!isOpen) {
      faqItem.classList.add("open");
    }
  }
  
>>>>>>> 1594614 (Initial commit - Landing Page)
  