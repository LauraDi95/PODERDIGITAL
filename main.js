// botón muestra oculta botón cajas de presentación
function muestra_oculta(id){
    let div = document.getElementById(id);
    if (div.style.display == "none"){
       div.style.display = "flex";
    } 
    else {
        div.style.display = "none";
    }
} 

// elemntos abrir y cerrar menú hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// evento y función para abrir
abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

// elemntos y función para cerrar
cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");
})

