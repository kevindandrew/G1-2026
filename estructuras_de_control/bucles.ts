/* 
        BUCLE WHILE
while (condition) {
    codigo q se ejecutara 
    siempre y cuando la condicion
    sea verdadera
}
*/

let ventas = 0;
while (ventas != 10) {
  ventas++;
  console.log("venta realizada");
}

/* 
    for(let indice:number=1;indice <=10 ;indice++){
        codigo q se ejecutara esa cantidad de veces
    }
*/
for (let i = 1; i <= 10; i++) {
  console.log("hola funval");
}
let num1 = 8;
let num2 = 7;
let resultado = 0;
for (let j = 1; j <= num1; j++) {
  resultado = resultado + num2;
}
console.log(resultado);
/* 
    indicar los n terminos de la serie de los numeros pares
    n = 4
    2,4,6,8
    n = 7
    2,4,6,8,10,12,14
*/

let n = 7;
let par = 2;
for (let j = 1; j <= n; j++) {
  console.log(par);
  par = par + 2;
}

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
