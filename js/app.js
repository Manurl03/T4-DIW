let imagenActual = 1;

function moverCarrusel(direccion) {
    const imagenesTotales = 4; 
    imagenActual += direccion;

    if (imagenActual < 1) {
        imagenActual = imagenesTotales;
    } else if (imagenActual > imagenesTotales) {
        imagenActual = 1;
    }

    document.getElementById(`foto${imagenActual}`).checked = true;
}
