// JavaScript: Sort an array of all prime numbers between 1 and a given integer

/**
 * 
 * 
 * 
 JavaScript Basic: Exercise-109 with Solution
Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Sort an array of all prime numbers between 1 and a given integer</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function sort_prime(num) {

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))





ES6 Version:

function sort_prime(num) {
  const prime_num1 = [];
  const prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (let j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))




Live Demo:

html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Sort an array of all prime numbers between 1 and a given integer</title>
</head>
<body>

</body>


js:




function sort_prime(num) {

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))