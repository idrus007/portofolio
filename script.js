const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav a");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLink) navLink.classList.add("active");
      }
    });
  },
  {
    root: null,
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));

function openDialog(button) {
  const title = button.getAttribute("data-title");
  const desc = button.getAttribute("data-description");
  const image = button.getAttribute("data-image");
  const technologies = JSON.parse(button.getAttribute("data-technologies"));
  const projectGithub = button.getAttribute("data-github");

  document.getElementById("dialog-title").textContent = title;
  document.getElementById("dialog-description").textContent = desc;
  document.getElementById("dialog-image").src = image;
  const techParagraph = document.getElementById("dialog-technologies");
  techParagraph.innerHTML = "";
  techParagraph.textContent = `Tech Used : ${technologies.join(", ")}`;

  const viewSourceButton = document.querySelector(
    ".dialog-box .btn-group .btn-primary"
  );
  viewSourceButton.onclick = function () {
    window.open(projectGithub, "_blank");
  };

  document.getElementById("projectDialog").style.display = "flex";
}

function closeDialog() {
  document.getElementById("projectDialog").style.display = "none";
}

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function downloadCV() {
  window.location.href = "path/to/your/CV.pdf";
}

function downloadCV() {
  window.open("assets/CV Muhammad Idrus Alawi.pdf", "_blank");
}
