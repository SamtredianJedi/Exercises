// JavaScript conditional statements and loops - Exercises, Practice, Solution


/**
 * 
 * JavaScript: Accept two integers and display the larger
Last update on January 20 2023 13:15:21 (UTC/GMT +8 hours)
JavaScript Conditional Statement and loops: Exercise-1 with Solution
Write a JavaScript program that accept two integers and display the larger.




Sample Solution:-

HTML Code:

<!DOCTYPE html> 
<html>
<head>
<meta charset=utf-8 />
<title>Write a JavaScript program that accept two integers and display the larger</title>
</head>
<body>
  
</body>
</html>




JavaScript Code:

var num1, num2;
//num1 = window.prompt("Input the First integer", "0");
//num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }


  
 */