// JavaScript: Display the city name if the string begins with "Los" or "New" otherwise return blank

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-66 with Solution
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to display the city name  if the string begins with “Los” or “New” otherwise return blank.</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function city_name(str) {
  if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                          || (str.substring(0, 3) == 'New')))
   
      {
          return str;
    }

  return '';
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));





ES6 Version:

function city_name(str) {
  if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                          || (str.substring(0, 3) == 'New')))
   
      {
          return str;
    }

  return '';
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));


Live Demo:



function city_name(str) {
  if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                          || (str.substring(0, 3) == 'New')))
   
      {
          return str;
    }

  return '';
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));




 */