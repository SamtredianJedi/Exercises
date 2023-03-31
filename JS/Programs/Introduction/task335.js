// JavaScript: Calculate the sum of values in an array

/**
 * 


JavaScript Math: Exercise-17 with Solution
Write a JavaScript function to calculate the sum of values in an array.

Test Data :
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Output :
6
-97
6



HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Sum of values in an array</title>
  </head>
  <body>
</body>
  </html>





  JavaScript Code:

function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));







Live Demo:


html:




<head>
  <meta charset="utf-8">
  <title>Sum of values in an array</title>
  </head>
  <body>
</body>



js:




function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));






 */