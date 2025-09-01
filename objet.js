var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};

// constructor

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

// creacion de objetos tipo auto

var tesla = new auto("Tesla","Modelo x", 2020);
var