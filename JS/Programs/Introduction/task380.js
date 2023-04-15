// JavaScript: Volume of a Pentagonal Prism

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-62 with Solution
Write a JavaScript program to calculate the volume of a prism using only its height and one of its hexagonal sides.

In geometry, the pentagonal prism is a prism with a pentagonal base. It is a type of heptahedron with seven faces, fifteen edges, and ten vertices.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Volume of a Pentagonal Prism</title>
</head>
<body>

</body>
</html>





JavaScript Code:

const volume_Pentagonal_Prism = (base_edge, height) => {
  is_Number(base_edge, 'Base Edge')
  is_Number(height, 'Height')
  return (1/4*height*base_edge*base_edge*Math.sqrt(5*(5+2*(Math.sqrt(5)))))
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
console.log(volume_Pentagonal_Prism(4.0, 8.0))
console.log(volume_Pentagonal_Prism('4.0', 8.0))
console.log(volume_Pentagonal_Prism(4.0, -8.0))


 */