/**
 * Given a string, reverse each word in the sentence
 */

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);

}

/**
 * How to check if an object is an array or not? Provide some code.
 */

/**
 * The best way to find whether an object is instance of a particular class or not using toString method from Object.prototype

var arrayList = [1 , 2, 3];
One of the best use cases of type checking of an object is when we do method overloading in JavaScript. For understanding this let say we have a method called greet which take one single string and also a list of string, so making our greet method workable in both situation we need to know what kind of parameter is being passed, is it single value or list of value?

function greet(param) {
  if() {
    // here have to check whether param is array or not
  }
  else {
  }
}
However, in above implementation it might not necessary to check type for array, we can check for single value string and put array logic code in else block, let see below code for the same.

 function greet(param) {
   if(typeof param === 'string') {
   }
   else {
     // If param is of type array then this block of code would execute
   }
 }
Now it's fine we can go with above two implementations, but when we have a situation like a parameter can be single value, array, and object type then we will be in trouble.

Coming back to checking type of object, As we mentioned that we can use Object.prototype.toString

if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}
If you are using jQuery then you can also used jQuery isArray method:

if($.isArray(arrayList)) {
  console.log('Array');
} else {
  console.log('Not an array');
}
FYI jQuery uses Object.prototype.toString.call internally to check whether an object is an array or not.

In modern browser, you can also use:

Array.isArray(arrayList);
 */



/**
 *How to empty an array in JavaScript?
 * 
 *  Answer
Method 1

arrayList = [];
Above code will set the variable arrayList to a new empty array. This is recommended if you don't have references to the original array arrayList anywhere else because It will actually create a new empty array. You should be careful with this way of empty the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged, Only use this way if you have only referenced the array by its original variable arrayList.

For Instance:

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']
Method 2

arrayList.length = 0;
Above code will clear the existing array by setting its length to 0. This way of empty the array also update all the reference variable which pointing to the original array. This way of empty the array is useful when you want to update all the another reference variable which pointing to arrayList.

For Instance:

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
Method 3

arrayList.splice(0, arrayList.length);
Above implementation will also work perfectly. This way of empty the array will also update all the references of the original array.

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
Method 4

while(arrayList.length) {
  arrayList.pop();
}
Above implementation can also empty the array. But not recommended to use often.
 */


/**
 * 
 * How would you check if a number is an integer?
Junior 
Top 179 JavaScript Interview Questions  JavaScript  179  
Answer
A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
 */


/**
 * 
 * Implement enqueue and dequeue using only two stacks

    Answer
Enqueue means to add an element, dequeue to remove an element.

var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}
 *  */