// JavaScript: Print the elements of an array

/**
 * 
 * 
 * 
 * 
 JavaScript Array: Exercise-10 with Solution
Write a JavaScript program that prints the elements of the following array.

Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Print 2-D array</title>
</head>
<body>
</body>
</html>






JavaScript Code:

// a sample 2-D array 
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}



 */