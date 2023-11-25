/* Ejercicio 1 */

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
  let suma = num1 + num2;
  let resta = num1 - num2;
  document.write(`El primer número es mayor. Suma: ${suma}, Diferencia: ${resta}`);
} else {
  let producto = num1 * num2;
  let division = num1 / num2;
  document.write(`El segundo número es mayor o igual. Producto: ${producto}, División: ${division}`);
}

/* Ejercicio 2 */

let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 4) {
  document.write(`Promedio: ${promedio}. Regular`);
} else {
  document.write(`Promedio: ${promedio}. Reprobado`);
}

/* Ejercicio 3 */

let numero = parseInt(prompt("Ingrese un número positivo de uno o dos dígitos:"));

if (numero >= 10 && numero <= 99) {
  document.write("El número tiene dos dígitos");
} else if (numero >= 1 && numero <= 9) {
  document.write("El número tiene un dígito");
} else {
  document.write("Número no válido");
}
