// Global Scope 
let a = 30


// block  scope
if (true) {
    let a = 20
    const b = 50
    console.log("Inner: " + a);
}



console.log(a);