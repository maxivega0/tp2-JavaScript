//* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

 let cadena = prompt("Escriba una frase.");
    document.write(`${cadena}`);
while(confirm("¿Quiere seguir escribiendo?")){
    cadena = prompt("Escriba una nueva frase.");
    document.write(` - ${cadena}`);
}
alert("Finalizó la ejecución.");