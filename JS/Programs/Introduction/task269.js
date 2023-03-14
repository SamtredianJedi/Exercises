// JavaScript: Counts the number of vowels within a string





/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-7 with Solution
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Sample Data and output:
Example string: 'The quick brown fox'
Expected Output: 5




Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Counts the number of vowels within a string</title>
</head>
<body>
  
</body>
</html>

JavaScript Code:

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));





Explanation:
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
Syntax -> str.indexOf(searchValue[, fromIndex])
Parameters :
searchValue : A string representing the value to search for.
fromIndex(Optional)-> The index at which to start the searching forwards in the string. It can be any integer.

The character(s) of the string will be counted as vowel if the condition (vowel_list.indexOf(str1[x]) !== -1) matched.




Live Demo:


function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));


 */