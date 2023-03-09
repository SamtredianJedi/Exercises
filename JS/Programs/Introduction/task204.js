// JavaScript: Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case

/**
 * 
 * 
 * JavaScript Basic: Exercise-98 with Solution
Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.

Fox example "Write" will be write and "PHp" will be "PHP"

Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function change_case(new_str) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return new_str.toLowerCase();
  return new_str.toUpperCase();
}

console.log(change_case("Write"))
console.log(change_case("PHp"))




ES6 Version:

function change_case(new_str) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return new_str.toLowerCase();
  return new_str.toUpperCase();
}

console.log(change_case("Write"))
console.log(change_case("PHp"))


Live Demo:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case</title>
</head>
<body>

</body>


js:




function change_case(new_str) {
  var x = 0;
  var y = 0;

  for (var i = 0; i < new_str.length; i++) {
    if (/[A-Z]/.test(new_str[i])) {
      x++;
    } else y++;
  }

  if (y > x) return new_str.toLowerCase();
  return new_str.toUpperCase();
}

console.log(change_case("Write"))
console.log(change_case("PHp"))


 */