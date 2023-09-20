
//*Validaciones

// Función que se ejecutará al enviar el formulario
document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtiene los valores de los campos del formulario (agrega los campos restantes)
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    var rol = document.getElementById('rol').value;

    // Verifica si los campos obligatorios están llenos
    if (nombre.trim() !== '' && correo.trim() !== '' && contraseña.trim() !== '' && rol.trim() !== '') {
        // Muestra una alerta de confirmación usando SweetAlert
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres guardar el formulario con los datos ingresados?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, guardar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            // Si el usuario confirma, se envía el formulario y luego se redirige
            if (result.isConfirmed) {
                // Envía el formulario
                window.location.href = '/assets/pages/Usuarios.html';
            }
        });
    } else {
        // Si algún campo obligatorio está vacío, muestra una alerta de error
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, completa todos los campos obligatorios.',
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

const api = `https://apiindividual.onrender.com/api/usuarios/${userId}`

fetch(api)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => {
    console.error('Error al obtener los usuarios:', error);
  });

  const mostrarData = (data) =>{
    const fechaOriginal = data.fecha;
    const fecha1 = new Date(fechaOriginal).toISOString().split('T')[0];
    document.getElementById('id').value = data.id;
    document.getElementById('nombre').value = data.nombre;
    document.getElementById('correo').value = data.correo;
    document.getElementById('contraseña').value = data.contraseña;
    document.getElementById('fecha').value = fecha1;
    document.getElementById('rol').value = data.rol;
  }


const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores del formulario
  const id = document.getElementById('id').value
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const contraseña = document.getElementById('contraseña').value;
  const fecha = document.getElementById('fecha').value;
  const rol = document.getElementById('rol').value;

  // Crea un objeto con los datos a actualizar
  const datosUsuario = {
    "id": id,
    "nombre": nombre,
    "correo": correo,
    "contraseña": contraseña,
    "fecha" : fecha, 
    "rol": rol
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
        window.location.href = '/assets/pages/Usuarios.html';
      } else {
        console.error('Error al actualizar los datos del usuario en la API');
      }
    })
    .catch((error) => {
      console.error('Error al actualizar los datos del usuario:', error);
    });
});