// JavaScript: Compute the factors of a positive integer






/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-13 with Solution
Write a JavaScript function to compute the factors of a positive integer.

Sample Solution-1:

JavaScript Code:

function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]




Live Demo:




function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]




Sample Solution-2:

JavaScript Code:

function find_Factors(num) {
  let factors = [];
  // Loop through all numbers from 1 to num/2 and check if they are a divisor
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  // Add num as a factor
  factors.push(num);

  return factors;
}
console.log(find_Factors(15));  
console.log(find_Factors(16));  
console.log(find_Factors(17)); 





Sample Solution-2:

JavaScript Code:

function find_Factors(num) {
  let factors = [];
  // Loop through all numbers from 1 to num/2 and check if they are a divisor
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  // Add num as a factor
  factors.push(num);

  return factors;
}
console.log(find_Factors(15));  
console.log(find_Factors(16));  
console.log(find_Factors(17)); 




Live Demo:

html:



<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Compute the factors of a positive integer</title>
</head>
<body>

</body>
</html>


js:




function find_Factors(num) {
  let factors = [];
  // Loop through all numbers from 1 to num/2 and check if they are a divisor
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  // Add num as a factor
  factors.push(num);

  return factors;
}
console.log(find_Factors(15));  
console.log(find_Factors(16));  
console.log(find_Factors(17));  




 */