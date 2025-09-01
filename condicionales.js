var edad = 18;
var numero = 1;
var resultado;

if(edad === 18){
    console.log("Sera tu primera votacion");
} else if(edad > 18){
    console.log("Volveras a votar");
} else{
    console.log("No puede votar pa");
}


resultado = numero ===1 ? "Soy un uno" : "No soy un uno"; 



// if(true){
//     console.log("Hola");
// } else {
//     console.log("soy falso xD");
// }


// SWITCH
var opcion = 1;
switch(opcion){
    case 1 :
        console.log("soy un 1");
        break;
    case 2 :
        console.log("Soy un 2");
        break;
    case 3 :
        console.log("Soy un 3");
        break;
    default :
        console.log("No entro en las opciones");
        break;
}