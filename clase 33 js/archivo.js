let operaciones = prompt("Elija un operador: suma, resta, multiplicacion o division");
let numeroA = prompt("Escriba un numero");
let numeroB = prompt("Escriba un numero");

switch (operador) {
    case "suma":
        alert(numeroA + numeroB);
        break;
    case "resta":
        alert(numeroA - numeroB);
        break;
    case "multipilicacion":
        alert(numeroA * numeroB);
        break;
    case "division":
        alert(numeroA / numeroB);
        break;
}