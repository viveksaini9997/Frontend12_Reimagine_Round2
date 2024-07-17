

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  menu.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // menu Animation
    menu.classList.toggle("toggle");
  });
});





// CSS keyframes for animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes navLinkFade {
  from {
      opacity: 0;
      transform: translateX(50px);
  }
  to {
      opacity: 1;
      transform: translateX(0);
  }
}`;
document.head.appendChild(style);

var swiper = new Swiper(".trending-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




gsap.from(".feature1-image img", {
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature1-image img",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".feature2-image img", {
  x: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature2-image img",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".feature3-image img", {
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature3-image img",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".feature4-image img", {
  x: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature4-image img",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".feature5-image img", {
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature5-image img",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".feature1-content h2", {
  x: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature1-image h2",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".feature2-content h2", {
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature2-image h2",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".feature3-content h2", {
  x: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature3-image h2",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from(".feature4-content h2", {
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature4-image h2",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".feature5-content h2", {
  x: 40,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".feature5-image h2",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".title", {
  y: -40,
  opacity: 0,
  duration: 0.8,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".title",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".description", {
  y: -40,
  opacity: 0,
  duration: 0.8,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".description",
    scroller: "body",
    scrub: 2,
  },
});
// here start ipad Section

gsap.from(".essentials h1", {
  y: 60,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".essentials h1",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});

gsap.from(".sections", {
  y: 60,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".sections",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});

gsap.from(".heading", {
  y: 60,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});
gsap.from(".advantages-slider", {
  y: 60,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".advantages-slider",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});

var swiper = new Swiper(".advantages-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// here start store section
gsap.from(".store-about h1", {
  y: 70,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  scrollTrigger: {
    trigger: ".store-about h1",
    scroller: "body",
    // scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});
gsap.from(".store-about p", {
  y: -70,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  scrollTrigger: {
    trigger: ".store-about p",
    scroller: "body",
    // scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});

var swiper = new Swiper(".sales-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

gsap.from(" #iphones", {
  y: 120,
  duration: 0.5,
  delay: 1.5,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#iphones",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});

gsap.from(" #macbooks", {
  y: 120,
  duration: 0.5,
  delay: 1.5,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#macbooks",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});

gsap.from(" #ipads", {
  y: 120,
  duration: 0.5,
  delay: 1.5,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#ipads",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});

gsap.from(" #watches", {
  y: 120,
  duration: 0.5,
  delay: 1.5,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#watches",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});

gsap.from(" #airpods", {
  y: 120,
  duration: 0.5,
  delay: 1.5,
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#airpods",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});



document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.animation = "bounce 0.5s forwards";
    });

    card.addEventListener("mouseout", () => {
      card.style.animation = "none";
    });
  });
});

// Animation keyframes in CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
      40% {transform: translateY(-30px);} 
      60% {transform: translateY(-15px);}
  }
`;
document.head.appendChild(styleSheet);

gsap.from(".home-cont h1", {
  x: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".home-cont h1",
    scroller: "body",
    // scrub: 2,
    // start: "top 80%",
    // end: "top 40%",
  },
});
gsap.from(".home-cont p", {
  x: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".home-cont p",
    scroller: "body",
    // scrub: 2,
    // start: "top 80%",
    // end: "top 40%",
  },
});

var swiper = new Swiper(".geting-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

gsap.from(" #h2", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#h2",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});
gsap.from(".mac-third h1", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".mac-third h1",
    scroller: "body",
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
});

// here start aipod section

gsap.from(".airpod-feature1-image img", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".airpod-feature1-image img",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});
gsap.from(".airpod-feature2-image img", {
  y: 60,
  opacity: 0,
  duration: 2,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".airpod-feature2-image img",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});

gsap.from(".airpod-feature3-image img", {
  y: 60,
  opacity: 0,
  duration: 2,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".airpod-feature3-image img",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 80%",
  },
});

// here start tv part

gsap.from(".tv-feature-1", {
  y: 80,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".tv-feature-1",
    scroller: "body",
    scrub: 2,
    start: "top 90%",
    end: "top 82%",
  },
});

gsap.from(".tv-feature-2", {
  y: 80,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".tv-feature-2",
    scroller: "body",
    scrub: 2,
    start: "top 90%",
    end: "top 82%",
  },
});

gsap.from(".h1-cont", {
  y: 80,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".h1-cont",
    scroller: "body",
    scrub: 2,
    start: "top 90%",
    end: "top 82%",
  },
});

gsap.from("#apple-video", {
  y: 80,
  duration: 1,
  delay: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#apple-video",
    scroller: "body",
    scrub: 2,
    start: "top 90%",
    end: "top 82%",
  },
});

// here start the accessories part

var swiper = new Swiper(".accessories-feature-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

gsap.from("#accessories-iPad", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#accessories-iPad",
    scroller: "body",
    start: "top 40%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#accessories-iPhone", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#accessories-iPhone",
    scroller: "body",
    start: "top 40%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#accessories-Watch", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#accessories-Watch",
    scroller: "body",
    start: "top 40%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#accessories-Sound", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#accessories-Sound",
    scroller: "body",
    start: "top 40%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#accessories-Mac", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#accessories-Mac",
    scroller: "body",
    start: "top 40%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#accessories-AirTags", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#accessories-AirTags",
    scroller: "body",
    start: "top 40%",
    end: "top 80%",
    scrub: 2,
  },
});



var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var feature1 = document.querySelector(".product-feature1");
var feature2 = document.querySelector(".product-feature2");
var feature3 = document.querySelector(".product-feature3");

btn1.addEventListener("click", function () {
  feature1.style.opacity = 1;
  feature2.style.opacity = 0;
  feature3.style.opacity = 0;
  gsap.from(".product-feature1", {
    x: -50,
    duration: 1,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".product-feature1",
      scroller: "body",
      // scrub: 2,
      start: "top 80%",
      end: "top 40%",
    },
  });
});
btn2.addEventListener("click", function () {
  feature1.style.opacity = 0;
  feature2.style.opacity = 1;
  feature3.style.opacity = 0;
  gsap.from(".product-feature2", {
    x: -50,
    duration: 1,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".product-feature2",
      scroller: "body",
      // scrub: 2,
      start: "top 80%",
      end: "top 40%",
    },
  });
});

btn3.addEventListener("click", function () {
  feature1.style.opacity = 0;
  feature2.style.opacity = 0;
  feature3.style.opacity = 1;
  gsap.from(".product-feature3", {
    x: -50,
    duration: 1,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".product-feature3",
      scroller: "body",
      // scrub: 2,
      start: "top 80%",
      end: "top 40%",
    },
  });
});



