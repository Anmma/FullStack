// FOREACH Y MAP --- METODOS EXCLUSIVOS DE ARREGLO
// RECORREN DE MANERA AUTOMATICA

let carrito = [
    {
        nombre: "TV",
        precio : 750
    },
    {
        nombre: "Tablet",
        precio : 350
    },
    {
        nombre: "Movil",
        precio : 550
    },
    {
        nombre: "PC",
        precio : 1750
    }];

console.table(carrito);

//METODO FOR -- RECORRE DE MANERA AUTOMATICA MI ARRAY

for(let i = 0; i< carrito.length; i++){
    console.log(carrito[i]);
}

carrito.forEach( function (producto){
    console.log(producto, producto.nombre);
})


// MAP ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE MAP TIENE COMO OBJETIVO MOSTRAR EN UNA
// NUEVA VARIABLE Y EL FOREACH PARA MOSTRAR EN LA PANTALLA 

let arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);


let reserva = 
     {
        Nombre : "Nicolas",
        Apellido : "Daraio",
        Total: 250 ,
        Pago: true
    };

    console.log(reserva.Nombre);

    //LOS OBJETOS TAMBIEN PUEDEN TENER FUNCIONES EN SU INTERIOR
    //THIS ACCEDE A LAS PROPIEDADES QUE TENGO DENTRO DEL OBJETO 
    //CON EL THIS NO SE PUEDE HACER USO DE FUNCION DE FLECHA


    reserva.informacion=function(){
        return(`El cliente ${this.nombre}reservo y su cantidad a pagar es ${this.total}`)
    };

    console.log(reserva.informacion());

    // EJERCICIO

    let fecha = {
        año: 2023,
        mes: 10,
        dia:24,
        
        faltante: function(){
            return(`El faltante de dias es ${31 - this.dia}`)
        }
    }

  console.log(fecha.faltante());