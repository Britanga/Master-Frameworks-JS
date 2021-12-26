
// Variables
var nombre = "Jesús Brito";
var altura = 189;
/*
var concatenacion = nombre + " " + altura

// Mostrar variables
//document.write(nombre);
//document.write(altura);
//document.write(concatenacion);
var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;

// Template string de JavaScripts
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

// Estructuras de control
if(altura >= 190){
    // Necesario += xq sino borra el innerHTML de arriba
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona BAJITA</h1>`
}

for(var i = 2000; i <= 2020; i++){
    // Bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: " + i;
}
*/

// Definir funciones
function MuestraMiNombre(nombre, altura){   // Devuelve variable misDatos
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");   // Vincula "datos" de index.html
    datos.innerHTML = MuestraMiNombre("Jesús Brito WEB", 190);
}

// Llamar función
imprimir();

// Variable array con varios elementos
var nombres = ['Jesús', 'Antonio', 'Joaquin'];

document.write('<h1>Listado de nombres</h1>');
/*
for (i = 0; i < nombres.length; i++){    // length cuenta la cantidad de elementos
    document.write(nombres[i] + '<br/>');
}
*/

// En lugar de for, se puede usar este bucle
// (función de callback) es una función que se ejecuta dentro de otra.
//nombres.forEach(function(nombre){   // nombre sin necesidad de usar "i"
nombres.forEach((nombre) => {   // otra manera de usar el callback
    document.write(nombre + '<br/>');
});