//* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let texto = prompt("Ingrese un texto.").toLowerCase();
document.write(texto.charAt(0));
for (let i = 1; i < texto.length; i++) {
    document.write(` - ${texto.charAt(i)}`);
}