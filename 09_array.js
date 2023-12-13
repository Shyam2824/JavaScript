const c_name = ["hcl", "lenovo", "mi", "bajaj"]
const m_name = ["k2", "everest", "buddha"]

//c_name.push(m_name)
//console.log(c_name);

const my_name = c_name.concat(m_name)
    //console.log(my_name); // to mixed all two Arrays

const allMyname = [...c_name, ...m_name] // seprate method to seprate the array
    //console.log(allMyname);


// many array in other to each other

const another_array = [1, 2, 3, [4, 5, 9], 5, 7, 3, [2, 5, 6, [4, 6, 5]]] // to merge all the Array
const all_array = another_array.flat(Infinity)
console.log(all_array);

console.log(Array.isArray("Shyam")); // for question
console.log(Array.from("Shyam")); // String to array
console.log(Array.isArray({ name: "Shyam" })); // inserting


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4)); // to convert in array