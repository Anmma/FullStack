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