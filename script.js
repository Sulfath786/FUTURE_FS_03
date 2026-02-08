// Smooth scroll to Menu section (homepage only)
function scrollToMenu() {
  const menuSection = document.getElementById("menu");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Highlight active nav link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (current && link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
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

// Contact form validation (if you add a form later)
function validateForm() {
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return false;
  }
  return true;
}