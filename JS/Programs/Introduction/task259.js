// JavaScript: Change the capitalization of all letters in a given string



/**
 * 
 * 
 * 
 * 
 * 
 * 
 * JavaScript Basic: Exercise-149 with Solution
Write a JavaScript program to change the capitalization of all letters in a given string.




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Change the capitalization of all letters in a given string.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function change_case(txt) {
    var str1 = "";
    for (var i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
        else str1 += txt[i].toUpperCase();
    }
    return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));






ES6 Version:

function change_case(txt) {
    let str1 = "";
    for (let i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
        else str1 += txt[i].toUpperCase();
    }
    return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));


Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Change the capitalization of all letters in a given string</title>
</head>
<body>
​
</body>


js:





function change_case(txt) {
    var str1 = "";
    for (var i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
        else str1 += txt[i].toUpperCase();
    }
    return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));




 */