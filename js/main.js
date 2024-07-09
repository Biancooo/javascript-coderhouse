// Pre-entrega 1:
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

// Pre-entrega 2:
// 1

var nombrepersona;
nombrepersona = prompt("Escribir su nombre completo: ");
alert("Su nombre es: " + nombrepersona);

// 2

// Suma

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var suma = sumar(num1,num2);
alert(`${suma}`);

function sumar(n1, n2){
    return n1 + n2;
}

// Resta

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var resta = restar(num1,num2);
alert(`${resta}`);

function restar(n1, n2){
    return n1 - n2;
}

// Multiplicacion

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var multiplicacion = multiplicar(num1,num2);
alert(`${multiplicacion}`);

function multiplicar(n1, n2){
    return n1 * n2;
}

// Concatenacion

var uno = Hola;

var dos = Mundo;

var union = uno + dos;

// Division

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var division = dividir(num1,num2);
alert(`${division}`);

function dividir(n1, n2){
    return n1 / n2;
}

// Porcentaje

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var porcentacion = porcentar(num1,num2);
alert(`${porcentacion}`);

function porcentar(n1, n2){
    return n1 % n2;
}