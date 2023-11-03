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
    if (window.scrollY > 100){
        cajaBack.style.display = 'block';
    }else{
        cajaBack.style.display = 'none'
    }
})