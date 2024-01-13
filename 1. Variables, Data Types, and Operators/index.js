/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var shift = "par"
console.log(shift)
// TODO 1.2 Use the let keyword to define a variable.
let par = "shift"
console.log(par)
// Your code here

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const word = "Fam"
console.log(word)
// Your code here

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: Var is used for global declarations, let is used if a variable is to be used in multiple or other expression or oepration,
// and const is used to make sure a variables value always stays the same. 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let num1=0
num1+=30
console.log(num1)

let num2=0
num2-=30
console.log(num2)

let num3=4
num3*=10
console.log(num3)

let num4= 30
num4/= 10
console.log(num4)

let num5= 300
num5%=40
console.log(num5)
// Checkpoint 1.2 What operators did you use?
// Answer:  Addition, Subtraction, Multiplication, Division and Modulo




// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

var shift = "BMMA"
var person = "Par"
var statement = "My name is " + person + ". I am going to shift to "+shift
console.log(statement)


// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
var grade = 5
var score = 50
if (grade<=5 && score == 20){
    console.log("course failed")
}

else if (grade>=5 || score == 30){
    console.log("course passed")
}


// Checkpoint 1.4 What operators did you use?
// Answer: I used the "and" operator and "or" operator. I also used "greater than", "less than" and "equal" operators. 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

const shifters = ["Ric", "Zei", "Luiz", "Adan", "Kyle"]
console.log("Zei" in shifters)
// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here

console.log([] == false)
