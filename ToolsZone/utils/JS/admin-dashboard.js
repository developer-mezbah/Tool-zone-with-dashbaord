const listItems = document.querySelectorAll(".sidebar-list li");

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");

      if (item.lastElementChild.classList.contains("submenu")) {
        item.lastElementChild.style.visibility = `visible`;
        item.lastElementChild.style.display = `flex`;
      }
    }
  });

  item.addEventListener("mouseenter", () => {
    if (sidebar.classList.contains("close")) {
      if (item.lastElementChild.classList.contains("submenu")) {
        const rect = item.getBoundingClientRect();
        item.lastElementChild.style.top = `${rect.top}px`;
        item.lastElementChild.style.visibility = `visible`;
        item.lastElementChild.style.display = `flex`;

        item.classList.add("active");
      }
    }
  });
  item.addEventListener("mouseleave", () => {
    if (sidebar.classList.contains("close")) {
      if (item.lastElementChild.classList.contains("submenu")) {
        item.lastElementChild.style.display = `none`;
        item.classList.remove("active");
      }
    }
  });
});

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
