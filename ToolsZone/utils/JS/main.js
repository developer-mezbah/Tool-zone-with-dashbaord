// show and hide navbar in mobile device
function manageNavbar() {
  const screenWidth = document.documentElement.clientWidth;
  const navbar = document.getElementById("navbar");
  const hambarger = document.getElementById("hambarger");
  const closeSvg = document.getElementById("hambarger-close");
  const hambargerSvg = document.getElementById("hambarger-svg");

  window.addEventListener("resize", () => {
    // console.log(typeof(screenWidth));
    
    if (screenWidth > 768) {
      // small size
      if (navbar.classList.contains("right-0")) {
        closeSvg.style.display = "block";
      }
    }
    if (screenWidth > 768) {
      // Big size
      closeSvg.style.display = "none";
      if (navbar.classList.contains("-right-[1000px]")) {
        navbar.style.left === "0px";
        navbar.style.visibility = "visible";
        closeSvg.style.display = "none";
      }
    }
  });

  // Add click event listener
  hambarger.addEventListener("click", () => {
    navbar.classList.add("right-0");
    navbar.classList.remove("-right-[1000px]");
    navbar.style.visibility = "visible";
    navbar.classList.remove("hidden");
    navbar.classList.add("block");
    hambargerSvg.style.display = "none";
    closeSvg.style.display = "block";
  });
  closeSvg.addEventListener("click", () => {
    navbar.classList.remove("right-0");
    navbar.classList.add("-right-[1000px]");
    navbar.style.visibility = "hidden";
    closeSvg.style.display = "none";
    hambargerSvg.style.display = "block";
    navbar.classList.add("block");
    navbar.classList.remove("hidden");
  });

  window.addEventListener("click", () => {
    if (!navbar.contains(event.target) && !hambarger.contains(event.target)) {
      navbar.classList.remove("right-0");
      navbar.classList.add("-right-[1000px]");
      navbar.style.visibility = "hidden";
      closeSvg.style.display = "none";
      hambargerSvg.style.display = "block";
      navbar.classList.add("block");
      navbar.classList.remove("hidden");
    }
  });
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

// All Modal Fuctionality
// Generic Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Open modal
  document.querySelectorAll(".open-modal").forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");

      document.getElementById(modalId).style.opacity = "1";
      document.getElementById(modalId).style.visibility = "visible";

      // Modal hide when Click Outside
      const mainBox =
        document.getElementById(modalId).firstElementChild.firstElementChild;
      document
        .getElementById(modalId)
        .firstElementChild.addEventListener("click", () => {
          if (!mainBox.contains(event.target)) {
            document.getElementById(modalId).style.opacity = "0";
            document.getElementById(modalId).style.visibility = "hidden";
          }
        });
    });
  });
  // Close modal
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
      }
    });
    // Close buttons inside modal
    modal.querySelectorAll(".close-modal").forEach((closeButton) => {
      closeButton.addEventListener("click", () => {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
      });
    });
  });
});
