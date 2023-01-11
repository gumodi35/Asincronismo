 import fetch from 'node-fetch';
 const API = 'https://api.escuelajs.co/api/v1'

 async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
 }

 const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
 }

 anotherFunction(API);

 // example challenge
 /*
 En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API Not Found.

Para lanzar el error debes usar el siguiente bloque de código:

throw new Error('API Not Found');

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada, dentro del cuerpo de la función runCode debes escribir tu solución.

Ejemplo:

Input:
await runCode();

Output:
Error: API Not Found
 
 */

async function runCode() {
    const url = 'https://domain-api-com';

    try {
        const getData = await fetch(url);
        const responseJson = await getData.json();
        return responseJson;
    } catch(error) {
        throw new Error('API Not Found challenge Passed');
    }
}

runCode();