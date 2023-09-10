const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})






document.addEventListener('DOMContentLoaded', function () {
    const ventasLink = document.querySelector('.menu-horizontal01 > a');
    const menuVertical = document.querySelector('.menu-horizontal01 > .menu-vertical');

    ventasLink.addEventListener('click', function (e) {
        e.preventDefault();
        menuVertical.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ventasLink = document.querySelector('.menu-horizontal02 > a');
    const menuVertical = document.querySelector('.menu-horizontal02 > .menu-vertical');

    ventasLink.addEventListener('click', function (e) {
        e.preventDefault();
        menuVertical.classList.toggle('show');
    });
});



// const enlace = document.getElementById('miEnlace');

// enlace.addEventListener('click', function(event) {
//   event.preventDefault(); // Evitar que el enlace cambie de página
//   enlace.classList.add('activo'); // Agregar una clase al enlace
// });

const enlace = document.getElementById('miEnlace');
const elementoLi = enlace.parentNode; // Obtenemos el elemento li padre del enlace

enlace.addEventListener('click', function(event) {
  event.preventDefault();
  elementoLi.classList.toggle('activo'); // Agregamos/quitamos la clase al elemento li
});

const enlace2 = document.getElementById('miEnlace2');
const elementoLi2 = enlace2.parentNode;

enlace2.addEventListener('click', function(event) {
  event.preventDefault();
  elementoLi2.classList.toggle('activo');
});




//DAGUFF EN KICK

// TO DELETE SOMETHING
document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-button");
    const deleteButtons = document.querySelectorAll(".delete-button");

    editButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Handle edit functionality here
            console.log("Edit button clicked");
        });
    });

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Handle delete functionality here
            console.log("Delete button clicked");
        });
    });
});


//BOTON DE SHOW

function toggleSubfila(button) {
    const row = button.parentNode.parentNode;
    const subfila = row.nextElementSibling;
    
    if (subfila.style.display === 'table-row') {
        subfila.style.display = 'none';
    } else {
        closeAllSubfilas();
        subfila.style.display = 'table-row';
    }
}

function closeAllSubfilas() {
    const subfilas = document.querySelectorAll('.subfila');
    subfilas.forEach(subfila => {
        subfila.style.display = 'none';
    });
}




	//DETALLES DE COMPRAS
    var currentlyOpenButton = null;

    function toggleSubfila(subfilaId, button) {
        var subfila = document.getElementById(subfilaId);
    
        if (currentlyOpenButton !== null && currentlyOpenButton !== button) {
            var prevSubfilaId = currentlyOpenButton.getAttribute("data-subfila");
            var prevSubfila = document.getElementById(prevSubfilaId);
            prevSubfila.style.display = "none";
            currentlyOpenButton.classList.remove("active");
        }
    
        if (subfila.style.display === "none" || subfila.style.display === "") {
            subfila.style.display = "table-row";
            button.classList.add("active");
            currentlyOpenButton = button;
        } else {
            subfila.style.display = "none";
            button.classList.remove("active");
            currentlyOpenButton = null;
        }
    }
    

//SWITCH
const toggleSwitches = document.querySelectorAll('.toggleSwitch');

toggleSwitches.forEach(switchElement => {
  switchElement.addEventListener('change', () => {
    const toggleLabel = switchElement.nextElementSibling;
    toggleLabel.style.backgroundColor = switchElement.checked ? '#66bb6a' : '#ccc';
  });
});

//BUSCADOR

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input[type='search']");
    const rows = document.querySelectorAll(".main-row");
  
    searchInput.addEventListener("input", function (event) {
      const searchText = event.target.value.trim().toLowerCase();
  
      rows.forEach((row) => {
        const nameColumn = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        if (searchText === "" || nameColumn.includes(searchText)) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
  
  
  
  