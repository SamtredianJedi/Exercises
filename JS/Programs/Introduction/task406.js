// JavaScript: Check to given vectors are orthogonal or not

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-88 with Solution
Write a JavaScript program to check whether two vectors are orthogonal or not.

Two vectors are orthogonal if they are perpendicular to each other. i.e. the dot product of the two vectors is zero.
Let u and v are two vectors. The vectors u, v will be orthogonal if they are perpendicular, i.e., they form a right angle, or if the dot product they yield is zero.
u⊥v or u•v=0





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to check two given vectors are orthogonal or not</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(nums1, nums2) {
  var total = 0
  for(var i=0;i<nums1.length;i++){
    total+=(nums1[i] *nums2[i]);
  }
  return total ==0;
}

nums1 = [2, 4, 1]
nums2 = [2, 1, -8]
console.log("Original vectors:")
console.log(nums1+"\n"+nums2)
console.log("Check the said vectors are orthogonal or not: "+test(nums1, nums2))
nums1 = [1, 0, 1]
nums2 = [0, 0, 1]
console.log("Original vectors:")
console.log(nums1+"\n"+nums2)
console.log("Check the said vectors are orthogonal or not: "+test(nums1, nums2))
nums1 = [1, 0, 0]
nums2 = [0, 1, 0]
console.log("Original vectors:")
console.log(nums1+"\n"+nums2)
console.log("Check the said vectors are orthogonal or not: "+test(nums1, nums2))




Live Demo:


html:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to check two given vectors are orthogonal or not</title>
</head>
<body>

</body>
</html>


js:

function test(nums1, nums2) {
  var total = 0
  for(var i=0;i<nums1.length;i++){
    total+=(nums1[i] *nums2[i]);
  }
  return total ==0;
}

nums1 = [2, 4, 1]
nums2 = [2, 1, -8]
console.log("Original vectors:")
console.log(nums1+"\n"+nums2)
console.log("Check the said vectors are orthogonal or not: "+test(nums1, nums2))
nums1 = [1, 0, 1]
nums2 = [0, 0, 1]
console.log("Original vectors:")
console.log(nums1+"\n"+nums2)
console.log("Check the said vectors are orthogonal or not: "+test(nums1, nums2))
nums1 = [1, 0, 0]
nums2 = [0, 1, 0]
console.log("Original vectors:")
console.log(nums1+"\n"+nums2)
console.log("Check the said vectors are orthogonal or not: "+test(nums1, nums2))








js:




 */