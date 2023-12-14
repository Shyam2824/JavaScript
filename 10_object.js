// singleton create by constructor

// object literal 

const mySy = Symbol("key1")

const object1 = {
    name: "Shyam  Sundar",
    email: "shyam@google.com",
    age: 21,
    [mySy]: "key1",
    location: "gaya",
}
console.log(object1.email);
console.log(object1["email"]);
console.log(object1[mySy]);
console.log(object1.location);

object1.name = "Shyam Sundar Singh"
Object.freeze(object1) // that not allowed to change any things
object1.name = "sss"
console.log(object1);