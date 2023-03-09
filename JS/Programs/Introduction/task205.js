// JavaScript: Rearrange characters of a given string in such way that it will become equal to another given string




/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-99 with Solution
Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.

Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Rearrange characters of a given string in such way that it will become equal to another given string</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function rearrangement_characters(str1, str2) {

  var first_set = str1.split(''),
      second_set = str2.split(''),
      result = true;

  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false;
    }
  }

  return result;
}

console.log(rearrangement_characters("xyz", "zyx"))
console.log(rearrangement_characters("xyz", "zyp"))




ES6 Version:

function rearrangement_characters(str1, str2) {
  const first_set = str1.split('');
  const second_set = str2.split('');
  let result = true;

  first_set.sort();
  second_set.sort();

  for (let i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false;
    }
  }

  return result;
}

console.log(rearrangement_characters("xyz", "zyx"))
console.log(rearrangement_characters("xyz", "zyp"))


Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Rearrange characters of a given string in such way that it will become equal to another given string</title>
</head>
<body>

</body>


js:




function rearrangement_characters(str1, str2) {

  var first_set = str1.split(''),
      second_set = str2.split(''),
      result = true;

  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] !== second_set[i]) {
      result = false;
    }
  }

  return result;
}

console.log(rearrangement_characters("xyz", "zyx"))
console.log(rearrangement_characters("xyz", "zyp"))



 */