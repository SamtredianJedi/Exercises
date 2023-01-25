/**
 * 
 * JavaScript String trim()
The trim() is a built-in string function in JavaScript, which is used to trim a string. This function removes the whitespace from both the ends, i.e., start and end of the string. As the trim() is a string method, so it is invoked by an instance of the String class. We have to create an instance of String class with which the trim() method will be used.

Note - The trim() method does not change the original string; it just removes the leading and trailing whitespace character.
Syntax
The syntax of trim() method is as follows:

str.trim()  
Here, str is a String class of object that will contain the string to be trimmed.

Parameters
The trim() method does not have any arguments or parameters inside it.

Return Value
The string.trim() function returns the string after removing whitespace character from that string from the beginning and end of the string.

Examples
Below are some examples, which are using trim() function to remove the elements from it. In these examples, you will see how to use this JavaScript function. So, here are a few examples -

Example 1

In this example, we will pass a string containing whitespace at both ends.

<html>  
<body>  
<script>   
function func_trim() {   
     //original string with whitespace in beginning and end  
    var str = "     javatpoint tutorial website     ";   
  
    //string trimmed using trim()  
    var trimmedstr = str.trim();   
    document.write(trimmedstr);    
}   
func_trim();   
</script>  
</html>  
</body>  
 */

/**
 * 
 * Example 2

In this example, we will pass a string containing whitespace only at the end.

<html>  
<body>  
<script>   
function func_trim() {   
    //original string with whitespace at the end  
    var str = "javatpoint tutorial website      ";   
  
    //string trimmed using trim()  
    var trimmedstr = str.trim();   
    document.write(trimmedstr);    
}   
func_trim();   
</script>  
</html>  
</body>  
 */


/**
 * 
 * Example 3

In this example, we will pass a string containing whitespace only in the beginning.

<html>  
<body>  
<script>   
function func_trim() {  
    //original string with whitespace in beginning   
    var str = "        javatpoint tutorial website";   
   
    //string trimmed using trim()  
    var trimmedstr = str.trim();   
    document.write(trimmedstr);    
}   
func_trim();   
</script>  
</html>  
</body>  
 */

/**
 * 
 * JavaScript offers two more functions similar to the trim() method. They also used to trim the string but only from the one end, either left or right. Remember that both the functions do not change the original string; they just remove the whitespaces.

trimLeft()
trimRight()
trimLeft()
The trimLeft() method removes the whitespace only from the left of the string. To understand better, we can say that it removes whitespace only from the start and returns the string back without any leading whitespace character.

Syntax

str.trimLeft()  
 */


/**
 * 
 * Example 1

<html>  
<body>  
<script>   
function func_trim() {  
    //original string with whitespace in beginning   
    var str = "     javatpoint tutorial website    ";   
  
    //string trimmed using trimLeft()  
    var trimmedstr = str.trimLeft();   
    document.write(trimmedstr);    
}   
func_trim();   
</script>  
</html>  
</body>  
 */


/**
 * 
 * trimRight()
On the other hand, the trimRight() method removes the whitespace only from the right of the string. To understand better, we can say that it removes whitespace only from the end and returns the string back without any trailing whitespace character.

Syntax

str.trimRight()  
See the example below -

Example 1

<html>  
<body>  
<script>   
function func_trim() {  
    //original string with whitespace from the end   
    var str = "      javatpoint tutorial website       ";   
  
    //string trimmed using trimRight()  
    var trimmedstr = str.trimRight();   
    document.write(trimmedstr);    
}   
func_trim();   
</script>  
</html>  
</body>  
 */