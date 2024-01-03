// Global Scope 
let a = 30


// block  scope
if (true) {
    let a = 20
    const b = 50
        // console.log("Inner: " + a);
}

//console.log(a);

//+++++ Nested Scope++++++++++
function one() {
    const userNmae = "Shyam"

    function two() {
        const Work = "Study"
        console.log(userNmae);
    }
    //console.log(work); // that should not be defined because that should not be work outside the function key
    two()
}

one()

// now in if else conditions
if (true) {
    const userNmae = "Shyam "

    if (userNmae === "Shyam ") {
        const webWork = "portfolio"
        console.log(userNmae + webWork);
    }
    // console.log(webWork); // that should not to be work because that should out side the scope
}
//console.log(userNmae);// that should also out side the scope

// +++++++++ Interesting +++++++++++++

console.log(addOne(5));

function addOne(num) {
    return +1
}