document.addEventListener('DOMContentLoaded', function () {
    iniciciarApp();
});

function iniciciarApp(params) {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
       const imagen = document.createElement('picture');

       imagen.innerHTML = `
       <source srcset="build/img/thumb/${i}.avif" type="image/avif">
       <source srcset="build/img/thumb/${i}.webp" type="image/webp">
       <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
   `;
   imagen.onclick = function name() {
        mostarImagen(i);
   }

       galeria.appendChild(imagen);
        
    }
}

function mostarImagen(id) {
    const imagen = document.createElement('picture');

    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
`;

const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);
}