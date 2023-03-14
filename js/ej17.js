//* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let frase = prompt("Ingrese una frase").toLowerCase();
let bandera = false;

for (i = 0; i < frase.length && bandera === false; i++) {
    if (frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") {
    document.write(`<h1>La primera vocal se encuentra en la posicion: ${i+1}.</h1>`);
    bandera = true;
    }
    }