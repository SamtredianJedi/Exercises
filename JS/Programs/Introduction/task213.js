// JavaScript: Find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one


/**
 * 
 * 
 * JavaScript Basic: Exercise-107 with Solution
Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

Sample Solution:

HTML Code:





<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function arr_pairs(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))





ES6 Version:

function arr_pairs(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++)
        {
        for (let j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))




Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of sorted pairs formed by its elements of an given array of integers  such that one element in the pair is divisible by the other on</title>
</head>
<body>

</body>

js:




function arr_pairs(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}
console.log(arr_pairs([1,2,3]))
console.log(arr_pairs([2,4,6]))
console.log(arr_pairs([2,4,16]))




 */