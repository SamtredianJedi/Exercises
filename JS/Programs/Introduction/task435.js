// JavaScript: Add items in a blank array and display the items

/**
 * 
 * 
 * 
 * JavaScript Array: Exercise-13 with Solution
Write a JavaScript program to add items to a blank array and display them.






HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
<style>
body {padding-top:50px} 
</style> 
</head>
<body>
<input type="text" id="text1"></input>
<input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
<input type="button" id="button2" value="Display" onclick="display_array();"></input>
<div id="Result"></div> 
</body>
</html>




JavaScript Code:

var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}






ES6 Version:

let x = 0;
const array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert(`Element: ${array[x]} Added at index ${x}`);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   let e = "<hr/>";   
    
   for (let y=0; y<array.length; y++)
   {
     e += `Element ${y} = ${array[y]}<br/>`;
   }
   document.getElementById("Result").innerHTML = e;
}





Live Demo:


js:


var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}



 */