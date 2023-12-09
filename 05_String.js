const name = "Shyam Sundar"
const lastName = "Singh"

console.log(name + "" + lastName + " Value"); // that should be older 
// new that shoulde be :
console.log(`My first name ${name} and my last name ${lastName}`);
console.log(` ${name}  ${lastName}`);

// declarer the String 

const gameName = new String("Shyam@Sundar")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('@'));

const newString = gameName.substring(1, 5) // does not respond in -ve value
console.log(newString);
const anotherString = gameName.slice(-12, 3) // that goes in -ve value also
console.log(anotherString);