console.log("Hola mundo");
console.log("FUNVAL");
// esto es un comentario de una sola linea :D
/* esto 
es 
 */
/* ------------------TIPOS DE DATOS----------------------- */
/* 
    -number       numeros sean enteros o con decimales
    -string "s" 'dsa' ´123asdwdt134ras´
    -boolean   true    false
    -undefined    valor no definido
    -null        valor nulo
    -big int     numeros sumamente grandes
    -symbolo     simbolo
    ----------------typescript unicos--------------------
    -any //MALA PRACTICA !!!!!!!!
    -void vacio 
*/
/* -----------CREAR VARIABLES Y CONSTANTES------------------- */

let apPaterno: string = "Rodriguez";

apPaterno = "Gomez";

const PI: Number = 3.1416;

var malaPractica: string = "NO USAR"; // MALA PRACTICA NO UTILIZAR!!!!

/* ----------------tipos de datos------------------------------ */

let edad: number = 22;
let nombre: string = "Kevin";
let año = "2026";
let esMiembroSud: boolean = false;
let añoComproCasa: undefined;
let refrescoDia: null;
let numeroDeBendiciones: bigint = 12312481725412741254n;

/* 
MALA PRACTICA >:C
let numeroHijos;
numeroHijos = 2;
numeroHijos = "kevin";
let numeroAutos: any = 2;
numeroAutos = "harto"; */
console.log(typeof numeroDeBendiciones);
/* 
    CREAR 5 variables y 5 constantes con los diferentes tipos de datos 
    -number
    -string
    -boolean
    -bigInt
    -sin especificar el tipo de dato pero si el valor 
*/

/* -----------SIMBOLOS DE OPERACION---------------- */
let num1 = 32;
let num2 = 2;
let num3 = "2.22";
let num4 = "kevin";
let resultado = num4 + num3; // SUMA O CONCATENACION DE DATOS
let resultado2 = num1 - num2; // RESTA UNICAMENTE DE TIPO NUMBER
resultado2 = num1 * num2; // MULTIPLICACION UNICAMENTE DE TIPO NUMBER
resultado2 = num1 / num2; // DIVISION UNICAMENTE DE TIPO NUMBER
resultado2 = num1 % num2; // MODULO UNICAMENTE DE TIPO NUMBER o residuo

/* -----CONVERTIR UN STRING A NUMBER */
let num3Int: number = parseFloat(num3);
console.log(typeof num3Int);
console.log(num3Int);

/* ----convertir un Number a string */
let añitos = 13;
let añosString: string = añitos.toString();
console.log(typeof añosString);
console.log(añosString);

/* ---------SIMBOLOS DE AUTO-ASIGNACION--------- */
let añosMision = 1;

añosMision++; // añosMision = añosMision + 1 res=2
añosMision--; // añosMision = añosMision - 1 res=1
añosMision += 5; // añosMision = añosMision + 5
añosMision -= 5; // añosMision = añosMision - 5
añosMision *= 5; // añosMision = añosMision * 5
añosMision /= 5; // añosMision = añosMision / 5

/* -------------Simbolos de comparacion---------- */
let a = 3;
let b = 6;
let c = "3";

let comparacion = a == b; // si son iguales
comparacion = a != b; // si son diferentes
comparacion = a > b; // si son mayor que
comparacion = a < b; // si son menor que
comparacion = a >= b; // si son mayor o igual que
comparacion = a <= b; // si son menor o igual que
console.log(comparacion);

/* --------------OPERADORES LOGICOS----------- */
let superComparacion = a == b && b == a; // AND
superComparacion = a == b || b == a; // OR
superComparacion = !(a == b); // NOT
