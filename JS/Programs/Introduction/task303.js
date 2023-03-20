// JavaScript: Check a string for palindromes using recursion


/**
 * 
 * 
 * 
 * 
 JavaScript Function: Exercise-10 with Solution
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal – Panama".
Write a JavaScript program to check whether a given string is Palindrome or not using recursion.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Check a string for palindromes using recursion</title>
</head>
<body>

</body>
</html>




JavaScript Code:

const test = (text) => {
  if (typeof text !== 'string') {
        return 'String should not be empty!'
  }

  if (text.length <= 1) {
    return true
  }

  if (text[0] !== text[text.length - 1])
  {
    return false
  } 
  else 
  {
    return test(text.slice(1, text.length - 1))
  }
}
console.log(test("madam"))
console.log(test("abdb"))
console.log(test("ab"))
console.log(test("a"))


 */