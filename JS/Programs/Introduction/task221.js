// JavaScript: Check whether a given string represents a correct sentence or not




/**
 * 
 * 
 * JavaScript Basic: Exercise-114 with Solution
Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given string represents a correct sentence or not</title>
</head>
<body>

</body>
</html>





JavaScript Code:




function is_correct_Sentence(input_str) {
    var first_char = input_str[0];
    var last_char = input_str[input_str.length - 1];
    return /[A-Z]/.test(first_char) && last_char == "."
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));





ES6 Version:




function is_correct_Sentence(input_str) {
    const first_char = input_str[0];
    const last_char = input_str[input_str.length - 1];
    return /[A-Z]/.test(first_char) && last_char == "."
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));




Live Demo:

html:

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given string represents a correct sentence or not</title>
</head>
<body>

</body>


js:



function is_correct_Sentence(input_str) {
    var first_char = input_str[0];
    var last_char = input_str[input_str.length - 1];
    return /[A-Z]/.test(first_char) && last_char == "."
}
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));




 */