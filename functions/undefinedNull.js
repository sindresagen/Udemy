// undefined for var

let myName;

if (myName === undefined) {
    console.log('Please provide a name');
} else {
    console.log(myName);
}

// undefined for function args
// undefined as function return default value
let square = function (num) {
    console.log(num);
}

let result = square();
console.log(result);

//Null as assigned value
let age = 27;

age = null;

console.log(age);