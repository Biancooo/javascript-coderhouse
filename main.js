// 1

let anoNacimiento = prompt("ingresar fecha de nacimiento");

const anoActual = 2024;
let edad = anoActual - anoNacimiento;

// 2

if (edad >= 18) {
    console.log("Eres mayor de 18 años");
}
else if (edad <= 18) {
    console.log("Eres menor de 18 años");
}

// 3

let precioProducto = 0;
let precioDescuento = 0;

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const calcularIva = (precioProducto) => precioProducto * 0.21;

const iva = calcularIva(precioProducto);
const subTotal = sumar(precioProducto, iva);
restar(subTotal, precioDescuento);

console.log(PrecioFinal);

console.log(test);