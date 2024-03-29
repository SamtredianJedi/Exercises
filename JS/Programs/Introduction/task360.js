// JavaScript: Calculate the combination of n and r





/**
 * 


JavaScript Math: Exercise-42 with Solution
Write a JavaScript function to calculate the combination of n and r.
The formula is : n!/(r!*(n - r)!).

Test Data :
console.log(combinations(6, 2));
15
console.log(combinations(5, 3));
10



html:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the combination of n and r. The formula is : n!/(r!*(n - r)!)</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
}


function combinations(n, r) 
{
  if (n==r || r==0) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}


console.log(combinations(6, 2));
console.log(combinations(5, 3));





Live Demo:




html:


<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the combination of n and r. The formula is : n!/(r!*(n - r)!)</title>
</head>
<body>

</body>


js:



function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
}
​
​
function combinations(n, r) 
{
   if (n==r || r==0) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}
​
​
console.log(combinations(6, 2));
console.log(combinations(5, 3));








 */