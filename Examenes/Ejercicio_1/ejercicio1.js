class Avion
{
    constructor(nombre, maximo)
    {
       this.nombre      = nombre;
       this.maximo      = maximo;
       this.pasajeros   = 0;
    }
    comprarBilletes(billetes)
    {
        let restantes = this.maximo - this.pasajeros;
        let mensaje = document.createElement('p');

        if(this.pasajeros + billetes > this.maximo) {
            mensaje.innerHTML = 'MENSAJE: ' + this.nombre + ' => No se pueden comprar ' + billetes + ' billetes pues quedan ' + restantes + ' plazas en el avión.'
        } else {
            this.pasajeros = this.pasajeros + billetes;
            mensaje.innerHTML = 'MENSAJE: ' + this.nombre + ' => ¡' + billetes + ' billetes comprados con éxito! Quedan ' + (this.maximo - this.pasajeros) + ' plazas restantes';
        }

        document.getElementById('mensajes').appendChild(mensaje);
    }

    devolverBilletes(billetes)
    {
        let restantes = this.pasajeros - billetes;
        let mensaje = document.createElement('p');

        if(restantes < 0) {
            mensaje.innerHTML = 'MENSAJE: ' + this.nombre + ' => No se pueden devolver ' + billetes + ' billetes pues hay actualmente ' + this.pasajeros + ' plazas ocupadas en el avión.'
        } else {
            this.pasajeros = restantes;
            mensaje.innerHTML = 'MENSAJE: ' + this.nombre + ' => ¡' + billetes + ' billetes devueltos con éxito! Quedan ' + (this.pasajeros) + ' plazas restantes';
        }

        document.getElementById('mensajes').appendChild(mensaje);
    }

}

// Probamos a instanciar la clase y llamar a cada uno de los métodos.
let avion1 = new Avion('Avión 1',120);
let avion2 = new Avion('Avión 2', 35);

let mensaje1 = document.createElement('p');
let mensaje2 = document.createElement('p');
    mensaje1.innerHTML = 'Creado ' + avion1.nombre + ' con capacidad de ' + avion1.maximo + ' pasajeros';
    mensaje2.innerHTML = 'Creado ' + avion2.nombre + ' con capacidad de ' + avion2.maximo + ' pasajeros';

document.getElementById('mensajes').appendChild(mensaje1);
document.getElementById('mensajes').appendChild(mensaje2);

// Compramos primero un número de billetes que no supere el máximo y luego volvemos a comprar intentando superar el máximo.
avion1.comprarBilletes(100);
avion1.comprarBilletes(30);

avion2.comprarBilletes(35);
avion2.comprarBilletes(1);

// Devolvemos primero un número de billetes que no de error y luego provocamos el error.
avion1.devolverBilletes(100);
avion1.devolverBilletes(1);

avion2.devolverBilletes(20);
avion2.devolverBilletes(16);
