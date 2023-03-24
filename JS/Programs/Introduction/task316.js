// JavaScript: Construct a pattern, using a nested for loop

/**
 * 
 * 
 * 
 * JavaScript Conditional Statement and loops: Exercise-10 with Solution
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *





Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS nested for loop example</title>
</head>
<body>
  
</body>
</html>





JavaScript Code:

var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}



Live Demo:


html:




<head>
<meta charset=utf-8 />
<title>JS nested for loop example</title>
</head>
<body>
  
</body>



js:




var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}


 */