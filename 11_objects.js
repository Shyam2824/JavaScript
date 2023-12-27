// Single tone object

const timePass = {}
timePass.id = "Sjyg56865"
timePass.name = "Golu Singh"
timePass.location = "gaya"
timePass.isLogIn = false

//console.log(timePass);

const remainingTime = {
        email: "remainingtime@gmail.com",
        fullName: {
            userName: {
                firstName: " Golu",
                lastName: "Singh",
            }
        }
    }
    // console.log(remainingTime.fullName.userName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "e" }
    //const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4 } // expand function
    //console.log(obj3);
    // console.log(Object.values(timePass));
    // console.log(Object.entries(timePass));

const course = {
    courseNme: "Code in js",
    coursePrise: 258,
    courseInstructor: "Golu Singh"
}

//console.log(course.courseInstructor);

const { courseInstructor: instructor } = course
console.log(instructor);


// json formate
// {
//     "name" : "dhydvhdvy",
//     "course" : "java Script",
// }