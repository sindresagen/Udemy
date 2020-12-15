// global scope (name)
    // local scope (name)
        // local scope
    // local scope

// let myName = 'Sindre';

if (true) {
    //let myName = 'Mike';
    if (true) {
        let myName = 'Jen'
        // myName = 'Jen' // leaked global, not defined
        console.log(myName);
    }
}

if (true) {
    console.log(myName);
}