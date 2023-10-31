//EVENTO LOAD Este evento espera que cargue toda la pagina

console.log(1)

window.addEventListener("load", function(){ //tipo de evento siempre encomillado
    console.log("se ha cargado html, css, js");
})

console.log(2)

// EVENTO DOMCONTENTLOAD Este evento espera que cargue el HTML, la pagina en general le da igual, cargaria antes que el evento anterior

document.addEventListener("DOMContentLoaded", function(){
    console.log("se ha cargado el html")
})

console.log(4)


//EVENTO DE SCROLL
window.addEventListener("scroll", function(){
    console.log("Scrolling...")
})



 // Evento Click
 let botonNotificacion = document.querySelector("#boton");
 botonP.addEventListener("click", function(evento){
    console.log(evento);
    evento.preventDefault();

    console.log("Mostrando Noficiacion...");
 })


 // EVENTOS TECLADO - EVENTOS EN INPUT Y TEXTAREA

 let nombre = document.querySelector("#Nombre");

 //EVENTO CHANGE

 nombre.addEventListener("change", function(){
    console.log("Se ha completado el nombre")
 })

 //EVENTO INPUT

 nombre.addEventListener("input", function(evento){
    console.log("Escribiendo nombre con input...");
    console.log(evento)
    console.log(evento.target.value); // ME MUESTRA POR PANTALLA EN EL DATA, LA INFORMACION EN UN INPUT LA INFORMACION 
 })


 // EJERCICIO
 //CREAR EL EVENTO DE INPUT EN COREO Y MENSAJE. DEBAJO DEL FORMULARIO, CREAR UN ELEMENTO TIPO P
//  TEXTO : ESTA ES LA WEB DE ... CON CORREO Y SU PROPUESTA ES ... 
let correo = document.querySelector("#Correo");
let mensaje = document.querySelector("#Mensaje");

//EVENTO
let resultadoNombre,
    resultadoEmail,
    resultadoMensaje;

correo.addEventListener("input", function(evento){
   resultadoEmail = evento.target.value;
   actualizarTexto();
   leerTexto(evento);
})

mensaje.addEventListener("input", function(evento){
    resultadoMensaje= evento.target.value;
    actualizarTexto();
    leerTexto(evento);
})
nombre.addEventListener("input", function(evento){
    resultadoNombre = evento.target.value;
    actualizarTexto();
    leerTexto(evento);
})

// texto 
document.querySelector(".parrafo").textContent= `Esta es la web de ${resultadoNombre}, con correo ${resultadoEmail}, y su propuesta es ${resultadoMensaje}`;


function actualizarTexto() {
    document.querySelector(".parrafo").textContent = `Esta es la web de ${resultadoNombre}, con correo ${resultadoEmail}, y su propuesta es ${resultadoMensaje}`;
  }


  // ejercicio

 let datos = {
    Nombre : "",
    Email : "",
    Mensaje: "texto informativo"
  }

  function leerTexto(evento){
        datos[evento.target.id]= evento.target.value;
        console.log(datos)
  }


  /// EVENTO DE SUBMIT 
  let formulario = document.querySelector("form");
  formulario.addEventListener("submit", function(){
    evento.preventDefault();
    console.log("Enviando formulario...")
  })


  // ORGANIZACION CODIGO JAVASCRIPT
  // 1VARIABLES 
  // 2EVENTOS
  // 3FUNCIONES AL FINAL