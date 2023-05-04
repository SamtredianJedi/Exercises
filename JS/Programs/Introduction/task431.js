// JavaScript: Swap the case of each character of a string, upper case to lower and vice versa

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-9 with Solution
Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Swap the case of each character of a string</title>
</head>
<body>
</body>
</html>








JavaScript Code:

var str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));



 */