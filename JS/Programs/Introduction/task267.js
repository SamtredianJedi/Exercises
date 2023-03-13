// JavaScript: Find the longest word within a string




/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-6 with Solution
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Sample Data and output:
Example string: 'Web Development Tutorial'
Expected Output: 'Development'




Sample Solution-1:

JavaScript Code:

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));






Explanation:
Assume str = '@Web Development #Tutorial';

The match() method is used to retrieve the matches when matching a string against a regular expression.
Therefore str.match(/\w[a-z]{0,}/gi) will return ["Web", "Development", "Tutorial"].

For loop checks the length of the array element and compare with previous one and finally return the longest string.

The length property represents an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
Syntax -> arr.length






Live Demo:


js:




function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


 */