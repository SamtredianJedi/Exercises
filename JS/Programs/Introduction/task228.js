// JavaScript: Check whether a given matrix is lower triangular or not



/**
 * 
 * 
 * 
 * 
 JavaScript Basic: Exercise-121 with Solution
Write a JavaScript program to check whether a given matrix is lower triangular or not.

Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given matrix is lower triangular or not</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function lower_triangular_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) 
         {
        for (var j = 0; j < user_matrix[0].length; j++) 
            {
            if (j > i && user_matrix[i][j] !== 0)
              return false;
        }
    }
    return true;
}

console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));




ES6 Version:

function lower_triangular_matrix(user_matrix) {
    for (let i = 0; i < user_matrix.length; i++) 
         {
        for (let j = 0; j < user_matrix[0].length; j++) 
            {
            if (j > i && user_matrix[i][j] !== 0)
              return false;
        }
    }
    return true;
}

console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));

Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check if a given matrix is lower triangular or not</title>
</head>
<body>

</body>

js:



function lower_triangular_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) 
         {
        for (var j = 0; j < user_matrix[0].length; j++) 
            {
            if (j > i && user_matrix[i][j] !== 0)
              return false;
        }
    }
    return true;
}

console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));



 */