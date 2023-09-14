const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const nombre = urlParams.get('nombre');

        // Mostrar el nombre del rol en el campo de entrada
        document.getElementById('nombre').value = nombre;

        // Manejar la lógica de guardar cambios aquí
        document.getElementById('guardar').addEventListener('click', function () {
            const nuevoValor = document.getElementById('nuevoValor').value;
        });