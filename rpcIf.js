var cpu = Math.random * (4-1);
var jugador;

function juego(jugador){
    if(jugador === "piedra"){
        var choice =1;
        if(choice == cpu){
            console.log("Es un empate");
        }else if(cpu == 2){
            console.log("Perdiste contra la CPU xD");
        }else{
            console.log("Felicidades, ganaste!");
        }
        
    }else if(jugador === "papel"){
        var choice =2;
        if(choice == cpu){
            console.log("Es un empate");
        }else if(cpu == 3){
            console.log("Perdiste contra la CPU xD");
        }else{
            console.log("Felicidades, ganaste!");
        }

    }else if(jugador === "tijeras"){
        var choice =3;
        if(choice == cpu){
            console.log("Es un empate");
        }else if(cpu == 1){
            console.log("Perdiste contra la CPU xD");
        }else{
            console.log("Felicidades, ganaste!");
        }

    }else{
        console.log("El jugador no quiere jugar xD");
    }
}