// JavaScript: Find the longest string from a given array

/**
 * 
 * 
 * JavaScript Basic: Exercise-125 with Solution
Write a JavaScript program to find the longest string from a given array.





Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the longest string from a given array</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));




ES6 Version:

function longest_str_in_array(arra)
  {
    let max_str = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++) {
        const maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));



Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Find the longest string from a given array</title>
</head>
<body>

</body>
</html>

js:




function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));






 */