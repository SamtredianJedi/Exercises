// JavaScript: Calculate the product of values in an array



/**
 * 
 * 
 * 
 * 
 * JavaScript Math: Exercise-18 with Solution
Write a JavaScript function to calculate the product of values in an array.

Test Data:
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
Output:
6
-60000
6




HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Product of values in an array</title>
</head>
<body></body>
</html>







JavaScript Code:

function product(input){
 if (toString.call(input) !== "[object Array]")
    return false;
  
         var total   =   1;
  
       for(var i=0;i<input.length;i++){
               if(isNaN(input[i])){
                 continue;
               }
                total   *=  Number(input[i]);
            }
          return total;
        }
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));






Live Demo:



<head>
<meta charset="utf-8">
<title>Product of values in an array</title>
</head>
<body></body>


js:




function product(input){
 if (toString.call(input) !== "[object Array]")
    return false;
  
         var total   =   1;
  
       for(var i=0;i<input.length;i++){
               if(isNaN(input[i])){
                 continue;
               }
                total   *=  Number(input[i]);
            }
          return total;
        }
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));







 */