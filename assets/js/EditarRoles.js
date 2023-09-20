
 //*Validaciones

// Función que se ejecutará al hacer clic en el botón
document.getElementById('crearRol').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón (recarga de la página)

    // Obtiene el valor del campo de entrada de texto
    var roleName = document.getElementById('roleName').value;

    // Verifica si el campo está lleno
    if (roleName.trim() !== '') {
        // Muestra una alerta de confirmación usando SweetAlert
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres crear el rol con el nombre: ' + roleName + '?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, crear',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            // Si el usuario confirma, redirige a la página 'Roles.html'
            if (result.isConfirmed) {
                window.location.href = '/assets/pages/Roles.html'; // Cambia 'Roles.html' por la URL de la página a la que quieres redirigir
            }
        });
    } else {
        // Si el campo está vacío, muestra una alerta de error
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El campo de nombre del rol está vacío.',
            showConfirmButton: false,
            timer: 2000
        });
    }
});


//! -----------------------------------------------------------------
//*Recibir parametros del object ID

// Obtener el ID del usuario de los parámetros de URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

//*API

const api = `https://apiindividual.onrender.com/api/roles/${userId}`

fetch(api)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => {
    console.error('Error al obtener los roles:', error);
  });

  const mostrarData = (data) =>{
    document.getElementById('idd').value = data.id;
    document.getElementById('roleName').value = data.nombre;
    document.getElementById('module-check').value = data.productos;
    document.getElementById('module-check1').value = data.ventas;
    document.getElementById('module-check2').value = data.compras;
    document.getElementById('module-check3').value = data.proveedores;
  }


const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores del formulario
  const id = document.getElementById('idd').value
  const nombre = document.getElementById('roleName').value;
  const productos = document.getElementById('module-check').value;
  const ventas = document.getElementById('module-check1').value;
  const compras = document.getElementById('module-check2').value;
  const proveedores = document.getElementById('module-check3').value;

  // Crea un objeto con los datos a actualizar
  const datosUsuario = {
    "id": id,
    "nombre": nombre,
    "productos": productos,
    "ventas": ventas,
    "compras" : compras, 
    "proveedores": proveedores
  };

  fetch(`https://apiindividual.onrender.com/api/usuarios/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datosUsuario),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/assets/pages/Roles.html';
      } else {
        console.error('Error al actualizar los datos del rol en la API');
      }
    })
    .catch((error) => {
      console.error('Error al actualizar los datos del rol:', error);
    });
});