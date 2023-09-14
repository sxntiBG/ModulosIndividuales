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