//*SWITCH - activo/inactivo
const toggleSwitches = document.querySelectorAll('.toggleSwitch');

toggleSwitches.forEach(switchElement => {
  switchElement.addEventListener('change', () => {
    const toggleLabel = switchElement.nextElementSibling;
    toggleLabel.style.backgroundColor = switchElement.checked ? '#66bb6a' : '#ccc';
  });
});

//*Buscador

 function searchTable() {
    const input = document.getElementById("search-input");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      const td = rows[i].getElementsByTagName("td")[1];
      if (td) {
        const textValue = td.textContent || td.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  }

  //*Boton editar
  function editar(id) {
    // Obtener los datos de la fila seleccionada
    const fila = document.querySelector(`tr[data-id="${id}"]`);
    const nombre = fila.getAttribute('data-nombre');

    // Redirigir a la página de edición con los datos
    window.location.href = `EditarRoles.html?id=${id}&nombre=${nombre}`;
}


//!------------------------------------------------------------------------

//*API

//*API

const url = "https://apiindividual.onrender.com/api/roles";

const eliminarRolEnAPI = (_id) => {
  return fetch(`${url}/${_id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al eliminar el rol en la API');
      }
    });
};

fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => {
    console.error('Error al obtener los roles:', error);
  });

  const mostrarData = (data) => {
    console.log(data);
    let body = '';
    for (let i = 0; i < data.length; i++) {
      const productosIcon = data[i].productos === true
        ? "<i class='bx bxs-check-square checks' style='color:#04ff00'></i>"
        : "<i class='bx bxs-x-square checks' style='color:#ff0004'></i>";
      
      const ventasIcon = data[i].ventas === true
        ? "<i class='bx bxs-check-square checks' style='color:#04ff00'></i>"
        : "<i class='bx bxs-x-square checks' style='color:#ff0004'></i>";
      
      const comprasIcon = data[i].compras === true
        ? "<i class='bx bxs-check-square checks' style='color:#04ff00'></i>"
        : "<i class='bx bxs-x-square checks' style='color:#ff0004'></i>";
      
      const proveedoresIcon = data[i].proveedores === true
        ? "<i class='bx bxs-check-square checks' style='color:#04ff00'></i>"
        : "<i class='bx bxs-x-square checks' style='color:#ff0004'></i>";
      
      body += `<tr id="fila-${data[i]._id}">
        <td>${data[i].id}</td>
        <td>${data[i].nombre}</td>
        <td>${productosIcon}</td>
        <td>${ventasIcon}</td>
        <td>${comprasIcon}</td>
        <td>${proveedoresIcon}</td>
        <td><button type="button" class="remove-button" data-id="${data[i]._id}"><i class='bx bxs-trash-alt'></i></button>
        <button type="button" class="edit-button" edit-id="${data[i]._id}"><i class='bx bxs-edit-alt'></i></button></td>
      </tr>`;
    }
    document.getElementById('table-data').innerHTML = body;

    // Agregar evento click a los botones edit-button
const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const userObjectId = button.getAttribute('edit-id');
    window.location.href = `EditarRoles.html?id=${userObjectId}`;
  });
});

  // Agregar evento click a los botones remove-button
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const userObjectId = button.getAttribute('data-id');

      // Mostrar ventana de confirmación antes de eliminar
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarRolEnAPI(userObjectId)
            .then(() => {
              // Eliminar la fila de la tabla después de eliminar en la API
              const filaAEliminar = document.getElementById(`fila-${userObjectId}`);
              filaAEliminar.remove();
              Swal.fire('Rol eliminado', '', 'success');
            })
            .catch((error) => {
              console.error(error);
              Swal.fire('Error al eliminar', 'Hubo un error al eliminar el rol.', 'error');
            });
        }
      });
    });
  });
  };