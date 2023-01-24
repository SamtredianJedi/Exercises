/**
 * 
 * JavaScript String split()
As the name implies, the split() method in JavaScript splits the string into the array of substrings, puts these substrings into an array, and returns the new array. It does not change the original string.

When the string is empty, rather than returning an empty array, the split() method returns the array with an empty string. The empty array is returned when both string and separator are empty strings.

Syntax
string.split(separator, limit)  
The function arguments are discussed as follows.

separator: It is an optional parameter. It can be a regular expression or a simple string. It specifies the point where the split should take place.

If it has multiple characters, then the sequence of the entire character must be found to split.

If the separator is not present in the given string, or if it is omitted, then the entire string becomes a single array element. In these cases, the returned array contains a single element consisting of the entire string.

If the separator is present at the beginning or the end of the string, then it still has the effect of splitting. The returned array consists of an empty string of zero length that appears at the beginning or the last position of the returned array.

limit: It is also an optional parameter. It is a non-negative integer that specifies the number of limits. It defines the higher limit on the number of splits to be found in the given string. If it is given, it splits the string at each occurrence of the specified separator. It stops when the limit entries have been placed in the array.

An array can contain fewer entries than the given limit. It happens when the end of the string is reached before the limit is reached.

Let's understand the split() method using some examples.

Example1
In this example, the split() function splits the string str wherever the whitespace (" ") occurs and returns an array of strings. Here, we are using the limit argument and providing the value of the limit argument to 3.

<!DOCTYPE html>  
<html>  
<head>  
<script>  
var str = 'Welcome to the javaTpoint.com'  
var arr = str.split(" ", 3);  
document.write(arr);  
</script>  
</head>  
<body>  
  
</body>  
</html>  
 */

/**
 * 
 * Example2
In this example, we are using the letter 't' as the separator of the given string. The split() function will make an array of strings by splitting the given string at each occurrence of the letter 't'.

Here, we are not specifying the limit argument.

<!DOCTYPE html>  
<html>  
<head>  
<script>  
var str = 'Welcome to the javaTpoint.com'  
var arr = str.split("t");  
document.write(arr);  
</script>  
</head>  
<body>  
  
</body>  
</html>  
 */

/**
 * 
 * Example3
In this example, we are omitting the separator parameter. In the output, we can see that the returned array contains a single element consists of the given string.

<!DOCTYPE html>  
<html>  
<head>  
<script>  
var str = 'Welcome to the javaTpoint.com'  
var arr = str.split();  
document.write(arr);  
</script>  
</head>  
<body>  
  
</body>  
</html>  
 */

/**
 * 
 * Example4
Here, we are defining the limit parameter and using the letter 'o' as the separator of the given string. The split() function will create an array of strings by splitting the given string wherever the given letter 'o' occurs until the limit is reached.

The limit parameter limits the number of splits to 2 because we are defining 2 as the value of the limit. In the output, we can see that the splitting only happens twice.

<!DOCTYPE html>  
<html>  
<head>  
<script>  
var str = 'Welcome to the javaTpoint.com'  
var arr = str.split("o", 2);  
document.write(arr);  
</script>  
</head>  
<body>  
  
</body>  
</html>  
 */