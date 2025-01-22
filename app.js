let intento = 0;
let listaNumeroSorteado = [];
let numeroMaximoDeJuego = 10;
let numeroSecreto = generarNumeroSecreto();
console.log("este es el numero secreto " + numeroSecreto);


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("numero de usu es: " + numeroUsuario);
    
    // console.log(numeroUsuario===numeroSecreto);
    // console.log("numero de intentos: " + intento);
    intento++
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto es ${numeroSecreto} y lo hiciste en ${intento} ${(intento == 1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número Secreto es menor.')
    }else {
        asignarTextoElemento('p', 'El número Secreto es mayor')
    }
    limpiarCaja();
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego de Número Secreto!');
    asignarTextoElemento('p', `Ingresa un Número del 1 al ${numeroMaximoDeJuego}`);
    
    intento = 0;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximoDeJuego)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if (listaNumeroSorteado.length === numeroMaximoDeJuego) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return null;
    } else if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego() {
    //limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de numero.
    // Generar nuevamente el numero Aleatorio.
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos. 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();