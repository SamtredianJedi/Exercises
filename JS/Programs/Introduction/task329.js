// JavaScript: Least common multiple (LCM) of more than 2 integers

/**
 * 
 * 
 * 


JavaScript Math: Exercise-11 with Solution
Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.

Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));
Output :
25200
150







HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>LCM more than two numbers</title>
  </head>
  <body>
</body>
  </html>
  





  JavaScript Code:

function lcm_more_than_two_numbers(input_array) {
    if (toString.call(input_array) !== "[object Array]")  
        return  false;  
 var r1 = 0, r2 = 0;
    var l = input_array.length;
    for(i=0;i<l;i++) {
        r1 = input_array[i] % input_array[i + 1];
        if(r1 === 0) {
            input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
            }
        }
    }
    return input_array[l - 1];
}

console.log(lcm_more_than_two_numbers([100,90,80,7])); 
console.log(lcm_more_than_two_numbers([5,10,15,25]));

Live Demo:


html:



<head>
  <meta charset="utf-8">
  <title>LCM more than two numbers</title>
  </head>
  <body>
</body>



js:




function lcm_more_than_two_numbers(input_array) {
    if (toString.call(input_array) !== "[object Array]")  
        return  false;  
 var r1 = 0, r2 = 0;
    var l = input_array.length;
    for(i=0;i<l;i++) {
        r1 = input_array[i] % input_array[i + 1];
        if(r1 === 0) {
            input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
            }
        }
    }
    return input_array[l - 1];
}

console.log(lcm_more_than_two_numbers([100,90,80,7])); 
console.log(lcm_more_than_two_numbers([5,10,15,25]));






 */