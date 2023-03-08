// JavaScript: Find the longest string from a given array of strings

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-83 with Solution
Write a JavaScript to find the longest string from a given array of strings.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript to find the longest string from a given array of strings</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa',
                                          'aaaaa','aaaa']))





                                          ES6 Version:

function longest_string(str_ara) {
  let max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa',
                                          'aaaaa','aaaa']))







                                          Live Demo:

                                          html:





                                          <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript to find the longest string from an given array of strings</title>
</head>
<body>

</body>


js:



function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa',
                                          'aaaaa','aaaa']))


                                          




 */