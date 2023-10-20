// COMPARADORES - CONDICIONALES
// IF SWITCH

let numeroA = 700;

if(numeroA === 900){
    console.log("Tu numero es 900");
} else{
    console.log("Tu numero no es 900");
}


let pin = 1234;

if(pin === 1234){
    console.log("Puede acceder");
}else{
    console.log("Tu PIN es incorrecto, por favor intenta de nuevo");
}

let saldo = 50;
if(saldo >= 200){
    console.log("Puede retirar");
}else{
    console.log("No tiene saldo suficiente");
}


// UNIDO

if(pin === 1234){
    console.log("Puede acceder");
    if(saldo >= 200){
        console.log("Puede retirar, espere por favor");
    }else{
        console.log("Saldo insuficiente")
    }
}else{
    console.log("No puede acceder, PIN incorrecto. Intente nuevamente, por favor");
}


// 
let importeRetirar=500;
let pinIntroducido=1234;

if(pinIntroducido === pin){
    console.log("Puede acceder");
    if(importeRetirar<=saldo){
        console.log("Puede retirar, espere por favor");
    }else{
        console.log("Saldo insuficiente");
    }
}else{
    console.log("No puede acceder, PIN incorrecto. Intente nuevamente, por favor")
}

// FUNCION REUTILIZABLE CON COMPARADORES - CONDICIONALES
function cajero(pin, cantidad){
    if(pin === 1234){
        console.log("Puede acceder");
    if(cantidad <= 200){
        console.log("Puede retirar, espere por favor");
    }else{
        console.log("Saldo insuficiente");
    }
    }else{
        console.log("No puede acceder, PIN incorrecto. Intente nuevamente, por favor");
    }
}

cajero(1234, 12);


//ELSE IF -- SI NO SE CUMPLE LA PRIMERA CONDICION PERO SI SE APLICA LA SEGUNDA CONDICION... 

let rol = "Editor";

if (rol==="Administrador"){
    console.log("Eres administrador");
}else if(rol === "Editor"){
    console.log("Solo puede editar, pero no crear");
}else if (rol === "Gestor"){
    console.log("Eres el gestor");
}else{
    console.log("No tienes acceso");
}

// EJERCICIO ESTRUCTURA DE CONTROL 

let estacionActual = "Otoño";

if(estacionActual === "Otoño"){
    console.log("La estacion actual Otoño, la proxima estacion es Invierno");
    }else if(estacionActual === "Primavera"){
        console.log("La estacion actual es Primavera, la proxima estacion es Verano");
    }else if(estacionActual === "Verano"){
        console.log("La estacion actual es Verano, la proxima estacion es Otoño");
    }else if(estacionActual === "Invierno"){
        console.log("La estacion actual es Invierno, la proxima estacion es Primavera");
    }else{
        console.log("No existe informacion");
    }


//CRER UNA ESTRUCTURA DE CONTROL QUE ME DIGA SI LA NOTA DE UN EXAMEN ES SOBRESALIENTE 9 - 10 / NOTABLE 7 -8 / SUFICIENTE 5-6 / SUSPENSO -5

let notaExamen = 10;

if(notaExamen === 9|| notaExamen ===10){
    console.log("SOBRESALIENTE");
}else if(notaExamen === 7|| notaExamen ===8){
    console.log("NOTABLE");
}else if(notaExamen === 5|| notaExamen ===6){
    console.log("SUFICIENTE");
}else if(notaExamen <= 5){
    console.log("SUSPENSO");
}

// SWITCH --- PARA HACER MULTIPLES COMPARACIONES Y OPTIMIZAR EL USO DE TANTO ELSE IF
// FUNCIONAN CON CASE Y NECESITAN UN BREAK PARA FINALIZAR CADA CASE --- DEFAULT ME MUESTRA EL CASO POR DEFECTO 

let metodoPago = "Tarjeta";
// let metodoPago = prompt("Introducir metodo de pago", "Escribir aqui"); con PROMPT

switch(metodoPago){
    case "Tarjeta" : console.log("El cliente ha pagado con tarjeta");
    break;
    case "Bizum" : console.log("El cliente ha pagado con Bizum");
    break;
    case "Efectivo" : console.log("El cliente ha pagado en efectivo");
    break;
    default: console.log("Pendiente de pago");
    break;
}
//EJERCICIO
let numeroMulti=6;

if (numeroMulti * numeroMulti < 100){
    console.log("Es menor que 100");
}else if(numeroMulti * numeroMulti < 200){
    console.log("Es menor que 200");
}else{
    console.log("No se cumplen las condiciones")
}
// en funcion
function multiplo (x){
    if (x*x < 100){
        console.log("Es menor que 100");
    }else if(x*x < 200){
        console.log("Es menor que 200");
    }else{
        console.log("No se cumplen las condiciones")
    }
    
}

multiplo(2);


// EJERCICIO

let comparar = parseInt(prompt("Escriba el numero que quiere comparar", "Numero aquì"));

switch(comparar + 10){
    case 9 : console.log("Tu numero es 9");
    break;
    case 12 : console.log("Tu numero es 12");
    break
    case 15 : console.log("Tu numero es 15");
    break
    case 100 : console.log("Tu numero es 100");
    break
    default : console.log("No se compara con los numeros en base de datos"); 
    break
}