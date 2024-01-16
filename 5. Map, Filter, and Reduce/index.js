// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const inputValues = [3, 5, 7, 2, 8];
const squaredValues = inputValues.map((value) => value * value);
console.log(squaredValues);


// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const originalArray = [3, 5, 7, 2, 8];
const filteredEvenNumbers = originalArray.filter((value) => value % 2 === 0);
console.log("Filtered even numbers: " + filteredEvenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const arrayToCalculate = [3, 5, 7, 2, 8];
const resultSum = arrayToCalculate.reduce((runningTotal, currentValue) => runningTotal + currentValue, 0);
console.log("The sum of the values: " + resultSum);


// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const inputWord = ['hello', 'world'];
const capitalPhrases = inputWord.map((phrase) => phrase.toUpperCase());
console.log(capitalPhrases);



// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const champions = ["Syndra", "Zed", "Tempest", "Yasuo"];
const filteredChampions = champions.filter((champion) => champion.length > 4);
console.log(filteredChampions);


// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const resultString = customArray.reduce((combined, item) => combined + item, '');
console.log(resultString);
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// map transforms each element of an array, filter selectively includes elements 
//based on a condition, and reduce iterates
// over array elements to accumulate a single result using a specified function
