/* let num = parseInt(prompt('Dime un numero'));

for (num; num >= 0; num--) {
  console.log(num);
  if (num == 0) {
    break;
  }
}
 */

const adivinanza = 12;
let numeroAdivinado = Number(prompt('Dime un numero'));

while (numeroAdivinado !== adivinanza) {
  numeroAdivinado = Number(prompt('Perdiste, intenta de nuevo'));
}

alert('¡Adivinaste wey!');
