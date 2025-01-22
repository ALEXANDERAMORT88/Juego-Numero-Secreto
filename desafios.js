// Desafíos
//1.  Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin'];

//3.  Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');

//4.  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
console.log(lenguagesDeProgramacion);

//5.  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
console.log(lenguagesDeProgramacion.reverse());

//6.  Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio(lista) {
    if (lista.length === 0 ) {
        console.log("La lista esta vacía. No se puede calcular promedio");
        return null;
    }
    let suma = 0;
    for (let numero of lista) {
        suma += numero;
    }
    let resultado = suma / lista.length;
    console.log("El promedio es: ", resultado);
    return resultado;
    
   }
   promedio([10, 20, 30, 40, 50]);

//7.  Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function compararNumero(listaNumero) {
    let numero = listaNumero.filter(el => typeof el === "number");
    if (numero.length === 0) {
        console.log("La lista no contiene números valisdos");
        return;
    }
    let mayor = Math.max(...numero);
    let menor = Math.min(...numero);

    console.log("El numero Mayor es: ", mayor);
    console.log("El número Menor es: ", menor);    
}
compararNumero([100, 300 ,1]);

//8.  Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementos(listaDeNumeros) {
    if (listaDeNumeros.length === 0 ) {
        console.log("La lista esta vacía. No se puede realizar la suma");
        return null;
    }
    let suma = 0;
    for (let numero of listaDeNumeros) {
        suma += numero;
    }
     console.log("La suma de la lista es: ", suma);
     return suma;
}
sumaElementos([5, 5 , 10]);

//9.  Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicion(lenguagesDeProgramacion, programaIndice) {
    let indice = lenguagesDeProgramacion.indexOf(programaIndice);
    return indice !== -1 ? indice : -1;   
}
console.log("Esta en la posición: " + posicion(lenguagesDeProgramacion, 'JavaScript'));

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.