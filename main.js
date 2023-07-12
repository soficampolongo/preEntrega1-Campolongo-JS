let productoAñadido = prompt("Elige un producto")
let total = 0

while ((productoAñadido == "rimmel") || (productoAñadido == "delineador") || (productoAñadido == "labial") ||
(productoAñadido == "rubor")){

        sumarAlTotal(productoAñadido)
        productoAñadido = prompt("Elige un producto")
        console.log(total)
}    


function sumarAlTotal(productoAñadido){
    if(productoAñadido == "rimmel"){
        total = total + 4000
    }
    else if(productoAñadido == "delineador"){
        total = total + 2000
    }
    else if(productoAñadido == "labial"){
        total = total + 2500
    }
    else{//rubor
        total = total + 3000
    }
}

