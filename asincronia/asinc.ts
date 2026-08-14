/* console.log("hola mundo");
console.log("me levanto");
console.log("desayuno");
console.log("preparo mi clase");
console.log("doy mi clase"); */
/* ---------------SET-TIME OUT---------- */

/* console.log("DESPERTAR");
console.log("oracion");
console.log("poner el agua a hervir");
setTimeout(function () {
  console.log("el agua esta lista");
}, 3000);
console.log("aseo personal");
console.log("prepara mis escrituras");
console.log("prepara mi clase"); */

/* ---------------------------------------------------------- */
interface peliculas {
  id: number;
  nombre: string;
  añoPublicacion: number;
  raiting: number;
}

let pelisDB: peliculas[] = [
  {
    id: 1,
    nombre: "spiderman",
    añoPublicacion: 2026,
    raiting: 4.5,
  },
  {
    id: 2,
    nombre: "titanic",
    añoPublicacion: 2002,
    raiting: 4.7,
  },
  {
    id: 3,
    nombre: "terminator",
    añoPublicacion: 2015,
    raiting: 4.2,
  },
  {
    id: 4,
    nombre: "el ultimo maestro del aire",
    añoPublicacion: 2009,
    raiting: 2.5,
  },
  {
    id: 5,
    nombre: "it",
    añoPublicacion: 2022,
    raiting: 4,
  },
  {
    id: 6,
    nombre: "spiderman",
    añoPublicacion: 2026,
    raiting: 4.9,
  },
];

function traerPelis(): Promise<peliculas[]> {
  return new Promise((resolve, reject) => {
    if (pelisDB.length === 0) {
      reject("no existe ninguna pelicula");
    } else {
      setTimeout(() => {
        resolve(pelisDB);
      }, 4000);
    }
  });
}

//console.log(traerPelis());
/* -----------RESOLVER -PROMESA------------- */
/* traerPelis()
  .then(function (respuesta) {
    for (let index = 0; index < respuesta.length; index++) {
      if (respuesta[index].nombre === "spiderman") {
        console.log(respuesta[index]);
      }
    }
  })
  .catch((error) => console.log(error)); */

/* -----------RESOLVER -PROMESA USANDO ASYNC Y AWAIT------------- */

async function principal() {
  console.log("cargando peliculas de spiderman...........");
  const respuesta = await traerPelis();
  console.log("peliculas de spiderman disponibles :");
  for (let index = 0; index < respuesta.length; index++) {
    if (respuesta[index].nombre === "spiderman") {
      console.log(respuesta[index]);
    }
  }
}

//principal();
/* 
  dada la base de datos de estudiantes 
  mostrar a los estudiantes del pais de Argentina y la cantidad 
*/

interface estudiante {
  id: number;
  nombre: string;
  apPaterno: string;
  pais: string;
  edad: number;
}

let estudiantesDB: estudiante[] = [
  {
    id: 1,
    nombre: "Adan",
    apPaterno: "Cotaña",
    pais: "Bolivia",
    edad: 24,
  },
  {
    id: 2,
    nombre: "Adrian",
    apPaterno: "Alva",
    pais: "Peru",
    edad: 20,
  },
  {
    id: 3,
    nombre: "Gi",
    apPaterno: "Montania",
    pais: "Argentina",
    edad: 22,
  },
  {
    id: 4,
    nombre: "Cristian",
    apPaterno: "Claudio",
    pais: "Dominicano",
    edad: 24,
  },
  {
    id: 5,
    nombre: "Carlos",
    apPaterno: "Ramos",
    pais: "Argentina",
    edad: 26,
  },
];

function traerEstudiantes(): Promise<estudiante[]> {
  return new Promise((resolve, reject) => {
    if (estudiantesDB.length === 0) {
      reject("no existe ninguna pelicula");
    } else {
      setTimeout(() => {
        resolve(estudiantesDB);
      }, 5000);
    }
  });
}

traerEstudiantes()
  .then(function (respuesta) {
    let estudiantesArgentina = respuesta.filter(
      (estudiante) => estudiante.pais === "Argentina",
    );
    console.log("los estudiantes de argentina son");
    estudiantesArgentina.forEach((estudiante) =>
      console.log(
        `nombre:${estudiante.nombre} apellido:${estudiante.apPaterno}`,
      ),
    );
    console.log(`y en total son ${estudiantesArgentina.length}`);
  })
  .catch((error) => console.log(error));

// usar async y await y mostrar a los estudiantes mayores a 23 años

/* async function prepararCocoa() {
  console.log("[1] Empezando a preparar mi cocoa......");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("[3] Cocoa Lista!!!");
}

console.log("[INICIO PROGRAMA]");
prepararCocoa();
console.log("fin del programa");
 */
