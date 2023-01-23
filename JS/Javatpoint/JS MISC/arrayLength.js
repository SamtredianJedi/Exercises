/**
 * 
 * JavaScript array.length property
The length property returns the number of elements in an array in the form of a 32-bit unsigned integer. We can also say that the length property returns a number that represents the number of array elements. The return value is always larger than the highest array index.

The length property can also be used to set the number of elements in an array. We have to use the assignment operator in conjunction with the length property to set an array's length.

The array.length property in JavaScript is same as the array.size() method in jQuery. In JavaScript, it is invalid to use array.size() method so, we use array.length property to calculate the size of an array.

Syntax
The following syntax is used to return the length of an array

array.length  
The following syntax is used to set the length of an array

array.length = number  
For better understanding, let's see some of the illustrations of using array.length property.

Example1
It is a simple example to understand how to calculate the length of an array using the array.length property.

<html>  
<head>  
<title> array.length </title>  
</head>  
  
<body>  
<h3> Here, we are finding the length of an array. </h3>  
<script>  
var arr = new Array( 100, 200, 300, 400, 500, 600 );  
document.write(" The elements of array are: " + arr);  
document.write(" <br>The length of the array is: " + arr.length);  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example2
In this example, we are setting the length of an array by using the array.length property. Initially, the array contains two elements, so at the beginning, the length is 2. Then we increase the length of the array to 9.

In the output, the values of the array are separated by commas. After increasing the length, the array contains two defined and seven undefined values separated by a comma. Then we insert five array elements and print them. Now, the array contains seven defined and two undefined values.

<html>  
<head>  
<title> array.length </title>  
</head>  
  
<body>  
<h3> Here, we are setting the length of an array. </h3>  
<script>  
var arr = [100, 200];  
document.write(" Before setting the length, the array elements are: " + arr);  
  
arr.length = 9;  
document.write("<br><br> After setting the length, the array elements are: " + arr);  
// It will print [ 1, 2, <7 undefined items> ]  
arr[2] = 300;  
arr[3] = 400;  
arr[4] = 500;  
arr[5] = 600;  
document.write("<br><br> After inserting some array elements: " + arr);  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example3
In this example, the index of the array is non-numeric. Here, the array contains five elements with the non-numeric index. We are applying the length property on the given array to see the effect. Now let's see how the array.length property works on the non-numeric index of the array.

<html>  
<head>  
<title> array.length </title>  
</head>  
  
<body>  
<h3> There are five array elements but the index of the array is non numeric. </h3>  
<script>  
var arr = new Array();  
arr['a'] = 100;  
arr['b'] = 200;  
arr['c'] = 300;  
arr['d'] = 400;  
arr['e'] = 500;  
  
document.write("The length of array is: " + arr.length);  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example4
In this example, we are using the length property to display the number of words present in the string. Here, we are creating an array and use the split() function for the array elements. We are splitting the string from the whitespace (" ") character.

If we direct apply the length property on the string, then it gives us the number of characters in the string. But in this example, we will understand how to calculate the number of words in the string.

<html>  
   <head>  
      <title> array.length </title>  
   </head>  
     
   <body>     
      <script>  
var str = "Welcome to the javaTpoint.com";  
var arr = new Array();  
arr = str.split(" ");  
document.write(" The given string is: " + str);   
document.write("<br><br> Number Of Words: "+ arr.length);  
document.write("<br><br> Number of characters in the string: " + str.length);  
      </script>        
   </body>  
</html>  
 */