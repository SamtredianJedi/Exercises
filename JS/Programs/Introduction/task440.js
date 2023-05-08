// JavaScript: Perform a binary search within an array

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-18 with Solution
Write a JavaScript program to perform a binary search.

Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.


Sample array:
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output:
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Binary Search</title>
</head>
<body>
</body>
</html>






JavaScript Code:

function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));







ES6 Version:

function binary_Search(items, value){
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));





 */