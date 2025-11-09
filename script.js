// ===== Mobile Menu Toggle =====
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Book Button Alert =====
const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Thanks for choosing Wanderlust Tours! Our agent will contact you shortly.");
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      navLinks.classList.remove("show");
    }
  });
});

// ===== Contact Form Alert =====
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});
