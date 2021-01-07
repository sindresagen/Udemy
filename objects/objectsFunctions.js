let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723,
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// challenge

let fahrenheitConverter = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9),
    }
}
let temps = fahrenheitConverter(74);
console.log(temps);

// let getCelsius = fahrenheitConverter(50);
// let getFahr = fahrenheitConverter(19);
// let getKelvin = fahrenheitConverter(32);

// console.log(getCelsius.celsius);
// console.log(getFahr.fahrenheit);
// console.log(getKelvin.kelvin);