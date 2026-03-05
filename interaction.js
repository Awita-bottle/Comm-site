function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActive() {
  let current = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = 150; // navbar height area

    if (rect.top <= offset && rect.bottom >= offset) {
      current = section.id;
    }
  });

  if (current) {
    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  }
}

window.addEventListener("scroll", setActive);