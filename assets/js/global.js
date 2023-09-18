//* MODO OSCURO

const switchMode = document.getElementById('switch-mode');
const DARK_MODE_KEY = 'darkMode';

// Función para establecer el modo oscuro o claro
function setDarkMode(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

// Comprueba si el modo oscuro está activado en localStorage al cargar la página
const storedDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
setDarkMode(storedDarkMode);
switchMode.checked = storedDarkMode;

// Maneja el cambio en el interruptor
switchMode.addEventListener('change', function () {
  const isDarkMode = this.checked;
  setDarkMode(isDarkMode);
  
  // Guarda el estado en localStorage
  localStorage.setItem(DARK_MODE_KEY, isDarkMode);
});

//!-----------------------------------------------------------------------

//* Active

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

//!-----------------------------------------------------------------------

//*Menu izquierdo desplegable

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
  
  // Guardar el estado del sidebar en una cookie
  const isHidden = sidebar.classList.contains("hide");
  document.cookie = `sidebarHidden=${isHidden}; path=/`;
});

// Función para leer el valor de una cookie
function getCookie(name) {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
  return cookieValue === "true";
}

// Aplicar el estado guardado del sidebar al cargar la página
window.addEventListener("load", function () {
  const isHidden = getCookie("sidebarHidden");
  sidebar.classList.toggle("hide", isHidden);
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





//!-----------------------------------------------------------------------

//*Submodulos desplegables

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


//!-----------------------------------------------------------------------

//! Esto solo ira mientras esten los modulos por separado

// Obtiene todos los elementos con la clase "noDisponible"
var links = document.querySelectorAll('.noDisponible');

// Agrega un controlador de eventos a cada enlace
links.forEach(function(link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'No disponible',
            showConfirmButton: false,
            timer: 1500
        });
    });
});


