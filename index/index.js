
//codigo de chat gpt

//portada desvanecer
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; // Obtiene la posición de desplazamiento
  const windowHeight = window.innerHeight; // Altura de la ventana visible
  const videoElement = document.getElementById('videoportada');
  const videoRect = videoElement.getBoundingClientRect(); // Obtiene la posición del video en la ventana

  // Calculamos la posición de la parte superior del video
  const videoTop = videoRect.top;

  // Redefinimos la posición donde queremos que empiece a desvanecerse antes
  const opacityStart = windowHeight / 3; // Desvanecer cuando el video esté un tercio dentro de la ventana

  let opacity = 1;

  // Si el video ya ha pasado un tercio de la pantalla, empieza a desvanecerse
  if (videoTop < opacityStart) {
    opacity = Math.max(1 - (scrollTop - (videoTop - windowHeight / 3)) / windowHeight, 0);
  }

  // Calculamos el color de fondo, de transparente a negro
  const backgroundColor = `rgba(0, 0, 0, ${Math.min(scrollTop / windowHeight, 1)})`; // De 0 (transparente) a 1 (negro)

  // Aplica los estilos calculados
  const portada = document.querySelector('.portada');
  portada.style.backgroundColor = backgroundColor; // Cambia el fondo a negro

  videoElement.style.opacity = opacity; // Cambia la opacidad del video
});



//titulo proyectos
	// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el h1 dentro de la clase .proyectos
  const h1 = document.querySelector('.proyectos h1');
  
  // Creamos el IntersectionObserver para detectar cuando el h1 entre en la pantalla
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si el h1 está visible en la pantalla, agregamos la clase 'visible'
        h1.classList.add('visible');
      } else {
        // Si el h1 sale de la pantalla, removemos la clase 'visible'
        h1.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Activamos la animación cuando al menos el 50% del h1 esté visible
  });

  // Empezamos a observar el h1
  observer.observe(h1);
});



//apartados
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todos los apartados
  const apartados = document.querySelectorAll('.apartado');

  // Creamos un IntersectionObserver para observar cuando los apartados son visibles
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si el apartado es visible, añadimos la clase 'visible'
        entry.target.classList.add('visible');
      } else {
        // Si el apartado sale de la vista, removemos la clase 'visible'
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // La animación se activa cuando al menos el 50% del apartado es visible
  });

  // Observamos cada uno de los apartados
  apartados.forEach(apartado => {
    observer.observe(apartado);
  });
});



// about
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el elemento con la clase .about
  const aboutSection = document.querySelector('.about');
  
  // Creamos el IntersectionObserver para detectar cuando el .about entre en la pantalla
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si .about está visible en la pantalla, agregamos la clase 'visible'
        aboutSection.classList.add('visible');
      } else {
        // Si .about sale de la pantalla, removemos la clase 'visible'
        aboutSection.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Activamos la animación cuando al menos el 50% del .about esté visible
  });

  // Empezamos a observar .about
  observer.observe(aboutSection);
});


//titulo design portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el elemento con la clase .titulo
    const titulo = document.querySelector('.titulo');
    
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


//texto about
document.addEventListener('scroll', () => {
    const texto = document.querySelector('.texto'); // Seleccionamos el texto
    
    // Obtenemos el rectángulo del texto en relación al viewport
    const rect = texto.getBoundingClientRect();
    const windowHeight = window.innerHeight; // Altura de la ventana
    
    // Calculamos el centro vertical del elemento
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2; // Centro del viewport
    
    // Calculamos la distancia entre el centro del viewport y el centro del elemento
    const distance = Math.abs(viewportCenter - elementCenter);
    
    // Calculamos la opacidad en función de la distancia (cuanto más cerca del centro, más opaco)
    const maxDistance = windowHeight / 2; // Máxima distancia donde la opacidad es 0
    const opacity = Math.max(1 - distance / maxDistance, 0);
    
    // Aplicamos la opacidad al texto
    texto.style.opacity = opacity;
});



//about personaje
        const images = [
            document.getElementById('front'), // Imagen frontal
            document.getElementById('side'),  // Imagen lateral
            document.getElementById('back')   // Imagen trasera
        ];

        const section = document.querySelector('.seccionpersonaje');
        const sectionHeight = section.offsetHeight;

        // Evento de Scroll
        window.addEventListener('scroll', () => {
            const sectionTop = section.offsetTop; // Posición superior de la sección
            const scrollY = window.scrollY; // Posición de scroll actual

            // Detecta si estás dentro de la sección
            if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
                const progress = (scrollY - sectionTop) / sectionHeight; // Progreso entre 0 y 1

                // Muestra las imágenes según el progreso
                if (progress < 0.25) {
                    activateImage(0); // Frontal
                } else if (progress < 0.60) {
                    activateImage(1); // Lateral
                } else {
                    activateImage(2); // Trasera
                }
            }
        });

        // Función para activar una imagen específica
        function activateImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active'); // Activa la imagen
                } else {
                    img.classList.remove('active'); // Desactiva las demás
                }
            });
        }
  


// contacto
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el elemento con la clase .about
  const aboutSection = document.querySelector('.contacto');
  
  // Creamos el IntersectionObserver para detectar cuando el .about entre en la pantalla
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si .about está visible en la pantalla, agregamos la clase 'visible'
        aboutSection.classList.add('visible');
      } else {
        // Si .about sale de la pantalla, removemos la clase 'visible'
        aboutSection.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Activamos la animación cuando al menos el 50% del .about esté visible
  });

  // Empezamos a observar .about
  observer.observe(aboutSection);
});


//foto
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el elemento con la clase .titulo
    const titulo = document.querySelector('.foto');
    
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
	
//menu
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

// Cerrar el menú solo si es necesario (pantallas pequeñas)
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // Hacemos lo mismo al hacer clic en un enlace solo en pantallas pequeñas: cerramos el menú con animación
            menuLinks.style.opacity = 0; // Empieza el desvanecimiento
            setTimeout(() => {
                menuLinks.classList.remove('active'); // Después de la animación, lo ocultamos
            }, 500); // Duración de la transición de opacidad
        }
    });
});

// Cerrar el menú cuando la pantalla se agranda (para pantallas grandes)
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menuLinks.classList.remove('active'); // Cerrar el menú si se agranda la pantalla
        menuLinks.style.opacity = 1; // Restablecer la opacidad
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



