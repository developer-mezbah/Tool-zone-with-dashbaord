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

// Single Tools Modal
const createPackageshowButtons = document.getElementById(
  "create-packhag-show-modal"
);
const createPackageModal = document.getElementById("create-package-modal");
const createPackageModalClose = document.getElementById(
  "create-package-modal-close"
);

createPackageshowButtons?.addEventListener("click", () => {
  createPackageModal.style.opacity = "1";
  createPackageModal.style.visibility = "visible";
});

createPackageModalClose?.addEventListener("click", () => {
  createPackageModal.style.opacity = "0";
  createPackageModal.style.visibility = "hidden";
});
