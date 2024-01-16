/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log(name)
}
var my_name = "Luiz"
greet(my_name)



// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: a function declaration is hoisted, a function expression is not. 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
function calculateArea(length, width){
    var area = length * width 
    console.log(area)
}

my_length = 5
my_width = 10
calculateArea(my_length,my_width)
// Your code here

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is passed as an argument to another function

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
const modifyArray = (arr, modifierFunction) => arr.map(modifierFunction);

const num_array = [1, 2, 3, 4, 5];
const increment = number => number + 1;

const modifiedArr = modifyArray(num_array, increment);

console.log("Original Numbers Array:", number_array);
console.log("Modified Numbers Array:", modifiedArr);


// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
// anotherFile.js

const palindromeCheck = require('./isPalindromeModule');

const testWord = "A man a plan a canal Panama";

palindromeCheck(testWord);



// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The require function and module.exports variable are used to import and export modules, it provides outside functionality over export and import keywords.
