// funcion de ejemplo para entender los callbacks
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
};

// ejecutamos la funcion y le pasamos los argumentos
console.log(calc(6,2,sum))

// ejecutando setTimeout
setTimeout(()=>{
    console.log('Hola Devs Sensei');
}, 3000);

// ejecutando setTimeout con una funcion
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

setTimeout(saludar, 5000, 'DevSensei');

/*Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

Para hacer que la función se demore 2 segundos debes usar la función setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

window.setTimeout(() => {
  // code
}) */

// Dentro del cuerpo de la función execCallback debes escribir tu solución.
function execCallback(callback){
    window.setTimeout(() => {
        callback();
    },2000);
}