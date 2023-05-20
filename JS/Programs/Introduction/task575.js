// JavaScript: Number of arrays inside an array



/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-53 with Solution
Write a JavaScript program to count the number of arrays inside a given array.

Test Data:

([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3



JavaScript Code-1:

function test(arr_nums){
	return arr_nums.filter(n=>Array.isArray(n)).length;
}
arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
console.log("Number of arrays inside the said array: "+test(arr_nums));





Live Demo :


html:




<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Number of arrays inside an array</title>
</head>
<body>
​
</body>
</html>


js:




function test(arr_nums){
  return arr_nums.filter(n=>Array.isArray(n)).length;
}
arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
​







JavaScript Code-2:

function test(arr_nums){
    return arr_nums.filter(n=> n.length).length;  
}
arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
console.log("Number of arrays inside the said array: "+test(arr_nums));




Live Demo :


html:



<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Number of arrays inside an array</title>
</head>
<body>

</body>
</html>


js:




function test(arr_nums){
    return arr_nums.filter(n=> n.length).length;  
}
arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
​



 */