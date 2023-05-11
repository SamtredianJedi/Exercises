// JavaScript: Retrieve the value of a specified property from all elements in an array

/**
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-27 with Solution
Write a JavaScript function to retrieve the value of a given property from all elements in an array.

Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result: [15, -22, 47]







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to retrieve the value of a given property from all elements in an array.</title>
</head>
<body>

</body>
</html>







JavaScript Code:

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function property_value(array, property_key) {
	var arr = [],
		index = -1,
		arrlen = array.length,array_items;

	while (++index < arrlen) {
		array_items = array[index];

  if (array_items.hasOwnProperty(property_key)) 
      {
	 arr[arr.length] = array_items[property_key];
      }
	}

	return arr;
}

console.log(property_value(library, 'title'));

console.log(property_value(library, 'author'));



 */