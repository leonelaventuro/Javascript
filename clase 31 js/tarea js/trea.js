/*Crear un programa que pregunte por el día,
el mes, y el hemisferio (norte/sur)
y devuelva la estación del año correspondiente*/


const dia = prompt("digame el dia que es");
const mes = prompt("digame el mes que es");
const hemisferio = prompt("digame que hemisteferio es");

if (
    (dia <= 21 && mes === "marzo") ||
    mes === "abril" ||
    mes === "mayo" ||
    (dia < 21 && mes === "junio")
) {
    if (hemisferio == "norte") {
        alert("Es Primavera");
    } else {
        alert("Es Otoño");
    }
}

if (
    (dia <= 21 && mes === "junio") ||
    mes === "julio" ||
    mes === "agosto" ||
    (dia < 21 && mes === "septiembre")
) {
    if (hemisferio == "norte") {
        alert("Es verano");
    } else {
        alert("Es invierno")
    }
}

if (
    (dia <= 21 && mes === "septiembre") ||
    mes === "octubre" ||
    mes === "noviembre" ||
    (dia < 21 && mes === "diciembre")
) {
    if (hemisferio == "norte") {
        alert("Es otoño");
    } else {
        alert("Es primavera")
    }
}

if (
    (dia <= 21 && mes === "diciembre") ||
    mes === "enero" ||
    mes === "febrero" ||
    (dia < 21 && mes === "marzo")
) {
    if (hemisferio == "norte") {
        alert("Es invierno");
    } else {
        alert("Es verano")
    }
}