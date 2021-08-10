let fondo = document.querySelector(".wellcome");
setTimeout(()=>{

    fondo.style.display = "flex";
    fondo.style.animation = "fondo 1s forwards";
},2000);


let btn = document.querySelector("#boton");
setTimeout(()=>{
    btn.style.display = "block";
    btn.style.animation = "fondo 2s forwards";
},4000);


btn.onclick = function(e){
    fondo.style.display ="none";
}