// JavaScript: Multiply every digit of a number three times


/**
 * 
 * 
 * JavaScript Math: Exercise-81 with Solution
Write a JavaScript program to multiply every digit of a number three times.

Test Data:
(11) -> 11
(66) -> 216216
(336) -> 2727216
(444) -> 646464
(1151) -> 111251




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to multiply every digit of a number three times</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function test(n) {
	return +[...String(n)].map(x => x*x*x).join('');
}
n = 11
console.log("n = "+n)
console.log("Multiply every digit of the said number three times: "+test(n));
n = 66
console.log("n = "+n)
console.log("Multiply every digit of the said number three times: "+test(n));
n = 336
console.log("n = "+n)
console.log("Multiply every digit of the said number three times: "+test(n));
n = 444
console.log("n = "+n)
console.log("Multiply every digit of the said number three times: "+test(n));
n = 1151
console.log("n = "+n)
console.log("Multiply every digit of the said number three times: "+test(n));







 */