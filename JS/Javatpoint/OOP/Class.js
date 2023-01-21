/*

Class Declarations
A class can be defined by using a class declaration. A class keyword is used to declare a class with any particular name. According to JavaScript naming conventions, the name of the class always starts with an uppercase letter.

Class Declarations Example
Let's see a simple example of declaring the class.

<script>  
//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
</script>  

*/

/*

Class Declarations Example: Hoisting
Unlike function declaration, the class declaration is not a part of JavaScript hoisting. So, it is required to declare the class before invoking it.

Let's see an example.

<script>  
//Here, we are invoking the class before declaring it.  
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
  
//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
</script>  

*/

/*

Class Declarations Example: Re-declaring Class
A class can be declared once only. If we try to declare class more than one time, it throws an error.

Let's see an example.

<script>  
//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
//Re-declaring class  
class Employee  
  {  
  }  
</script>  

*/

/*

Class expressions
Another way to define a class is by using a class expression. Here, it is not mandatory to assign the name of the class. So, the class expression can be named or unnamed. The class expression allows us to fetch the class name. However, this will not be possible with class declaration.

Unnamed Class Expression
The class can be expressed without assigning any name to it.

Let's see an example.

<script>  
var emp = class {  
  constructor(id, name) {  
    this.id = id;  
    this.name = name;  
  }  
};  
document.writeln(emp.name);  
</script>  

*/

// Class Expression Example: Re-declaring Class
// Unlike class declaration, the class expression allows us to re-declare the same class. So, if we try to declare the class more than one time, it throws an error.

// <script>  
// //Declaring class  
// var emp=class   
//   {  
// //Initializing an object  
//     constructor(id,name)  
//     {  
//       this.id=id;  
//       this.name=name;  
//     }  
// //Declaring method      
// detail()  
//     {  
//   document.writeln(this.id+" "+this.name+"<br>")  
//     }  
//   }  
// //passing object to a variable   
// var e1=new emp(101,"Martin Roy");  
// var e2=new emp(102,"Duke William");  
// e1.detail(); //calling method  
// e2.detail();  

// //Re-declaring class  
// var emp=class   
//   {  
// //Initializing an object  
//     constructor(id,name)  
//     {  
//       this.id=id;  
//       this.name=name;  
//     }  
//     detail()  
//     {  
//   document.writeln(this.id+" "+this.name+"<br>")  
//     }  
//   }  
// //passing object to a variable   
// var e1=new emp(103,"James Bella");  
// var e2=new emp(104,"Nick Johnson");  
// e1.detail(); //calling method  
// e2.detail();  
// </script>  

/*

/*

Named Class Expression Example
We can express the class with the particular name. Here, the scope of the class name is up to the class body. The class is retrieved using class.name property.

<script>  
var emp = class Employee {  
  constructor(id, name) {  
    this.id = id;  
    this.name = name;  
  }  
};  
document.writeln(emp.name);  
/*document.writeln(Employee.name);  
Error occurs on console:  
"ReferenceError: Employee is not defined  
*/