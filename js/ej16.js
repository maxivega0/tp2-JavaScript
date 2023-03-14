//* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let frase = prompt("Ingrese una frase.");
let invert = frase.length;
for (let i = 0; i <= frase.length; i++) {
    document.write(frase.charAt(invert));
    invert--;
    }