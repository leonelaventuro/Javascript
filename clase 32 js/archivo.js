let rueda = prompt("diametro y grosor en metros");
if (rueda < 1.4) {
    alert("La rueda es para un vehiculo grande");
    if (rueda >= 1.4 || rueda < 0.8)
        alert("La rueda es para un vehiculo mediano");
} else {
    alert("La rueda es para un vehiculo pequeño");
}