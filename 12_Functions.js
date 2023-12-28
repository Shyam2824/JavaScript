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
console.log(loginUserMessage());