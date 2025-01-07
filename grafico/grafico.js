
//codigo de chat gpt

//diseño grafico titulo
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.contenedortitulo p');
    
    if (!titulo) {
        console.error("El elemento '.contenedortitulo p' no fue encontrado.");
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titulo.classList.add('visible');
            } else {
                titulo.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando el 10% del título está visible
    });
    observer.observe(titulo);
});


//indice trabajos
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".indice");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const link = entry.target;
                const delay = Array.from(links).indexOf(link) * 0.2; 
                link.style.transitionDelay = `${delay}s`; 
                link.classList.add("visible"); 
            } else {
                entry.target.classList.remove("visible"); 
            }
        });
    }, {
        threshold: 0.1, 
    });

    links.forEach((link) => observer.observe(link)); 
});



//el cocodrilo
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.contenedorcoco h1');
    
    if (!h1) {
        console.error("El elemento '.contenedorcoco h1' no fue encontrado.");
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.add('visible');
            } else {
                h1.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 
    });
    observer.observe(h1);
});



//parrafo coco
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.contenedorcoco p');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                titulo.classList.add('visible');
            } else {

                titulo.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 
    });
    observer.observe(titulo);
});


//eco
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.contenedoreco h1');
    
    if (!h1) {
        console.error("El elemento '.contenedoreco h1' no fue encontrado.");
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.add('visible');
            } else {
                h1.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 
    });
    observer.observe(h1);
});


//parrafo eco
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.contenedoreco p');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                titulo.classList.add('visible');
            } else {
                titulo.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    observer.observe(titulo);
});


//chipen
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento h1 dentro de la clase contenedorcoco
    const h1 = document.querySelector('.contenedorchipen h1');
    
    if (!h1) {
        console.error("El elemento '.contenedorchipen h1' no fue encontrado.");
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


//parrafo chipen
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el elemento con la clase .titulo
    const titulo = document.querySelector('.contenedorchipen p');
    
    // Creamos un IntersectionObserver para gestionar la animación
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Si el título no está en pantalla, añadimos la clase 'visible'
                titulo.classList.add('visible');
            } else {
                // Si el título está en pantalla, quitamos la clase 'visible'
                titulo.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando un 10% del título deja de ser visible
    });

    // Observamos el elemento título
    observer.observe(titulo);
});


//otros
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento h1 dentro de la clase contenedorcoco
    const h1 = document.querySelector('.contenedorotros h1');
    
    if (!h1) {
        console.error("El elemento '.contenedorotros h1' no fue encontrado.");
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



//parrafo otros
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el elemento con la clase .titulo
    const titulo = document.querySelector('.contenedorotros p');
    
    // Creamos un IntersectionObserver para gestionar la animación
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Si el título no está en pantalla, añadimos la clase 'visible'
                titulo.classList.add('visible');
            } else {
                // Si el título está en pantalla, quitamos la clase 'visible'
                titulo.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando un 10% del título deja de ser visible
    });

    // Observamos el elemento título
    observer.observe(titulo);
});


// galerías
    function initGaleria(galeriaSelector, btnIzqSelector, btnDerSelector) {
        const scrollContainer = document.querySelector(galeriaSelector);
        const backBtn = document.querySelector(btnIzqSelector);
        const nextBtn = document.querySelector(btnDerSelector);

        if (!scrollContainer || !backBtn || !nextBtn) return;

        // Calcula el ancho de un elemento en la galería
        const getScrollStep = () => {
            const firstChild = scrollContainer.querySelector("div");
            return firstChild ? firstChild.offsetWidth + parseInt(getComputedStyle(firstChild).marginRight || 0) : 0;
        };

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            scrollContainer.style.scrollBehavior = "auto";
        });

        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += getScrollStep();
        });

        backBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= getScrollStep();
        });
    }

    // Inicializar galerías
    initGaleria(".galeria01", "#izq01", "#derecha01");
    initGaleria(".galeria02", "#izq02", "#derecha02");
    initGaleria(".galeria03", "#izq03", "#derecha03");


//fotos otros
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase .otros
    const otrosElements = document.querySelectorAll('.otros');

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
	
	
 


	
//scroll suave
  document.addEventListener('DOMContentLoaded', () => {
    const seccionScroll = document.querySelector('.contenedorseccion');
    let isScrolling = false;

    // Usamos matchMedia para detectar el tamaño de la pantalla (media query)
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Solo ejecuta en pantallas grandes

    // Función para activar/desactivar los eventos dependiendo del tamaño de la pantalla
    function handleScrollEvent() {
      if (mediaQuery.matches) {
        // Si el ancho de la pantalla es mayor a 768px (pantallas grandes)
        
        // Para el desplazamiento con el ratón
        seccionScroll.addEventListener('wheel', (event) => {
          event.preventDefault(); // Prevenir el desplazamiento vertical

          if (!isScrolling) {
            isScrolling = true;
            const velocidad = 2; // Controla la velocidad del desplazamiento
            const scrollAmount = event.deltaY * velocidad;
            smoothScroll(scrollAmount);
            setTimeout(() => {
              isScrolling = false;
            }, 100); // El tiempo de espera para permitir otro desplazamiento
          }
        });

        // Para el desplazamiento táctil
        let touchStartX = 0;
        seccionScroll.addEventListener('touchstart', (e) => {
          e.preventDefault();
          touchStartX = e.touches[0].pageX;
        });

        seccionScroll.addEventListener('touchmove', (e) => {
          e.preventDefault();
          const touchMoveX = e.touches[0].pageX;

          // Aumentar el desplazamiento horizontal con un factor mucho mayor para touchpad
          const scrollAmount = (touchStartX - touchMoveX) * 10;  // Ajustamos el factor de velocidad
          smoothScroll(scrollAmount);

          touchStartX = touchMoveX; // Actualizamos la posición inicial
        });
      } else {
        // Si el ancho de la pantalla es menor a 768px (móviles y tablets)
        seccionScroll.removeEventListener('wheel', handleScrollEvent);
        seccionScroll.removeEventListener('touchstart', handleScrollEvent);
        seccionScroll.removeEventListener('touchmove', handleScrollEvent);
      }
    }

    // Ejecutamos la función para manejar el desplazamiento al cargar la página
    handleScrollEvent();

    // Escuchamos los cambios de tamaño de la pantalla
    mediaQuery.addEventListener('change', handleScrollEvent);

    // Función de desplazamiento suave
    function smoothScroll(scrollAmount) {
      let currentPosition = seccionScroll.scrollLeft;
      let targetPosition = currentPosition + scrollAmount;
      let start = null;

      function animateScroll(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let move = easeInOutCubic(progress, currentPosition, targetPosition - currentPosition, 200); // Duración más corta para respuesta rápida

        seccionScroll.scrollLeft = move;

        if (progress < 200) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }

    function easeInOutCubic(t, b, c, d) {
      let x = t / (d / 2);
      if (x < 1) return c / 2 * x * x * x + b;
      x -= 2;
      return c / 2 * (x * x * x + 2) + b;
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



