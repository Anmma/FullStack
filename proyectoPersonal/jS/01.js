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


//CajaBack
let cajaBack = document.querySelector('.cajaBack');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 500){
        cajaBack.style.display = 'block';
    }
    else{
        cajaBack.style.display = 'none'
    }
})


//weDJe
//CALENDAR & GENERO
document.getElementById("calendar").addEventListener("click" , function(){
    document.querySelector(".calendario").style.display = "flex";
})

document.getElementById("cierre2").addEventListener("click" , function(){
    document.querySelector(".calendario").style.display = "none"
})



