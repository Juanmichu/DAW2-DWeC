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

// Insertamos los elementos en el DOM.
document.body.appendChild(panelNumeros);
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

// Añadimos el teclado de forma aleatoria.
for(let i = 9; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * i);
    fieldNumeros.appendChild(numeros[randomNumber]);
    numeros.splice(randomNumber, 1);
}

let botonBorrar = document.createElement('button');
    botonBorrar.id          = 'borrar';
    botonBorrar.innerHTML   = 'C';

let botonValidar = document.createElement('button');
    botonValidar.id         = 'validar';
    botonValidar.type       = 'submit';
    botonValidar.innerHTML  = 'VALIDAR';

fieldNumeros.appendChild(botonBorrar);
fieldNumeros.appendChild(botonValidar);

