//* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

//* Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombre1 = prompt("Escriba el primer nombre");
let edad1 = parseInt(prompt("Escriba la edad del primero"));
let nombre2 = prompt("Escriba el segundo nombre");
let edad2 = parseInt(prompt("Escriba la edad del segundo"));
let nombre3 = prompt("Escriba el tercer nombre");
let edad3 = parseInt(prompt("Escriba la edad del tercero"));
switch (Math.max(edad1, edad2, edad3)) {
    case edad1:
        document.write(`El mayor es ${nombre1}`);
        break;
    case edad2:
        document.write(`El mayor es ${nombre2}`);
        break;
    case edad3:
        document.write(`El mayor es ${nombre3}`);
        break;
    default:
        document.write("El valor ingresado es invalido")
        break;
}