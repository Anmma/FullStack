

let ejercicio6 ={

}
   let variableA = "Hola soy la variable A",
    variableB = 194,
    variableC = "Soy la variable la C";

ejercicio6.variableA= variableA;

console.log("EJERCICIO CREAR PROPIEDADES EN EL OBJETO A PARTIR DE VARIABLES",variableA)

console.log(`EJERCICIO CREAR PROPIEDADES EN EL OBJETO A PARTIR DE VARIABLES ${ejercicio6}`, ejercicio6)


//ARRAYS

let numeros = [10, 20, 30, 40, 50];
console.log("Mi primer Array", numeros);
console.table(numeros);

let meses = new Array("Enero", "Febrero", "Marzo"); //No se utiliza mucho new array
console.table(meses);


//ACCEDIENDO A LOS INDICES QUE EMPIEZAN DE 0 
let diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
console.table(diaSemana);
console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE 2", numeros[2]);

console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE  0 y 3 ", diaSemana[0], diaSemana[3]); //Hacerlo de forma individual para que valga

// EJERCICIO

let finde = {
    prop1 : "Fin de semana",
    prop2 : 2023,
    prop3 : true
}
// AÑADIR PROPIEDAD TIPO ARRAY
finde.finSemana = ["Sab", "Dom"];
console.log(finde);

let {finSemana}= finde;
console.log("EJERCICIO DESTRUCTURING", finSemana);

//LONGITUD EL ARRAY

console.log("LOGITUD DEL ARRAY", meses.length);

// CREAR UN NUEVO ARREGLO CON UN ARRAY YA REALIZADO, AGREGANDO EN PRINCIPIO Y EN FIN 
let nuevoArreglo = [16.5,...numeros,1540,180];
console.log("NUEVO ARREGLO", nuevoArreglo);

//EJERCICIO
let estaciones = ["Verano"];

estaciones.unshift("Primavera"); //AÑADE AL PRINCIPIO
console.log(estaciones);

estaciones.push("Otoño", "Invierno"); //AÑADE AL FINAL
console.log(estaciones)

//ARRAY CON 4 OBJETOS
let carrito = [
    obje1={
        nombre: "nombre1",
        precio : 150
    },
    obje2={
    nombre: "nombre2",
        precio : 10
    },
    obje3={
    nombre: "nombre3",
        precio : 10
    },
    obje4={
    nombre: "nombre4",
        precio : 10
    }];

console.table(carrito);

//BUSCAR UN ARRAY PLANO --- INCLUDES -- PLANO = EN UNA SOLA LINEA --- NO FUNCIONA PARA OBJETOS
let resultado;
resultado = meses.includes("Mayo");

console.log(resultado)

//PARA OBJETOS 
resultado = carrito.some(function(producto){
    return producto.nombre === "tablet" // me devolvera true or false
});

console.log("INCLUDES PARA OBJETO", resultado);

// COMO SABER EL TOTAL DEL CARRITO --- REDUCE
resultado = carrito.reduce(function(total, producto){
    return total+ producto.precio
}, 0);  //No es necesario indicar donde se inicializa, es importante comprobar en consola a partir de donde fue inicializado. Por defecto siempre sera 0
console.log("REDUCE", resultado);

//PARA FILTAR 
resultado = carrito.filter(function(producto){
    return producto.precio > 100
});

console.log("RESULTADO DE FILTRACION:", resultado);

//COMPARADORES
// === EXACTAMENTE IGUALES
// == IGUALES PERO NO ESTRICTAMENTE 200 = "200"
// !== DIFERENTES 
// < menor que 
// <= menor igual
// >mayor que 
// >= mayor igual

