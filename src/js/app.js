document.addEventListener('DOMContentLoaded', function () {
    iniciciarApp();
});

function iniciciarApp(params) {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    galeria.textContent = 'crear galeria'
}