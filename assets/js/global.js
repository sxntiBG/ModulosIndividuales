const switchMode = document.getElementById('switch-mode');
const DARK_MODE_KEY = 'darkMode';

// Función para establecer el modo oscuro o claro
function setDarkMode(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

// Comprueba si el modo oscuro está activado en localStorage al cargar la página
const storedDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
setDarkMode(storedDarkMode);
switchMode.checked = storedDarkMode;

// Maneja el cambio en el interruptor
switchMode.addEventListener('change', function () {
  const isDarkMode = this.checked;
  setDarkMode(isDarkMode);
  
  // Guarda el estado en localStorage
  localStorage.setItem(DARK_MODE_KEY, isDarkMode);
});



//-----------------------------------------------------------------------
