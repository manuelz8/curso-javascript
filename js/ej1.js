/* let edad = prompt('Cual es tu edad?');

if (edad < 18) {
  alert('Eres menor de edad');
} else if (edad >= 18 && edad <= 65) {
  alert('Eres un adulto');
} else {
  alert('Eres un adulto mayor');
}

console.log(typeof edad);
 */

let day = prompt('Dime un dia');

switch (day) {
  case 'Lunes':
  case 'Martes':
  case 'Miercoles':
  case 'Jueves':
  case 'Viernes':
    alert('Es un dia laboral');
    break;
  case 'Sabado':
  case 'Domingo':
    alert('Es fin de semana');
    break;
  default:
    alert('Ingresa un dia valido');
}
