let fieldset2 = document.createElement('fieldset');
    fieldset2.id = 'checking_combo';
let legend2 = document.createElement('legend');
    legend2.innerHTML = 'COMPROBAR COMBINACIÓN';

// Añadimos elementos al DOM.
let formBono = document.getElementById('form_sorteo');
formBono.appendChild(fieldset2);
fieldset2.appendChild(legend2);

for(let i = 0; i < 6; i++) {
    let inputNumero = document.createElement('input');
        inputNumero.id           = 'entrada_' + i;
        inputNumero.name         = 'entrada_' + i;
        inputNumero.type         = 'text';
        inputNumero.classList.add('entrada-box');

        fieldset2.appendChild(inputNumero);
}

let checkButton = document.createElement('button');
    checkButton.id = 'check_button';
    checkButton.classList.add('botones');
    checkButton.innerHTML = 'COMPROBAR COMBINACIÓN';

let respuesta = document.createElement('div');
    respuesta.setAttribute('id', 'respuesta');

    fieldset2.appendChild(checkButton);
    fieldset2.appendChild(respuesta);

// ################################################################################################################
// BOTON EMPIEZA SORTEO.
let numerosLoteria = [];
document.getElementById('boton_start').addEventListener('click', (event) => {
    event.preventDefault();

    // "Reseteamos" el array.
    numerosLoteria = [];
    let combinacionBoxes = document.getElementById('winning_combo').getElementsByTagName('span');
    // Rellenamos casillas con los números aleatorios, comprobando que las casillas ya rellenadas no contienen el número generado.
    // En caso de ya existir, vuelve a generar un número aleatorio hasta que sea distinto de las anteriores casillas.

    for(let i = 0; i < 6; i++) {

        let randomNumber = Math.floor(Math.random() * (49 - 1) + 1);
        //console.log('iteracion ' + i + ', randomNumber ' + randomNumber);
        if(!numerosLoteria.includes(randomNumber)) {
            //console.log(i + ' incluyendo el ' + randomNumber);
            numerosLoteria.push(randomNumber);
        } else {
            //console.log(i + 'repetido!');
            i--;
        }
    }
    //console.log(numerosAsignados);
    // Asignamos la combinación a las casillas existentes
    for(let i = 0; i < 6; i++) {
        combinacionBoxes[i].innerHTML = numerosLoteria[i];
    }

});

// ################################################################################################################
// BOTON COMPROBAR ACIERTOS.
let valoresAComprobar = [];
checkButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Limpiamos mensajes y arrays.
    respuesta.classList.remove('show','error','exito');
    respuesta.innerHTML = '';
    valoresAComprobar = [];


    let coleccionInputs = fieldset2.getElementsByTagName('input');
    let error = false;

    for(let input of coleccionInputs) {
        // Limpiamos clases de error o acierto que hubiera.
        input.classList.remove('error-input', 'exito-input');


        let numericoRegExp = /[0-9]+/g
        if(!(input.value).match(numericoRegExp)) {
            respuesta.setAttribute('class','error');
            respuesta.innerHTML = 'Uno de las casillas no contiene un número. Sólo se admiten números del 1 al 49.';
            input.classList.add('error-input');
            error = true;
        } else if(input.value <= 0 || input.value > 49) {
            respuesta.setAttribute('class','error');
            respuesta.innerHTML = 'Sólo se admiten números del 1 al 49.';
            input.classList.add('error-input');
            error = true;
        } else if(valoresAComprobar.includes(parseInt(input.value))) {
            respuesta.setAttribute('class','error');
            respuesta.innerHTML = 'Ya se ha introducido este número anteriormente.';
            input.classList.add('error-input');
            error = true;
        }

        // Metemos el número a comprobar en un array para posteriormente ver si ya se ha introducido.
        valoresAComprobar.push(parseInt(input.value));

    }

    if(!error) {
        let aciertos = 0;
        respuesta.classList.add('show','exito');

        for(let j = 0; j < coleccionInputs.length; j++) {
            if(numerosLoteria.includes(parseInt(coleccionInputs[j].value))) {
                coleccionInputs[j].classList.add('exito-input');
                aciertos++;
            }
        }

        respuesta.innerHTML = '¡¡' + aciertos + ' ACIERTOS!!';
    } else {
        respuesta.classList.add('show');
    }

});







