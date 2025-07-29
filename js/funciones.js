// Funcion tradicional

/* function sumar(a, b) {
  return a + b;
}

console.log(sumar(2, 8));
 */

// Funcion flecha
/* const sumarFlecha = (a, b) => {
  return a + b;
};

console.log(sumarFlecha(2, 12)); */

// Funcion flecha resumida

/* const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(7, 9));
 */

// Funcion anonima

let sumar = function (a, b) {
  return a + b;
};

console.log(sumar(2, 4));

// Funcion flecha

let sumar2 = (a, b) => {
  return a + b;
};

// Si la funcion solo hace una cosa, la podemos definir de la siguiente manera

let sumar3 = (a, b) => a + b;

// Otro ejemplo

let venta = () => {
  return 'VENTA';
};

// Se puede definir de la siguiente manera

let venta2 = () => 'VENTA';

alert();
