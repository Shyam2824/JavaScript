function SayMyName() {
    console.log("s");
    console.log("h");
    console.log("y");
    console.log("a");
    console.log("m");
}
//SayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2) {
    //let result = number1 + number2
    //return result;
    //console.log("Shyam"); // in function after return that no any console.log work
    return number1 + number2
}

//const result = addTwoNumber(5, 9)
const result = addTwoNumber(5, null) // null doesn't have any value
    //console.log("Result: " + result);

function loginUserMessage(UserName) {
    if (UserName === undefined) {
        console.log("Please Enter your userName");
        return
    }
    return `${UserName} just logIn`
}
//console.log(loginUserMessage("Shyam"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1) { // ... that used in Expend and rest also that cover all the value 
    return num1
}
//console.log(calculateCartPrice(100, 258, 365890));

function calculateCartPrice(val1, val2, ...num1) { // if in the function that should be given parameter i.e.. val1, val2 etc  
    return num1
}
//console.log(calculateCartPrice(100, 258, 522, 659, 365)); // output is 522,659,365 because starting two value should be include val1, val2

// object in function
const user = {
    userName: "Golu Singh",
    price: 568
}

function handleObject(anyObject) {
    console.log(`Username ${anyObject.userName} and the price is ${anyObject.price}`);
}
handleObject(user)