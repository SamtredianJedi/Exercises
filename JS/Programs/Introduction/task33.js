// Sort Words in Alphabetical Order





/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that sorts words in a string in alphabetical order.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String
JavaScript Arrays
JavaScript Array sort()
Example: Sort Words in Alphabetical Order



// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}



 is am, I, JavaScript, and learning. However, am is printed after I and JavaScript.

Why I and JavaScript are printed before am?

This is because I and J of JavaScript are in uppercase. And, when we use the sort() method, uppercase letters are placed before lowercase.

We can verify this by providing only lowercase input.



// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}



Here, we get the expected output now.

Note: Instead of displaying from the array values, you can also convert the array elements back to the string and display the values as a string using join() method.

words.join(' '); // I JavaScript am learning


 */