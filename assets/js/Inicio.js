//* Graficos

document.addEventListener("DOMContentLoaded", function () {
  
  var datos = {
    labels: ["Compras", "Ventas", "Ganancias"],
    datasets: [{
        data: [638000, 1350000, 712000], 
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Color para Compras
            'rgba(54, 162, 235, 0.5)', // Color para Ventas
            'rgba(75, 192, 192, 0.5)'  // Color para Ganancias
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

var ctx = document.getElementById('myChart').getContext('2d');

// Crea el gráfico de barras
var miGrafico = new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
});


// Grafico de pastel
document.addEventListener("DOMContentLoaded", function () {
  
  const ctx = document.getElementById("myChart2");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Shampoo", "Crema", "Tinte", "Gomina", "Acondicionador", "Gel"],
      datasets: [
        {
          data: [12, 19, 3, 5, 11, 7],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        
      },
    },
  });
});


//!-----------------------------------------------------------------------------

//* Cuadro informativo

 // Función para mostrar el cuadro de diálogo si no se ha mostrado antes
 function mostrarDialogo() {
  // Verificar si la cookie "dialogoMostrado" existe
  var dialogoMostrado = getCookie("dialogoMostrado");

  if (!dialogoMostrado) {
      // Si la cookie no existe, muestra el cuadro de diálogo con los datos
      Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Información Importante',
          html:
              '<p>Modulos y consumo de API individuales</p>' +
              '<p>Modulos habilitados: usuarios, roles, dashboard y perfil</p>' +
              '<p>Hecho por: Santiago Zapata Ospina</p>' +
              '<p>Ficha: 2617472</p>',
          confirmButtonText: 'Aceptar'
      });

      // Establecer una cookie para indicar que el cuadro de diálogo se ha mostrado
      setCookie("dialogoMostrado", "true", 3600); // La cookie expira en 3600 segundos (1 hora)
  }
}

// Función para establecer una cookie
function setCookie(nombre, valor, segundos) {
  var fecha = new Date();
  fecha.setTime(fecha.getTime() + (segundos * 1000)); // Convierte segundos a milisegundos
  var expires = "expires=" + fecha.toUTCString();
  document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
  var nombreEQ = nombre + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nombreEQ) == 0) {
          return cookie.substring(nombreEQ.length, cookie.length);
      }
  }
  return null;
}

// Llama a la función para mostrar el cuadro de diálogo al cargar la página
mostrarDialogo();