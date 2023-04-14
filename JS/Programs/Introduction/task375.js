// JavaScript: Volume of a Cube

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-57 with Solution
Write a JavaScript program to calculate the volume of a Cube.

From Wikipedia –
In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex. The cube is the only regular hexahedron and is one of the five Platonic solids. It has 6 faces, 12 edges, and 8 vertices.




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Volume of a Cube</title>
</head>
<body>

</body>
</html>





JavaScript Code:

const volume_Cube = (length) => {
 is_Number(length, 'Length')
 return (length ** 3)
}
const is_Number = (n, n_name = 'number') => {
 if (typeof n !== 'number') {
   throw new TypeError('The ' + n_name + ' is not Number type!')
 } else if (n < 0 || (!Number.isFinite(n))) {
   throw new Error('The ' + n_name + ' must be a positive values!')
 }
}
console.log(volume_Cube(3.0))
console.log(volume_Cube('3.0'))
console.log(volume_Cube(-3.0))





Live Demo:


html:


<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Volume of a Cube</title>
</head>
<body>

</body>
</html>

js:



const volume_Cube = (length) => {
 is_Number(length, 'Length')
 return (length ** 3)
}
const is_Number = (n, n_name = 'number') => {
 if (typeof n !== 'number') {
   throw new TypeError('The ' + n_name + ' is not Number type!')
 } else if (n < 0 || (!Number.isFinite(n))) {
   throw new Error('The ' + n_name + ' must be a positive values!')
 }
}
console.log(volume_Cube(3.0))



 */