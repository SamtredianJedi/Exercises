// How to Create Object in Java



The object is a basic building block of an OOPs language. In Java, we cannot execute any program without creating an object. There is various way to create an object in Java that we will discuss in this section, and also learn how to create an object in Java.

Java provides five ways to create an object.

Using new Keyword
Using clone() method
Using newInstance() method of the Class class
Using newInstance() method of the Constructor class
Using Deserialization
Using new Keyword
Using the new keyword is the most popular way to create an object or instance of the class. When we create an instance of the class by using the new keyword, it allocates memory (heap) for the newly created object and also returns the reference of that object to that memory. The new keyword is also used to create an array. The syntax for creating an object is:

ClassName object = new ClassName();  
Let's create a program that uses new keyword to create an object.

CreateObjectExample1.java

public class CreateObjectExample1   
{    
void show()    
{    
System.out.println("Welcome to javaTpoint");    
}    
public static void main(String[] args)   
{    
//creating an object using new keyword   
CreateObjectExample1 obj = new CreateObjectExample1();   
//invoking method using the object  
obj.show();    
}    
}   

By using the new keyword, we can also invoke the constructor (default or parametrized) of the class.

CreateObjectExample2.java

public class CreateObjectExample2  
{  
//constructor of the class    
CreateObjectExample2()    
{    
System.out.println("Welcome to javaTpoint");    
}    
public static void main(String[] args)   
{    
//creating an object using new keyword   
CreateObjectExample2 obj = new CreateObjectExample2();   
}    
}   

Using clone() Method
The clone() method is the method of Object class. It creates a copy of an object and returns the same copy. The JVM creates a new object when the clone() method is invoked. It copies all the content of the previously created object into new one object. Note that it does not call any constructor. We must implement the Cloneable interface while using the clone() method. The method throws CloneNotSupportedException exception if the object's class does not support the Cloneable interface. The subclasses that override the clone() method can throw an exception if an instance cannot be cloned.

Note: The method creates a copy of the object not a new object.
Syntax:

protected Object clone() throws CloneNotSupportedException  
We use the following statement to create a new object.

ClassName newobject = (ClassName) oldobject.clone();

CreateObjectExample3.java

public class CreateObjectExample3 implements Cloneable   
{   
@Override  
protected Object clone() throws CloneNotSupportedException   
{   
//invokes the clone() method of the super class      
return super.clone();   
}   
String str = "New Object Created";   
public static void main(String[] args)   
{  
//creating an object of the class     
CreateObjectExample3 obj1 = new CreateObjectExample3();   
//try catch block to catch the exception thrown by the method  
try  
{  
//creating a new object of the obj1 suing the clone() method  
CreateObjectExample3 obj2 = (CreateObjectExample3) obj1.clone();   
System.out.println(obj2.str);   
}   
catch (CloneNotSupportedException e)   
{   
e.printStackTrace();   
}   
}   
}  

Using newInstance() Method of Class class
The newInstance() method of the Class class is also used to create an object. It calls the default constructor to create the object. It returns a newly created instance of the class represented by the object. It internally uses the newInstance() method of the Constructor class.

Syntax:

public T newInstance() throws InstantiationException, IllegalAccessException  
It throws the IllegalAccessException, InstantiationException, ExceptionInInitializerError exceptions.

We can create an object in the following ways:

ClassName object = ClassName.class.newInstance();  
Or

ClassName object = (ClassName) Class.forName("fully qualified name of the class").newInstance();  
In the above statement, forName() is a static method of Class class. It parses a parameter className of type String. It returns the object for the class with the fully qualified name. It loads the class but does not create any object. It throws ClassNotFoundException if the class cannot be loaded and LinkageError if the linkage fails.

To create the object, we use the newInstance() method of the Class class. It works only when we know the name of the class and the class has a public default constructor.

In the following program, we have creates a new object using the newInstance() method.

CreateObjectExample4.java

public class CreateObjectExample4  
{   
void show()    
{    
System.out.println("A new object created.");    
}    
public static void main(String[] args)   
{   
try  
{  
//creating an instance of Class class  
Class cls = Class.forName("CreateObjectExample4");   
//creates an instance of the class using the newInstance() method  
CreateObjectExample4 obj = (CreateObjectExample4) cls.newInstance();   
//invoking the show() method  
obj.show();   
}   
catch (ClassNotFoundException e)   
{   
e.printStackTrace();   
}   
catch (InstantiationException e)   
{   
e.printStackTrace();   
}   
catch (IllegalAccessException e)   
{   
e.printStackTrace();   
}   
}   
}  

Using newInstance() Method of Constructor class
It is similar to the newInstance() method of the Class class. It is known as a reflective way to create objects. The method is defined in the Constructor class which is the class of java.lang.reflect package. We can also call the parameterized constructor and private constructor by using the newInstance() method. It is widely preferred in comparison to newInstance() method of the Class class.

Syntax:

public T newInstance(Object... initargs) throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException  
The method parses an array of Objects as an argument. The values of primitive types wrapped in a wrapper Object of the appropriate type. It returns a new object created by calling the constructor. It throws IllegalAccessException, IllegalArgumentException, InstantiationException, InvocationTargetException, ExceptionInInitializerError Exceptions.

We can create an object in the following way:

Constructor<Employee> constructor = Employee.class.getConstructor();   
Employee emp3 = constructor.newInstance();  
Let's create a program that creates an object using the newInstance() method.

CreateObjectExample5.java

import java.lang.reflect.*;   
public class CreateObjectExample5  
{   
private String str;   
CreateObjectExample5()   
{   
}   
public void setName(String str)   
{   
this.str = str;   
}   
public static void main(String[] args)   
{   
try  
{   
Constructor<CreateObjectExample5> constructor = CreateObjectExample5.class.getDeclaredConstructor();   
CreateObjectExample5 r = constructor.newInstance();   
r.setName("JavaTpoint");   
System.out.println(r.str);   
}   
catch (Exception e)   
{   
e.printStackTrace();   
}   
}   
}  

Using Deserialization
In Java, serialization is the process of converting an object into a sequence of byte-stream. The reverse process (byte-stream to object) of serialization is called deserialization. The JVM creates a new object when we serialize or deserialize an object. It does not use constructor to create an object. While using deserialization, the Serializable interface (marker interface) must be implemented in the class.

Serialization: The writeObject() method of the ObjectOutputStream class is used to serialize an object. It sends the object to the output stream.

Syntax:

public final void writeObject(object x) throws IOException  
Deserialization: The method readObject() of ObjectInputStream class is used to deserialize an object. It references objects out of a stream.

Syntax:

public final Object readObject() throws IOException,ClassNotFoundException  
Note: Make the filed static or transient if we do not want to include a field as a part of the object. It will not include in the serialization process.
Let's understand the serialization and deserialization through a program.

Employee.java

import java.io.Serializable;    
public class Employee implements Serializable  
{    
int empid;    
String empname;    
public Empoyee(int empid, String empname)   
{    
this.empid = empid;    
this.empname = empname;    
}    
}  

We have created a class named Employee whose object is to be serialized and deserialized.

Serialization of Java Object:
In the following program, we have serialized an object of Employee class by using the writeObject() method of the ObjectOutputStream class. The state of the object is saved in the employee.txt file.

SerializationExample.java

import java.io.*;    
class SerializationExample   
{    
public static void main(String args[])  
{    
Try  
{    
//Creating the object    
Employee emp = new Employee(198054,"Andrew");    
//Creates a stream and writes the object    
FileOutputStream fout=new FileOutputStream("employee.txt");    
ObjectOutputStream out=new ObjectOutputStream(employeeout);    
out.writeObject(emp);    
out.flush();    
//closes the output stream    
out.close();    
System.out.println("Successfully Created");    
}  
catch(Exception e)  
{  
System.out.println(e);  
}    
}    
}    

Deserialization of Java Object:
In the following program, we going to deserialize an object that we have serialized in the above program.

DeserializationExample.java

import java.io.*;    
class DeserializationExample   
{    
public static void main(String args[])  
{    
try  
{    
//Creating a stream to read the object    
ObjectInputStream in=new ObjectInputStream(new FileInputStream("employee.txt"));    
Employee e=(Employee)in.readObject();    
//prints the data of the serialized object    
System.out.println(e.empid+" "+e.empname);    
//closing the input stream    
in.close();    
}  
catch(Exception e)  
{  
System.out.println(e);  
}    
}    
}    

In the above five methods, we have noticed that the new keyword and both newInstance() methods use the constructor to create objects, while the rest two methods do not use the constructor.

