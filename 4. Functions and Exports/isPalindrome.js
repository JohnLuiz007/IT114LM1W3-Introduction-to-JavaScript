// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

function isPalindrome(sample_word) {
    var word = sample_word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            console.log("The word is not a palindrome.");
            return false;
        }
    }
    console.log("The word is a palindrome.");
    return true;
}

const testWord = "ReviveR";
isPalindrome(testWord)



  
// Todo 4.6b Set the isPalindrome function as the default export of the module
module.exports = isPalindrome;
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
