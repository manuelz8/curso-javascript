const precio_coca = 4100;
const precio_papitas = 4000;

const calcular = (que, cuanto) => {
  if (que == 1) {
    const total = precio_coca * cuanto;
    alert('El total es ' + total);
  } else if (que == 2) {
    const total = precio_papitas * cuanto;
    alert('El total es ' + total);
  } else {
    principal();
  }
};

function queQuiereYCuanto() {
  const que = Number(
    prompt(`Tenemos dos productos disponibles, por favor oprime:
        1- Para Coca-Cola
        2- Para Papitas`)
  );

  const cuanto = Number(prompt(`Ingresa la cantidad deseada`));
  calcular(que, cuanto);
}

const principal = () => queQuiereYCuanto();

principal();

let numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
