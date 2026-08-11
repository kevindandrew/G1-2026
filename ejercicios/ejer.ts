/* 
    dado un estudiante X con 3 calificaciones mostrar un mensaje
    con el nombre del estudiante y el promedio del mismo 
*/

/* let estudiante: string = "Kevin";
let nota1 = 67;
let nota2 = 40;
let nota3 = 90;

let promedio = (nota1 + nota2 + nota3) / 3;
console.log(`el estudiante: ${estudiante} 
            tiene un promedio de ${promedio}`);
 */
/* 
    un sition de parkeo quiere un programa para saber cuanto debera cobrar
    en relacion a la cantidad de horas q estara parkeado u  automovil
    los datos esperados son 
    nombre del dueño del automovil
    cantidad de horas q se quedara
    el costo x hora es de 12$
*/

/* let dueño = "Jose Pelico ";
let horas = 12;

let costoTotal = horas * 12;

console.log(
  `El costo total a pagar es de : ${costoTotal} del usuario: ${dueño}`,
);
 */

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

const dueño = await rl.question("ingresa tu nombre ");
const horas = await rl.question(
  "ingresa la cantidad de horas que te quedaras ",
);

console.log(`el usuario: ${dueño} debera pagar :${horas * 12}$`);

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
