let visorImagenes = document.createElement('div');
    visorImagenes.setAttribute('id','visor');

let imagenesDiv = document.createElement('div');
    imagenesDiv.setAttribute('id', 'imagenes');

let botonAddImagen = document.createElement('button');
    botonAddImagen.setAttribute('id', 'boton-add-imagen');
    botonAddImagen.innerHTML = 'Insertar imagen';

let numeroImagen        = 0;
let punteroImagenActual  = 0;
let imagenesCargadas    = [];

// Función para agregar una imagen. La guardamos para poder ejecutar más tarde la función removeEventListener sobre el elemento del botón.
function agregarImagen() {

    let imagenDiv = document.createElement('div');
    imagenDiv.setAttribute('id','imagen_' + numeroImagen);
    imagenDiv.classList.add('imagen-div', 'active');

    Object.values(document.getElementsByClassName('imagen-div')).forEach( element => {
        element.classList.remove('active');
    });

    let imagen = document.createElement('img');
    imagen.setAttribute('src', datos[numeroImagen]);
    imagenDiv.appendChild(imagen);

    imagenesDiv.appendChild(imagenDiv);


    // Si llegamos al máximo de imágenes disponibles, deshabilitamos el botón y eliminamos el event asociado al botón.
    if(numeroImagen >= (datos.length - 1)) {
        botonAddImagen.removeEventListener('click', agregarImagen);
        botonAddImagen.disabled = true;

        punteroImagenActual = numeroImagen;
        imagenesCargadas.push(numeroImagen);
    } else {
        punteroImagenActual = numeroImagen;
        imagenesCargadas.push(numeroImagen);
        numeroImagen++;
    }

}

// Agregamos el evento 'click' en el botón añadir imagen.
botonAddImagen.addEventListener('click', agregarImagen);
document.addEventListener("keydown", (event) => {

    let imagenActual = document.getElementById('imagen_' + punteroImagenActual);

    // Checkeamos que la tecla pulsada sea la izquierda o la derecha. Añadimos compatibilidad con Edge <= 16 y Firefox <= 36.
    if(event.key === "ArrowLeft" || event.key === "Left") {

        if(imagenActual !== null) {

            // Mostramos la imagen anterior. Si es menor que uno, devolvemos el último elemento de la lista, y si no, devolvemos la imagen anterior.
            let numeroImagenAnterior = (punteroImagenActual <= 0) ? (imagenesCargadas.length - 1) : (punteroImagenActual - 1);

            let imagenAnterior = document.getElementById('imagen_' + numeroImagenAnterior);

            if(imagenAnterior !== null) {
                // Ocultamos la imagen actual solo si existe una imagen anterior.
                imagenActual.classList.toggle('active');
                imagenAnterior.classList.toggle('active');
                punteroImagenActual = numeroImagenAnterior;
            }
        }

    } else if (event.key === "ArrowRight" || event.key === "Right") {

        if(imagenActual !== null) {

            // Mostramos la imagen anterior. Si es menor que uno, devolvemos el último elemento de la lista, y si no, devolvemos la imagen siguiente.
            let numeroImagenSiguiente = (punteroImagenActual >= (imagenesCargadas.length - 1)) ? 0 : (punteroImagenActual + 1);

            let imagenSiguiente = document.getElementById('imagen_' + numeroImagenSiguiente);

            if(imagenSiguiente !== null) {
                // Ocultamos la imagen actual solo si existe una imagen siguiente.
                imagenActual.classList.toggle('active');
                imagenSiguiente.classList.toggle('active');
                punteroImagenActual = numeroImagenSiguiente;
            }
        }

    }

});

// Añadimos elementos al DOM.
document.body.appendChild(visorImagenes);
visorImagenes.appendChild(imagenesDiv);
visorImagenes.appendChild(botonAddImagen);