// 1. hallar la funcion flecha
function suma(x) {
    return x+1;
}

const suma = (x) => x + 1;

// 2. Dado el siguiente arreglo. Mostrar solo los valores del objeto paciente usando for..in

let paciente = {
    nombre: "Carlos",
    edad: 35,
    genero: "Masculino",
    diagnostico: "Hipertensión",
    tratamiento: "Medicación diaria"
};

for (let propiedad in paciente) {
    console.log(propiedad, paciente[propiedad]);
}


// 3. Dado el arreglo de objetos añadir un objeto carro al inicio del arreglo y desplegar

let carros = [
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

let Carro =  {
    color: "Plomo",
    modelo: 2024,
    marca: "Chevrolet"
};

carros.unshift(Carro);
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

function contarMod2020(arr) {
    let c = 0;
    arr.forEach(carro => { if (carro.modelo === 2020) c++; });
    console.log("Carros modelo 2020:", c);
}
contarMod2020(carros1);



 // 5. Dado una arreglo de nombres ["argentia","bolivia","colombia"] realizar un funcion callbak para
 // pasar el arreglo de minisculas a mayusculas.

let nombres = ["argentia", "bolivia", "colombia"];

let nombresMayus = nombres.map(function(nombre) {
    return nombre.toUpperCase();
});

console.log(nombresMayus);
