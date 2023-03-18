// JavaScript: Get the integers in a range




/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-3 with Solution
Write a JavaScript program to get the integers in range (x, y).

Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]





Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Gets the integers from x to y</title>
</head>
<body>

</body>
</html>




JavaScript Code:

var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));



Live Demo:


html:



<head>
  <meta charset="utf-8">
  <title>Gets the integers from x to y</title>
</head>
<body>

</body>


js:




var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));



 */