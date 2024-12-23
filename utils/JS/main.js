// show and hide navbar in mobile device
function manageNavbar() {
  const screenWidth = document.documentElement.clientWidth;
  const navbar = document.getElementById("navbar");
  const hambarger = document.getElementById("hambarger");
  const closeSvg = document.getElementById("hambarger-close");
  const hambargerSvg = document.getElementById("hambarger-svg");

  if (screenWidth < 768) {
    navbar.style.right = "-1000px";
    navbar.style.visibility = "hidden";
    closeSvg.style.display = "none";
  }

  const toggleNav = () => {
    if (navbar.style.visibility === "hidden") {
      navbar.style.right = "0px";
      navbar.style.visibility = "visible";
      navbar.classList.remove("hidden");
      hambargerSvg.style.display = "none";
      closeSvg.style.display = "block";
    } else {
      navbar.style.right = "-1000px";
      navbar.style.visibility = "hidden";
      closeSvg.style.display = "none";
      hambargerSvg.style.display = "block";
    }
  };

  // Add click event listener
  hambarger.addEventListener("click", toggleNav);
  closeSvg.addEventListener("click", toggleNav);
}

// Stickey Navbar
const navbar = document.getElementById("full-navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Add class to make the navbar visible
    navbar.style.position = "fixed";
    navbar.classList.add("navbar-animation");
  } else {
    // Remove class to hide the navbar
    navbar.classList.remove("navbar-animation");
    navbar.style.position = "static";
  }
});
// Output navbar functions
manageNavbar();



// Single Tools Modal
const showButtons = document.querySelectorAll(".view-single-tools-modal");
const modal = document.getElementById("single-tools-modal");
const modalClose = document.getElementById("single-tools-modal-close");

showButtons.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  });
});

modalClose?.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
});

