var nombre = "Jose";
let apellido = 'Gallego';
const apodo = "\"G3NEX\"";
console.log(nombre + apellido);
console.log(`${nombre} ${apellido}`);
console.log(nombre +" "+apellido);
console.log(apodo);

let n = 1;
let n2 = 6;
let booleana = true;

let arrayList = [
    "Jose",
    22,
    false
]
// ==
// === 
// >
// <
// >=
// =>
// !==

//forma1
n = n + n2;
//abreviada
n +=n2;
console.log(n);

if (n === n2){
    console.log("Son iguales");
}else {
console.log("No lo son");
};
//En javascript todas las interaccione inician en 0.
for (i = 0; i <arrayList.length; i++){
    console.log(arrayList[i]);
}
