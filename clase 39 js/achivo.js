let myFunction = (param1, param2) => {
    if (!param1 || !param2) throw new Error("Praram1  y Param2 must be defined");
    param1++;
    param2.push(2);
    console.log(param1, param2);
};

let var1 = 4;
let var2 = [1];
myFunction(va1, var2);
console.log(var1, var2);

//

const array = [1];
const array2 = array; //Por referencia son el mismo elemento

array2.push(2);
console.log(array, array2);

//

//Return ej 1:

const miFunc = param1 => {
    param1 + "dinosaurio";
};

let pepe = myFunc("pepe"); //pepe dinosaurio


if (pepe == "pepe dinosaurio") {
    console.log("Dino!")
} else {
    console.log("Respiliano");
}

// Return ej 2:

const sumar = (valor1, valor2) => {
    return valor1 + valor2;
}

const imprimirSuma = (srResultado) => {
    console.log(`El resultado de la suma es: ${srResultado}`);
}

let resultado = sumar(1, 2);
console.log(resultado);

//solid = hablar de que nuestro codigo tiene que tener una sola funcionalidad
//S= single responsability o responsabilidad unica

//variables son contenedores para valores.

//CALLBACKS 

const miFuncion1 = callback => {
    console.log("Hago algo");
    callback /*no es una palabra reservada puede ser pepito*/ ();
};

miFuncion1(() => console.log("Estoy en funcion 2"));

//Es lo mismo que hacer

const func2 = () => console.log("Estoy en funcion2");
miFuncion1(func2);

//Es lo mismo que hacer

miFuncion1(() => {
    return console.log("Estoy en funcion 2");
});




// FOREACH

forEach((item, index) => {
    console.log(item, index)
})