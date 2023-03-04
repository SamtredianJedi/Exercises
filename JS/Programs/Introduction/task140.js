// JavaScript: Check a given string contains 2 to 4 numbers of a specified character

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-35 with Solution
Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.

Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to check a given string contains 2 to 4 numbers of a specified character.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function check_char(str1, char)
 {
  ctr = 0;
  for (let i = 0; i < str1.length; i++)
  {
    if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
    {
        ctr=1;
        break;
    }
   }
   if (ctr==1) return true;
   return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));




ES6 Version:

(function() {
    "use strict";
    function check_char(str1, char)
     {
      ctr = 0;
      for (let i = 0; i < str1.length; i++)
      {
        if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
        {
            ctr=1;
            break;
        }
       }
       if (ctr==1) return true;
       return false;
    }
    console.log(check_char("Python", "y"));
    console.log(check_char("JavaScript", "a"));
    console.log(check_char("Console", "o"));
    console.log(check_char("Console", "C"));
    console.log(check_char("Console", "e"));
    console.log(check_char("JavaScript", "S"));
}).call(this);




Live Demo:




function check_char(str1, char)
 {
  ctr = 0;
  for (let i = 0; i < str1.length; i++)
  {
    if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
    {
        ctr=1;
        break;
    }
   }
   if (ctr==1) return true;
   return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));


 */