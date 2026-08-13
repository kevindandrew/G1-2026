interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

const inventario: Producto[] = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    stock: 5,
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: 80,
    stock: 10,
  },

  {
    id: 3,
    nombre: "Monitor",
    precio: 300,
    stock: 0,
  },
];

// foreach - recorrer

/* inventario.forEach(function (prod: Producto): void {
  console.log("Producto:", prod.nombre);
}); */

// map  -- este si devuelve un nuevo array

const nombres: string[] = inventario.map(function (prod: Producto): string {
  return prod.nombre.toLocaleLowerCase();
});

console.log(nombres);

// filter  -- FILTRAR

const enStock: Producto[] = inventario.filter(function (
  prod: Producto,
): boolean {
  return prod.stock > 0;
});

console.log(enStock);

// find  - encontrar al primero que cumpla con la condición.

const teclado: Producto | undefined = inventario.find(function (
  prod: Producto,
): boolean {
  return prod.id === 7;
});

//console.log(teclado);

// some -- Existe alguno?

const hayAgotados: boolean = inventario.some(function (
  prod: Producto,
): boolean {
  return prod.stock === 0;
});

//console.log(hayAgotados);

// includes -- busqueda exacta

const existeTeclado: boolean = nombres.includes("TECLADO".toLocaleLowerCase());
console.log(existeTeclado);
