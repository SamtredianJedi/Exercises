// JavaScript: Binary search using recursion




/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-8 with Solution
Write a JavaScript program for binary search.

Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'





Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Binary search using recursion</title>
</head>
<body>

</body>
</html>





JavaScript Code:

Array.prototype.br_search = function (target) 
{
  var half = parseInt(this.length / 2);
  if (target === this[half]) 
  {
    return half;
  }
  if (target > this[half]) 
  {
    return half + this.slice(half,this.length).br_search(target);
  } 
  else
  {
    return this.slice(0, half).br_search(target);
  }
};

l= [0,1,2,3,4,5,6];

console.log(l.br_search(5));




Live Demo:


html:




<head>
<meta charset="utf-8">
<title>Binary search using recursion</title>
</head>
<body>

</body>




Array.prototype.br_search = function (target) 
{
  var half = parseInt(this.length / 2);
  if (target === this[half]) 
  {
    return half;
  }
  if (target > this[half]) 
  {
    return half + this.slice(half,this.length).br_search(target);
  } 
  else
  {
    return this.slice(0, half).br_search(target);
  }
};

l= [0,1,2,3,4,5,6];

console.log(l.br_search(5));






 */