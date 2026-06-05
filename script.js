const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const page = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  const target = link.getAttribute("href");
  if (target === page) {
    link.classList.add("is-active");
  }
});

document.querySelectorAll(".hero-slideshow").forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll("img"));
  const dots = Array.from(slideshow.querySelectorAll(".slideshow-dots button"));

  if (slides.length < 2) {
    return;
  }

  let activeIndex = 0;
  let timer;

  const showSlide = (index) => {
    activeIndex = index;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });
  };

  const start = () => {
    timer = window.setInterval(() => {
      showSlide((activeIndex + 1) % slides.length);
    }, 5000);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      window.clearInterval(timer);
      showSlide(index);
      start();
    });
  });

  start();
});
