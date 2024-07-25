// Pre-entrega 1:

// Let y Const

let anoNacimiento = prompt("ingresar fecha de nacimiento");

const anoActual = 2024;
let edad = anoActual - anoNacimiento;

// If y Else

if (edad >= 18) {
    console.log("Eres mayor de 18 años");
}
else if (edad <= 18) {
    console.log("Eres menor de 18 años");
}

// Calcular IVA

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

// Variables y Alert

var nombrepersona;
nombrepersona = prompt("Escribir su nombre completo: ");
alert("Su nombre es: " + nombrepersona);

// Calcular Sumas

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var suma = sumar(num1,num2);
alert(`${suma}`);

function sumar(n1, n2){
    return n1 + n2;
}

// Calcular Restas

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var resta = restar(num1,num2);
alert(`${resta}`);

function restar(n1, n2){
    return n1 - n2;
}

// Calcular Multiplicaciones

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var multiplicacion = multiplicar(num1,num2);
alert(`${multiplicacion}`);

function multiplicar(n1, n2){
    return n1 * n2;
}

// Calcular Concatenaciones en var

var uno = Hola;

var dos = Mundo;

var union = uno + dos;

// Calcular Divisiones

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var division = dividir(num1,num2);
alert(`${division}`);

function dividir(n1, n2){
    return n1 / n2;
}

// Calcular Porcentajes

var num1 = Number(prompt("Escribe un numero"));
var num2 = Number(prompt("Escribe otro numero"));
var porcentacion = porcentar(num1,num2);
alert(`${porcentacion}`);

function porcentar(n1, n2){
    return n1 % n2;
}

// Pre-entrega 3:

// LocalStorage y JSON

lst = [{
    name: "Hector",
    age: 34
},{
    name: "Francisco",
    age: 40
}];

localStorage.setItem("lista",JSON.stringify(list));

lst =JSON.parse(localStorage.getItem("list"));

lst.forEach(element => {
    let elements = document.getElementById("elements");
    let div = document.createElement("div");
    div.innerHTML = element.name + " "+ element.age;
    elements.appendChild(div);
});

// DOM (Document Object Model)

// Seleccionar elementos

// Por ID:

let elementoPorId = document.getElementById('parrafo1');
elementoPorId.innerHTML = 'HTML';

// Por Nombre de la Clase:

let elementosPorClase = document.getElementsByClassName('parrafos');
console.log(elementosPorClase.length);  3
elementosPorClase[1].innerHTML = 'CSS';

// Por Etiqueta:

let elementosPorEtiqueta = document.getElementsByTagName('p');
console.log(elementosPorEtiqueta.length);  3
elementosPorEtiqueta[2].innerHTML = 'JavaScript';

// Modificando Estilos con JS: (CSS)

elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '8px';
elementoPorId.style.width = '250px';
elementoPorId.style.textAlign = 'center';

// Event Listeners:

const clickTitulo = (ev) => {
    console.log(ev);
};

const titulo2 = document.getElementById("tituloForm");

titulo2.addEventListener('click', clickTitulo);

// Event DOMContentLoaded:

document.addEventListener('DOMContentLoaded', () => {
    console.log("El documento ha cargado y los elementos tambien");
});

// Event Submit:

const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(event);
};

form.addEventListener('submit', enviarFormulario);

// Eliminar comportamiento nativo:

// const form = document.querySelector("#formulario");

// const enviarFormulario = (event) => {
//     event.preventDefault();

//     const { name, email, password } = event.target;

//     console.log(name.value, email.value, password.value);

//     if (name.value.length === 0) alert("El nombre no es valido");
// };

// form.addEventListener('submit', enviarFormulario);