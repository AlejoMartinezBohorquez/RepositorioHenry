// Funciones Javascript
// Muy importante es trabajar con funciones de flecha desde un principio

// Estructura de una funcion de flecha
// SumaDosNumeros nombre de la funcion
// (num1, num2) para de la funcion
// {} Cuerpo de la funcion
// Todo lo que se encuentre por debajo de return no se va a ejecutar
const sumaDosNumeros = (num1, num2) => {
    const resultado = num1 + num2;
    return resultado;
}

// Uso de la funcion
let numero1 = 10;
let numero2 = 5;
let suma = sumaDosNumeros(numero1, numero2);

console.log(suma);
