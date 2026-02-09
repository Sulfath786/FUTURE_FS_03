// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Highlight active nav link automatically
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Back to Top button functionality
const topBtn = document.createElement("button");
topBtn.id = "backToTop";
topBtn.textContent = "↑ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "0.5rem 1rem";
topBtn.style.fontSize = "1rem";
topBtn.style.background = "#4caf50";
topBtn.style.color = "#fff";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
