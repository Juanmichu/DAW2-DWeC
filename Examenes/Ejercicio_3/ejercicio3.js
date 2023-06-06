let panelTiempo = document.createElement('div');
    panelTiempo.id = 'panel_tiempo';

let tabla = document.createElement('table');
let tablaHeader = tabla.createTHead();
let tablaBody = tabla.createTBody();
let tablaFooter = tabla.createTFoot();

let header = '<th>Día</th><th>Temp:</th>';
for(let i = 0; i < 24; i++) {
   header += '<th>'+ i +'h</th>'
}
tablaHeader.innerHTML = header;

async function getData(url)
{
    return await fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                return "ERROR-SERVER";
            }
        })
        .catch((response) => {
            return 'ERROR ' + response;
        });
}

getData('http://my-json-server.typicode.com/raulserrano/api/tiempo_semana')
    .then((data) => {
        let body = '';
        let temperatura = [];
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < data[i].temperaturas.length; j++) {
                temperatura[i] += '<td>' + data[i].temperaturas[j] + '</td>';
            }
            console.log(temperatura[i]);
            body += '<tr>' +
                '<td>' + data[i].dia + '</td>' +
                '<td>' + data[i].general + '</td>' +
                temperatura[i] +
                '</tr>';
        }
        console.log(temperatura);
        tablaBody.innerHTML = body;
    })
    .catch((error) => {
       alert('Se ha producido un error ' + error);
    });




// Metemos contenido en el DOM.
document.body.appendChild(panelTiempo);
panelTiempo.appendChild(tabla);