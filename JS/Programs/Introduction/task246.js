// JavaScript: Test whether a given integer is greater than 15 return the given number, otherwise return 15

/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-137 with Solution
Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Test whether a given integer is greater than 15 return the given number, otherwise return 15.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function test_fifteen(num) 
{
    while(num<15){
        num++;
    }
    return num;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));



ES6 Version:

function test_fifteen(num) 
{
    while(num<15){
        num++;
    }
    return num;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));


Live Demo:



html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Test if a given integer is greater than 15 return the given number, otherwise return 15.</title>
</head>
<body>

</body>


js:



function test_fifteen(num) 
{
    while(num<15){
        num++;
    }
    return num;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));




 */