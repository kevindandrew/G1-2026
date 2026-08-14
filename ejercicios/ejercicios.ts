// objetos e interfaces
interface Usuarios {
  id: number;
  nombre: string;
  email: string;
  edad?: number;
}

function crearUsuario(id: number, nombre: string, email: string): Usuarios {
  return {
    id,
    nombre,
    email,
  };
}

const usuario1: Usuarios = crearUsuario(
  1,
  "Elena Sanchez",
  "elenita@gmail.com",
);
usuario1.edad = 28;

console.log(usuario1);

// arrays y sus metodos

type Producto = {
  nombre: string;
  precio: number;
  stock: boolean;
};

const inventario: Producto[] = [
  {
    nombre: "Teclado",
    precio: 1500,
    stock: true,
  },
  {
    nombre: "Mouse",
    precio: 200,
    stock: true,
  },
  {
    nombre: "PC",
    precio: 7000,
    stock: false,
  },
];

/* function calcularValor(productos: Producto[]): number {
  return productos
    .filter((prod) => prod.stock)
    .reduce((total, prod) => total + prod.precio, 0);
} 
console.log(`Valor total: $${calcularValor(inventario)}`);    
*/

function calcularPromedio(productos: Producto[]): number {
  const disponibles = productos.filter((prod) => prod.stock);
  if (disponibles.length === 0) {
    return 0;
  }
  return (
    disponibles.reduce((total, prod) => total + prod.precio, 0) /
    disponibles.length
  );
}
console.log(
  `Promedio de productos disponibles: ${calcularPromedio(inventario)} `,
);

//callbacks (funciones dentro de otras funciones) y arrow (funciones convertidas en estructura moderna)

interface Producto1 {
  nombre: string;
  precio: number;
}

const carrito: Producto1[] = [
  { nombre: "Zapatillas", precio: 100 },
  { nombre: "Polera", precio: 50 },
  { nombre: "Mochila", precio: 80 },
];
//funcion principal
function promociones(
  lista: Producto1[],
  descuento: (precio: number) => number,
): Producto1[] {
  return lista.map((prod) => {
    const rebaja = descuento(prod.precio); // aqui ingresa el callback, otra funcion
    return { nombre: prod.nombre, precio: prod.precio - rebaja };
  });
}

//funcion 1
function descuentoEstudiante(precio: number): number {
  return precio * 0.2;
}

function descuentoTerceraedad(precio: number): number {
  return precio * 0.5;
}
/* const descuentoEstudiante1 = (precio: number): number => {
  return precio * 0.2;
};
 */
const carritoDescuentoEstudiante = promociones(carrito, descuentoEstudiante);
const carritoDescuentoTercerdaEdad = promociones(carrito, descuentoTerceraedad);

console.log(carritoDescuentoEstudiante);
console.log(carritoDescuentoTercerdaEdad);
