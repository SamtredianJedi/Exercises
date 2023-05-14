// JavaScript: Get a random item from an array

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-35 with Solution
Write a JavaScript function to get random items from an array.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get a random item from an array.</title>
</head>
<body>

</body>
</html>






JavaScript Code:




function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));







ES6 Version:




function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

const items = [254, 45, 212, 365, 2543];
console.log(random_item(items));




 */