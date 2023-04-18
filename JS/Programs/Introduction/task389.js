// JavaScript: All prime factors of a given number



/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-71 with Solution
Write a JavaScript program to print all prime factors of a given number.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to all prime factors of a given number</title>
</head>
<body>

</body>
</html>





JavaScript Code:

const Prime_Factors = (number) => {
  const result_factors = []
  for (let i = 2; i * i <= number; i++) {
    while (number % i === 0) {
      result_factors.push(i)
      number = Math.floor(number / i)
    }
  }
  if (number > 1) {
    result_factors.push(number)
  }
  return result_factors
}
console.log(Prime_Factors(75))
console.log(Prime_Factors(18))
console.log(Prime_Factors(101))




Live Demo:


html:


<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to all prime factors of a given number</title>
</head>
<body>

</body>
</html>



js:



const Prime_Factors = (number) => {
  const result_factors = []
  for (let i = 2; i * i <= number; i++) {
    while (number % i === 0) {
      result_factors.push(i)
      number = Math.floor(number / i)
    }
  }
  if (number > 1) {
    result_factors.push(number)
  }
  return result_factors
}
console.log(Prime_Factors(75))
console.log(Prime_Factors(18))
console.log(Prime_Factors(101))



 */