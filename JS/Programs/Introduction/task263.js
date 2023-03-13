// Improve this sample solution and post your code through Disqus




// Sample Solution-2:

// JavaScript Code:

// function isPalindrome(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// const str1 = 'madam';
// const str2 = 'nursesrun';
// const str3 = 'fox';
// console.log(isPalindrome(str1)); 
// console.log(isPalindrome(str2)); 
// console.log(isPalindrome(str3));



/**
 * 
 * 
 * Live Demo:
 * 
 * 
 * html:
 * 
 * 
 * 
 * 
 * <html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Check whether a passed string is palindrome or not</title>
</head>
<body>

</body>
</html>


js:




function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
const str1 = 'madam';
const str2 = 'nursesrun';
const str3 = 'fox';
console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 
console.log(isPalindrome(str3));




 */