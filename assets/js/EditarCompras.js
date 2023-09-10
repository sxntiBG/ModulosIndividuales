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


    document.addEventListener("DOMContentLoaded", function () {
        const showButtons = document.querySelectorAll(".show-button");

        showButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const detailsRow = button.parentElement.parentElement.nextElementSibling;
                detailsRow.classList.toggle("visible");
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const productForm = document.getElementById("product-form");
        
        const addButton = productForm.querySelector(".register-button");
        const cancelButton = productForm.querySelector(".cancel-button");
      
        addButton.addEventListener("click", function (event) {
          event.preventDefault();
          
          Swal.fire({
            title: "Compra agregada",
            text: "La Compra ha sido actualizado exitosamente.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          
          setTimeout(function () {
            window.location.href = "/assets/pages/comprasAdmin.html";
          }, 1500);
        });
      
        cancelButton.addEventListener("click", function (event) {
          event.preventDefault();
          
          Swal.fire({
            title: "Cancelar",
            text: "¿Estás seguro de que quieres cancelar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, cancelar",
            cancelButtonText: "No, volver"
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/assets/pages/comprasAdmin.html";
            }
          });
        });
      });

      // Función para mostrar una alerta antes de redirigir
function confirmNavigation(url) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Es posible que no se guarden los cambios.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, continuar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = url;
    }
  });
}

// Asignar la función a los enlaces
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#sidebar a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = link.getAttribute("href");
      confirmNavigation(url);
    });
  });
});


//AGREGAR TABLAS

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");
    const productForm = document.getElementById("product-form");

    addButton.addEventListener("click", function () {
        const formRow = document.createElement("div");
        formRow.className = "form-row";
        formRow.innerHTML = `
            <label for="product-name">Productos:</label>
            <input type="text" id="product-name" name="product-name" required>
            <label for="product-price">Proveedor:</label>
            <input type="text" id="product-price" name="product-name" required>
            <label for="product-price">Precio:</label>
            <input type="text" id="product-price" name="product-price" required>
            <label for="product-quantity">Cantidad:</label>
            <input type="number" id="product-quantity" name="product-quantity" required>
            <button type="button" class="remove-button"><i class='bx bxs-trash-alt' ></i></button>
        `;

        const removeButton = formRow.querySelector(".remove-button");
        removeButton.addEventListener("click", function () {
            formRow.remove();
        });

        productForm.insertBefore(formRow, addButton);
    });
});