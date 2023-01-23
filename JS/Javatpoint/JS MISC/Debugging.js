/**
 * 
 * JavaScript Debugging
Sometimes a code may contain certain mistakes. Being a scripting language, JavaScript didn't show any error message in a browser. But these mistakes can affect the output.

The best practice to find out the error is to debug the code. The code can be debugged easily by using web browsers like Google Chrome, Mozilla Firebox.

JavaScript Debugging Example
Here, we will find out errors using built-in web browser debugger. To perform debugging, we can use any of the following approaches:

Using console.log() method
Using debugger keyword
Using console.log() method
The console.log() method displays the result in the console of the browser. If there is any mistake in the code, it generates the error message.

Let's see the simple example to print the result on console.

<script>  
x = 10;  
y = 15;  
z = x + y;  
console.log(z);  
console.log(a);//a is not intialized  
</script>  
 */

/**
 * 
 * Using debugger keyword
In debugging, generally we set breakpoints to examine each line of code step by step. There is no requirement to perform this task manually in JavaScript.

JavaScript provides debugger keyword to set the breakpoint through the code itself. The debugger stops the execution of the program at the position it is applied. Now, we can start the flow of execution manually. If an exception occurs, the execution will stop again on that particular line.

<script>  
x = 10;  
y = 15;  
z = x + y;  
debugger;  
document.write(z);  
document.write(a);  
</script>  
 */