// JavaScript: Change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-134 with Solution
Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.




Sample Solution:

HTML Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function change_char(str1) {
	var result = [];
	for (var i = 0; i < str1.length; i++)
    {
		var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
			change_char = 25 - char_order + 'a'.charCodeAt(0);
		result.push(String.fromCharCode(change_char));
	}
	return result.join("");
}
console.log(change_char("abcxyz"));
console.log(change_char("python")); 




ES6 Version:

function change_char(str1) {
	const result = [];
	for (let i = 0; i < str1.length; i++)
    {
        const char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0);
        const change_char = 25 - char_order + 'a'.charCodeAt(0);
        result.push(String.fromCharCode(change_char));
    }
	return result.join("");
}
console.log(change_char("abcxyz"));
console.log(change_char("python")); 


Live Demo:


html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a</title>
</head>
<body>

</body>


js:




function change_char(str1) {
	var result = [];
	for (var i = 0; i < str1.length; i++)
    {
		var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
			change_char = 25 - char_order + 'a'.charCodeAt(0);
		result.push(String.fromCharCode(change_char));
	}
	return result.join("");
}
console.log(change_char("abcxyz"));
console.log(change_char("python"));




 */