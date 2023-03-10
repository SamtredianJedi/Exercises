// JavaScript: Check whether a given matrix is an identity matrix



/**
 * 
 * 
 * JavaScript Basic: Exercise-117 with Solution
Write a JavaScript program to check whether a given matrix is an identity matrix.

Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a given matrix is an identity matrix</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function is_identity_Matrix(matrix_data) {
//Checks whether given matrix is a square matrix or not
for (var i = 0; i < matrix_data.length; i++)
  {
    rows = matrix_data.length;
cols = matrix_data[i].length;
if(rows != cols)
  {
   console.log("Matrix should be a square matrix");
   return false;
  }
  }
  for (var i = 0; i < matrix_data.length; i++)
   {
    for (var j = 0; j < matrix_data.length; j++)
     {
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
      {
        return false;
      }
    }
  }
  return true;
}
console.log(is_identity_Matrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]])) 




ES6 Version:

function is_identity_Matrix(matrix_data) {
  for (let i = 0; i < matrix_data.length; i++) 
   {
    for (let j = 0; j < matrix_data.length; j++)
     {
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
      {
        return false;
      }
    }
  }
  return true;
}

console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))


Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a given matrix is an identity matrix</title>
</head>
<body>

</body>

js:





function is_identity_Matrix(matrix_data) {
//Checks whether given matrix is a square matrix or not
for (var i = 0; i < matrix_data.length; i++)
  {
    rows = matrix_data.length;
cols = matrix_data[i].length;
if(rows != cols)
  {
   console.log("Matrix should be a square matrix");
   return false;
  }
  }
  for (var i = 0; i < matrix_data.length; i++)
   {
    for (var j = 0; j < matrix_data.length; j++)
     {
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
      {
        return false;
      }
    }
  }
  return true;
}
console.log(is_identity_Matrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))



 */