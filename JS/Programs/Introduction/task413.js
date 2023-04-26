// JavaScript: Last and middle character from a string



/** 
 * 
 * 
 * 
 * JavaScript Math: Exercise-95 with Solution
Write a JavaScript program that takes text and returns the last character of each word if it is even in length. It also returns the middle character if it is odd in length.

Test Data:
("Number of even numbers and their sum") -> "r, f, n, b, n, e, u"
("JavaScript Math and Numbers- Exercises Practice Solution") -> "t, h, n, -, c, e, n"







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Last and middle character from a string</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function test(text) {
return text
    .split(" ")
    .map((word) =>
      !(word.length % 2) ? word[word.length-1] : word[Math.floor(word.length / 2)]
    )
    .join(", ");
}
text = "Number of even numbers and their sum"
console.log("Original string: "+text)
result = test(text)
console.log("Number of even numbers and their sum: "+result);
text = "JavaScript Math and Numbers- Exercises Practice Solution"
console.log("Original string: "+text)
result = test(text)
console.log("Number of even numbers and their sum: "+result);





Live Demo:



html:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Last and middle character from a string</title>
</head>
<body>

</body>
</html>



js:



function test(text) {
return text
    .split(" ")
    .map((word) =>
      !(word.length % 2) ? word[word.length-1] : word[Math.floor(word.length / 2)]
    )
    .join(", ");
}
text = "Number of even numbers and their sum"
console.log("Original string: "+text)
result = test(text)
console.log("Number of even numbers and their sum: "+result);
text = "JavaScript Math and Numbers- Exercises Practice Solution"
console.log("Original string: "+text)
result = test(text)
console.log("Number of even numbers and their sum: "+result);



*/