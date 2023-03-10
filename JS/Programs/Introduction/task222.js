// JavaScript: Check whether a matrix is a diagonal matrix or not



/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-115 with Solution
Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).

Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false




Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a matrix is a diagonal matrix or not</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));




ES6 Version:

function is_diagonal_matrix(user_matrix) {
    for (let i = 0; i < user_matrix.length; i++) {
        for (let j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));

Live Demo:

html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a matrix is a diagonal matrix or not</title>
</head>
<body>

</body>

js:



function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));


 */