// JavaScript: Subtract elements from one another in an array



/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-45 with Solution
Write a JavaScript function to subtract elements from one another in an array.




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to subtract elements from one another in array</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function subtraction(arr) 
 {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      } 
      else 
      return false;
    }
    return total;
   } 
    else
     return false;
  }
console.log(subtraction([7,3, 2,-1]));




Live Demo:



html:



<head>
  <meta charset="utf-8">
  <title>JavaScript function to subtract elements from one another in array</title>
</head>
<body>

</body>


js:



function subtraction(arr) 
 {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      } 
      else 
      return false;
    }
    return total;
   } 
    else
     return false;
  }
console.log(subtraction([7,3, 2,-1]));





 */