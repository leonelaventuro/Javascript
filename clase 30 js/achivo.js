/*Crear un programa que pida al usuario ingresar un numero 
y mostrar en un mensaje si el valor ingresado es par o impar.*/

let pedir = prompt("ingresa un numero");
if (pedir % 2 == 0) {
    alert("numero par")
} else {
    alert("numero impar")
};

/*Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar 
y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
1/4kg: 2 sabores.
1/2kg: 3 sabores.
3/4kg: 4 sabores.
1kg: 5 sabores.*/

let heladeria = prompt("Que cantidad de helado desea comprar? 1/4kg , 1/2kg, 3/4kg, 1kg");
if (heladeria == "1/4 kg") {
    alert("dos sabores")
};
if (heladeria == "1/2 kg") {
    alert("tres sabores")
};
if (heladeria == "3/4 kg") {
    alert("cuatro sabores")
};
if (heladeria == "1kg") {
    alert("cinco sabores")
};



/*Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.*/

let mes = prompt("Que mes es? te digo cuantos dias tiene =)");

if (mes == "enero") {
    alert("31 dias")
};
if (mes == "febrero") {
    alert("29 dias")
};
if (mes == "marzo") {
    alert("31 dias")
};
if (mes == "abril") {
    alert("30 dias")
};
if (mes == "mayo") {
    alert("31 dias")
};

if (mes == "junio") {
    alert("30 dias")
};
if (mes == "julio") {
    alert("30 dias")
};
if (mes == "agosto") {
    alert("31 dias")
};
if (mes == "septembre") {
    alert("30 dias")
};
if (mes == "octubre") {
    alert("31 dias")
};
if (mes == "noviembre") {
    alert("30 dias")
};
if (mes == "diciembre") {
    alert("31 dias")
};