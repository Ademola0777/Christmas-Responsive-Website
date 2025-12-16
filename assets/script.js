// Menu Show and Hide
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

navToggle?.addEventListener("click", () => navMenu.classList.add("show-menu"));
navClose?.addEventListener("click", () =>
  navMenu.classList.remove("show-menu")
);

// Close menu when clicking a nav link
document
  .querySelectorAll(".nav-link")
  .forEach(
    (link) => (link.onclick = () => navMenu.classList.remove("show-menu"))
  );

// Change background header on scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () =>
  header.classList.toggle("scroll-header", scrollY >= 50)
);

// active link switching
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 60;

  sections.forEach((section) => {
    const height = section.getBoundingClientRect().height;
    const id = section.id;

    const isActive =
      scrollY >= section.offsetTop && scrollY < section.offsetTop + height;

    document
      .querySelector(`.nav-menu a[href*="${id}"]`)
      ?.classList.toggle("active-link", isActive);
  });
});

// Dark Light Theme
const themeBtn = document.getElementById("theme-button");
const DARK = "dark-theme";
const ICON = "bx-sun";

// Restore saved preference
document.body.classList.toggle(DARK, localStorage.theme === "dark");
themeBtn.classList.toggle(ICON, localStorage.icon === "bx bx-moon");

// Toggle theme
themeBtn?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle(DARK);
  themeBtn.classList.toggle(ICON, isDark);

  localStorage.theme = isDark ? "dark" : "light";
  localStorage.icon = isDark ? "bx bx-moon" : "bx bx-sun";
});

// Swiper
const swiper = new Swiper(".gift-swiper", {
  loop: "true",
  slidesPerView: "auto",
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 95,
      centeredSlides: false,
    },
  },
});

// AOS Animation
AOS.init({
  duration: 2500,
  offset: 60,
  delay: 400,
  once: false,
});

// Show scroll up button
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () =>
  scrollUp?.classList.toggle("show-scroll", window.scrollY >= 350)
);
