// JavaScript: Replace every character in a given string with the character following it in the alphabet

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-49 with Solution
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.



Sample Solution:

HTML Code:



<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JavaScript program to replace every character in a given string with the character following it in the alphabet.</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function string_reverse(str) 
function LetterChanges(text) {
//https://goo.gl/R8gn7u
var s = text.split('');
for (var i = 0; i < s.length; i++) {
// Caesar cipher
switch(s[i]) {
case ' ':
break;
case 'z':
s[i] = 'a';
break;
case 'Z': 
s[i] = 'A';
break;
default:
s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
}

// Upper-case vowels
switch(s[i]) {
case 'a': case 'e': case 'i': case 'o': case 'u':
s[i] = s[i].toUpperCase();
}
}
return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));





Live Demo:



function LetterChanges(text) {
  //https://goo.gl/R8gn7u
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch(s[i]) {
          case ' ':
            break;
          case 'z':
            s[i] = 'a';
            break;
          case 'Z':     
            s[i] = 'A';
            break;
          default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
​
        // Upper-case vowels
        switch(s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));


 */