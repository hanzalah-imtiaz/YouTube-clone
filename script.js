const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuIcon.onclick = () => {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};
