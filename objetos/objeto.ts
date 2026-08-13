interface Estudiante {
  id: number;
  nombre: string;
  apPaterno: string;
  email: string;
  telefono: number;
  notas: number[];
}

let estudiante1: Estudiante = {
  id: 1,
  nombre: "Kevin",
  apPaterno: "Rodriguez",
  email: "Kevin123@gmail.com",
  telefono: 78768015,
  notas: [78, 90, 35, 55],
};
/* 
    como acceder a los datos de un objeto
*/
estudiante1.telefono = 7159132;
console.log(estudiante1);
/* 
    como puedo saber el promediom de notas del estudiante1
*/
let promedio = 0;
for (const nota of estudiante1.notas) {
  promedio += nota;
}
promedio = promedio / estudiante1.notas.length;
console.log(
  `el promeido del estudiante ${estudiante1.nombre} es : ${promedio.toFixed(0)}`,
);
/* --------------------------------------------------------------- */
interface Estudiantes {
  id: number;
  nombre: string;
  pais: string;
  notas: number[];
  masculino: boolean;
}

const estudiantes: Estudiantes[] = [
  {
    id: 1,
    nombre: "Lucía",
    pais: "Bolivia",
    notas: [80, 70, 90],
    masculino: false,
  }, // Promedio: 80 (Aprobada)
  {
    id: 2,
    nombre: "Mateo",
    pais: "Argentina",
    notas: [40, 50, 55],
    masculino: true,
  }, // Promedio: 48.3 (Reprobado)
  {
    id: 3,
    nombre: "Carlos",
    pais: "Bolivia",
    notas: [60, 65, 70],
    masculino: true,
  }, // Promedio: 65 (Aprobado)
  {
    id: 4,
    nombre: "Sofía",
    pais: "Perú",
    notas: [90, 95, 100],
    masculino: false,
  }, // Promedio: 95 (Aprobada)
  {
    id: 5,
    nombre: "Diego",
    pais: "Bolivia",
    notas: [30, 40, 50],
    masculino: true,
  }, // Promedio: 40 (Reprobado)
  {
    id: 6,
    nombre: "Elena",
    pais: "Perú",
    notas: [70, 80, 75],
    masculino: false,
  }, // Promedio: 75 (Aprobada)
];
/* 
 realizar un programa que me indique 
 el pais q mas aprobados tenga (se aprueba con un promedio de mas de 51) y la cantidad de aprobados
 y ademas quiero saber si tengo mas aprobados varones o mujeres
*/
