// JavaScript: Extract unique characters from a string





/**
 * 
 * 
 * 
 * 
 * JavaScript Function: Exercise-16 with Solution
Write a JavaScript function to extract unique characters from a string.

Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Extract unique character from a string</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));





Live Demo:




<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Extract unique character from a string</title>
</head>
<body>

</body>
</html>


js:



function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {
​
 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));


 */