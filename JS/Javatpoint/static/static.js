/*

JavaScript static Method
The JavaScript provides static methods that belong to the class instead of an instance of that class. So, an instance is not required to call the static method. These methods are called directly on the class itself.

Points to remember
The static keyword is used to declare a static method.
The static method can be of any name.
A class can contain more than one static method.
If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
The static method can be used to create utility functions.
We can use this keyword to call a static method within another static method.
We cannot use this keyword directly to call a static method within the non-static method. In such case, we can call the static method either using the class name or as the property of the constructor.
JavaScript static Method Example 1
Let's see a simple example of a static method.

<script>  
class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
}  
document.writeln(Test.display());  
</script>  

*/

/*

Example 2
Le's see an example to invoke more than one static method.

<script>  
class Test  
{  
  static display1()  
  {  
    return "static method is invoked"  
  }  
  static display2()  
  {  
    return "static method is invoked again"  
  }  
}  
document.writeln(Test.display1()+"<br>");  
document.writeln(Test.display2());  
</script>  

*/

/*

Example 3
Let's see an example to invoke more than one static method with similar names.

<script>  
class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
  static display()  
  {  
    return "static method is invoked again"  
  }  
}  
document.writeln(Test.display());  
</script>  

*/

/**
 * 
 * 
 * 
 * 
 * 
 * Example 4
Let's see an example to invoke a static method within the constructor.

<script>  
class Test {  
  constructor() {  
  document.writeln(Test.display()+"<br>");   
  document.writeln(this.constructor.display());   
  }  
  
  static display() {  
      return "static method is invoked"  
  }  
}  
var t=new Test();  
</script>  
 */


/**
 * 
 * Example 5
Let's see an example to invoke a static method within the non-static method.

<script>  
class Test {  
  static display() {  
      return "static method is invoked"  
  }  
    
 show() {  
  document.writeln(Test.display()+"<br>");   
  }    
}  
var t=new Test();  
t.show();  
</script>  


 */