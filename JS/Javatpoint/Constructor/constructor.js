/*
JavaScript Constructor Method
A JavaScript constructor method is a special type of method which is used to initialize and create an object. It is called when memory is allocated for an object.

Points to remember
The constructor keyword is used to declare a constructor method.
The class can contain one constructor method only.
JavaScript allows us to use parent class constructor through super keyword.
Constructor Method Example
Let's see a simple example of a constructor method.

<script>  
class Employee {  
  constructor() {  
    this.id=101;  
    this.name = "Martin Roy";  
  }   
}  
var emp = new Employee();  
document.writeln(emp.id+" "+emp.name);  
</script>  


*/

/*

Constructor Method Example: super keyword
The super keyword is used to call the parent class constructor. Let's see an example.

<script>  
class CompanyName  
{  
  constructor()  
  {  
    this.company="Javatpoint";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
document.writeln(emp.id+" "+emp.name+" "+emp.company);  
</script>  
*/