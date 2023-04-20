// JavaScript: Two positive integers as string, return their sum



/**
 * 
 * 
 * JavaScript Math: Exercise-77 with Solution
Write a JavaScript program to given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Test Data:
("123", "123") -> 246
("45", "100") -> 145




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Two positive integers as string, return their sum</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(n1, n2) {
    var str = '';
    var carry = 0;
    var num1 = n1.length -1;
    var num2 = n2.length -1;
    var sum_of_two

    while(num1 >= 0 || num2 >= 0){
        sum_of_two = (parseInt(n1[num1]) || 0) + (parseInt(n2[num2]) || 0) 
        sum_of_two += carry ? 1:0
        
        if(sum_of_two > 9){
            carry = 1;
            str = sum_of_two %10 + str 
        }else{
            str = sum_of_two  + str;
            carry = 0
        }
        num1--;
        num2--
    }
    if(carry){str = 1+ str}
    return str
};
console.log(test("123", "123"));
console.log(test("45", "100"));






Live Demo:


html:



<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Two positive integers as string, return their sum</title>
</head>
<body>
​
</body>
</html>


js:




function test(n1, n2) {
    var str = '';
    var carry = 0;
    var num1 = n1.length -1;
    var num2 = n2.length -1;
    var sum_of_two
​
    while(num1 >= 0 || num2 >= 0){
        sum_of_two = (parseInt(n1[num1]) || 0) + (parseInt(n2[num2]) || 0) 
        sum_of_two += carry ? 1:0
        
        if(sum_of_two > 9){
            carry = 1;
            str = sum_of_two %10 + str 
        }else{
            str = sum_of_two  + str;
            carry = 0
        }
        num1--;
        num2--
    }
    if(carry){str = 1+ str}
    return str
};
console.log(test("123", "123"));
console.log(test("45", "100"));
​



 */