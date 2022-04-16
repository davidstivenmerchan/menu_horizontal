let icono = document.querySelector(".icono");
let icono2 = document.querySelector(".icono2");
let menu = document.querySelector(".menu2");
let menu2 = document.querySelector(".menu3");

icono.addEventListener("mouseover",aparecer =>{
    menu.classList.add("menu2-aparecer");
});

menu.addEventListener("mouseover", mantener=>{
    menu.classList.add("menu2-aparecer");
})

menu.addEventListener("mouseout", manteneresconder=>{
    menu.classList.remove("menu2-aparecer");
})

icono.addEventListener("mouseout",desaparecer=>{
    menu.classList.remove("menu2-aparecer");
});

icono2.addEventListener("click",desaparecer2=>{
    
    atributoMenu2 = menu2.getAttribute("desactivado");

    if(atributoMenu2=="si"){
        menu2.classList.add("menu3-desaparecer");
        menu2.setAttribute("desactivado","no");
        
    }
    else{
        menu2.classList.remove("menu3-desaparecer");
        menu2.setAttribute("desactivado","si");
        

    }
    
    

    
});