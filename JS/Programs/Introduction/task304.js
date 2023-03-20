// JavaScript: Convert Binary to Decimal using recursion



/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-11 with Solution
Write a JavaScript program to convert Binary number (positive) to Decimal using recursion.





Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Convert Binary to Decimal using recursion</title>
</head>
<body>

</body>
</html>





JavaScript Code:

const test = (n) => {
  if (n === 0 || n === 1) 
  {
    return String(n)
  }
  return test(Math.floor(n / 2)) + String(n % 2)
}
console.log(test(1))
console.log(test(0))
console.log(test(10))
console.log(test(101))




Live Demo:




<html>
<head>
  <meta charset="utf-8">
  <title>Convert Binary to Decimal using recursion</title>
</head>
<body>

</body>
</html>



js:





const test = (n) => {
  if (n === 0 || n === 1) 
  {
    return String(n)
  }
  return test(Math.floor(n / 2)) + String(n % 2)
}
console.log(test(1))
console.log(test(0))
console.log(test(10))
console.log(test(101))



 */