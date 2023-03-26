// JavaScript: Convert a binary number to a decimal number

/**
 * 


JavaScript Math: Exercise-2 with Solution
Write a JavaScript function to convert a binary number to a decimal number.

Test Data: console.log(bin_to_dec('110011')); console.log(bin_to_dec('100')); 51 4




Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Binary number to a decimal number</title>
</head>
<body>

</body>
</html>







JavaScript Code:

function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));





Live Demo:


html:



<head>
  <meta charset="utf-8">
  <title>Binary number to a decimal number</title>
</head>
<body>

</body>






js:



function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));




 */