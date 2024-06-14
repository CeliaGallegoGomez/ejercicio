import "../scss/styles.scss";

//DECLARACION DE FUNCIONES

function suma(a, b) {
  const resultado = a + b;
  console.log(resultado);
}

suma(1, 2);

function saludar(name) {
  console.log(`¡Hola, ${name}!`);
}

saludar("Andreita");

function multiplicar(c, d) {
  const resultado = c * d;
  console.log(resultado);
}

multiplicar(3, 2);

//PARAMETROS Y ARGUMENTOS

function calcularDescuento(precio, descuento) {
  const descuentoFirst = (descuento / 100) * precio;
  const descuentoDos = precio - descuentoFirst;
  console.log(descuentoDos);
}

calcularDescuento(100, 20);

function celsiusFarenheit(number) {
  const cambio = number * (9 / 5) + 32;
  console.log(cambio);
}

celsiusFarenheit(14);

function calcularEdad(añohoy, añopersona) {
  const calculo = añohoy - añopersona;
  console.log(calculo);
}

calcularEdad(2024, 2000);

//DEVOLVIENDO DATOS CON RETURN

// function cuadrado(num) {
//   const calculo = num * num;
//   console.log(calculo);

//   return calculo;
// }

// window.alert(cuadrado(3));

// function inverso(numb) {
//   const operation = numb * (1 / numb);
//   console.log(operation);

//   return operation;
// }

// window.alert(inverso(4));

// function concatenar(){
// const string =[];
// const srting2 =[];

// }
// window.alert(concatenar())

const multiplicar = function (a, b) {
  return a * b;
};

let numero = 2;
multiplicar(2, numero);

const divison = function (c + d) {
    return c/d;
}

let numeronu =6;
division(12,numeronu)
