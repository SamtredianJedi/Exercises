// JavaScript: Get all possible subset with a fixed length combinations in an array

/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-21 with Solution
Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

Sample array : [1, 2, 3] and subset length is 2

Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript array subset</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));





Live Demo:





function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));



 */