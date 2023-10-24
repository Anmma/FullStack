 "use strict";  
let producto = {
    nombreProducto : "zapatillas",
    precio : 120,
    disponible : true
}

console.log("MI PRIMER OBJETO producto:", producto);

console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`, producto);

console.log("USO DE SINTAXIS DE PUNTO producto.precio", producto.precio);

console.log(`USO DE SINTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);

// OTRA FORMA DE ACCEDER A LAS PROPIEDADES DEL OBJETO, NO SE SUELE UTILIZAR, PARA SABER IDENTIFICARLO -->
console.log("USO DE CORCHETES", producto["precio"]);

// PODEMOS MODIFICAR OBJETOS : AL UTILIZAR LA SINTAXIS DE PUNTO PODEMOS CREAR UNA VARIABLE QUE NO EXISTIA Y ASIGNARLE UN VALOR 
//AÑADIR PROPIEDADES 

producto.categoria = "deporte";
console.log(`AÑADIR CATEGORIA A PRODUCTO ${producto}`, producto); //uso directo de template string 

// TAMBIEN PODEMOS REASIGNAR EL VALOR A UNA VARIABLE

producto.precio = 12;
console.log(`MODIFICACION DE PRECIO ${producto}`, producto);

// BORRAR VARIABLE CON PUNTO

delete producto.disponible;
console.log(`BORRAMOS DISPONIBLE a producto: ${producto}`, producto);

//EJERCICIO

let nombreProducto = producto.nombreProducto;
console.log("CREAMOS VARIABLE A PARTIR DE LAS PROPIEDAD, SE IGUALA:", nombreProducto);


//EJERCICIO DESTRUCTURING 

let {precio,categoria} = producto;
console.log(`DESTRUCTURING AL PRECIO: ${precio} y CATEGORIA: ${categoria}`);

let playa = {
    nombrePlaya: "Riazzor",
    ubicacion: "Galicia",
    recomendable:true,
    temperaturaAgua: 19
}

let{nombrePlaya,ubicacion,recomendable,temperaturaAgua} = playa;

console.log(`NOMBRE: ${nombrePlaya} UBICACION: ${ubicacion} RECOMENDABLE: ${recomendable} TEMPERATURA: ${temperaturaAgua}`);


// BLOQUEAR --- OBJETO QUE SE CONGELA
Object.freeze(producto);
// producto.congelado = "intentamos congelarlo";
console.log(`INTENTO AÑADIR UNA PROPIEDAD TRAS EL FREEZE ${producto}`, producto);
//COMO SABER SI UN OBJETO ESTA CONGELADO
console.log("ESTA CONGELADO?", Object.isFrozen(producto));

let medidas ={ 
    peso: 20 ,
    alto: 40 ,
    ancho: 60 ,
    profundidad: 80
}

Object.seal(medidas);

medidas.peso = 30;

console.log(`MOSTRAMOS COMO SE PUEDE MODIFICAR CON SEAL ${medidas}`, medidas)

let nuevoProducto = {...producto,...medidas};

console.log("NUEVO OBJETO CON SPREAD OPERATOR:", nuevoProducto);