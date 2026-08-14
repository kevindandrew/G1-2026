interface Empleado {
  id: number;
  nombre: string;
  departamento: string;
  horasExtrasPorSemana: number[]; // 4 semanas
  pagoPorHora: number;
}

const empleados: Empleado[] = [
  {
    id: 1,
    nombre: "Valeria",
    departamento: "Desarrollo",
    horasExtrasPorSemana: [5, 4, 6, 3], // Total: 18 hrs (>15 hrs -> Recibe bono de $50)
    pagoPorHora: 20, // (18 * 20) + 50 = $410
  },
  {
    id: 2,
    nombre: "Andrés",
    departamento: "Ventas",
    horasExtrasPorSemana: [2, 1, 3, 2], // Total: 8 hrs
    pagoPorHora: 15, // 8 * 15 = $120
  },
  {
    id: 3,
    nombre: "Camila",
    departamento: "Desarrollo",
    horasExtrasPorSemana: [3, 2, 4, 1], // Total: 10 hrs
    pagoPorHora: 20, // 10 * 20 = $200
  },
  {
    id: 4,
    nombre: "Gabriel",
    departamento: "Soporte",
    horasExtrasPorSemana: [4, 5, 4, 5], // Total: 18 hrs (>15 hrs -> Recibe bono de $50)
    pagoPorHora: 12, // (18 * 12) + 50 = $266
  },
  {
    id: 5,
    nombre: "Mariana",
    departamento: "Ventas",
    horasExtrasPorSemana: [1, 2, 1, 0], // Total: 4 hrs
    pagoPorHora: 15, // 4 * 15 = $60
  },
];
