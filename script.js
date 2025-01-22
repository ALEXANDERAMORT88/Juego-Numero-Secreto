
let numeroMaximoIntentos = 20;
let numeroPrincipal = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1; 
// let palabraVeces = "intento";  lo hicimos con condicion ternario.
const maximoIntentos = 3;

while (numeroUsuario != numeroPrincipal) {

    numeroUsuario = parseInt(prompt(`ingresa un numero de 1 a ${numeroMaximoIntentos}`));
        
        if (numeroUsuario == numeroPrincipal) {
            
            alert(`Acertaste con el numero secreto es: ${numeroPrincipal}, en ${intentos} ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`); // esto es como usar el if/else ? 'intento' : 'intentos'}    
        } else if(numeroUsuario > numeroMaximoIntentos){
            alert(`Selecciona un numero de 1 a ${numeroMaximoIntentos}`);
        } else if (numeroUsuario > numeroPrincipal){
            alert(`El número secreto es menor que ${numeroUsuario}`);
        }else { 
            alert(`El numero secreto es Mayor a ${numeroUsuario}`)
        }
        //incrementamos los intentos cuando no intenta
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++; // esta es la forma mas factorizada.
        // palabraVeces = "intentos";

        if (intentos > maximoIntentos) {
            alert(`Llegaste al número maximo de intentos ${maximoIntentos}`)
            break;            
        }
}