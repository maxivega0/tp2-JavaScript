//* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

//* 0-2: Muy deficiente
//* 3-4: Insuficiente
//* 5-6: Suficiente
//* 7: Bien
//* 8-9: Notable
//* 10: Sobresaliente

//* Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let numero = parseInt(prompt("Ingrese su nota"));
if (numero <= 10 && numero >= 0) {
    if (numero >= 0 && numero <= 2) {
        alert("Muy deficiente");
    }if (numero >= 3 && numero <= 4) {
        alert("Insuficiente");
    }if (numero >= 5 && numero <= 6) {
        alert("Suficiente");
    }if (numero === 7) {
        alert("Bien");
    }if (numero >= 8 && numero <= 9) {
        alert("Notable");
    }if (numero === 10) {
        alert("¡Sobresaliente!");
    }
}else if(numero < 0 || numero > 10){
    alert("El numero ingresado es erroneo");
}else{
    alert("Ingrese un caracter valido");
}