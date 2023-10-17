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


// EJERCICIO
 
// CREAR UNA FUNCIÓN QUE SOLUCIONE LAS ECUACIONES DE SEGUNDO GRADO
// X=(-B +-SQRT(B*B -4*A*C))/2*A
 
// A, B, C
// ecuacionSegundo


function ecuacionSegundo(A = 0, B = 0, C = 0) {
    console.log("Resultado operacion segundo Grado +:", (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A));
    console.log("Resultado operacion segundo Grado -:", (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A));
};

ecuacionSegundo(2, 10, 1);
ecuacionSegundo(2, 10);


// FUNCIONES QUE RETORNAN VALORES

function multiplicar(n1, n2) {
    return n1 * n2; // ME RETORNA UN VALOR
}

let valorRetornado = multiplicar(2, 5);
console.log("EL VALOR RETORNADO ES:", valorRetornado);


//MAS COMPLEJA

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(600);

console.log("EL TOTAL A PAGAR ES DE:", total);

// EJERCICIO
// REALIZAR UNA FUNCIÓN QUE CALCULES EL IVA QUE SE INDIQUE DE LOS
// PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME



let impuesto=0;
let IVA=21;

function calcularImpuesto(precio=0){
    return impuesto+=(precio*IVA/100)
}

impuesto = calcularImpuesto(200);
impuesto = calcularImpuesto(500);
impuesto = calcularImpuesto(600);

console.log("EL TOTAL DE IMPUESTOS A PAGAR ES DE:",impuesto)



let totalConImpuestos = 0;

function sumarImpuestos(precio, impuesto) {
    return totalConImpuestos += precio * (1+impuesto / 100)
}

sumarImpuestos(200, 10);
sumarImpuestos(300, 21);
sumarImpuestos(500, 5);

console.log("EL TOTAL CON IMPUESTOS ES DE:", totalConImpuestos)