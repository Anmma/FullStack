//Login-SingUp

document.getElementById("loginA").addEventListener("click" , function(){
    document.querySelector(".pop-up-a").style.display = "flex";
})

document.getElementById("cierre").addEventListener("click" , function(){
    document.querySelector(".pop-up-a").style.display = "none"
})


document.getElementById("loginB").addEventListener("click" , function(){
    document.querySelector(".pop-up-b").style.display = "flex";
})

document.getElementById("cierre-2").addEventListener("click" , function(){
    document.querySelector(".pop-up-b").style.display = "none"
})



///GENEROS
document.getElementById("generos-direct").addEventListener("click" , function(){
    document.querySelector(".contenedor-filtros-g").style.display = "flex";
})

document.getElementById("cierre-g").addEventListener("click" , function(){
    document.querySelector(".contenedor-filtros-g").style.display = "none"
})
///CALENDARIO
document.getElementById("calendario-direct").addEventListener("click" , function(){
    document.querySelector(".contenedor-filtros-c").style.display = "flex";
})

document.getElementById("cierre-c").addEventListener("click" , function(){
    document.querySelector(".contenedor-filtros-c").style.display = "none"
})
