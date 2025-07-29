// Por repeticion

for (let i = 0; i < 5; i++) {
  console.log('Estamos repitiendo un blucle for');
}

// Ciclos condicionales

const password = '1234';
let passwordIngresado = prompt('Ingrese su contraseña');

while (passwordIngresado != password) {
  passwordIngresado = prompt('Contraseña incorrecta, ingrese su contraseña');
}
