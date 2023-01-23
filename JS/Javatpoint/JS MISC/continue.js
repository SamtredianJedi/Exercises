/**
 * 
 * JavaScript continue statement
There is full control to handle loop statements in JavaScript. Sometimes, a situation occurs when we require to skip some code of the loop and move to the next iteration. It can be achieved by using JavaScript's continue statement.

The continue statement in JavaScript is used to jumps over an iteration of the loop. Unlike the break statement, the continue statement breaks the current iteration and continues the execution of next iteration of the loop. It can be used in for loop, while loop, and do-while loop. When it is used in a while loop, then it jumps back to the condition. If it is used in for loop, the flow moves to the update expression.

When we apply the continue statement, the program's flow immediately moves to the conditional expression, and if the condition is true, then the next iteration will be started; otherwise, the control exits the loop.

Syntax
continue;  
OR  
continue[label];  // Using the label reference   
It can be used with or without the label reference. The label is an identifier name for a statement. It is optional.

Let's understand the continue statement using some examples.

Example1
In this example, we are using the continue statement in the for loop. Here the iteration of the loop begins with 1 and ends at 7. There is a conditional statement that checks when the iteration reaches at 4. When it is reached to 4, the iteration is skipped due to the continue statement and moves to the next iteration.

<!DOCTYPE html>   
<html>   
<head>   
</head>   
<body>   
    <h1> Example of the continue statement in JavaScript</h1>  
    <h3> Here, you can see that "a == 4" is skipped. </h3>   
    <p id = "para">   
          
    </p>   
    <script>   
    var res = "";  
var a;  
for (a = 1; a <=7; a++) {  
  if (a == 4) {  
    continue;  
  }  
  res += "The value of a is : " + a + "<br>";  
}  
document.getElementById("para").innerHTML = res;  
    </script>   
</body>   
  
</html>  
 */

/**
 * 
 * Example2
In this example, we are using the continue statement in the while loop. Here, we are defining an array 'rainbow'. The iteration of the loop begins with 0 and ends at the length of the array. There is a conditional statement using the OR (||) operator, which checks when the iteration reaches to the values 'Magenta' and 'Skyblue". When it is reached to the appropriate values, the iteration is skipped due to the continue statement and moves to the next iteration.

<!DOCTYPE html>  
<html>  
<head>  
    <title> JavaScript Continue Statement </title>  
</head>  
  
<body>  
    <h1> Example of the JavaScript Continue Statement </h1>  
    <h3> You can see that the arrray values "Magenta" and "Skyblue" are skipped. </h3>  
<script>  
var rainbow = ["Violet", "Indigo", "Magenta", "Blue", "Skyblue", "Green", "Yellow", "Orange", "Red"];  
var i = 0;  
var res = "";  
while(i < rainbow.length){  
  
  if (rainbow[i] == "Magenta" || rainbow[i] == "Skyblue") {  
    i++;  
    continue;  
  }  
  res = "";  
  res += rainbow[i] + "<br>";  
  i++;  
  document.write(res);  
}  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example3
In this example, we are using a label with the continue statement. There is a nested for loop in which the outer loop is labeled as 'label1' and the inner loop is labeled as 'label2'.

<!DOCTYPE html>  
<html>  
<body>  
<p> This is an example of the continue statement with the label </p>  
<p id="para"></p>  
<script>  
  var res = "";  
  var i, j;  
    
  label1:     // This loop is labeled as "label1"  
  for (i = 1; i <=5; i++) {  
  res += "<br>" + "i = " + i + ", j = ";  
    
    label2:    // This loop is labeled as "label2"  
    for (j = 1; j <= 4; j++) {  
      if (j == 2) {  
        continue label2;  
      }  
      document.getElementById("para").innerHTML = res += j + " ";  
    }  
  }  
</script>  
  
</body>  
</html>  
 */