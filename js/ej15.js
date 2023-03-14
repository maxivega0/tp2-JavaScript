//* 15- Realiza un script que cuente el número de vocales que tiene un texto.

let frase = prompt("Escriba una frase").toLowerCase();
let cantVocal = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") {
    cantVocal++;
    }
    }
    document.write(`<h1>La cantidad de vocales en su frase es: ${cantVocal}.</h1>`);