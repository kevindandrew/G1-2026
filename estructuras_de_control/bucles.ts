/* 
        BUCLE WHILE
while (condition) {
    codigo q se ejecutara 
    siempre y cuando la condicion
    sea verdadera
}
*/

/* let ventas = 0;
while (ventas != 10) {
  ventas++;
  console.log("venta realizada");
} */

/* 
    for(let indice:number=1;indice <=10 ;indice++){
        codigo q se ejecutara esa cantidad de veces
    }
*/
/* for (let i = 1; i <= 10; i++) {
  console.log("hola funval");
}
let num1 = 8;
let num2 = 7;
let resultado = 0;
for (let j = 1; j <= num1; j++) {
  resultado = resultado + num2;
}
console.log(resultado); */
/* 
    indicar los n terminos de la serie de los numeros pares
    n = 4
    2,4,6,8
    n = 7
    2,4,6,8,10,12,14
*/

/* let n = 7;
let par = 2;
for (let j = 1; j <= n; j++) {
  console.log(par);
  par = par + 2;
} */

/* 
    mostrar los N terminos de la serie de los numeros impares
    n = 3
    1,3,5
    n= 6
    1,3,5,7,9,11
*/

/* 
    poder conseguir el factorial de un numero en especifico
    !5 = 1*2*3*4*5
    !3 = 1*2*3
*/
/* 
 n= 5
 2,2,4,4,4
 n = 10
 2,2,4,4,4,4,6,6,6,6
*/

/* let m = 10;
let valorInicial = 2;
let contador = 1;

for (let i = 1; i <= m; i++) {
  console.log(valorInicial);
  if (contador === valorInicial) {
    contador = 1;
    valorInicial += 2;
  } else {
    contador++;
  }
}
 */

let m = 15;
let valorInicialA = 1;
let valorInicialB = 4;
let contadorA = 1; // hasta 2
let contadorB = 1; // primera vuelta hasta 2 luego hasta 3 luego hasta 4
let limite = 2;
let swich = true;
for (let i = 1; i <= m; i++) {
  if (swich) {
    if (contadorA == 2) {
      console.log(valorInicialA);
      contadorA = 1;
      swich = false;
    } else {
      console.log(valorInicialA);
      valorInicialA++;
      contadorA++;
    }
  } else {
    if (contadorB === limite) {
      console.log(valorInicialB);
      limite++;
      contadorB = 1;
      swich = true;
    } else {
      console.log(valorInicialB);
      valorInicialB += 4;
      contadorB++;
    }
  }
}

/* 
  nuestro querido lider de JAS Mauricio Lopez quiere comprarse la PS5 
  la cual cuesta 9500$
  pero este lider solo pudo ahorrar la primera semana 5$
  pero gracias al poder del diezmo cada semana el puede ahorrar el doble de la semana anterior
  2da semana 10$
  3era semana 20
  Cuantas semanas debera ahorrar Mauricio para poder comprar su PS5?
*/
