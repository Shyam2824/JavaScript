const firstNumber = 5000
console.log(firstNumber);

const account = new Number(5245) // if number is generated that converted in many format
console.log(account);
console.log(account.toString()); // to String
console.log(account.toString().length); // for length
console.log(account.toFixed(3)); // give the decimal value .000


const otherNumber = 12500000
    //console.log(otherNumber.toPrecision(4)); //to locate and range of the number
console.log(otherNumber.toLocaleString());

//-------------------Maths------------------------

console.log(Math.random());
console.log((Math.random() * 10) + 1); // any random number
console.log(Math.floor(Math.random() * 10) + 1); // round of in lower value
console.log(Math.ceil(Math.random() * 10) + 1); // round of in higher value
console.log(Math.max());