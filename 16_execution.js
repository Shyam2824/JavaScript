/*
++++++++ Javascript Execution context+++++++++
"{}" -->  "Global EC"

Global Execution Context
Function  Execution Context
Eval Execution Context

{} --> Memory creation phase
    Execution phase
*/
let val1 = 10
let val2 = 10

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(5, 15)
    /*
   1. Global execution == this

   2. Memory Phase

    val1== undefine
    val2== undefine
    addNum== define
    result1== undefine
    result== undefine

    3.Execution Phase
    val1=10
    val2=10
    addNum= [New variable environment + Execution thread]
    */