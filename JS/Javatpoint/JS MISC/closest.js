/**
 * 
 * JavaScript closest()
The closest() method in JavaScript is used to retrieve the closest ancestor, or parent of the element matches the selectors. If there is no ancestor found, the method returns null.

This method traverses the element and its parents in the document tree, and the traversing continues until the first node is found that matches the provided selector string.

Syntax
targetElement.closest(selectors);  
In the above syntax, selectors is a string containing a selector (like p:hover, etc.) used to find a node.

Let's understand this method by using some illustrations.

Example1
In this example, there are three div elements and a heading on which we are applying the closest() method. Here, the selectors that we are using are the id selector, descendant selector, child selector, and :not selector.

<!DOCTYPE html>   
<html>   
  
<head>   
</head>   
  
<body>  
  <div id = "div1"> This is the first div element.   
      <h3 id = "h"> This is a heading inside the div. </h3>  
      <div id = "div2"> This is the div inside the div element.   
      <div id = "div3"> This is the div element inside the second div element. </div>  
      </div>  
  </div>  
  
    <script>   
          
var val1 = document.getElementById("div3");  
  
var o1 = val1.closest("#div1");    
  
var o2 = val1.closest("div div");    
  
var o3 = val1.closest("div > div");    
  
var o4 = val1.closest(":not(#div3)");  
console.log(o1);  
console.log(o2);  
console.log(o3);  
console.log(o4);  
  
  
    </script>   
</body>   
  
</html>  
 */


/**
 * 
 * Example2
This is another example of using JavaScript's closest() method.

<!DOCTYPE html>  
<html>  
  
<head>  
</head>  
  
<body>  
<div id = "div1"> This is the div element.  
<p id = "p1"> This is the paragraph element inside the div element.  
<h3 id = "h"> This is the child of the paragraph element.  
<p id = "p2"> This is the child of heading element of the paragraph element. </p>  
</h3>  
</p>  
</div>  
  
<script>  
  
var val1 = document.getElementById("p2");  
  
var o1 = val1.closest("p");  
  
var o2 = val1.closest("h3");  
  
var o3 = val1.closest("div");  
  
console.log(o1);  
console.log(o2);  
console.log(o3);  
  
  
</script>  
</body>  
  
</html>  
 */