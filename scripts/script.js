// hamburger menu
const hamburger = document.querySelector(".nav-hamburger");
const linksContainer = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-link"); // Select all links inside nav-menu-link

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Add event listeners for responsive behavior
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

// Ensure menu is closed on load if in mobile view
if (window.matchMedia("(max-width: 550px)").matches) {
  closeMenu();
}

// Close menu when a link is clicked
function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// Make nav appear on scroll up
let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    nav.classList.add('hidden');
  } else {
    // Scrolling up
    nav.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});


// Project Cards
const container = document.getElementById("project-cards");

const cards = [
  {
    title: "Ript Fitness",
    description: "A fitness mobile application that offers a way to track workouts, connect with friends, and log meals.",
    techStack: ["React Native", "TypeScript", "Figma"],
    image: "assets/images/ript-fitness.png",
    github: "https://github.com/COSC481W-2024Fall/Ript-Fitness",
    demo: "exp://u.expo.dev/ea20e0cb-de85-4497-8c69-2a529bb4a3a4/group/15ab57b4-690a-43cc-9529-729a1e999870",
    page: "ript.html"
  },
  {
    title: "ReMarket",
    description: "An online marketplace that allows users to create accounts, shop for a variety of products, and sell their own items with ease.",
    techStack: ["HTML", "CSS", "PHP"],
    image: "assets/images/remarket-sc1.png",
    github: "https://phi1ls.github.io/ReMarket-471-Project/",
    demo: "https://github.com/Phi1lS/ReMarket-471-Project"
  },
  {
    title: "Tower of Zeru",
    description: "A thrilling 2D roguelite dungeon crawler where players battle enemies to clear rooms and strategize their way to the ultimate showdown against the boss.",
    techStack: ["C#", "Unity"],
    image: "assets/images/TowerOfZeru.png",
    github: "https://github.com/TFlinchu/Tower-of-Zeru",
    demo: "https://youtu.be/99QisaAzqo4"
  },
];

cards.forEach((result, index) => {
  const stackItems = result.techStack.map((item) => `<li>${item}</li>`).join("");

  const readMoreLink = index === 0 
    ? `<div class="read-more"><a href="${result.page}">Read More</a></div>` 
    : "";

  const content = `
    <div class="card">
      <div class="card-header">
        <img src="${result.image}" alt="${result.title}" class="cardImage">
      </div>
      <div class="card-body">
        <h3>${result.title}</h3>
        <ul>
          ${stackItems}
        </ul>
        <p>${result.description} ${readMoreLink}</p>
        <div class="btn-container">
          <button onclick="window.open('${result.github}', '_blank')">
            <i data-feather="github" class="icon-btn"></i>
          </button>
          <button onclick="window.open('${result.demo}', '_blank')">
            <i data-feather="external-link" class="icon-btn"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML += content;
});


feather.replace({
  stroke: "#BED8B5",
  width: 30,
  height: 30
});