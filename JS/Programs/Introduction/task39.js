// Count the Number of Vowels in a String




/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that counts the number of vowels in a string.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
Javascript String match()
Javascript String includes()
The five letters a, e, i, o and u are called vowels. All other alphabets except these 5 vowels are called consonants.

Example 1: Count the Number of Vowels Using Regex




// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);




In the above program, the user is prompted to enter a string and that string is passed to the countVowel() function.

The regular expression (RegEx) pattern is used with the match() method to find the number of vowels in a string.
The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string. Here,
str.match(/[aeiou]/gi); gives ["a", "a", "i", "o", "a"]
The length property gives the number of vowels present.
Example 2: Count the Number of Vowels Using for Loop




// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);




In the above example,

All the vowels are stored in a vowels array.
Initially, the value of the count variable is 0.
The for...of loop is used to iterate over all the characters of the string.
The toLowerCase() method converts all the characters of a string to lowercase.
The includes() method checks if the vowel array contains any of the characters of the string.
If any character matches, the value of count is increased by 1.


 */