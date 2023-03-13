//* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

//* 1
//* 22
//* 333
//* 4444
//* 55555
//* 666666
//* …….
let contador = 0;
let impresiones = 1;
let numero = 1;
while (impresiones <= 30) {
    while (contador < impresiones) {
        document.write(`${numero}`);
        contador++;
    }
    document.write("<br>")
    numero++;
    impresiones++;
    contador = 0;
}