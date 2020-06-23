/*Hacer un programa que permita cambiar la contraseña de usuario. 
Para eso tiene que responder las tres preguntas de seguridad. 
Si las tres preguntas son respondidas correctamente, 
tiene que pedir por la nueva contraseña y luego mostra
un mensaje que fue cambiada. En caso de que al menos alguna
pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. 
Definir de antemano (hardcodear) preguntas y respuestas.*/

const preguntaUno = prompt("cual fue tu primer mascota?");

if (preguntaUno === "Gina") {
    const preguntaDos = prompt("en que cuidad naciste?");
    if (preguntaDos === "Las Flores") {
        const preguntaTres = prompt("como se llama tu madre?");
        if (preguntaTres === "Maria") {
            const nuevaContraseña = prompt("ingrese su nueva contraseña");
            alert("La contraseña ha sido modificada");
        } else {
            alert("ingrese el dato nuevamente");
        }
    } else {
        alert("ingrese el dato nuevamente");
    }
} else {
    alert("ingrese el dato nuevamente");
}