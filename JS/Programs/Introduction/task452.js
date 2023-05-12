// JavaScript: Merge two arrays and removes all duplicates elements

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-30 with Solution
Write a JavaScript function that merges two arrays and removes all duplicate elements.

Test data:
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to merge two arrays and removes all duplicates elements.</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));







ES6 Version:

function merge_array(array1, array2) {
    const result_array = [];
    const arr = array1.concat(array2);
    let len = arr.length;
    const assoc = {};

    while(len--) {
        const item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


const array1 = [1, 2, 3];

const array2 = [2, 30, 1];

console.log(merge_array(array1, array2));


 */