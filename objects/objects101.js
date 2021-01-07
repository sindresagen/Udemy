let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

// challenge

let person = {
    personName: 'Svein',
    personAge: 25,
    personLocation: 'Philadelphia',
}

console.log(`${person.personName} is ${person.personAge} years old and lives in ${person.personLocation}.`);
person.personAge = 26; 
console.log(`${person.personName} is ${person.personAge} years old and lives in ${person.personLocation}.`);
