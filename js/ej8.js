//* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

//* 1
//* 12
//* 123
//* 1234
//* 12345
//* 123456
//* ……

let contador = 0;
let impresiones = 1;
let numero = 1;
let bandera = false;
do {
  let maximo = parseInt(prompt("Ingrese el numero maximo de la piramide"));
  if (maximo <= 50 && maximo > 0) {
    while (impresiones <= maximo) {
      while (contador < impresiones) {
        document.write(`${numero} `);
        contador++;
        numero++;
      }
      document.write("<br>");
      numero = 1;
      impresiones++;
      contador = 0;
      bandera = true;
    }
  } else {
    alert("El numero ingresado es invalido");
  }
} while (bandera === false);