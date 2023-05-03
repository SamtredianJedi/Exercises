// JavaScript: Insert dashes (-) between each two even digits of a specific number



/**
 * 
 * 
 * 
 * 
 JavaScript Array: Exercise-6 with Solution
Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Insert dashes (-) between even numbers</title>
</head>
<body>
</body>
</html>






JavaScript Code:

const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));





ES6 Version:

var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));




Live Demo:




js:


var num=window.prompt();
var str = num.toString();
var result = [str[0]];
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));




 */