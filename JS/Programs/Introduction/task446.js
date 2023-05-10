// JavaScript: Remove null, 0, blank, false, undefined and NaN values from an array

/**
 * 
 * 
 * 
 * 
 JavaScript Array: Exercise-24 with Solution
Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result: [15, -22, 47]





html:


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.</title>
</head>
<body>
</body>
</html>








JavaScript Code:

function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));






ES6 Version:

function filter_array(test_array) {
    let index = -1;
    const arr_length = test_array ? test_array.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
        const value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));



 */