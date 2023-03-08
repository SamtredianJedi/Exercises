// JavaScript: Add two positive integers without carry

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-82 with Solution
Write a JavaScript to add two positive integers without carry.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript to add two positive integers without carry</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result;
}
console.log(add_two_int_without_carrying(222, 911))
console.log(add_two_int_without_carrying(200, 900))





ES6 Version:

function add_two_int_without_carrying(n1, n2) {
    let result = 0;
    let x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result;
}
console.log(add_two_int_without_carrying(222, 911))
console.log(add_two_int_without_carrying(200, 900))


Live Demo:


html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript to add two positive integers without carry</title>
</head>
<body>

</body>


js:




function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result;
}
console.log(add_two_int_without_carrying(222, 911))
console.log(add_two_int_without_carrying(200, 900))








 */