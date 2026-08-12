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

const resultado: number[] = compararEdades(edad1, edad2, edad3);
console.log(
  "El número mayor es" + resultado[0] + " El menor es " + resultado[1],
);

//Crear una función que reciba un array de notas y retorne el promedio.

//Crear una función que reciba un array de números y retorne el número mayor
