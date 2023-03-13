//* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let total = 0;
do {
  let numero = parseInt(prompt("Ingrese un numero."));
  if (Number.isInteger(numero)) {
    total = total + numero;
  } else {
    alert("El caracter ingresado no es un numero");
  }
} while (confirm("¿Quiere seguir ingresando numeros?"));
document.write(`<h1>La suma total es: ${total}.</h1>`);
