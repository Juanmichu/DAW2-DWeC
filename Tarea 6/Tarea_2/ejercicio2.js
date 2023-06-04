let panelNumeros = document.createElement('div');
    panelNumeros.setAttribute('id', 'panel');

let formPanel = document.createElement('form');
    formPanel.id    = 'form_panel';
    formPanel.name  = 'form_panel';

let inputClave = document.createElement('input');
    inputClave.id           = 'clave';
    inputClave.name         = 'clave';
    inputClave.type         = 'text';
    inputClave.value        = '';
    inputClave.placeholder  = 'Introduzca una clave de 4 dígitos';

    // Evitamos que el usuario escriba directamente en el input.
    inputClave.addEventListener('keypress', (event) => {
        event.preventDefault();
    });

let fieldNumeros = document.createElement('fieldset');
    fieldNumeros.id = 'field_numeros';

let respuesta = document.createElement('div');
    respuesta.setAttribute('id', 'respuesta');

// Insertamos los elementos en el DOM.
document.body.appendChild(panelNumeros);
document.body.appendChild(respuesta);
panelNumeros.appendChild(formPanel);
formPanel.appendChild(inputClave);
formPanel.appendChild(fieldNumeros);

let numeros = [];
for(let i = 1; i <= 9; i++) {
    let numero = document.createElement('button');
        numero.id           = 'numero_' + i;
        numero.name         = 'numero_' + i;
        numero.type         = 'button';
        numero.value        = i;
        numero.innerHTML    = i;

        numeros.push(numero);
}

// Añadimos el teclado de forma aleatoria y enlazamos un eventListener a cada botón.
for(let i = 9; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * i);

    // Añadimos un evento para cada botón creado. Introducirá el número tecleado en el panel y borrará cualquier mensaje mostrado.
    numeros[randomNumber].addEventListener('click', (event) => {
       inputClave.value += event.target.value;
       respuesta.classList.remove('show');
    });

    fieldNumeros.appendChild(numeros[randomNumber]);
    numeros.splice(randomNumber, 1);
}

let botonBorrar = document.createElement('button');
    botonBorrar.id          = 'borrar';
    botonBorrar.innerHTML   = 'C';

let botonValidar = document.createElement('button');
    botonValidar.id         = 'validar';
    botonValidar.innerHTML  = 'VALIDAR';

fieldNumeros.appendChild(botonBorrar);
fieldNumeros.appendChild(botonValidar);

// FUNCIONALIDAD BORRAR CODIGO.
botonBorrar.addEventListener('click', (event) => {
    event.preventDefault();
    respuesta.classList.remove('show');
    inputClave.value = inputClave.value.slice(0, -1);
});

// FUNCIONALIDAD VALIDAR.
botonValidar.addEventListener('click', (event) => {
    // Evitamos el submit de ese botón. Queremos que simplemente valide y simule el POST al servidor.
    event.preventDefault();

    let claveValor  = formPanel.clave.value;
    let claveRegExp = /^[0-9]{4}$/g;
    let claveCorrecta = /9999/g

    if(!claveValor.match(claveRegExp)) {
        respuesta.setAttribute('class','error');
        respuesta.innerHTML = 'El código introducido tiene un formato incorrecto';
    } else if (!claveValor.match(claveCorrecta)) {
        respuesta.setAttribute('class', 'error');
        respuesta.innerHTML = 'El código introducido es incorrecto';
    } else {
        respuesta.setAttribute('class', 'exito');
        respuesta.innerHTML = '¡Código correcto!';
    }
    if(!respuesta.classList.contains('show')) {
        respuesta.classList.add('show');
    }
});

