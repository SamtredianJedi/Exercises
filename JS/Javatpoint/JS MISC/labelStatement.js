/**
 * 
 * JavaScript label statement
JavaScript label is a statement used to prefix a label as an identifier. You can specify the label by any name other than the reserved words. It is simply used with a colon (:) in code.

A label can be used with a break or continue statement to control the flow of the code more precisely. The label is applied to a block of code or a statement.

Using some examples, we will learn how to define and use the label statement in JavaScript.

Syntax
label: statements  
Parameters
label: It is a JavaScript identifier. Define it by any name that is not a reserved keyword.

Statements: It is a JavaScript statement, where break is simply used with the labelled statement and continue with looping labelled statement.

Examples
Let's understand the JavaScript label that how it works and helps to break or continue with the looping statement with the help of different examples.

Example: Label with for loop to break
In this example, we will define two labels by the name innerloop and outerloop, which is used with for loop to break the execution of the loop for a specified condition.

Copy Code

<html>  
<body>  
<script>  
var i, j;  
//Execution of outerloop and innerloop using label  
document.write("Entering the loop!<br /> ");  
  
outerloop:      // This is the label name for the below loop  
for (i = 0; i < 5; i++) {  
   document.write("<b> Outerloop i: </b>" + i + "</br>");  
   innerloop:  //another label  
   for (j = 0; j <= 4; j++) {  
        //when j is greater than 3, quit the innermost loop  
        if (j > 3 ) {  
            document.write("<b> Break innermost loop when j>3 </b></br>");  
            break ;    
        }  
        // when i = 2, exit from innerloop  
        if (i == 2) {  
            document.write("<b> Break innerloop when i=2 </b></br>");  
            break innerloop;   
        }  
        // when i = 4, exit from outerloop too  
        if (i == 4) {  
            document.write("<b> Break outerloop when i=4 </b></br>");  
            break outerloop;   
        }  
        document.write("Innerloop execution j: " + j + " <br />");  
   }  
}  
document.write("Exit from all loops! </br> ");  
</script>  
</body>  
</html>  
 */

/**
 * 
 * Example: Label with for loop to continue
In this example, we will again define two labels by the name innerloop and outerloop. But now they are used with for loop to continue the execution of the loop when the specified condition occurs.

Copy Code

<html>  
<body>  
<script>  
var i,j;  
//Execution of loops using outerloop and innerloop label  
document.write("Entering the loop! </br> ");  
  
outerloop: // This is the label name  
for (i = 0; i < 4; i++) {  
    document.write("<b> Outerloop: </b>" + i + "</br>");  
    innerloop:  
    for (j = 0; j < 4; j++) {  
    if (i > 2) {  
                document.write("<b> Continue Innerloop when i>2 </b></br>");  
        continue innerloop;  
    }  
          
            if (j == 3) {  
                document.write("<b> Continue Outerloop when j=3 </b></br>");  
        continue outerloop;  
    }  
    document.write("Innerloop execution: " + j + "<br />");  
     }  
}  
document.write("Exit from all loops!<br /> ");  
</script>  
</body>  
</html>  
 */