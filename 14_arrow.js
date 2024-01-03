const user = {
        userName: " Shyam",
        price: 458,

        welCome: function() {
            //   console.log(`${this.userName},go to my website`); // this is used to represent current context
            //  console.log(this); // that they represent all things
        }
    }
    // user.welCome()
    // user.userName = " Golu"
    // user.welCome()
    //console.log(this); //that the out put is {}

function one() {
    console.log(this);
}
one() // that they give all value

const two = () => {
    const username = "shyam"
    console.log(this.username);
}
two()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
//const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => ({ name: "shyam " })
console.log(addtwo());