const myArray = [1, 2, 3, 4, 5, 6]


//************* */ method of array*******************
myArray.push(15) // to add in last 
myArray.pop() // to remove in last 
    //myArray.unshift(15) // to add in first
console.log(myArray);

const newArray = myArray.join() // that convert into String
console.log(typeof newArray);
console.log(newArray);

// slice and spice
const nArray = myArray.slice(1, 4) // too see 1,2,3 that remove last digit 
console.log(nArray, myArray);

const AArray = myArray.splice(0, 4)
console.log(AArray, myArray);