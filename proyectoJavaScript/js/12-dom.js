// TRES FORMA PARA INTERACCIONAR 
// QUERYSELECTOR uno o ningun elemento - maximo uno (el primer elemento que encuentre)
// QUERYSELECTORALL (todos los enlaces)
//GETELEMENTBYID (solo para ids)

// TODOS INICIAN CON DOCUMENT

// QUERYSELECTOR 
// SELECCIONO TANTO CLASES O ID O SELECTORES DE ELEMENTO 


// PALABRA RESERVADA DOCUMENT - HACE REFERENCIA  TODOS LOS ELEMENTOS DE MI DOCUMENTO 


let heading = document.querySelector(".seccionP h1") // retorna 0 o 1 elemento
console.log(heading);

//MODIFICAR CONTENIDO
heading.textContent = "TITULO EDITADO";

// classList para haceruso de classList no tenemos que poner (.) en la clase
//Pues ya le estamos diciendo que es una clase 

heading.classList.add("NuevaClaseDesdJS") // Añadir

heading.classList.remove("NuevaClaseDesdeJS") //Elimina

// seleccionar los enlaces 

let enlacesJS = document.querySelector("div a");
console.log(enlacesJS); // solo seleccion el primero

let enlaceJS2 = document.querySelectorAll("div a");
console.log(enlaceJS2);

console.log(enlaceJS2[0]) // para acceder al elemento accedemos al igual que a los arrays por el indice


//PODEMOS MODIFICAR EL HREF
enlaceJS2[0].href="http://google.com"


enlaceJS2[1].textContent ="ENLACE EDITADO"
enlaceJS2[1].href="http://google.com"

let botonJS = document.getElementById("botonP");
console.log(botonJS)

botonJS.textContent = "Boton modificado"


//byClass

// let bontonJSClass = document.getElementsByClassName("botonClase")


// COMO CREAR CONTENIDO(HTML) DESDE JAVASCRIPT

//SELECCIONAR ZONA

let nuevoEnlace = document.createElement("A");

nuevoEnlace.textContent = "Nuevo Enlace4" // le doy nombre

//info de donde quiero que me enlace

nuevoEnlace.href = "#";

// le agregamos una clase
nuevoEnlace.classList.add("enlace");

//UBICARLO 

let enlaceJS3 = document.querySelector(".navP");
enlaceJS3.appendChild(nuevoEnlace) // EL APPENDCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS

//EJERCICIO

let ejercicioEnlace = document.createElement("A");

ejercicioEnlace.textContent = "ejercicioEnlace"

ejercicioEnlace.href = "#"

ejercicioEnlace.classList.add("enlace");

let enlaceJS4 = document.querySelector(".navP");
enlaceJS4.appendChild(ejercicioEnlace);