const precioVenta = 1235;
const precioCompra = 1200;

function llamarAction() {
  let op = Number(
    prompt(
      `Bienvenido a la casa de cambio oficial, para operar por favor presiona:
     1- Comprar USD
     2- Vender USD`
    )
  );

  return op;
}

function venta() {
  alert('El precio de venta es de 1235 ARS');
  let cantidadAComprar = Number(prompt('Que cantidad de USD deseas comprar?'));
  let totalCompra = cantidadAComprar * precioVenta;
  alert(
    'El precio total para comprar ' +
      cantidadAComprar +
      ' USD es de ' +
      totalCompra +
      ' pesos'
  );
  return totalCompra;
}

function compra() {
  alert('El precio de venta es de 1200 ARS');
  let cantidadAVender = Number(prompt('Que cantidad de USD deseas vender?'));
  let totalVenta = cantidadAVender * precioCompra;
  alert(
    'El monto total al vender ' +
      cantidadAVender +
      ' USD es de ' +
      totalVenta +
      ' pesos'
  );
  return totalVenta;
}

function operacion(op) {
  switch (op) {
    case 1: {
      venta();
      break;
    }
    case 2: {
      compra();
      break;
    }
    default: {
      llamarAction();
    }
  }
}

operacion(llamarAction());
