// If Else javaScript

let viajando = (destino) => {
    let mensaje;

    if (destino === 'Brasil') {
        mensaje = 'Cruce hacia su izquierda...';
    } else if (destino === 'Argentina') {
        mensaje = 'Cruce hacia su derecha';
    } else {
        mensaje = 'No se reconoce el destino';
    }

    return mensaje;
}

// Ejemplo de uso de la función:
const resultado1 = viajando('Brasil');
console.log(resultado1); // Esto imprimirá "Cruce hacia su izquierda..." en la consola

const resultado2 = viajando('Argentina');
console.log(resultado2); // Esto imprimirá "Cruce hacia su derecha" en la consola

const resultado3 = viajando('Italia');
console.log(resultado3); // Esto imprimirá "No se reconoce el destino" en la consola
