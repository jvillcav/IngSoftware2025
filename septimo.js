// 1. hallar la funcion flecha
function suma(x) {
    return x+1;
}

const suma = (x) => x + 1;
console.log("Suma (10 + 1):", suma(10));


// 2. Dado el siguiente arreglo. Mostrar solo los valores del objeto paciente usando for..in

let paciente = {
    nombre: "Carlos",
    edad: 35,
    genero: "Masculino",
    diagnostico: "Hipertensión",
    tratamiento: "Medicación diaria"
};

console.log("Valores del objeto paciente:");
for (let propiedad in paciente) {
    console.log(paciente[propiedad]);
}


// 3. Dado el arreglo de objetos añadir un objeto carro al inicio del arreglo y desplegar

let carros = [
    {
        color: "azul",
        modelo: 2024,
        marca: "toyota"
    },
    {
        color: "negro",
        modelo: 2023,
        marca: "toyota"
    },
    {
        color: "blanco",
        modelo: 2022,
        marca: "toyota"
    },
];

carros.unshift({
    color: "Plomo",
    modelo: 2021,
    marca: "Chevrolet"
});

console.log("Arreglo de carros actualizado:");
console.log(carros);

 // 4. Con el nuevo arreglo que obtuviste en el ejercicio 3  crear una funcion que me devuelva 
 // y muestre en consola el numero de carros modelo 2020

let carros1 = [
    {
        color: "Plomo",
        modelo: 2024,
        marca: "Chevrolet"
    },
    {
        color: "morado",
        modelo: 2020,
        marca: "toyota"
    },
    {
        color: "negro",
        modelo: 2010,
        marca: "toyota"
    },
    {
        color: "blanco",
        modelo: 2020,
        marca: "toyota"
    },
];

function contarModelos2020(arr) {
    let contador = 0;
    for (let carro of arr) {
        if (carro.modelo === 2020) {
            contador++;
        }
    }
    console.log("Número de carros modelo 2020:", contador);
}

contarModelos2020(carros1);

 // 5. Dado una arreglo de nombres ["argentia","bolivia","colombia"] realizar un funcion callbak para
 // pasar el arreglo de minisculas a mayusculas.

let nombres = ["argentina", "bolivia", "colombia"];

function convertirAMayusculas(arr, callback) {
    return callback(arr);
}

const Mayuscula = (array) => array.map(pais => pais.toUpperCase());

console.log("Paises en mayúsculas:");
console.log(convertirAMayusculas(nombres, Mayuscula));
