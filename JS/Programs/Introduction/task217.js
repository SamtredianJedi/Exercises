// JavaScript: Find the number of even values in sequence before the first occurrence of a given number



/**
 * 
 * 
 * JavaScript Basic: Exercise-110 with Solution
Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

Sample sequence = [1,2,3,4,5,6,7,8]
Given number: 5
Output: 2

Sample Solution:

HTML Code:





<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of even values in sequence before the first occurrence of a given number</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function find_numbers(arr_num, num) {
    var result = 0;
    for (var i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num) 
        {
            return result;
        }
    }
    return -1;
}

console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))




ES6 Version:

function find_numbers(arr_num, num) {
    let result = 0;
    for (let i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num) 
        {
            return result;
        }
    }
    return -1;
}

console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))


Live Demo:



html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the number of even values in sequence before the first occurrence of a given number</title>
</head>
<body>

</body>


js:




function find_numbers(arr_num, num) {
    var result = 0;
    for (var i = 0; i < arr_num.length; i++)
    {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
            result++;
        }
        if (arr_num[i] === num) 
        {
            return result;
        }
    }
    return -1;
}

console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
console.log(find_numbers([1,3,5,6,7,8], 6))



 */