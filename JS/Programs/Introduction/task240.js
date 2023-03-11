// JavaScript: Find all distinct prime factors of a given integer




/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-132 with Solution
Write a JavaScript program to find all distinct prime factors of a given integer




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Find all distinct prime factors of a given integer</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function prime_factors(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++)
  {
    while (is_prime(i) && num % i === 0) 
    {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}
console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));






ES6 Version:

function prime_factors(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++)
  {
    while (is_prime(i) && num % i === 0) 
    {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}
console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));



Live Demo:


html:





<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Create an array of prefix sums of the given array</title>
</head>
<body>

</body>


js:




function prime_factors(num) {
  function is_prime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  var result = [];
  for (var i = 2; i <= num; i++)
  {
    while (is_prime(i) && num % i === 0) 
    {
      if (result.indexOf(i) == -1) result.push(i);
      num /= i;
    }
  }
  return result;
}
console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));



 */