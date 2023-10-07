// Definimos un objeto que contiene las categorías y las rutas de las imágenes
const imageCategories = {
  'web-development': [
    'img/diploma-html-css_pagina_1.jpg',
    'img/diploma-basico-programacion_pagina_1.jpg',
    'img/diploma-bd_pagina_1.jpg',
    'img/diploma-prework-macos_pagina_1.jpg',
    'img/diploma-prework-linux_pagina_1.jpg',
    'img/diploma-configuracion-windows_pagina_1.jpg',
    'img/diploma-terminal_pagina_1.jpg',
    'img/diploma-backend-introduccion_pagina_1.jpg'
  ],
  'java': [
    'img/diploma-java-basico_pagina_1.jpg',
    'img/diploma-bd_pagina_1.jpg',
    'img/diploma-ingenieria_pagina_1.jpg',
    'img/diploma-backend-introduccion_pagina_1.jpg',
    'img/diploma-terminal_pagina_1.jpg'
  ],
  'python': [
    'img/diploma-python-basico_pagina_1.jpg',
    'img/diploma-python_pagina_1.jpg',
    'img/diploma-python-cs_pagina_1.jpg',
    'img/diploma-bd_pagina_1.jpg',
    'img/diploma-ingenieria_pagina_1.jpg',
    'img/diploma-backend-introduccion_pagina_1.jpg',
    'img/diploma-terminal_pagina_1.jpg'
  ],
  'logical-thinking': [
    'img/diploma-pensamiento-logico-data_pagina_1.jpg',
    'img/diploma-pensamiento-logico_pagina_1.jpg',
    'img/diploma-pensamiento-logico-estructuras_pagina_1.jpg',
    'img/diploma-pensamiento-logico-lenguajes_pagina_1.jpg'
  ],
  'redes': [
    'img/diploma-guia-seguridad-informatica_pagina_1.jpg',
    'img/diploma-redes_pagina_1.jpg'
  ]
};

// Función para cargar las imágenes en la galería
function loadImages(category) {
  const gallery = document.querySelector('.image-gallery');
  gallery.innerHTML = ''; // Limpiamos la galería actual

  // Obtenemos las rutas de las imágenes de la categoría seleccionada
  const images = imageCategories[category] || [];

  // Creamos elementos img y los agregamos a la galería
  images.forEach((imagePath) => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Imagen';
    img.classList.add('certificate'); // Agregamos una clase para identificar las imágenes
    gallery.appendChild(img);

    // Evento click en las imágenes para abrir el modal
    img.addEventListener('click', () => {
      const modal = document.getElementById('myModal');
      const modalImg = document.getElementById('modalImg');
      const closeModal = document.querySelector('.close');

      // Ajustar la relación de aspecto original
      modalImg.style.height = 'auto';
      modalImg.style.maxHeight = '80vh'; // Altura máxima para evitar desbordamientos
      modalImg.src = img.src;
      modal.style.display = 'block';

      // Evento click en el ícono de cierre (tache)
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });
}

// Agrega una clase para activar la animación de desvanecimiento cuando cambias de categoría
function activateCategory(category) {
  const gallery = document.querySelector('.image-gallery');
  gallery.classList.add('fade-in');

  setTimeout(() => {
    loadImages(category);
    gallery.classList.remove('fade-in');
  }, 500); // 500 milisegundos (ajusta el valor según la duración de tu animación)
}

// Evento click en los enlaces de categoría
const categoryLinks = document.querySelectorAll('.category-link');
categoryLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const category = event.target.getAttribute('data-category');
    activateCategory(category);
  });
});

// Cargamos las imágenes de la categoría "web-development" por defecto
loadImages('web-development');
