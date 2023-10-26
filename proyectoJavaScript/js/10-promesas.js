let numero1 = 20,
    numero3 = 40 ;

    console.log(numero1);
    
    try{
        console.log(numero2)
    } catch(error){
        console.log("Tienes un error en console.log numero2")
    }

    console.log(numero3) 

//PROMISES REFLEJA UN VALOR QUE ESTARA DISPONIBLE AHPRA, EN UN FUTURO O NUNCA

    let autenticado = false;

    let usuarioAutenticado = new Promise((resolve, reject) => {   //RESOLVE = SE CUMPLE LA PROMESA REJECT = NO SE CUMPLE ambas se pasan automaticamente con el promise
        if(autenticado === true){
            resolve("Usuario autenticado");
        }else{
            reject("No se puede iniciar sesión");
        }
    })

    console.log(usuarioAutenticado);

// PENDING: EL PROMISE NO SE HA CUMPLIDO PERO TAMPOCO SE HA RECHAZADO, ESTÁ EN ESPERA
// FULFILLER: EL PROMISE SE HA CUMPLIDO
// REJECT: SE HA RECHAZADO O NO SE PUDO CUMPLIR

// RESULTADOS TIPICOS DE CONSULTA A UNA API


// THEN SE EJECUTA CUANDO EL PROMISE SE CUMPLE 
// CATCH SE EJECUTA CUANDO EL PROMISE NO SE CUMPLE

usuarioAutenticado.then(function(resultado){     //los parametros van guiados por el resolve y reject
        console.log(resultado)          
    })
    .catch(function(resultado){
        console.log(resultado)
    })

    console.log(usuarioAutenticado);







    // EJERCICIO BOTON 
    //DOCUMENT. PARA VINCULARLO CON EL HTML QUERYSELECTOR SELECCIONARA
    // CREAR UN EVENTO --- UNA ACCION QUE SE LLEVARA ACABO UN CODIGO 
    // requestPermission REQUIERE PERMISO
    // Registra un evento a un objeto en específico

    let boton = document.querySelector("#boton"); 

    boton.addEventListener("click", function(){  
        console.log("Diste click");

        Notification.requestPermission().then(resultado => console.log(`El resultado es ${resultado}`));
    })


    // granted -- que se pudo ejecutar

    // if(Notification.permission === "granted"){
    //     new Notification("Esta es una notificacion",{
    //         icon: "../proyectoJavaScript/ico-centro.png",
    //         body: "Notificacion Tu cararea Digital"
    //     })
    // }

    // FUNCIONES ASINCRONAS

    
// ASYNC/AWAIT

// SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
// NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

// LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
// LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
// EL RESTO DEL SITIO WEB

// SI NECESITO ESPERAR A UNA FUNCIÓN PARA PODER EJECUTAR OTRA
// HAGO USO DE ASYNC AWAIT





//setInterval cada X segundos repite la funcion 
// setTimeout tiempo para ejecutar una funcion y finalizarla
// SIMULACION DE CONSULTA
setTimeout(function(){
    console.log("Set time out finalizado")
}, 3000)

// setInterval(function(){
//     console.log("Set internal actuando")
// }, 4000)



//////// 

function descargarNuevosClientes(){
    return new Promise( resolve =>{
        console.log("Descargando clientes... espere, por favor...")

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        }, 5000)
    })
}
//ESPERA DE MANERA ASINCRONA QUE SE HAYA EJECUTADO LA ANTERIOR
// ESPERA QUE TERMINE LA ANTERIOR 
async function app(){
    let resultadoAsync = await descargarNuevosClientes();
    console.log(resultadoAsync)
    console.log("Ese codigo si se bloquea")
    
}
 //ESTE CODIGO SE EJECUTA EN SEGUNDO PLANO Y NO PARALIZA AL RESTO
// PUESTO QUE ESTA ES UNA CONSULTA CRITICA, SERÍA RECOMENDABLE INCLUIRLO
//DENTRO DE UN TRY CATCH
app();
console.log("Este codigo no se bloquea")


//// EJERCICIO /// SI NO PONGO NADA COGE EL CASO DE EXITO

function descargarPedido(){
    return new Promise(() =>{
        console.log("Generando pedido");

        setTimeout( () => {
          console.log ("El pedido ha sido generado, por favor espere"); // si no pongo resolve poner console.log
        },3000);
    })
}

descargarPedido(); //!!!!!! LLAMAR A LA FUNCION 