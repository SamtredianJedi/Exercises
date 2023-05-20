// JavaScript: Find all indexes of NaN in an array

/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-52 with Solution
Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

Test Data:

([2, NaN, 8, 16, 32]) -> [1]
([2, 4, NaN, 16, 32, NaN]) -> [2,5]
([2, 4, 16, 32]) ->[]







JavaScript Code :

function test(arr_nums){
    return arr_nums.map(function(el, i){
        if(isNaN(el)) 
          return i;
        return false;
    }).filter(function(el){
        return el;
    });
}
arr_nums = [2, NaN, 8, 16, 32]
console.log("Original array: "+arr_nums)
result = test(arr_nums)
console.log("Find all indexes of NaN of the said array: "+result);
arr_nums = [2, 4, NaN, 16, 32, NaN]
console.log("Original array: "+arr_nums)
result = test(arr_nums)
console.log("Find all indexes of NaN of the said array: "+result);
arr_nums = [2, 4, 16, 32]
console.log("Original array: "+arr_nums)
result = test(arr_nums)
console.log("Find all indexes of NaN of the said array: "+result);








Live Demo :


html:




<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Find all indexes of NaN in an array</title>
</head>
<body>
​
</body>
</html>


js:




function test(arr_nums){
    return arr_nums.map(function(el, i){
        if(isNaN(el)) 
          return i;
        return false;
    }).filter(function(el){
        return el;
    });
}
arr_nums = [2, NaN, 8, 16, 32]
console.log("Original array: "+arr_nums)
result = test(arr_nums)
console.log("Find all indexes of NaN of the said array: "+result);
arr_nums = [2, 4, NaN, 16, 32, NaN]
console.log("Original array: "+arr_nums)
result = test(arr_nums)
console.log("Find all indexes of NaN of the said array: "+result);
arr_nums = [2, 4, 16, 32]
console.log("Original array: "+arr_nums)
result = test(arr_nums)
console.log("Find all indexes of NaN of the said array: "+result);
​



 */