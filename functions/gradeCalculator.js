// Student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


// let score = function (studentScore, possibleScore) {
//     let percent = studentScore * 5;
//     if (percent >= 90) {
//         return `${studentScore}/${possibleScore} -> You got an A (${percent}%)!`;
//     } else if (percent >= 80 && percent <= 89) {
//         return `${studentScore}/${possibleScore} -> You got a B (${percent}%)!`;
//     } else if (percent >= 70 && percent <= 79) {
//         return `${studentScore}/${possibleScore} -> You got a C (${percent}%)!`;
//     } else if (percent >= 60 && percent <= 69) {
//         return `${studentScore}/${possibleScore} -> You got a D (${percent}%)!`
//     } else {
//         return `${studentScore}/${possibleScore} -> You got an F (${percent}%)!`
//     }
// }
// let grade = score(10, 20);
// console.log(grade);  // my version

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100;
    let letterGrade = '';
    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {                     // preferred method
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a(n) ${letterGrade} (${percent}%)!`
}

let grade = gradeCalc(15, 20);
console.log(grade);