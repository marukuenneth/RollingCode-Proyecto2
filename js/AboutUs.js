document.addEventListener("DOMContentLoaded", function() {
    const sparkleTrail = document.getElementById("sparkle-trail");
  
    // Función para seguir el movimiento del cursor y agregar chispas
    function followCursor(event) {
      const sparkle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      sparkle.classList.add("sparkle");
      sparkle.setAttribute("width", "20");
      sparkle.setAttribute("height", "20");
      sparkle.setAttribute("viewBox", "0 0 20 20");
      sparkle.style.left = event.pageX + "px";
      sparkle.style.top = event.pageY + "px";
  
      const star = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      star.setAttribute("points", "10,0 13.09,7.5 20,8.66 15,14.09 16.18,20 10,17 3.82,20 5,14.09 0,8.66 6.91,7.5");
      star.setAttribute("fill", "#0066ff"); //color de las estrellas azul claro
      star.setAttribute("stroke", "#ffffff"); //borde blanco alrededor de las estrellas
      star.setAttribute("stroke-width", "0.5"); //ancho del borde
      sparkle.appendChild(star);
  
      sparkleTrail.appendChild(sparkle);
  
      // Eliminar la chispa después de un tiempo
      setTimeout(() => {
        sparkle.remove();
      }, 1000); //duración de las chispas
    }
  
    document.addEventListener("mousemove", followCursor);
  });