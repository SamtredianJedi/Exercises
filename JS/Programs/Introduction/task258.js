// JavaScript: Swap two halves of a given array of integers of even length

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-148 with Solution
Write a JavaScript program to swap two halves of a given array of integers of even length.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Swap two halves of a given array of integers of even length.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function halv_array_swap(iarra) {
  if (((iarra.length)%2)!=0)
    {
    return false;
    }

  for (var i = 0; i < iarra.length / 2; i++) {
    var tmp = iarra[i];
    iarra[i] = iarra[i + iarra.length / 2];
    iarra[i + iarra.length / 2] = tmp;
  }
  return iarra;
}

console.log(halv_array_swap([1,2,3,4,5,6]))
console.log(halv_array_swap([1,2,3,4,5,6,7]))





ES6 Version:

function halv_array_swap(iarra) {
  if (((iarra.length)%2)!=0)
    {
    return false;
    }

  for (let i = 0; i < iarra.length / 2; i++) {
    const tmp = iarra[i];
    iarra[i] = iarra[i + iarra.length / 2];
    iarra[i + iarra.length / 2] = tmp;
  }
  return iarra;
}

console.log(halv_array_swap([1,2,3,4,5,6]))
console.log(halv_array_swap([1,2,3,4,5,6,7]))


Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Swap two halves of a given array of integers of even length</title>
</head>
<body>

</body>

js:




function halv_array_swap(iarra) {
  if (((iarra.length)%2)!=0)
    {
    return false;
    }

  for (var i = 0; i < iarra.length / 2; i++) {
    var tmp = iarra[i];
    iarra[i] = iarra[i + iarra.length / 2];
    iarra[i + iarra.length / 2] = tmp;
  }
  return iarra;
}

console.log(halv_array_swap([1,2,3,4,5,6]))
console.log(halv_array_swap([1,2,3,4,5,6,7]))



 */