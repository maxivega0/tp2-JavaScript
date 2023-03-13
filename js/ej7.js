//* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

//* 303030303030303030303030303030303030303030303030303030303030
//* 2929292929292929292929292929292929292929292929292929292929
//* 28282828282828282828282828282828282828282828282828282828
//* …..
//* 333
//* 22
//* 1

let contador = 0;
let impresiones = parseInt(prompt("ingrese el numero base de la piramide"))
let numero = impresiones;
while (impresiones >= 0) {
    while (contador < impresiones) {
        document.write(`${numero} `);
        contador++;
    }
    document.write("<br>")
    numero--;
    impresiones--;
    contador = 0;
}