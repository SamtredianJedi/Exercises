/* 

The JavaScript string is an object that represents a sequence of characters.

There are 2 ways to create string in JavaScript

By string literal
By string object (using new keyword) */


// By String Literal 

var str = "This is string literal";
document.write(str);

// By string object (using new keyword)


var stringname = new String("hello javascript string");
document.write(stringname);

/* 

 JavaScript String Methods
Let's see the list of JavaScript string methods with examples.

Methods	Description
charAt()	It provides the char value present at the specified index.
charCodeAt()	It provides the Unicode value of a character present at the specified index.
concat()	It provides a combination of two or more strings.
indexOf()	It provides the position of a char value present in the given string.
lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.
search()	It searches a specified regular expression in a given string and returns its position if a match occurs.
match()	It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
replace()	It replaces a given string with the specified replacement.
substr()	It is used to fetch the part of the given string on the basis of the specified starting position and length.
substring()	It is used to fetch the part of the given string on the basis of the specified index.
slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
toLowerCase()	It converts the given string into lowercase letter.
toLocaleLowerCase()	It converts the given string into lowercase letter on the basis of host?s current locale.
toUpperCase()	It converts the given string into uppercase letter.
toLocaleUpperCase()	It converts the given string into uppercase letter on the basis of host?s current locale.
toString()	It provides a string representing the particular object.
valueOf()	It provides the primitive value of string object.
split()	It splits a string into substring array, then returns that newly created array.
trim()	It trims the white space from the left and right side of the string.

*/


//  JavaScript String charAt(index) Method

var str = "javascript";
document.write(str.charAt(2));

// JavaScript String concat(str) Method


var s1 = "javascript ";
var s2 = "concat example";
var s3 = s1.concat(s2);
document.write(s3);

// JavaScript String indexOf(str) Method

var s1 = "javascript from javatpoint indexof";
var n = s1.indexOf("from");
document.write(n);

// JavaScript String lastIndexOf(str) Method

var s1 = "javascript from javatpoint indexof";
var n = s1.lastIndexOf("java");
document.write(n);

// JavaScript String toLowerCase() Method

var s1 = "JavaScript toLowerCase Example";
var s2 = s1.toLowerCase();
document.write(s2);

// JavaScript String toUpperCase() Method

var s1 = "JavaScript toUpperCase Example";
var s2 = s1.toUpperCase();
document.write(s2);

// JavaScript String slice(beginIndex, endIndex) Method

var s1 = "abcdefgh";
var s2 = s1.slice(2, 5);
document.write(s2);

// JavaScript String trim() Method

var s1 = "     javascript trim    ";
var s2 = s1.trim();
document.write(s2);

// JavaScript String split() Method

var str = "This is JavaTpoint website";
document.write(str.split(" ")); //splits the given string.