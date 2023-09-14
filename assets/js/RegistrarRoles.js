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