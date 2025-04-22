let notas = [];
let suma = 0;
let cantidadNotas = 5;

// Solicitar las 5 notas
for(let i = 1; i <= cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i} (0 a 10):`));

    // Validar que la nota esté en el rango correcto
    if(nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Nota inválida. Debe estar entre 0 y 10. Intente nuevamente.");
        i--; // Repetir esta iteración
        continue;
    }

    notas.push(nota);
    suma += nota;
}

// Calcular promedio
let promedio = suma / cantidadNotas;

// Evaluar el resultado
if(promedio >= 7) {
    console.log(`Promedio: ${promedio.toFixed(2)} - ¡Felicitaciones, pasaste de año!`);
} else if(promedio >= 3.5) {
    console.log(`Promedio: ${promedio.toFixed(2)} - Estás suspenso. ¡Necesitas recuperar!`);
} else {
    console.log(`Promedio: ${promedio.toFixed(2)} - Lo siento, perdiste el semestre.`);
}
