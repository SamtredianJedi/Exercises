/*

JavaScript Prototype Object Example 1
Let's see an example to add a new method to the constructor function.

<script>  
function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
document.writeln(employee1.fullName()+"<br>");  
document.writeln(employee2.fullName());  
</script>  

*/

/*

Example 2
Let's see an example to add a new property to the constructor function.

<script>  
function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.company="Javatpoint"  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
document.writeln(employee1.firstName+" "+employee1.lastName+" "+employee1.company+"<br>");  
document.writeln(employee2.firstName+" "+employee2.lastName+" "+employee2.company);  
</script>

*/