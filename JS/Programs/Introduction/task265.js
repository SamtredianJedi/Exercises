// JavaScript: Returns a passed string with letters in alphabetical order





/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-4 with Solution
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'

Note: Assume punctuation and numbers symbols are not included in the passed string..





Sample Solution-1:

JavaScript Code:

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));





Explanation:

The split() method is used to split a String object into an array of strings by separating the string into substrings.
Code : console.log('32243'.split(""));
Output : ["3", "2", "2", "4", "3"]

The sort() method is used to sort the elements of an array in place and returns the array.
Code : console.log(["3", "2", "2", "4", "3"].sort());
Output : ["2", "2", "3", "3", "4"]

The join() method is used to join all elements of an array into a string.
Code : console.log(["2", "2", "3", "3", "4"].join(""));
Output : "22334"




Live Demo:


js:




function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));




Improve this sample solution and post your code through Disqus

Sample Solution-2:

JavaScript Code:

function alphabet_order(str) {
  const lettersOnly = str.replace(/[^a-zA-Z]/g, '');
  const sorted = lettersOnly.split('').sort().join('');
  return sorted;
}
const str = 'web$mast@er';
const result = alphabet_order(str);
console.log(result); 





Explanation:
Using a regular expression, you can remove non-letter characters before sorting letters. The above function uses the replace() method with a regular expression to remove any characters that are not letters before sorting the remaining letters. The regular expression /[^a-zA-Z]/g matches any character that is not a letter (that is, any character that is not in the range a-z or A-Z), with the g flag making the regular expression match all instances of non-letter characters.




Live Demo:

html:



<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Returns a passed string with letters in alphabetical order</title>
</head>
<body>

</body>
</html>


js:




function alphabet_order(str) {
  const lettersOnly = str.replace(/[^a-zA-Z]/g, '');
  const sorted = lettersOnly.split('').sort().join('');
  return sorted;
}
const str = 'web$mast@er';
const result = alphabet_order(str);
console.log(result); 






 */