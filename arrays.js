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

