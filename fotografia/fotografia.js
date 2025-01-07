
//codigo de chat gpt

//foto que se mueve siguiendo al raton
  const imagenParallax = document.querySelector('.imagenfondo');

  document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 20 - 5; // Ajusta la sensibilidad horizontal
    const y = (event.clientY / window.innerHeight) * 10 - 5; // Ajusta la sensibilidad vertical

    imagenParallax.style.transform = `translate(${x}px, ${y}px)`;
  });

	 //la foto de fondo se desvanece
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY; // Obtiene la posición de desplazamiento
      const windowHeight = window.innerHeight; // Altura de la ventana

      // Calcula la opacidad basándose en el scroll
      const opacity = Math.max(1 - scrollTop / (windowHeight/1), 0); // Reduce la opacidad al hacer scroll

      document.querySelector('.imagenfondo').style.opacity = opacity;
    });

	
	  //titulo halloween
		document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("#halloween h1");

    // Crear un Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.add("visible"); // Añade la clase cuando el h1 está visible
            } else {
                h1.classList.remove("visible"); // Elimina la clase cuando el h1 ya no está visible
            }
        });
    }, {
        threshold: 0.2 // Activar cuando al menos el 50% del h1 sea visible
    });

    // Observar el h1
    observer.observe(h1);
});


//párrafo dentro de #halloween
const halloweenText = document.querySelector('#halloween p');

// Configura el Intersection Observer
const observerOptions = {
    root: null, // Observa el viewport completo
    threshold: 0.1 // Activa cuando el 10% del párrafo es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega la clase 'visible' cuando el párrafo es visible
            entry.target.classList.add('visible');
        } else {
            // Quita la clase 'visible' cuando el párrafo deja de ser visible
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observa el párrafo
observer.observe(halloweenText);



	  //titulo moda
		document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("#moda h1");

    // Crear un Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.add("visible"); // Añade la clase cuando el h1 está visible
            } else {
                h1.classList.remove("visible"); // Elimina la clase cuando el h1 ya no está visible
            }
        });
    }, {
        threshold: 0.2 // Activar cuando al menos el 50% del h1 sea visible
    });

    // Observar el h1
    observer.observe(h1);
});

// párrafo de moda
document.addEventListener("DOMContentLoaded", function() {
    const halloweenText = document.querySelector("#moda p");

    // Crear un Intersection Observer para el párrafo
    const paragraphObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Añade la clase cuando el párrafo está visible
            } else {
                entry.target.classList.remove("visible"); // Elimina la clase cuando el párrafo ya no está visible
            }
        });
    }, {
        threshold: 0.1 // Activar cuando al menos el 10% del párrafo sea visible
    });

    // Observar el párrafo
    paragraphObserver.observe(halloweenText);
});



	  // título dentro de #bath
document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("#bath h1");

    // Crear un Intersection Observer para el título
    const titleObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.add("visible"); // Añade la clase cuando el h1 está visible
            } else {
                h1.classList.remove("visible"); // Elimina la clase cuando el h1 ya no está visible
            }
        });
    }, {
        threshold: 0.2 // Activar cuando al menos el 20% del h1 sea visible
    });

    // Observar el h1
    titleObserver.observe(h1);
});


// párrafo de #bath
document.addEventListener("DOMContentLoaded", function() {
    const halloweenText = document.querySelector("#bath p");

    // Crear un Intersection Observer para el párrafo
    const paragraphObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Añade la clase cuando el párrafo está visible
            } else {
                entry.target.classList.remove("visible"); // Elimina la clase cuando el párrafo ya no está visible
            }
        });
    }, {
        threshold: 0.1 // Activar cuando al menos el 10% del párrafo sea visible
    });

    // Observar el párrafo
    paragraphObserver.observe(halloweenText);
});


	   //titulo masala
		document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("#masala h1");

    // Crear un Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.add("visible"); // Añade la clase cuando el h1 está visible
            } else {
                h1.classList.remove("visible"); // Elimina la clase cuando el h1 ya no está visible
            }
        });
    }, {
        threshold: 0.2 // Activar cuando al menos el 50% del h1 sea visible
    });

    // Observar el h1
    observer.observe(h1);
});

// párrafo masala
document.addEventListener("DOMContentLoaded", function() {
    const halloweenText = document.querySelector("#masala p");

    // Crear un Intersection Observer para el párrafo
    const paragraphObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Añade la clase cuando el párrafo está visible
            } else {
                entry.target.classList.remove("visible"); // Elimina la clase cuando el párrafo ya no está visible
            }
        });
    }, {
        threshold: 0.1 // Activar cuando al menos el 10% del párrafo sea visible
    });

    // Observar el párrafo
    paragraphObserver.observe(halloweenText);
});


	//menu hamburguesa
const hamburger = document.getElementById('hamburger');
const menuLinks = document.querySelector('.menu-links');
const menuItems = document.querySelectorAll('.menu-links a'); // Seleccionamos todos los enlaces dentro del menú

// Alternar visibilidad del menú al hacer clic en el botón hamburguesa
hamburger.addEventListener('click', () => {
    if (menuLinks.classList.contains('active')) {
        // Si el menú está activo, lo cerramos con animación
        menuLinks.style.opacity = 0; // Iniciamos el desvanecimiento
        setTimeout(() => {
            menuLinks.classList.remove('active'); // Luego de la animación, lo ocultamos
        }, 500); // Tiempo igual a la duración de la transición
    } else {
        // Si el menú no está activo, lo mostramos con animación
        menuLinks.classList.add('active');
        menuLinks.style.opacity = 0.1; // Inicia con baja opacidad
        setTimeout(() => {
            menuLinks.style.opacity = 1; // Aumenta la opacidad hasta 1
        }, 50); // Le damos un pequeño retraso para que el cambio de opacidad se vea
    }
});

// Cerrar el menú al hacer clic en cualquier enlace
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hacemos lo mismo al hacer clic en un enlace: cerramos el menú con animación
        menuLinks.style.opacity = 0; // Empieza el desvanecimiento
        setTimeout(() => {
            menuLinks.classList.remove('active'); // Después de la animación, lo ocultamos
        }, 500); // Duración de la transición de opacidad
    });
});
	  //plato desvanecer
		document.addEventListener("scroll", function () {
    const image = document.querySelector(".desvanecer");
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Si la imagen está cerca de la parte superior del viewport, empieza a desvanecerse
    if (rect.top < windowHeight / 19) {
        image.classList.add("fade-out");
    } else {
        image.classList.remove("fade-out");
    }
});


//cursor
const canvas = document.getElementById('cursorCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Actualizar tamaño del canvas si la ventana cambia
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Configuración del cursor y rastro
const trail = [];
const trailLength = 10; // Número de círculos en el rastro
const mainCursorRadius = 10; // Radio del círculo principal
const trailRadius = 5; // Radio de los círculos del rastro
let mouseStopped = false; // Indica si el ratón se detuvo

// Dibujar un círculo
function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Animación del cursor
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Dibujar los círculos del rastro
    for (let i = 0; i < trail.length; i++) {
        const opacity = (i + 1) / trail.length; // Calcular opacidad
        drawCircle(trail[i].x, trail[i].y, trailRadius, `rgba(255, 0, 0, ${opacity})`);
    }

    // Dibujar el círculo principal
    if (trail.length > 0) {
        const { x, y } = trail[0];
        drawCircle(x, y, mainCursorRadius, 'rgba(255, 40, 0, 1)');
    }

    // Reducir el rastro si el ratón se detuvo
    if (mouseStopped && trail.length > 1) {
        trail.pop(); // Elimina el último círculo del rastro
    }

    requestAnimationFrame(animate);
}

// Actualizar posiciones del rastro
window.addEventListener('mousemove', (e) => {
    mouseStopped = false; // Ratón en movimiento
    trail.unshift({ x: e.clientX, y: e.clientY }); // Agregar nueva posición al inicio
    if (trail.length > trailLength) {
        trail.pop(); // Eliminar el último elemento si el rastro es muy largo
    }

    // Reiniciar el temporizador para detectar si el ratón se detiene
    clearTimeout(mouseStopTimer);
    mouseStopTimer = setTimeout(() => {
        mouseStopped = true; // Marca que el ratón se detuvo
    }, 50); // Tiempo en ms para considerar que el ratón está detenido
});

// Temporizador para el estado del ratón
let mouseStopTimer;

// Iniciar la animación
animate();


//boton para volver arriba
    document.addEventListener('DOMContentLoaded', () => {
        const scrollTopDiv = document.getElementById('botonarriba');

        // Mostrar el div al hacer scroll hacia abajo
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollTopDiv.style.opacity = '1';
                scrollTopDiv.style.pointerEvents = 'auto';
            } else {
                scrollTopDiv.style.opacity = '0';
                scrollTopDiv.style.pointerEvents = 'none';
            }
        });

        // Función para volver hacia arriba al hacer clic
        scrollTopDiv.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    });


