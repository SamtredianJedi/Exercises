/* 

The document object represents the whole html document.

When html document is loaded in the browser, it becomes a document object. It is the root element that represents the html document. It has properties and methods. By the help of document object, we can add dynamic content to our web page.

As mentioned earlier, it is the object of window. So

*/

/*

Methods of document object
We can access and change the contents of document by its methods.

The important methods of document object are as follows:

Method	Description
write("string")	writes the given string on the doucment.
writeln("string")	writes the given string on the doucment with newline character at the end.
getElementById()	returns the element having the given id value.
getElementsByName()	returns all the elements having the given name value.
getElementsByTagName()	returns all the elements having the given tag name.
getElementsByClassName()	returns all the elements having the given class name.
Accessing field value by document object
In this example, we are going to get the value of input text by user. Here, we are using document.form1.name.value to get the value of name field.

Here, document is the root element that represents the html document.

form1 is the name of the form.

name is the attribute name of the input text.

value is the property, that returns the value of the input text.

Let's see the simple example of document object that prints name with welcome message.

<script type="text/javascript">  
function printvalue(){  
var name=document.form1.name.value;  
alert("Welcome: "+name);  
}  
</script>  
  
<form name="form1">  
Enter Name:<input type="text" name="name"/>  
<input type="button" onclick="printvalue()" value="print name"/>  
</form>  

*/

// document.getElementById() method

// function getcube(){  
//     var number=document.getElementById("number").value;  
//     alert(number*number*number);  
//     }  

//     <form>  
//     Enter No:<input type="text" id="number" name="number"/><br/>  
//     <input type="button" value="cube" onclick="getcube()"/>  



/*


GetElementsByClassName()
The getElementsByClassName() method is used for selecting or getting the elements through their class name value. This DOM method returns an array-like object that consists of all the elements having the specified classname. On calling the getElementsByClassName() method on any particular element, it will search the whole document and will return only those elements which match the specified or given class name.

Syntax
var ele=document.getELementsByClassName('name');  
Here, name is the mandatory argument to be passed. It is the string that specifies either a single classname or multiple class names to match.

Example of getElementsByClassName() Method
Let's look at some examples to know and understand the practical implementation of the method.

Example

It is a simple class implementation that returns an array-like object on invoking the variable x.

<html>  
<head> <h5>DOM Methods </h5> </head>  
<body>  
<div class="Class">  
This is a simple class implementation  
</div>  
<script type="text/javascript">  
var x=document.getElementsByClassName('Class');  
document.write("On calling x, it will return an arrsy-like object: <br>"+x);  
</script>  
</body>  
</html>  

*/

/*

Example of document.getElementsByName() method
In this example, we going to count total number of genders. Here, we are using getElementsByName() method to get all the genders.

<script type="text/javascript">  
function totalelements()  
{  
var allgenders=document.getElementsByName("gender");  
alert("Total Genders:"+allgenders.length);  
}  
</script>  
<form>  
Male:<input type="radio" name="gender" value="male">  
Female:<input type="radio" name="gender" value="female">  
  
<input type="button" onclick="totalelements()" value="Total Genders">  
</form>  

*/

/*

Example of document.getElementsByTagName() method
In this example, we going to count total number of paragraphs used in the document. To do this, we have called the document.getElementsByTagName("p") method that returns the total paragraphs.

<script type="text/javascript">  
function countpara(){  
var totalpara=document.getElementsByTagName("p");  
alert("total p tags are: "+totalpara.length);  
  
}  
</script>  
<p>This is a pragraph</p>  
<p>Here we are going to count total number of paragraphs by getElementByTagName() method.</p>  
<p>Let's see the simple example</p>  
<button onclick="countpara()">count paragraph</button>

*/

/*

Another example of document.getElementsByTagName() method
In this example, we going to count total number of h2 and h3 tags used in the document.

<script type="text/javascript">  
function counth2(){  
var totalh2=document.getElementsByTagName("h2");  
alert("total h2 tags are: "+totalh2.length);  
}  
function counth3(){  
var totalh3=document.getElementsByTagName("h3");  
alert("total h3 tags are: "+totalh3.length);  
}  
</script>  
<h2>This is h2 tag</h2>  
<h2>This is h2 tag</h2>  
<h3>This is h3 tag</h3>  
<h3>This is h3 tag</h3>  
<h3>This is h3 tag</h3>  
<button onclick="counth2()">count h2</button>  
<button onclick="counth3()">count h3</button>  

*/