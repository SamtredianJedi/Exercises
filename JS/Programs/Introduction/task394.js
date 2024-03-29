// JavaScript: Subtract without arithmetic operators



/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-76 with Solution
Write a JavaScript program to subtract one integer from another, without using any arithmetic operators such as -, %, /, +, etc.

Test Data:
(200, 100) -> 100
(200, 300) -> -100
(-200, -300) -> 100
(200, 200) -> 0




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Subtract without arithmetic operators</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function test1(a, b)
{
    do 
    {
        let temp = (~a) & b;
         a = a ^ b;
         b = temp << 1;
    }while (b != 0)
    return a;
}

console.log(test1(200, 100));
console.log(test1(200, 300));
console.log(test1(-200, -300));
console.log(test1(200, 200));




Live Demo:

html:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Subtract without arithmetic operators</title>
</head>
<body>

</body>
</html>

js:

function test1(a, b)
{
    do 
    {
        let temp = (~a) & b;
         a = a ^ b;
         b = temp << 1;
    }while (b != 0)
    return a;
}

console.log(test1(200, 100));
console.log(test1(200, 300));
console.log(test1(-200, -300));
console.log(test1(200, 200));







 */