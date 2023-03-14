//* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//* Ejercicios con Math

const filas = prompt("ingrese el numero de filas");
const columnas = prompt("ingrese el numero de columnas");
let numeracion = filas * columnas;
document.write(`<table><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write("<tr>");
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write(`<td>${numeracion}</td>`);
    numeracion--;
  }
  document.write("</tr>");
}
document.write("</tbody></table>");