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
while (impresiones <= 30) {
    while (contador < impresiones) {
        document.write(`${numero} `);
        contador++;
        numero++;
    }
    document.write("<br>")
    numero = 1;
    impresiones++;
    contador = 0;
}