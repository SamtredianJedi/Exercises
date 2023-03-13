// JavaScript: Compute the sum of all digits that occur in a given string


/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-147 with Solution
Write a JavaScript program to compute the sum of all digits that occur in a given string.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of all digits that occur in a given string.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function sum_digits_from_string(dstr) {
  var dsum = 0;

  for (var i = 0; i < dstr.length; i++)
  {

    if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
  }
  return dsum;
}

console.log(sum_digits_from_string("abcd12efg9"))
console.log(sum_digits_from_string("w3resource"))





ES6 Version:

function sum_digits_from_string(dstr) {
  let dsum = 0;

  for (let i = 0; i < dstr.length; i++)
  {

    if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
  }
  return dsum;
}

console.log(sum_digits_from_string("abcd12efg9"))
console.log(sum_digits_from_string("w3resource"))


Live Demo:

html:




<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Compute the sum of all digits that occur in a given string</title>
</head>
<body>

</body>


js:


function sum_digits_from_string(dstr) {
  var dsum = 0;

  for (var i = 0; i < dstr.length; i++)
  {

    if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
  }
  return dsum;
}

console.log(sum_digits_from_string("abcd12efg9"))
console.log(sum_digits_from_string("w3resource"))





 */