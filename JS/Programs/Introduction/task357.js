// JavaScript: Print an integer with commas as thousands separators

/**
 * 
 * 
 * JavaScript Math: Exercise-39 with Solution
Write a JavaScript function to print an integer with commas as thousands separators.

Test Data:
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"




HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to print an integer with commas as thousands separators</title>
</head>
<body>

</body>
</html>



JavaScript Code:

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));




 */