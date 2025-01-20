let currentSlide = 1;

function moverCarrusel(direccion) {
    const totalSlides = 4; 
    currentSlide += direccion;

    if (currentSlide < 1) {
        currentSlide = totalSlides;
    } else if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    document.getElementById(`diapositiva${currentSlide}`).checked = true;
}
