 //*Validaciones

// Función que se ejecutará al hacer clic en el botón
document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtiene el valor del campo de entrada de texto
    var roleName = document.getElementById('roleName').value;
    var idd = document.getElementById('idd').value

    // Verifica si el campo está lleno
    if (roleName.trim() !== '' && idd.trim() !== '') {
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
            title: 'Llena todos los campos porfavor!',
            showConfirmButton: false,
            timer: 2000
        });
    }
});

//!-----------------------------------------------------------------

//*API

document.getElementById("miFormulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Captura los valores de los campos del formulario
    const id = document.getElementById("idd").value;
    const nombre = document.getElementById("roleName").value;
    const productos = document.getElementById("module-check").checked;
    const ventas = document.getElementById("module-check1").checked;
    const compras = document.getElementById("module-check2").checked;
    const proveedores = document.getElementById("module-check3").checked;
    
    // Crea un objeto con los datos a enviar
    const data = {
        "id": id,
        "nombre": nombre,
        "productos": productos,
        "ventas": ventas,
        "compras": compras,
        "proveedores": proveedores
    };

    // Realiza la solicitud POST a la API
    fetch("https://apiindividual.onrender.com/api/roles", {
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
  