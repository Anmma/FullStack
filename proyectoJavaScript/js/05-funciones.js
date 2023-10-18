//Declaracion de la funcion 
function suma(n1, n2){
    console.log(n1 + n2);
}

suma (10, 20);

// Expresion de la funcion 
const sumar2 = function (n3, n4){
    console.log(n3 + n4);
}

suma (20, 40);

// diferencia entre metodo y funcion, acaban siendo lo mismo, es mas el contexto en el que se utilizan

let numero1 = 20;
let numero2 = 1;

console.log(parseInt(numero2)); // funcion
console.log(numero1.toString()); // metodo


// EJERCICIO
 
// CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO
// COLOR
 
// Y MUESTRE POR PANTALLA
 
// EL COLOR ELEGIDO ES:...

function color(colores){
    console.log("El color elegido es" + colores)
}

color(" green");


// CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTOS
// IMPORTE, DESCUENTO
 
// Y ME MUESTRE POR PANTALLA EL DESCUENTO TOTAL
// Y EL PRECIO FINAL
 
// LLAMAR VARIAS VECES A LA FUNCIÓN CON DISTINTOS VALORES

function precio(importe, descuento){
  console.log("AHORRO", (importe*descuento)/100),
  console.log("PRECIO FINAL: ", importe - (importe*descuento)/100);
}

precio (150, 20);


// EJERCICIO
 
// CREAR UNA FUNCIÓN QUE CUENTE LOS CARACTERES DE UN TWEET 

function tweet(textoTweet){
    console.log("La longitud del tweet es: ", textoTweet.length);
}
 
tweet("Texto de prueba para contar los caracteres");

// CREAR UNA FUNCIÓN QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI
// LA PALABRA ESTA CONTENIDA EN EL TEXTO
function tweet(textoTweet){
    console.log("La longitud del tweet es: ", textoTweet.length);
}
 
function busqueda(texto, palabra){
    console.log("Buscamos si palabra esta incluida en el texto, lo esta? ", texto.includes(palabra));
}

busqueda("Este texto vamos a buscar", "buscar");
busqueda("Texto donde voy a buscar", "rojo");

// CREAR UNA FUNCIÓN QUE ME RESTE DOS VALORES DADOS

function restar(n1, n2){
    console.log(`Resultado de restar ${n1}-${n2}: ${n1 - n2}`)
}

restar (10, 2);
restar (7, 3);
restar (2);// ESTÁ ESPERANDO 2 VALORES, Y SOLO RECIBE UNO,
//PARA ELLO EXISTEN LOS PARÁMETROS POR DEFECTO, QUE NO SON
//MÁS QUE INICIALIZAR LOS PARAMETROS A VALORES PREDETERMINADOS

function restar2(n1 = 0, n2 = 0){
    console.log(`Resultado de restar n1 - n2 con parametros por default: ${n1 - n2}`)
}

restar2(5);
restar2()


// FUNCIONES QUE RETORNAN VALORES


function multiplicar (n7, n8){
    return n7 * n8;
}

let resultadoMultiplicar = multiplicar (2, 5); // resultdoMultiplicar es una variable creada que almaceranara mi funcion
console.log("EL VALOR RETORNADO ES ", resultadoMultiplicar);

//MAS COMPLEJA


// let totalCarrito  = 0;
// function agregarCarrito (precio){
//     return total += precio;
// }

// agregarCarrito (20);
// agregarCarrito (50);
// agregarCarrito (60);

// console.log("EL TOTAL A PAGAR ES DE: ", total);



// EJERCICIO
// REALIZAR UNA FUNCIÓN QUE CALCULES EL IVA QUE SE INDIQUE DE LOS
// PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME


// let impuesto=0;
// let IVA=21;

// function calcularImpuesto(precio=0){
//     return impuesto+=(precio*IVA/100)
// }

// impuesto = calcularImpuesto(200);
// impuesto = calcularImpuesto(500);
// impuesto = calcularImpuesto(600);

// console.log("EL TOTAL DE IMPUESTOS A PAGAR ES DE:",impuesto)



// let totalConImpuestos = 0;

// function sumarImpuestos(precio, impuesto) {
//     return totalConImpuestos += precio * (1+impuesto / 100)
// }

// sumarImpuestos(200, 10);
// sumarImpuestos(300, 21);
// sumarImpuestos(500, 5);

// console.log("EL TOTAL CON IMPUESTOS ES DE:", totalConImpuestos);




// EJERCICIO CALCULAR EL DESCUENTO QUE SE INDIQUE Y LOS SUME


let descuento = 0.2;
let totalAhorro = 0;

function calcularDescuento(z){
        totalAhorro += z * descuento;
}

calcularDescuento  (100) ;
calcularDescuento  (150) ;
calcularDescuento  (170) ;
console.log("EL TOTAL DE MI AHORRO SERA DE: ", totalAhorro);


//METODO DE PROPIEDAD 
// SON FUNCIONES CON LA SINTAXIS DE METODO
// REPRODUCTOR DE MUSICA
//OBJETO
let reproductor = {
    reproducir : function(nc){
        console.log(`Reproduciendo Cancion con ID: ${nc}`)
    },
    pausar : function(){
        console.log("Pausando Cancion...")
    },
    crearPlayList : function(nombre){
        console.log(`Crando Playlist: ${nombre}`)
    }
}

reproductor.reproducir (123);
reproductor.pausar();
reproductor.crearPlayList("Rock");

// AÑADIR PROPIEDADES A UNA FUNCION 
reproductor.borrarCancion = function (id){
    console.log(`Borra cancion: ${id}`);
}

reproductor.borrarCancion (12);

// Ejercicio expresión de la funcion lo asimila a una variable a la hora de la lectura

let triplicar = function(x){
   return 3*x ;  //Si no se le indica el return, no se muestra en consola, solo guarda el valor
}

console.log(triplicar(6))


// ARROW FUNCTION / FUNCIONES DE FLECHA 

// SI SOLO HAY UNA LINEA DE CODIGO LAS LLAVES {} SE QUITAN
// () SI SOLO TIENE UNA ARGUMENTO Y NO ESTA INICIALIZADO NO SE PONE ej : = (numero=1) --- si va porque esta inicializado

let triplicar2 = y => 3*y ;

// EJERCICIO CREAMOS UN ARROW FUNCTION - APRENDIENDO - QUE DEVUELVA UN NUMERO + 7 Y LO ALMACENE EN UNA VARIABLE resultadoAprendiendo

let aprendiendo = numero => numero + 7 ; // numero es el argumento
let resultadoAprendiendo = aprendiendo(10); // --- creando variable que almacena

console.log(resultadoAprendiendo);

///


let carrito = [
    obje1={
        name: "TV",
        costo : 750
    },
    obje2={
    name: "Tablet",
        costo : 350
    },
    obje3={
    name: "Movil",
        costo : 550
    },
    obje4={
    name: "PC",
        costo : 1750
    }];

console.table(carrito);

// SOME
rest = carrito.some(producto => producto.name === "Tablet");
console.log("RESULTADO DE FUNCION SOME IDEAL CON FUNCION DE FLECHA: ", rest);

// REDUCE

rest = carrito.reduce((total, producto) => total + producto.costo , 0);

console.log("REDUCE",rest);

//FILTAR 

rest = carrito.filter (producto => producto.costo > 400); 
console.log("RESULTADO FILTRACION EN ARROW: ", rest);

// EJERCICIO ------------------------------------------------------------
//DECLARACION
function sumaDeclaracion(x1, x2, x3){
    return x1 + x2 + x3
}

sumaDeclaracion(1,2,3);
//EXPRESION
let sumaExpresion = function(n1, n2, n3){
    console.log(n1+n2+n3)
}
sumaExpresion(10,20,30)

//ARROW
let sumaFlech = (x1,x2,x3) =>  console.log(x1 + x2 + x3);

sumaFlech (1,6,3);


// EJERCICIO -------------------------------------------
 numeros=[10,9,8,7];
//Declaracion
 function buscarDeclaracion (array, x){
    return array.includes(x)
 }
 console.log(buscarDeclaracion(numeros,10));

//BUSCAR EXPRESION
 let buscarExpresion = function (array, x){
    return array.includes(x)
 }
 console.log(buscarExpresion(numeros,5));
//ARROW
 let buscarFlecha = (array, x ) => array.includes(x);
 console.log(buscarFlecha(numeros,20));

//  EJERCICIO ------------------------------------

let ejercicioFlecha = (q1,q2) => (q1 + q2) * 10;

console.log(ejercicioFlecha(10,23));


//EJERCICIO-----------------
 
let parametrosSumados = (paramentro1, parametro2) => paramentro1.length + parametro2.length;

console.log(parametrosSumados("sda","dsa"));
console.log(parametrosSumados("sdda","dssa"));
console.log(parametrosSumados("sddss","dssas"));



arrayE = [1,2,3,4,5,6];

let eliminacion = (arrayEliminatorio) => arrayEliminatorio.pop();

console.log(eliminacion(arrayE))

console.log(arrayE)
