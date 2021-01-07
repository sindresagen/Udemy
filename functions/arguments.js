// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// default arguments
// let getScoreText = function (name = 'Anonymous', score = 0) {
//     return 'Name: ' + name + ' - ' + 'Score: ' + score;
// }

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// challenge
// let tipCalculator = function (total, tipPercent) {
//     tipPercent = total * 0.2;
//     return 'Total: $' + total + ' - ' + 'Tip: $' + tipPercent 
// }
// let tip = tipCalculator(100);
// console.log(tip); //(My version)


// let getTip = function (total, tipPercent = .25) {
//     return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`;
// }
// let tip = getTip(50, .25);
// console.log(tip);

let getTip = function (total, tipPercent = .25) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
}
let tip = getTip(40, .25);
console.log(tip);

// let myName = 'Vikram'
// let age = 20
// console.log(`Hey, my name is ${myName}! I'm ${age} years old.`)