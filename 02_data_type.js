/*
permeative data type
number=> 2 to  53
bigint=> used to large number of data 
string=> "" or '' both of the used
boolean => true / false
null => standalone value
undefine=> 
symbol=> unique

object
*/
console.log(typeof "shyam");
console.log(typeof null); // output should be "object " 
console.log(typeof undefined); // output should be "undefined"
let age = 19
let goback = true
let name = "shyam"
    //console.table([age, goback, name]);
console.log(typeof age);

// ************* Data type Summery **********
/*
***********Data type have 2 type
1. Primitive
7 type: Number, String, null, undefined, Boolean, BigInt, Symbol

Non primitive (Reference)
Array, Objects, Function

 */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// *******************Memory************************************
// Stack (Primitive),,, Heap(Non Primitive)

let userId = "Shyam.com" // in stack that will be change only one

let anotheruserId = userId
anotheruserId = "shyamsundar.com"
console.log(anotheruserId);


// in heap that change both 
let userName1 = {
    email: "shyamsundar025@gmail.com",
    userId: "254581@fjj"
}

let userName2 = userName1
userName2.email = "golusingh@gmail.com"
console.log(userName2);