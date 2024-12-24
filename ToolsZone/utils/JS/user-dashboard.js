const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  if (sidebar.classList.contains("-left-[100%]")) {
    sidebar.classList.add("left-[0%]");
    sidebar.classList.remove("-left-[100%]");
    openSidebar.classList.add("hidden");
  } else {
    sidebar.classList.remove("left-[0%]");
    sidebar.classList.add("-left-[100%]");
    openSidebar.classList.remove("hidden");
  }
}
openSidebar.addEventListener("click", toggleSidebar);
closeSidebar.addEventListener("click", toggleSidebar);

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
