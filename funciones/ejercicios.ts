//Crear una función que reciba tres edades y retorne el número mayor y el menor.

let edad1 = 10;
let edad2 = 20;
let edad3 = 30;

function compararEdades(e1: number, e2: number, e3: number): number[] {
  let mayor: number = e1;
  let menor: number = e1;

  if (e2 > mayor) {
    mayor = e2;
  }
  if (e3 > mayor) {
    mayor = e3;
  }
  if (e2 < menor) {
    menor = e2;
  }
  if (e3 < menor) {
    menor = e3;
  }

  return [mayor, menor];
}

const resultado: number[] = compararEdades(50, edad2, edad3);
console.log(
  "El número mayor es" + resultado[0] + " El menor es " + resultado[1],
);

//Crear una función que reciba un array de notas y retorne el promedio. Si el estudiante tiene .

const nota: number[] = [50, 80, 65];
const nota1: number[] = [25, 80, 65];

console.log(obtenerMayor(nota1));
const nota2: number[] = [30, 15, 65];
function calcularPromedio(notas: number[]): number {
  let suma: number = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  return suma / notas.length;
}
console.log(calcularPromedio(nota));
console.log(calcularPromedio(nota1));
console.log(calcularPromedio(nota2));

//Crear una función que reciba un array de números y retorne el número mayor

const num: number[] = [15, 8, 32, 50]; //[0,1,2,3]

function obtenerMayor(numeros: number[]): number {
  let mayor: number = numeros[0]; //15

  for (let i = 0; i < numeros.length; i++) {
    //1  2  3  4
    if (numeros[i] > mayor) {
      // 15>15  8>15  32>15  50>32
      mayor = numeros[i]; // mayor=32   mayor = 50
    }
  }
  return mayor;
}

const mayor: number = obtenerMayor(num);
console.log("El número mayor es: ", mayor);
