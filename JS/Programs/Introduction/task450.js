// JavaScript: Find the longest common starting substring in a set of strings



/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-28 with Solution
Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to find the longest common starting substring in a set of strings</title>
</head>
<body>

</body>
</html>








JavaScript Code:

function longest_common_starting_substring(arr1){
var arr= arr1.concat().sort(),
a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['go', 'google'])); 

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

console.log(longest_common_starting_substring(['abcd', '1234'])); 






ES6 Version:

function longest_common_starting_substring(arr1){
  const arr= arr1.concat().sort();
  const a1= arr[0];
  const a2= arr[arr.length-1];
  const L= a1.length;
  let i= 0;
  while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
  return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['go', 'google'])); 

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

console.log(longest_common_starting_substring(['abcd', '1234']));





Live Demo:


js:



function longest_common_starting_substring(arr1){
var arr= arr1.concat().sort(),
a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['go', 'google'])); 

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

console.log(longest_common_starting_substring(['abcd', '1234'])); 




 */