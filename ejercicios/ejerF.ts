// ============================================================================
// 🧱 ESTRUCTURAS DE DATOS Y BASE DE DATOS INICIAL
// ============================================================================

interface Producto {
  id: string;
  name: string;
  category: string;
  rating: number;
}

interface Compra {
  productId: string;
  rating: number; // Calificación asignada por el usuario (1.0 a 5.0)
}

interface Usuario {
  id: string;
  name: string;
  purchases: Compra[];
}

const productos: Producto[] = [
  { id: "p1", name: "Teclado Mecánico", category: "tech", rating: 4.5 },
  { id: "p2", name: "Mouse Gamer", category: "tech", rating: 4.8 },
  { id: "p3", name: "Monitor 4K", category: "tech", rating: 3.8 },
  { id: "p4", name: "Silla Ergonómica", category: "furniture", rating: 4.7 },
  { id: "p5", name: "Escritorio Elevable", category: "furniture", rating: 4.2 },
  { id: "p6", name: "Auriculares Hi-Fi", category: "audio", rating: 4.6 },
];

const usuarios: Usuario[] = [
  {
    id: "u1",
    name: "Kevin",
    purchases: [
      { productId: "p1", rating: 4.5 }, // Le gustó la categoría "tech"
      { productId: "p4", rating: 3.5 }, // Compró "furniture" pero rating < 4.0
    ],
  },
];

// ============================================================================
// 👤 INTEGRANTE 1: MÓDULO DE MÉTRICAS E INVENTARIO
// ============================================================================

/**
 * TAREA 1.1: Conteo por Categoría
 * Crea una función que reciba el array de productos y devuelva un objeto
 * con la cantidad de productos por cada categoría.
 * Ejemplo de retorno esperado: { tech: 3, furniture: 2, audio: 1 }
 *
 * ⚠️ REQUISITO TÉCNICO: Debes utilizar obligatoriamente el método .reduce().
 */
function obtenerConteoPorCategoria(
  listProd: Producto[],
): Record<string, number> {
  // TODO: Escribe tu código aquí.
  // ⚠️ RECUERDA: Agrega comentarios LÍNEA POR LÍNEA explicando la función.
  return {};
}

/**
 * TAREA 1.2: Productos Extremos
 * Crea una función que devuelva un objeto con el producto con mayor rating
 * y el producto con menor rating dentro del inventario.
 */
interface ExtremosProductos {
  mejor: Producto | null;
  peor: Producto | null;
}

function obtenerTopYBottomProducto(listProd: Producto[]): ExtremosProductos {
  // TODO: Escribe tu código aquí.
  // ⚠️ RECUERDA: Agrega comentarios LÍNEA POR LÍNEA explicando la función.
  return { mejor: null, peor: null };
}

// ============================================================================
// 👤 INTEGRANTE 2: MÓDULO DEL MOTOR DE RECOMENDACIONES
// ============================================================================

/**
 * TAREA 2.1: Motor de Recomendaciones Inteligente
 * Crea una función que recomiende productos a un usuario según sus gustos.
 *
 * 📋 REGLAS DE NEGOCIO:
 * 1. Buscar al usuario por su 'userId'. Si no existe, retornar array vacío [].
 * 2. Filtrar las compras del usuario que tengan un rating >= 4.0 (categorías que le gustan).
 * 3. Obtener todas las categorías asociadas a esas compras satisfechas.
 * 4. Buscar en 'listProd' los productos que pertenezcan a esas categorías.
 * 5. EXCLUIR los productos que el usuario YA haya comprado.
 * 6. Retornar los productos recomendados.
 */
function obtenerRecomendaciones(
  userId: string,
  users: Usuario[],
  listProd: Producto[],
): Producto[] {
  // TODO: Escribe tu código aquí.
  // ⚠️ RECUERDA: Agrega comentarios LÍNEA POR LÍNEA explicando la función.
  return [];
}

// ============================================================================
// 👤 INTEGRANTE 3: MÓDULO DE PERFIL Y PREFERENCIAS
// ============================================================================

interface ResumenUsuario {
  nombre: string;
  totalCompras: number;
  promedioRatingDado: number; // Promedio de ratings de sus compras
  categoriaFavorita: string; // Categoría donde más productos ha comprado
}

/**
 * TAREA 3.1: Resumen Analítico del Usuario
 * Crea una función que reciba el ID de un usuario y genere un reporte completo.
 * Si el usuario no existe en el sistema, la función debe devolver 'null'.
 */
function obtenerResumenUsuario(
  userId: string,
  users: Usuario[],
  listProd: Producto[],
): ResumenUsuario | null {
  // TODO: Escribe tu código aquí.
  // ⚠️ RECUERDA: Agrega comentarios LÍNEA POR LÍNEA explicando la función.
  return null;
}

// ============================================================================
// 👤 INTEGRANTE 4: MÓDULO ASÍNCRONO E INTEGRADOR
// ============================================================================

/**
 * TAREA 4.1: Simulación de API con Promesa
 * Crea una función que simule una llamada de red a un servidor remoto.
 * Debe retornar una Promesa que se resuelva después de 1.5 segundos (1500ms)
 * entregando el objeto con los arrays de 'productos' y 'usuarios'.
 */
function fetchDatosServidor(): Promise<{
  productos: Producto[];
  usuarios: Usuario[];
}> {
  // TODO: Escribe tu código aquí utilizando 'new Promise' y 'setTimeout'.

  return new Promise((resolve) => {
    // Implementar resolución aquí...
  });
}

/**
 * TAREA 4.2: Función Principal de Ejecución
 * Crea una función asíncrona que:
 * 1. Llame a 'fetchDatosServidor()' usando 'await'.
 * 2. Maneje posibles errores con un bloque try / catch.
 * 3. Ejecute las funciones desarrolladas por los Integrantes 1, 2 y 3.
 * 4. Imprima todos los resultados de forma clara en la consola.
 */
async function ejecutarSistema(): Promise<void> {
  // TODO: Escribe tu código aquí.
  //
}

// Llama a la función principal para iniciar la aplicación
ejecutarSistema();
