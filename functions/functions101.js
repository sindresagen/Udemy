// Input(argument(s)), code, output(return value)
let greetUser = function () {
    console.log('Welcome user!');
}
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}
let value = square(3);
let otherValue = square(10);
console.log(value, otherValue);
// console.log(value);
// console.log(otherValue);

let convertFahrenheitToCelsius = function(fahr) {
    let celsius = (fahr - 32) * 5 / 9 + 'C';
    return celsius;
}
let value1 = convertFahrenheitToCelsius(32);
let otherValue1 = convertFahrenheitToCelsius(68);
console.log(value1, otherValue1);