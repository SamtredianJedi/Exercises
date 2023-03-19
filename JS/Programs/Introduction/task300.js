// JavaScript: Check whether a number is even or not

/**
 * 
 * 
 * 
 JavaScript Function: Exercise-7 with Solution
Write a JavaScript program to check whether a number is even or not.




Sample Solution-1:

Using recursion:

JavaScript Code:

function is_even_recursion(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return true;
  }
  if (number===1) 
  {
    return false;
  }
  else 
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log(is_even_recursion(234)); //true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(65)); // false





Sample Solution-2:

Without recursion:

Test even number:

Checks whether a number is odd or even using the modulo (%) operator.
Returns true if the number is even, false if the number is odd.
Test odd number:

Check whether a number is odd or even using the modulo (%) operator.
Return true if the number is odd, false if the number is even.
JavaScript Code:

const is_Even = num => num % 2 === 0;
const is_Odd = num => num % 2 === 1;
console.log("Test even number!")
console.log(is_Even(1));
console.log(is_Even(4));
console.log(is_Even(100));
console.log("Test odd number!")
console.log(is_Odd(1));
console.log(is_Odd(4));
console.log(is_Odd(107));




Live Demo:


html:





<head>
<meta charset="utf-8">
<title>Use recursion to determine if a number is or not.</title>
</head>
<body>
</body>


js:





function is_even_recursion(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return true;
  }
  if (number===1) 
  {
    return false;
  }
  else 
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log(is_even_recursion(234)); //true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(-45)); // false


 */