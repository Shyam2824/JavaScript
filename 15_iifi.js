// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// function one() {
//     console.log(`connected`);
// }
//one()
(function one() {
    console.log(`connected`);
})();

// When two iife are writen then ude ";" to break them

((name) => {
    console.log(`two connected ${name}`);
})("shyam")