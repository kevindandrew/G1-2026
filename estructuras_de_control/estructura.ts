/* --------------CONDICIONALES----------------- */
/* 
    IF
if (condition) {
    el codigo que se ejecutara si
    la condicion es verdaera
}
 */
let edad = 16;
if (edad >= 18) {
  console.log("eres mayor de edad");
}

/* 
            IF-ELSE
if(condicion){
    el codigo que se ejecutara si
    la condicion es verdaera
}else{
    el codigo que se ejecutara si
    la condicion es falsa
}
*/
let dinero = 7000;

if (dinero >= 1000) {
  console.log("eres un pituco");
} else {
  console.log("eres color carton");
}
/* 
        IF-ELSE-IF
        POR BUENAS PRACTICAS ES MEJOR ANIDAR UN MAXIMO DE 3 CONDICIONALES 
if(condicion){
    el codigo que se ejecutara si
    la condicion es verdaera
    if(condicion){
        el codigo que se ejecutara si
        la condicion es verdaera
    }else{
        el codigo que se ejecutara si
        la condicion es falsa
    }
}else{
    el codigo que se ejecutara si
    la condicion es falsa
    if(condicion){
        el codigo que se ejecutara si
        la condicion es verdaera
    }else{
        el codigo que se ejecutara si
        la condicion es falsa
    }
}
*/
let calificacion: string = "A";

if (calificacion === "A") {
  console.log("este estudiante esta aprobado!!");
} else if (calificacion === "B") {
  console.log("este es un estudiante regular");
} else {
  console.log("esta reprobado");
}

/* 
    SWICH-CASE
switch (CALIFICACION) {
    case "A":
        //PORCION DE CODIGO SI EL VALOR ES "A"
        break;
    case "B":
        //PORCION DE CODIGO SI EL VALOR ES "B"
        break;
    case "C":
        //PORCION DE CODIGO SI EL VALOR ES "C"
        break;
    case "D":
        //PORCION DE CODIGO SI EL VALOR ES "D"
        break;            
    default:
        // PORCION DE CODIGO EN CASO DE UN VALOR POR DEFAULT
        break;

    el valor default es para los casos que esten fuera de las opciones del menu 
} */

let menu = `
    Bienvenido al menu del Buen sabor
    1.sopa De FIDEOS
    2.aji de gallina
    3.cebiche
    4.pastel de carne
    5.tallarines verdes
`;
console.log(menu);
let pedido = 7;
switch (pedido) {
  case 1:
    console.log("preparando tus ricos fideos :D");
    break;
  case 2:
    console.log("correteando a la gallina");
    break;
  case 3:
    console.log("preparando tus rico cebiche :D");
    break;
  case 4:
    console.log("Horneando tu rico pastel de carne :D");
    break;
  case 5:
    console.log("preparando tu tallarin :D");
    break;
  default:
    console.log("ese plato no esta dentro del menu intenta de nuevo ");
    break;
}

/* 
        OPERADOR TERNARIO :D
    CONDICION 
        ? CODIGO Q SE EJECUTARA SI LA CONDICION VERDADERA 
        :CODIGO Q SE EJECUTARA SI LA CONDICION FALSA

        este condicional solo admite una linea x verdad y una linea x falso  se utiliza
        normalmente en condiciones pequeñas q puedan escribirse en una sola linea :D
*/

let ahorros = 1000;

ahorros >= 220
  ? console.log("felicidades puedes comprar tu teclado")
  : console.log("q sad x ti");
