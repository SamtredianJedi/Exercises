// JavaScript: Find duplicate values in a array

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-20 with Solution
Write a JavaScript program to find duplicate values in a JavaScript array.






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Find duplicate values in a JavaScript array</title>
</head>
<body>
</body>
</html>







JavaScript Code:

function find_duplicate_in_array(arra1) {
        var object = {};
        var result = [];

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

    }

    console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));








    ES6 Version:

function find_duplicate_in_array(arra1) {
        const object = {};
        const result = [];

        arra1.forEach(item => {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (const prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

    }

    console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));


    
 */