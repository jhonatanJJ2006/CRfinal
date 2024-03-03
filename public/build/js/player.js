(function() {

    // Obtener el elemento de video
    var video = document.querySelector('#player');

    // Función para ocultar el div
    function ocultarDiv() {
        document.querySelector('.player__contenedor').style.display = 'none';
    }

    // Detectar cuando se añade la clase de error
    video.addEventListener('error', function() {
        ocultarDiv();
    });

})();