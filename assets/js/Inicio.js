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

// const enlace = document.getElementById('miEnlace');

// enlace.addEventListener('click', function(event) {
//   event.preventDefault(); // Evitar que el enlace cambie de página
//   enlace.classList.add('activo'); // Agregar una clase al enlace
// });

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

//Grafico
document.addEventListener("DOMContentLoaded", function () {
  
  var datos = {
    labels: ["Compras", "Ventas", "Ganancias"],
    datasets: [{
        data: [638000, 1350000, 712000], // Puedes cambiar estos valores por los tuyos
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Color para Compras
            'rgba(54, 162, 235, 0.5)', // Color para Ventas
            'rgba(75, 192, 192, 0.5)'  // Color para Ganancias
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

var ctx = document.getElementById('myChart').getContext('2d');

// Crea el gráfico de barras
var miGrafico = new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
});


document.addEventListener("DOMContentLoaded", function () {
  
  const ctx = document.getElementById("myChart2");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Shampoo", "Crema", "Tinte", "Gomina", "Acondicionador", "Gel"],
      datasets: [
        {
          data: [12, 19, 3, 5, 11, 7],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        
      },
    },
  });
});



