//codigo de chat gpt

//titulo modelos 3d
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento h1 dentro de la clase contenedorcoco
    const h1 = document.querySelector('.titulo h1');
    
    if (!h1) {
        console.error("El elemento '.contenedorcoco h1' no fue encontrado.");
        return;
    }

    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación
                h1.classList.add('visible');
            } else {
                // Opcional: Elimina la clase si deseas reiniciar la animación al salir de pantalla
                h1.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando un 10% del h1 está visible
    });

    // Observa el elemento h1
    observer.observe(h1);
});


//fotos 
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase .otros
    const otrosElements = document.querySelectorAll('.animacion');

    if (otrosElements.length === 0) {
        console.error("No se encontraron elementos con la clase '.otros'.");
        return;
    }

    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación
                entry.target.classList.add('visible');
            } else {
                // Elimina la clase 'visible' si sale de la pantalla
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando el 10% del elemento es visible
    });

    // Observa cada uno de los elementos .otros
    otrosElements.forEach(element => {
        observer.observe(element);
    });
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


