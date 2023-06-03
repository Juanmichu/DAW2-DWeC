// 1. Modificar título.
let titulo = document.getElementById('titulo');
    titulo.innerHTML = 'Juan Manuel Serrano Pérez';

// 2. Modificar imagen artículo 2.
let noticias = document.getElementById('noticias');
let artImages = noticias.getElementsByTagName('img');

// Aquí recogemos el elemento que nos interesa cambiar. Hay que recordar que queremos la 2º imagen.
let art2Image = artImages[1];
// Seteamos la nueva imagen.
art2Image.setAttribute('src', 'New_article2_img.jpg');

// 3. Oculta el último artículo.
// Retomamos el elemento con ID "noticias" para poder tomar los nodos hijo que nos interesan.
const articles = noticias.getElementsByTagName('article');
let art6 = articles[5];

// Ocultamos este artículo. Seteamos el display: none para ocultar. No se dice nada de eliminar.
art6.setAttribute('style','display: none;');

// 4. Numeramos los artículos.
for(let key = 0; key < articles.length; key++) {
    // Obtenemos el primer div de cada artículo que corresponde con la cabecera del artículo. Luego, insertamos el número al principio.
    let articleTextDivs = articles[key].getElementsByTagName('div');
    let articleTextDiv1 = articleTextDivs[0];
    articleTextDiv1.innerHTML = (key + 1) + ' - ' + articleTextDiv1.innerHTML;

    // 5. Añadir la clase cabecera al primer <div> de cada elemento <article>.
    // Aprovecho el bucle for para el ejercicio 5.
    articleTextDiv1.setAttribute('class','cabecera');

    // 6. Reemplazar Servicio Murciano de Salud por S.M.S en los textos que haya dentro de cada <article>
    Object.values(articleTextDivs).forEach((element) => {
        element.innerHTML = element.innerHTML.replace(/Servicio Murciano de Salud/gi, 'S.M.S');
    });

}


