const producto1 = "Juego de mesa EL PUEBLO DUERME";
const producto2 = String("DOOBLE"); // VALE LO MISMO QUE EL PRIMERO, SERIA OTRA FORMA DE HACERLO
const producto3 = new String ("UNO"); //SON OBJETOS


console.log("PRODUCTO1:",producto1);
console.log("PRODUCTO2 CON STRING:",producto2);
console.log("PRODUCTO3 CON NEW STRING:",producto3);

console.log("PRODUCTO1:",typeof producto1, producto1); 
console.log("PRODUCTO2 CON STRING:",typeof producto2);
console.log("PRODUCTO3 CON NEW STRING:",typeof producto3);

let numero100 ;
let numero200 ;

numero100 = 100;
numero200 = "200";

console.log("100",typeof numero100);
console.log("200",typeof numero200);

console.log("200", numero200.length); //Length definira la longitud de la variable, cuenta el numero de caracteres
console.log("Metodo indexof:", producto1.indexOf("DUERME")); // Si indica -1 no lo encuentra
console.log("Metodo includes", producto1.includes("DUERME"));


// EJERCICIO CREAR VARIABLES / DATOS STRINGS

let ejString1 ="STRING 1",
    ejString2 ="STRING 2",
    ejString3 ="STRING 3";

console.log("Metodo length", ejString1.length);
console.log("Metodo indexOf", ejString2.indexOf("2")); 
console.log("Metodo includes", ejString3.includes("3"));


//NUMBER
let numero1= 100;
let numero2=200.25;
let numero3="200";
let numero4=2/3;

//OPERACIONES 

console.log("Typeof numero1 100", typeof numero1);
console.log("Typeof numero2 200.25", typeof numero2);
console.log("Typeof numero3 200", typeof numero3);
console.log("Typeof numero4 2/3", typeof numero4);


console.log("SUMA", numero1+numero2);
console.log("RESTA", numero1-numero2);
console.log("MULTIPLICACION", numero1*numero2);
console.log("DIVISION", numero1/numero2);
console.log("PORCENTAJE", numero1%numero2);

// METODOS PARA NUMBER

//EJERCICIO NUMERO ALEATORIO ENTRE 0 Y 30

let resultado= Math.round(Math.random()*30);
console.log("Resultado numero aletario:", resultado);

// EJERCICIO : CREAR UNA VARIABLE QUE SE LLAME DIAMETRO Y OTRA QUE SE LLAME AREA IMPLEMENTAR LA OPERACION MATEMATICA QUE ME CALCULA EL AREA EN FUNCION DEL DIAMETRO YMOSTRARLO POR LA PANTALLA 

let diametro=5;
let area=Math.PI*Math.pow(diametro/2,2);

console.log("Resultado",area);

// ORDEN MATEMTICO

let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES", resultadoOrden);

let resultadoOrden2 =(20 + 30)*2;
console.log("MOSTRAR EL ORDE LAS OPERACIONES 2", resultadoOrden2);


//EJERCICIO CALCULAR EL DESCUENTO Y EL TOTAL A PAGAR 

let descuento=40,
    prenda1=120,
    prenda2=85,
    prenda3=24,
    total= 120+85+24;
    aPagar= descuento*total/100;
    ahorro= total-aPagar;

    console.log("TOTAL:",total);
    console.log("A PAGAR", aPagar);
    console.log("AHORRO", ahorro);
    

// INCREMENTOS Y DECREMENTOS 

let meGusta=0;

meGusta++; //INCREMENTA EN 1 
// meGusta+=15; ---- igual a meGusta= meGusta+15
// meGusta-=6; ---- igual a meGusta=meGusta-6

console.log("Me gusta",meGusta++); //vale 1 porque primero lee meGusta y luego lo actualiza para eso poner ++ adelante
// console.log("Me gusta",meGusta++); //vale 2 
//LA VARIABLE SE VA REASIGNANDO


//EJERCICIO CONCATENAR

let nombre= "Ana Maza Roman";
let email= "mazaanaroman@gmail.com";
    
// console.log("Nombre y Email",nombre+ "" + email);
console.log(`Nombre: ${nombre} Email: ${email}`);


//BOOLEAN 

let boolean1 = true;
let boolean2 = false;
let boolean3="true" //string


