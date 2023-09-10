const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

const searchButton = document.querySelector(
  "#content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  "#content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#content nav form");

searchButton.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchButtonIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace("bx-x", "bx-search");
  searchForm.classList.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const ventasLink = document.querySelector(".menu-horizontal01 > a");
  const menuVertical = document.querySelector(
    ".menu-horizontal01 > .menu-vertical"
  );

  ventasLink.addEventListener("click", function (e) {
    e.preventDefault();
    menuVertical.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const ventasLink = document.querySelector(".menu-horizontal02 > a");
  const menuVertical = document.querySelector(
    ".menu-horizontal02 > .menu-vertical"
  );

  ventasLink.addEventListener("click", function (e) {
    e.preventDefault();
    menuVertical.classList.toggle("show");
  });
});

const enlace = document.getElementById("miEnlace");
const elementoLi = enlace.parentNode; // Obtenemos el elemento li padre del enlace

enlace.addEventListener("click", function (event) {
  event.preventDefault();
  elementoLi.classList.toggle("activo"); // Agregamos/quitamos la clase al elemento li
});

const enlace2 = document.getElementById("miEnlace2");
const elementoLi2 = enlace2.parentNode;

enlace2.addEventListener("click", function (event) {
  event.preventDefault();
  elementoLi2.classList.toggle("activo");
});




//Editar imagen
const avatarButton = document.getElementById("avatar-button");
const avatarInput = document.getElementById("avatar-input");
const avatarImage = document.getElementById("avatar-image");
const avatarImagePreview = document.getElementById("avatar-image-preview");

avatarButton.addEventListener("click", () => {
  avatarInput.click();
});

avatarInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const objectURL = URL.createObjectURL(selectedFile);
    avatarImage.src = objectURL;
    avatarImagePreview.src = objectURL; // Aplicar al avatar preview
  }
});
