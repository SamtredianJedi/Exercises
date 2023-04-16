// JavaScript: Volume of a Hemisphere

/**
 * 
 * 
 * JavaScript Math: Exercise-64 with Solution
Write a JavaScript program to calculate the volume of a Hemisphere.

Hemisphere refers to a half of a sphere:
A sphere is a geometrical object that is a three-dimensional analogue to a two-dimensional circle. A sphere is the set of points that are all at the same distance r from a given point in three-dimensional space.[2] That given point is the centre of the sphere, and r is the sphere's radius. The earliest known mentions of spheres appear in the work of the ancient Greek mathematicians.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Volume of a Hemisphere</title>
</head>
<body>

</body>
</html>






JavaScript Code:

const volume_Hemisphere = (radius) => {
  is_Number(radius, 'Radius')
  return (2.0 * Math.PI * radius ** 3)/3.0
}
const is_Number = (n, n_name = 'number') => {
  if (typeof n !== 'number') {
    throw new TypeError('The ' + n_name + ' is not Number type!')
    } 
    else if (n < 0 || (!Number.isFinite(n))) 
    {
    throw new Error('The ' + n_name + ' must be a positive values!')
    }
}
console.log(volume_Hemisphere(4.0))
console.log(volume_Hemisphere('4.0'))
console.log(volume_Hemisphere(-4.0))


 */