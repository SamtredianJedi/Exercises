// JavaScript: Converts the first letter of each word of a string in upper case




/**
 * 
 * 
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-5 with Solution
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '




Sample Solution-1:

JavaScript Code:





//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));






Explanation:

Assume str = "the quick brown fox";
The split() method is used to split a String object into an array of strings by separating the string into substrings.
console.log(str.split(' '));
Output : ["the", "quick", "brown", "fox"]
First substrings -> "the"
Code to convert first character of the above sting to upper case-> array1[x].charAt(0).toUpperCase()
console.log(array1[x].charAt(0).toUpperCase()); [here x=0]
Output : "T"
Rest part of the string "the" -> array1[x].slice(1)
console.log(array1[0].slice(1));
Output : "he"
Final string :
console.log(array1[0].charAt(0).toUpperCase()+array1[0].slice(1));
Output : "The"
Now insert the above string into another array :
newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));

Used functions :
The charAt() method is used to get the specified character from a string.
Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
The toUpperCase() method is used to convert the string value to uppercase.
The slice() method returns a shallow copy of a portion of an array into a new array object.
The push() method is used to add one or more elements to the end of an array and returns the new length of the array.

After completing the for loop return the final string :
return newarray1.join(' ');
The join() method joins all elements of an array into a string.





Live Demo:




function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));





Improve this sample solution and post your code through Disqus

Sample Solution-2:

JavaScript Code:

function capitalize_First_Letter(text) {
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
const text = 'the quick brown fox';
const result = capitalize_First_Letter(text);
console.log(result); 





Explanation:
This capitalize_First_Letter() function first splits the input string into an array of individual words using the split() method. To convert a word to uppercase, it uses the toUpperCase() method and charAt() to get the first letter. The slice() method is then used to get the rest of the word after the first letter, which is then concatenated with the uppercase first letter to form the capitalized word. Finally, the capitalized words are joined back together into a single string using the join() method and returned





Live Demo:


html:




<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Converts the first letter of each word of a string in upper case</title>
</head>
<body>

</body>
</html>



js:





function capitalize_First_Letter(text) {
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
const text = 'the quick brown fox';
const result = capitalize_First_Letter(text);
console.log(result); 
​



 */