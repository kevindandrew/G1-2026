import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let password = ""; //123456
let username = ""; //admin

do {
  username = await rl.question("ingresa tu nombre de usuario");
  password = await rl.question("ingresa tu contraseña");
} while (username !== "admin" || password !== "123456");

console.log(`FELICIDADES LOGRASTE INGRESAR CON EXITO!!!!`);
// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
