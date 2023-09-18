//* SWITCH - activo/inactivo
const toggleSwitches = document.querySelectorAll('.toggleSwitch');

toggleSwitches.forEach(switchElement => {
  switchElement.addEventListener('change', () => {
    const toggleLabel = switchElement.nextElementSibling;
    toggleLabel.style.backgroundColor = switchElement.checked ? '#66bb61' : '#ccc';
  });
});

//!----------------------------------------------------------------------------------

//* Buscador

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

  //!----------------------------------------------------------------------------------

  //*API

  const url = "https://apiindividual.onrender.com/api/usuarios";

  fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => {
      console.error('Error al obtener los usuarios:', error);
    });

  const mostrarData = (data) =>{
    console.log(data);
    let body = ''
    for (let i = 0; i<data.length; i++){
      const fechaOriginal = data[i].fecha;
      const fecha = new Date(fechaOriginal).toISOString().split('T')[0];
      body += `<tr><td>${data[i].id}</td>
      <td>${data[i].nombre}</td>
      <td>${data[i].correo}</td>
      <td>${data[i].contraseña}</td>
      <td>${fecha}</td>
      <td>${data[i].rol}</td>
      <td><button type="button" class="remove-button"><i class='bx bxs-trash-alt' ></i></button>
        <a href="EditarUsuarios.html"><button class="edit-button"><i class='bx bxs-edit-alt'></i></button></td>
      </tr>`
    }
    document.getElementById('table-data').innerHTML = body;
  }

  
