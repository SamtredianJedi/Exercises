// JavaScript: Test whether an array of integers of length 2 contains 1 or a 3

/**
 * 
 * 
 * 
 * 
 JavaScript Basic: Exercise-77 with Solution
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function contains13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 5]));  
console.log(contains13([2, 3]));  
console.log(contains13([7, 5])); 



ES6 Version:

function contains13(nums) {

    if (nums.includes(1) || nums.includes(3)){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 5]));  
console.log(contains13([2, 3]));  
console.log(contains13([7, 5]));



Live Demo:


function contains13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 5]));  
console.log(contains13([2, 3]));  
console.log(contains13([7, 5])); 


 */