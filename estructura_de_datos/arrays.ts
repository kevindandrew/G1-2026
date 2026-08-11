/* --------------------ARRYS---------------------- */

/* let nombre: string = "Juan";

// iniciar un array
let estudiantesFunval: string[] = [
  "Manuel",
  "Efrain",
  "David",
  "Billy",
  "Felipe",
  "Pamela",
];
//acceder a un dato de un array
console.log(estudiantesFunval[3]);

//METODOS BASICOS DE UN ARRAY

//la cantidad de elementos que tengo en mi lista o array
console.log(estudiantesFunval.length);

let largo = estudiantesFunval.push("Jared", "Gi", "Yair"); // agregar un elemento o varios al final del array y retorna el largo del array
largo = estudiantesFunval.unshift("Natanael"); // lo mismo q push pero al inicio del array

estudiantesFunval.pop(); //eliminar el ultimo elemeneto del array
estudiantesFunval.shift(); //eliminar el primer elemeneto del array
console.log(estudiantesFunval);
console.log(estudiantesFunval.length);
estudiantesFunval[0] = "Luis";
console.log(estudiantesFunval);
console.log(estudiantesFunval.length); */

/* 
    QUE ES LO PRIMERO Q DEBO HACER AL VER UN ARRAY
    R:ITERARLOS
*/
/* let mascotas: string[] = [
  "perro",
  "gato",
  "hamsters",
  "Cuy",
  "loros",
  "conejos",
  "gallinas",
];
let contador = 0;
for (let index = 0; index < mascotas.length; index++) {
  if (mascotas[index] === "Cuy") {
    console.log("si tienes un cuy en tu array de mascotas");
    contador++;
  }
}
if (contador === 0) {
  console.log("no tenemos cuys en el listado de mascotas");
}
 */
/* 
    dado un array de notas quiero saber el promedio de un estudiante
    [34,100,97,25,55]
    [77,90,45]
    sacar el promedio de notas de un estudiante
*/

let notas: number[] = [77, 77, 77];
let promedio = 0;
for (let index = 0; index < notas.length; index++) {
  promedio = promedio + notas[index];
}
promedio = promedio / notas.length;
console.log("el promedio del estudiante es " + promedio);

/*
    dado un array de numeros enteros [2,3,12,78,99,43,22]
    determinar la cantidad de numeros pares y numeros impares
    numero pares = 4
    numero impares = 3
*/
