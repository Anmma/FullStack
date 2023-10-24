/*
*******************
    COMIENZO CLASE 2023/10/23
*******************


/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)


función que invierta una cadena.
F: INVERTIR
P: CADENA


función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2


función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA



función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY


función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY


función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR


función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY


función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2


función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA


función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS


función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS


función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO


función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO


función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY


función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY


función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO


función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES


función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA


función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2

*/


// función que invierta una cadena.
// F: INVERTIR
// P: CADENA

let cadenaOriginal = "";

function invertir(cadena){
    for(let x = cadena.length -1; x >= 0; x--){   // EL -1 INDICARA QUE VOY A COMERZAR A INVERTIR A PARTIR DEL ULTIMO ELEMENTO HACIA EL PRIMER ELEMENTO >=0
        cadenaOriginal+= cadena[x];  // es igual que cadenaF=cadenaF+cadena[i];
    }
    return cadenaOriginal;
}

console.log(invertir("hola"));


// función que concatene dos cadenas.
// F: CONCATENAR
// P: CADENA1, CADENA2

function concatenar(cadena1, cadena2){
    console.log(cadena1 + cadena2);
}

concatenar("Este texto", " va concatenado");


// función que determine si una cadena contiene una letra.
// F: CONTIENE
// P: CADENA, LETRA

function contiene(cadena,letra){
    console.log("Esta incluida la palabra en mi texto?: ", cadena.includes(letra));
}

contiene("El texto incluye letra", "E");

// función que encuentre el número más grande en un array.
// F: MAXNUM
// P: ARRAY



let numeros =[100,200,300,400,500,600];

function maxNum(array){
    let numeroMax= array[0];
    for(let i = 1; i < array.length; i++){
       if (array[i]> numeroMax){
        numeroMax= array[i]
       }
    }
    return numeroMax;
}

let numeroMax = maxNum(numeros);
console.log("El numero mas grande es",numeroMax);


// OTRA FORMA MAS SIMPLE

function MaxNum(array){
    console.log(Math.max(...array));
}

MaxNum(numeros)
// función que encuentre el número más pequeño en un array.
// F: MINNUM
// P: ARRAY

let numbers = [2,40,20];

function minNum(array){
    let numeroMin = array [0]; // inicializa en el primer elemento del array
    for(let o = 1; o < array.length; o++){
        if(array[o] < numeroMin){
            numeroMax = array[o]
        }
    }
    return numeroMin;
}

let numeroMin = minNum(numbers);
console.log("El numero minimo es",numeroMin);

// función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
// F: NUMBOOLEANOS
// P: ARRAY, VALOR

let numB = [true, false, true, true, true];

function numBooleanos(array, valor){
   let contador =0;
   for(let t = 0; t < array.length ; t ++){
    if(array[t] === valor){
        contador++;
    }
   }
   return contador;
}

let cantidadTrue = numBooleanos(numB,true);
let cantidadFalse = numBooleanos(numB,false);

console.log("Cantidad: ", cantidadTrue);
console.log("Cantidad", cantidadFalse);


// función que determine si todos los elementos de un array son números.
// F: ARRAYNUMEROS
// P: ARRAY


function arrayNumeros(array){
    for(let a = 0; a < array.length ; a++){
        if(typeof array[a]!== 'number'){
            return false
        }
    }
    return true
}

let array1=[1,4,5,7,4];
let array2=[1,4,"5",7,4];

console.log("Array 1 " + arrayNumeros(array1));
console.log("Array 2 " + arrayNumeros(array2));


// función que genere un número aleatorio entre N1 y N2.
// F: NUMALEATORIO
// P: N1,N2

function numeroAleatorio(n1, n2){
    return Math.floor(Math.random()*(n2 - n1)+ n1);
}

console.log("Mi numero aleatorio es:", numeroAleatorio(0,800));

// función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
// F: AREATRIAGULO
// P: BASE,ALTURA

function areaTriangulo(base,altura){
    console.log((base*altura)/2);
}

areaTriangulo(7,10);


// función que convierta grados Celsius a Fahrenheit.
// F: GRADOS
// P: CELSIUS
// Grados centígrados = (grados Fahrenheit − 32) × 5/9.

function grados(celcius){
    console.log((celcius * (9/5)) + 32);
}

grados(20);


// función que determine si un año es bisiesto.
// F: BISIESTO
// P: DIAS


//SEGUN LOS DIAS 

function bisiesto (dias){
    if (366 === dias){
        console.log("Este año es bisiesto");
    }else{
        console.log("Este año no es bisiesto");
    }
}

bisiesto(366);


//SEGUN EL AÑO
function bisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log("",bisiesto(2020));




// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO


function vocales(texto){
    let vocal = "aeiouAEIOU";
    let contador= 0;
    for(let v=0; v < texto.length; v++){
        if(vocal.includes(texto[v])){
            contador++
        }
    }return contador;
}
let texto = "Este texto tiene que contar la cantidad de vocales";
let cantidadVocales = vocales(texto);
console.log("La cantidad de vocales es: ", cantidadVocales);

// función que cuente la cantidad de palabras en una cadena.
// F: PALABRAS
// P: TEXTO

let cadenaPalabras = ["Esta", "es", "una", "cadena"];

function palabras(texto){
    return texto.length;
}

let cantidadPalabras = palabras(cadenaPalabras);
console.log("El conteo da: ", cantidadPalabras);



//OTRA FORMA

function palabras(texto){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if (texto [i] === " "){
            contador++
        }
    }
    console.log(contador+1)
}

palabras ("buenos dias mi nombre es Ana Maza")



// función que determine si una contraseña es segura basándose en 
// longitud>8, 
// mayúsculas y minusculas
// números
// F: CONTRASEÑASEGURA
// P: CONTRASEÑA


// function contraseniaSegura(contrasenia){
//     if (contrasenia.length> 7 &&
//          /[A-Z]/.test(contrasenia) &&
//          /[a-z]/.test(contrasenia) &&
//          /\d/.test(contrasenia)){
//          console.log("La contraseña es segura")}
//          else{
//             console.log("La contraseña no es segura");
//          }
// }   
// contrasenia("hola");






// función que ordene un array de números de forma ascendente.
// F: ORDENARARRAY
// P: ARRAY


let arraySin= [1,2,7,4,3];

function ordenar(array){
    let arrayOrd = array.sort(function (a,b){return a -b})
    return arrayOrd
};

console.log(ordenar(arraySin));