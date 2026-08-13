/* -----------------FUNCIONES-NORMALITA----------------------- */

function duplicar(x: number): number {
  let resultado: number = x * 2;
  return resultado;
}
/* console.log(duplicar(4)); */

/* -----------------FUNCIONES-ANONIMAS----------------------- */
const duplicar2 = function (x: number): number {
  let resultado: number = x * 2;
  return resultado;
};
/* console.log(duplicar2(duplicar2(4))); */

/* -----------------FUNCIONES-FLECHA (ARROW FUNCTIONS)----------------------- */
const duplicar3 = (x: number, y: number = 5): number => {
  let resultado = 0;
  if (y === undefined) {
    resultado = x * 2 - y;
  } else {
    resultado = x * 2 - y;
  }
  return resultado;
};
/* console.log(duplicar3(10, 4));
console.log(duplicar3(10));
 */
/* -----------------CALLBACKS------------------ */
function calculadora(
  a: number,
  b: number,
  callback: (x: number, y: number) => number,
): number {
  return callback(a, b);
}

function sumar(a: number, b: number): number {
  return a + b;
}
function restar(a: number, b: number): number {
  return a - b;
}
function multiplicar(a: number, b: number): number {
  return a * b;
}
console.log(calculadora(5, 8, sumar));
console.log(calculadora(8, 3, restar));
console.log(calculadora(5, 9, multiplicar));

console.log(calculadora(9, 10, (a: number, b: number) => a + b));
console.log(
  calculadora(9, 10, function (a: number, b: number) {
    return a + b;
  }),
);
/* ----------PRO-TIP------------------ */
let frutas: string[] = ["sandia", "manzana", "peras"];

for (let index = 0; index < frutas.length; index++) {
  console.log(frutas[index]);
}

for (const fruta of frutas) {
  console.log(fruta);
}
/* ---------------------INTERFACES Y OBJETOS-----------------------*/
