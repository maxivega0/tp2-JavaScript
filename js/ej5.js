//* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//* El algoritmo para calcular la letra del dni es el siguiente :

//* El número debe ser entre 0 y 99999999
//* Debemos calcular el resto de la división entera entre el número y el número 23.
//* Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//* Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//* Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

//* Ejemplo: si ingresamos el DNI 40773821, la salida debería ser ‘L’

do {
  let dni = parseInt(prompt("Ingrese un numero de Documento."));
  if (Number.isInteger(dni)) {
    let resto = dni % 23;
    switch (resto) {
      case 0:
        document.write(`El documento ${dni} le corresponde la letra T.<br>`);
        break;
      case 1:
        document.write(`El documento ${dni} le corresponde la letra R.<br>`);
        break;
      case 2:
        document.write(`El documento ${dni} le corresponde la letra W.<br>`);
        break;
      case 3:
        document.write(`El documento ${dni} le corresponde la letra A.<br>`);
        break;
      case 4:
        document.write(`El documento ${dni} le corresponde la letra G.<br>`);
        break;
      case 5:
        document.write(`El documento ${dni} le corresponde la letra M.<br>`);
        break;
      case 6:
        document.write(`El documento ${dni} le corresponde la letra Y.<br>`);
        break;
      case 7:
        document.write(`El documento ${dni} le corresponde la letra F.<br>`);
        break;
      case 8:
        document.write(`El documento ${dni} le corresponde la letra P.<br>`);
        break;
      case 9:
        document.write(`El documento ${dni} le corresponde la letra D.<br>`);
        break;
      case 10:
        document.write(`El documento ${dni} le corresponde la letra X.<br>`);
        break;
      case 11:
        document.write(`El documento ${dni} le corresponde la letra B.<br>`);
        break;
      case 12:
        document.write(`El documento ${dni} le corresponde la letra N.<br>`);
        break;
      case 13:
        document.write(`El documento ${dni} le corresponde la letra J.<br>`);
        break;
      case 14:
        document.write(`El documento ${dni} le corresponde la letra Z.<br>`);
        break;
      case 15:
        document.write(`El documento ${dni} le corresponde la letra S.<br>`);
        break;
      case 16:
        document.write(`El documento ${dni} le corresponde la letra Q.<br>`);
        break;
      case 17:
        document.write(`El documento ${dni} le corresponde la letra V.<br>`);
        break;
      case 18:
        document.write(`El documento ${dni} le corresponde la letra H.<br>`);
        break;
      case 19:
        document.write(`El documento ${dni} le corresponde la letra L.<br>`);
        break;
      case 20:
        document.write(`El documento ${dni} le corresponde la letra C.<br>`);
        break;
      case 21:
        document.write(`El documento ${dni} le corresponde la letra K.<br>`);
        break;
      case 22:
        document.write(`El documento ${dni} le corresponde la letra E.<br>`);
        break;
      default:
        document.write("Ingreso una opción invalida");
        break;
    }
  } else {
    alert("El caracter introducido no es un numero valido, vuelta a intentar.");
  }
} while (confirm("Quiere ingresar otro Documento?"));
