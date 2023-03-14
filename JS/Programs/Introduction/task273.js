// JavaScript: Find the second lowest and second greatest numbers from an array





/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-11 with Solution
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.





Sample Solution-1:

JavaScript Code:

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));




Live Demo:




function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));




Sample Solution-2:

JavaScript Code:

function Second_Greatest_Lowest(arr) {
  // First, sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });
  
  // Then, get the second lowest number by accessing the index 1
  let secondLowest = arr[1];
  
  // To get the second greatest number, reverse the array and get the element at index 1
  let reversedArr = arr.reverse();
  let secondGreatest = reversedArr[1];
  
  return [secondLowest, secondGreatest];
}
console.log(Second_Greatest_Lowest([1,2,3,4,5]));




Explanation:
The above function first sorts the input array in ascending order using the sort() method with a comparison function. Then, it retrieves the second lowest number in the array by accessing the element at index 1. The function reverses the sorted array to retrieve the element at index 1 of the reversed array, which is the second greatest number. Finally, the function returns an array containing the second lowest and second greatest numbers.


Live Demo:

html:



<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Second lowest and second greatest numbers from an array</title>
</head>
<body>

</body>
</html>


js:


function Second_Greatest_Lowest(arr) {
  // First, sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });
  
  // Then, get the second lowest number by accessing the index 1
  let secondLowest = arr[1];
  
  // To get the second greatest number, reverse the array and get the element at index 1
  let reversedArr = arr.reverse();
  let secondGreatest = reversedArr[1];
  
  return [secondLowest, secondGreatest];
}
console.log(Second_Greatest_Lowest([1,2,3,4,5]));



 */