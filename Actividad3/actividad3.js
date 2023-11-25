let array = [5, "hola", "adios", 2];

let texto1 = array[1];
let texto2 = array[2];

let num1 = array[0];
let num2 = array[3];

// 1. Determinar cuál de los dos elementos de texto es mayor
let textoMayor = texto1 > texto2 ? texto1 : texto2;

// 2. Realizar las cinco operaciones matemáticas con los dos elementos numéricos
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

document.write("1. El elemento de texto mayor es: " + textoMayor);
document.write("2. Resultados de las operaciones matematicas");
document.write("Suma: " + suma);
document.write("Resta: " + resta);
document.write("Multiplicación: " + multiplicacion);
document.write("División: " + division);
document.write("Son iguales: " + igual)