
// Todo 5.4.1 Create a function called add that takes in two numbers and returns their sum
function add(first_num, second_num) {
    sum = first_num + second_num;  // Fix: Use the correct variable name 'second_num'
    console.log(sum);
}

my_first_num = 90;
my_second_num = 100;
add(my_first_num, my_second_num);

// Todo 5.4.2 Create a constant that contains the approximate value of PI 
const pi_value = Math.PI;
console.log(pi_value)

// Todo 5.4.3 Export the function and constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

module.exports = {
    piValue,
    add
};
