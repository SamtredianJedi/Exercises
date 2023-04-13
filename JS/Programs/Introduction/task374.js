// JavaScript: Volume of a Cuboid

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-56 with Solution
Write a JavaScript program to calculate the volume of a Cuboid.

From Wikipedia –
In geometry, a cuboid is a hexahedron, a six-faced solid. Its faces are quadrilaterals. Cuboid means "like a cube", in the sense that by adjusting the length of the edges or the angles between edges and faces a cuboid can be transformed into a cube.




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Volume of a Cuboid</title>
</head>
<body>

</body>
</html>






JavaScript Code:

const vol_Cuboid = (width, length, height) => {
 is_Number(width, 'Width')
 is_Number(length, 'Length')
 is_Number(height, 'Height')
 return (width * length * height)
}
const is_Number = (n, n_name = 'number') => {
 if (typeof n !== 'number') {
   throw new TypeError('The ' + n_name + ' is not Number type!')
 } else if (n < 0 || (!Number.isFinite(n))) {
   throw new Error('The ' + n_name + ' must be a positive values!')
 }
}
console.log(vol_Cuboid(3.0, 2.0, 4.0))
console.log(vol_Cuboid('3.0', 2.0, 4.0))
console.log(vol_Cuboid(3.0, -2.0, 4.0))



 */