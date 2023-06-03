// 1. Insertar titulo con mi nombre.
let titulo = document.createElement('h1');
titulo.setAttribute('id', 'titulo');
titulo.innerHTML = 'Ejercicio Juan Manuel Serrano Pérez';

// 2. Creamos un contenedor para los artículos de la tienda.
let articlesDiv = document.createElement('div');
articlesDiv.setAttribute('id', 'articulos');

// Enlazamos los elementos creados en el body.
document.body.appendChild(titulo);
document.body.appendChild(articlesDiv);

// 3. Recorremos el array datos para obtener la info de cada objeto correspondiente a cada articulo.
for(let item of datos) {
    // Creación del elemento artículo.
    let article = document.createElement('article');

    // Cabecera del artículo.
    let cabecera = document.createElement('div');
    cabecera.setAttribute('class', 'cabecera');
    cabecera.innerHTML = item.nombre;

    // Cuerpo del artículo.
    let cuerpo = document.createElement('div');
    cuerpo.setAttribute('class', 'cuerpo');
    cuerpo.innerHTML = item.descripcion;

    //  Precio del artículo.
    let precio = document.createElement('div');
    precio.setAttribute('class', 'precio');
    precio.innerHTML = item.precio + ' &euro;';

    // Imagen del artículo.
    let imagen = document.createElement('img');
    imagen.setAttribute('src',item.imagen);

    // Introducimos cada elemento dentro de cada <article>.
    article.appendChild(cabecera);
    article.appendChild(cuerpo);
    article.appendChild(precio);
    article.appendChild(imagen);

    // Introducimos todos los articles dentro del div creado para envolverlos.
    articlesDiv.appendChild(article);
}