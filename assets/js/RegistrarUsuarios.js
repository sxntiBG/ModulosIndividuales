 // Obtener la fecha actual
 var fechaActual = new Date();

 // Obtener el día, mes y año
 var dia = fechaActual.getDate();
 var mes = fechaActual.getMonth() + 1; // Los meses en JavaScript comienzan en 0, por lo que sumamos 1
 var año = fechaActual.getFullYear();

 // Agregar ceros delante si el día o el mes son menores que 10
 var diaFormateado = dia < 10 ? '0' + dia : dia;
 var mesFormateado = mes < 10 ? '0' + mes : mes;

 // Formatear la fecha como "dd/mm/yyyy"
 var fechaFormateada = año + '-' + mesFormateado + '-' + diaFormateado;

 // Establecer la fecha formateada como el valor del campo de entrada
 document.getElementById('fecha').value = fechaFormateada;


 //! -----------------------------------------------------------------

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

 //* Api

 document.getElementById("miFormulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Captura los valores de los campos del formulario
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const fecha = document.getElementById("fecha").value;
    const rol = document.getElementById("rol").value;

    // Crea un objeto con los datos a enviar
    const data = {
        "id" : id,
        "nombre": nombre,
        "correo": correo,
        "contraseña": contraseña,
        "fecha" : fecha,
        "rol": rol
    };

    // Realiza la solicitud POST a la API
    fetch("https://apiindividual.onrender.com/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta de la API:", data);
    })
    .catch(error => {
        console.error("Error al enviar la solicitud:", error);
    });
});