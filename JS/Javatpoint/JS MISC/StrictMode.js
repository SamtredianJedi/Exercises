/**
 * 
 * JavaScript Strict Mode
Being a scripting language, sometimes the JavaScript code displays the correct result even it has some errors. To overcome this problem we can use the JavaScript strict mode.

The JavaScript provides "use strict"; expression to enable the strict mode. If there is any silent error or mistake in the code, it throws an error.

Note - The "use strict"; expression can only be placed as the first statement in a script or in a function.
JavaScript use strict Example
Example 1
Let's see the example without using strict mode.

<script>  
x=10;  
console.log(x);  
</script>  



Let's see the same example by enabling the strict mode.

<script>  
"use strict";  
x=10;  
console.log(x);  
</script>  
 */

/**
 * 
 * Example 2
Let's see one more example to print sum of two numbers.

<script>  
console.log(sum(10,20));  
function sum(a,a)  
{  
"use strict";  
return a+a;  
}  
</script>  
 */