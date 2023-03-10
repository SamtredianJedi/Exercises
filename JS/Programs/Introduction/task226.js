// JavaScript: Check whether a given integer has an increasing digits sequence


/**
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-119 with Solution
Write a JavaScript program to check whether a given integer has an increasing digits sequence.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given integer has an increasing digits sequence</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function is_increasing_digits_Sequence(num) {

  var arr_num = ('' + num).split('');

  for (var i = 0; i < arr_num.length - 1; i++) {
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
      return false;
    }
  return true;
}

console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));




Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a given integer has an increasing digits sequence</title>
</head>
<body>

</body>

js:



function is_increasing_digits_Sequence(num) {

  var arr_num = ('' + num).split('');

  for (var i = 0; i < arr_num.length - 1; i++) {
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
      return false;
    }
  return true;
}

console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));


 */