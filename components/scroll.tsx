// Autoescrol hacia abajo
function autoScroll() {
    window.scrollBy(0, 10); // Cambia el valor '10' para ajustar la velocidad de desplazamiento
    scrolldelay = setTimeout('autoScroll()', 10); // Cambia el valor '10' para ajustar la frecuencia del desplazamiento
  }
  
  // Llama a la función para iniciar el autoescrol
  autoScroll();
  