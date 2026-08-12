/* 
    una empresa q se encarga de elaborar microondas necesita 
    una app q les ayude con el conteo del microondas
    ejemplo si calentar un plato de arroz con huevo demora 10s
    q despues de ese conteo de 10 9 8 7 6 5 4 3 2 1 pueda mostrar un
    mensaje q diga
    COMIDA LISTA!!!
*/
/* for (let i = 10; i >= 0; i--) {
  console.log(`quedan ${i} segundos`);
}

console.log("COMIDA LISTA!!!");
 */
/* 
    un edificio de 8 piso necesita una aplicacion para su ascensor
    el ascensor empieza en el piso 1 y a medida q va subiendo al piso 8 
    debe mostrar un mensaje q diga 
    "LLEGAMOS AL PISO X"
*/

/* 
    EN LA EMPRESA DIGITAL KEVIN QUIEREN REALIZAR LOS PAGOS A SUS TRABAJADORES
    EL ENCARGADO DE CONTABILIDAD REALIZA LOS PAGOS DE LA SIGUIENTE MANERa
    ingresa directamente los montos
    2500-1500-3000-4500.............0
    2550-1500-0
*/

/* ---------------arrays------------------- */

/* let compras: string[] = [
  "lechuga",
  "tomate",
  "huevos",
  "leche",
  "arroz",
  "fideo",
];

for (let index = 0; index < compras.length; index++) {
  console.log(compras[index]);
  if (compras[index] === "leche") {
    console.log("el indice asosiado a la leche es: " + index);
  }
}
 */
/* 
    NO HOMEROS 
    el vecino de homero a creado un  club pero no se permiten homeros
    solo se permite uno xD
    el vecino tiene una lista de todos los amigos del vecindario
    amigos=["moe","barnie","leny","carl","Homero","krusty","Homero","alcalde diamante"]
    una aplicacion q cree una lista donde solo exista un solo homero 
    amigos2=["moe","barnie","leny","carl","Homero","krusty","alcalde diamante"]
*/
let amigos = [
  "moe",
  "barnie",
  "leny",
  "carl",
  "HomErO",
  "krusty",
  "Homero",
  "alcalde diamante",
  "Marge",
  "Apu",
  "homERO",
  "HomerO",
  "discostu",
  "SR. Burns",
];
let swich = true;
let lista: string[] = [];
for (let index = 0; index < amigos.length; index++) {
  if (amigos[index].toLowerCase() === "homero" && swich) {
    lista.push(amigos[index]);
    swich = false;
  } else {
    if (amigos[index].toLowerCase() !== "homero") {
      lista.push(amigos[index]);
    }
  }
}

console.log(lista);

/* -------------FUNCIONES------------------------ */
