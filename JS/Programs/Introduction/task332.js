// JavaScript: Round a number to a given specific decimal places

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-14 with Solution
Write a JavaScript function to round a number to a given decimal places.

Test Data:
console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));
Output :
"12.38"
"12.37"
"-10.308"






HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Round a number to a given decimal places</title>
  </head>
  <body>
</body>
  </html>




  JavaScript Code:

//Ref.https://bit.ly/3zxAhnH
function precise_round(n, r) {
    let int = Math.floor(n).toString()
    if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
    if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
    return n.toPrecision(int.length + r)
}
console.log(precise_round(12.375,2));
console.log(precise_round(-10.3079499, 3));
console.log(precise_round(10.49999,0));
console.log(precise_round(10.49999,2));




Live Demo :


html:




<head>
  <meta charset="utf-8">
  <title>Round a number to a given decimal places</title>
  </head>
  <body>
</body>



js:




function precise_round(n, r) {
    let int = Math.floor(n).toString()
    if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
    if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
    return n.toPrecision(int.length + r)
}
console.log(precise_round(12.375,2));
console.log(precise_round(-10.3079499, 3));
console.log(precise_round(10.49999,0));
console.log(precise_round(10.49999,2));



 */