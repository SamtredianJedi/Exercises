// JavaScript: Find all the possible options to replace the hash in a string

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-116 with Solution
Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

For a string "2*0", the output should be : ["210", "240", "270"]

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find all the possible options to replace the hash in a string</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function is_divisible_by3(mask_str) {

  var digitSum = 0,
    left = '0'.charCodeAt(),
    right = '9'.charCodeAt(),
    result = [],
    mask_data = mask_str.split(''),
    hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
    {
      digitSum += mask_data[i].charCodeAt() - left;
    } 
    else 
    {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(is_divisible_by3("2#0"))
console.log(is_divisible_by3("4#2"))




ES6 Version:

function is_divisible_by3(mask_str) {
  let digitSum = 0;
  const left = '0'.charCodeAt();
  const right = '9'.charCodeAt();
  const result = [];
  const mask_data = mask_str.split('');
  let hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
    {
      digitSum += mask_data[i].charCodeAt() - left;
    } 
    else 
    {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(is_divisible_by3("2#0"))
console.log(is_divisible_by3("4#2"))


Live Demo:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find all the possible options to replace the hash in a string</title>
</head>
<body>

</body>


js:



function is_divisible_by3(mask_str) {

  var digitSum = 0,
    left = '0'.charCodeAt(),
    right = '9'.charCodeAt(),
    result = [],
    mask_data = mask_str.split(''),
    hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
    {
      digitSum += mask_data[i].charCodeAt() - left;
    } 
    else 
    {
      hash_pos = i;
    }
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(is_divisible_by3("2#0"))
console.log(is_divisible_by3("4#2"))



 */