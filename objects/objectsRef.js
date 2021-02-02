let myAccount = {
    myName: 'Sindre Sagen',
    expenses: 0,
    income: 0,
};

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
   
}

let addIncome = function (account, income) {
         account.income = account.income + income;
     }

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.myName} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addIncome(myAccount, 2000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

//I tried

// let resetAccount = function (account) {
//     account.expenses = '';
//     account.income = '';

// }

// let getAccountSummary = function (account) {
//     account.summary = account.income - account.expenses;
//     return {
//         summary: `Account for ${account.myName} has ${account.summary}. ${account.income} in income. ${account.expenses} in expenses.`
//     }
// }
// // Account for Sindre has $900. $1000 in income. $100 in expenses.

// addIncome(myAccount, 1000);
// addExpense(myAccount, 100);
// addExpense(myAccount, 100);
// let mySummary = getAccountSummary(myAccount);
// resetAccount(myAccount);
// let mySummary2 = getAccountSummary(myAccount);
// console.log(mySummary, mySummary2);