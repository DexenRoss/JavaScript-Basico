var arreglo = ["Manzana","platano","cereza","fresa"];


arreglo.pop(); //extrae
arreglo.push(); // añade
arreglo.unshift(); // añade al inicio
arreglo.shift(); // quita la cabeza


var arr = ["Manzana","platano","cereza","fresa"];

function contarFrutas(arr) {
    console.log( `esta es la fruta ${arr}`);
}

for (let i = 0; i < arr.length; i++) {
    contarFrutas(arr[i]);
}

for (const fruit of arr) {
    contarFrutas(fruit);
}

while (arr.length>0) {
    let fruit = arr.shift();
    contarFrutas(fruit); 
}

// recorrer arrays 

var articulos = [
    {nombre: "Bci", precio: 3000},
    {nombre: "Tv", precio: 2500},
    {nombre: "Libro", precio: 325},
    {nombre: "Celular", precio: 10000},
    {nombre: "Laptop", precio: 20000},
    {nombre: "Teclado", precio: 500},
    {nombre: "Audifonos", precio: 1700}
];

// recorrer con Filter

var filtrarArticulos = articulos.filter(function(articulo){
    return articulo.precio <= 500;
});

// metodo de map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

// metodo find

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

// metodo foreach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// metodo some, regresa resultado booleano

var articulosBaratos = articulos.some(function(articulo){
    return articulo.precio <=700;
});


