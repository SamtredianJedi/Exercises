/**
 * 
 * JavaScript this keyword
The this keyword is a reference variable that refers to the current object. Here, we will learn about this keyword with help of different examples.

JavaScript this Keyword Example
Let's see a simple example of this keyword.

<script>  
var address=  
{  
company:"Javatpoint",  
city:"Noida",  
state:"UP",  
fullAddress:function()  
{  
return this.company+" "+this.city+" "+this.state;  
}  
};  
  
  
var fetch=address.fullAddress();  
document.writeln(fetch);  
  
</script>  


The following ways can be used to know which object is referred by this keyword.

 */


/**
 * 
 * Global Context
In global context, variables are declared outside the function. Here, this keyword refers to the window object.

<script>  
var website="Javatpoint";  
function web()  
{  
document.write(this.website);  
}  
web();  
</script>  
The call() and apply() method
The call() and apply() method allows us to write a method that can be used on different objects.

<script>  
var emp_address = {  
    fullAddress: function() {  
        return this.company + " " + this.city+" "+this.state;  
    }  
}  
var address = {  
    company:"Javatpoint",  
    city:"Noida",  
    state:"UP",  
  
}  
  
document.writeln(emp_address.fullAddress.call(address));   
document.writeln(emp_address.fullAddress.apply(address));</script>  
 */

/**
 * 
 * The bind() Method
The bind() method was introduced in ECMAScript 5. It creates a new function whose this keyword refers to the provided value, with a given sequence of arguments.

<script>  
var lang="Java";  
  
function lang_name(call)  
{  
  
    call();  
};  
  
var obj={  
    
  lang:"JavaScript",  
  language:function()  
  {  
    document.writeln(this.lang+ " is a popular programming language.");  
  }  
};  
lang_name(obj.language);  
lang_name(obj.language.bind(obj));  
</script>  
 */