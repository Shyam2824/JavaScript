//let value = "55as"
let value = null // if null then zero output come 

console.log(typeof(value));
console.log(typeof value);
let valueInNumber = Number(value)
console.log(typeof valueInNumber);
console.log(valueInNumber); // output id NAN if that should be not complete number
// "33" => 33
// undefine => undefine
// "336sfs" => NaN not a number
// true=>1 / false=> 0

let login = 1

let booleanlogined = Boolean(login)
console.log(booleanlogined);

// **************** Operation ***********************
console.log(1 + 6 + "5") // if the conversion first then conversion that place and then String work=> 75
console.log("1" + 6 + 5) // if the String first then all String converted=>165