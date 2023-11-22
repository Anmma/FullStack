//Login-SingUp

document.getElementById("loginA").addEventListener("click" , function(){
    document.querySelector(".popUpA").style.display = "flex";
})

document.getElementById("cierre").addEventListener("click" , function(){
    document.querySelector(".popUpA").style.display = "none"
})


document.getElementById("loginB").addEventListener("click" , function(){
    document.querySelector(".popUpB").style.display = "flex";
})

document.getElementById("cierreb").addEventListener("click" , function(){
    document.querySelector(".popUpB").style.display = "none"
})



///
document.getElementById("generos-link").addEventListener("click" , function(){
    document.querySelector(".contenedor-generos").style.display = "flex";
})

document.getElementById("x-generos").addEventListener("click" , function(){
    document.querySelector(".contenedor-generos").style.display = "none"
})
