// Java Program to Check if a Number is Positive or Negative


In this section, we will write the Java programs to check if a number is positive or negative. We have used the following ways to check the number is positive, negative, or zero.

Using Relational Operator
Using Math.signum() Method
Using Integer.signum() Method
Using Bit Shift Operator
Using ArrayList class
Using Relational Operator
To check the positive and negative of a number, we have implemented the following logic in the Java program.

If number>0 the number is positive.
If number<0 the number is negative.
If a number is neither positive nor negative, the number is equal to 0.

Let's implement the above logic in a Java program using the if-else statement.

In the following program, we have initialized a number and used the if-else statement to check if a number is positive or negative.

CheckPositiveOrNegativeExample1.java

public class CheckPositiveOrNegativeExample1  
{  
public static void main(String[] args)   
{  
//number to be check  
int num=912;  
//checks the number is greater than 0 or not  
if(num>0)  
{  
System.out.println("The number is positive.");  
}  
//checks the number is less than 0 or not  
else if(num<0)  
{  
System.out.println("The number is negative.");  
}  
//executes when the above two conditions return false  
else  
{  
System.out.println("The number is zero.");  
}  
}  
}  

In the following program, we have taken a number from the user and used the if-else statement to check if a number is positive or negative.

CheckPositiveOrNegativeExample2.java

import java.util.Scanner;  
public class CheckPositiveOrNegativeExample2  
{  
public static void main(String[] args)   
{  
int num;  
//object of the Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number: ");  
//reading a number from the user  
num = sc.nextInt();  
//checks the number is greater than 0 or not  
if(num>0)  
{  
System.out.println("The number is positive.");  
}  
//checks the number is less than 0 or not  
else if(num<0)  
{  
System.out.println("The number is negative.");  
}  
//executes when the above two conditions return false  
else  
{  
System.out.println("The number is zero.");  
}  
}  
}  


Using Math.signum() Method
There is an alternate way to check if a number is positive or negative. Java Math class provides the signum() method to check if a number is positive or negative. It is a static method that accepts a parameter of double type.

Syntax:

public static double signum(double d)  
Where d is a parameter whose signum is to be returned. It returns the signum function of the argument, as follows:

0.0: if the argument is 0.
1.0: if the argument>0.
-1.0: if the argument<0.

Special Cases:

NaN: if the argument is NaN.

Argument: if the argument is positive or negative zero.

It is an overloaded method, so the Math class also provides a signum() method that accepts a float value to check if a number is positive or negative.

Syntax:

public static float signum(float f)  
Let's use the signum() method in a Java program.

CheckPositiveOrNegativeExample3.java

import java.util.Scanner;  
import java.lang.Math.*;  
public class CheckPositiveOrNegativeExample3  
{  
public static void main(String[] args)   
{  
double num, result;  
//object of the Scanner class   
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number you want to check: ");  
//reading an input from the user  
num = sc.nextDouble();  
//invoking signum() method of the Math class  
result=Math.signum(num);  
//print the result  
System.out.print(result);  
}  
}  

Using Integer.signum() Method
Java Integer class also provides the signum() method to check if a number is positive or negative. It is a static method that accepts a parameter of integer type.

Syntax:

public static int signum(int i)  
Where i is a parameter whose signum is to be returned. It returns the signum function of the argument, as follows:

the argument, as follows:
0: if the argument is 0.
1: if the argument>0.
-1: if the argument<0.

Let's use the Integer.signum() method in a Java program.

CheckPositiveOrNegativeExample4.java

import java.util.Scanner;  
import java.lang.Integer.*;  
public class CheckPositiveOrNegativeExample4  
{  
public static void main(String[] args)   
{  
int num, result;  
//object of the Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number you want to check: ");  
//taking an integer value from the user  
num = sc.nextInt();  
//invoking signum() method of the Integer class  
result=Integer.signum(num);  
//prints the result  
System.out.print(result);  
}  
}  


Using Bit Shift Operator
In Java, the integers are stored in the 2's complement. We know that the highest bit of any negative number is 1, and the highest bit of any other number is 0.

In the following program, the bit shift operator (num>>31) copies the highest bit to every other bit. Therefore, the negative number becomes 11111111 11111111 11111111 11111111, and the positive or zero numbers become 00000000 00000000 00000000 00000000. The operator & sets the lowest bit to 0. Hence, the combination of [(num >> 31) & 1] reads only the highest bit of num. Note that it considers 0 as a positive number.

CheckPositiveOrNegativeExample5.java

import java.util.Scanner;  
public class CheckPositiveOrNegativeExample5  
{  
public static void main(String[] args)   
{  
int num, result;  
//object of the Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number you want to check: ");  
//taking an integer value from the user  
num = sc.nextInt();  
//string array that contains results  
String[] result = {"Positive", "Negative"};  
//checks if the number is positive or negative  
System.out.println(result [(num >> 31) & 1]);  
}  
}  

Let's see another logic to check if the number is positive or negative.

Using ArrayList Class
In the following example, we have created a static method named positiveOrNegative(). It accepts a parameter n of type int. We have created an object of ArrayList class for storing the result positive, negative, and zero. After that, a for loop is used that populates the ArrayList with elements Positive for n elements. If n is positive n will be the index in the ArrayList and return the element Positive as the result. If n is negative, it will never exist in an index of the ArrayList.

CheckPositiveOrNegativeExample6.java

import java.util.*;  
public class CheckPositiveOrNegativeExample6  
{  
public static void main(String[] args)   
{  
//invoking method and prints the corresponding result  
//parsing a positive value as a parameter  
System.out.println(positiveOrNegative(42));  
//parsing zero as a parameter  
System.out.println(positiveOrNegative(0));   
//parsing a negative value as a parameter  
System.out.println(positiveOrNegative(-190));   
}  
//method to check if the number is positive or negative  
public static String positiveOrNegative(int n)   
{  
//object of the ArrayList class   
ArrayList<String> result = new ArrayList<String>();  
//if n is 0, the response is Zero  
//adds zero to the list  
result.add("Zero");  
//the loop populates the ArrayList with elements "Positive" for n elements  
for(int i=0; i<n; i++)   
{  
//adds result to the list  
result.add("Positive");  
}  
String result="";  
//try-catch block for the get() method because it throws IndexOutOfBoundsException  
try   
{  
//the get() method returns the element at the specified position in this list  
result=result.get(n);  
}   
catch (Exception e)   
{  
//if the index is out of bounds, it must be negative  
result="Negative";  
}  
//returns the result  
return result;  
}  
}  

Let's see another logic to check if the number is positive or negative.

CheckPositiveOrNegativeExample7.java

public class CheckPositiveOrNegativeExample7  
{  
public static void main(String[] args)   
{  
System.out.println(positiveOrNegative(111));   
System.out.println(positiveOrNegative(-444));   
}  
//method to check the number positive or negative  
public static String positiveOrNegative(int n)   
{  
//array of result that contains string Negative, Zero, and Positive  
String[] results = {"Negative", "Zero", "Positive"};  
//logic to check if the number is positive or negative and return the string as result  
return results[1+(1+((n+1)%n)*((n-1)%n))/n];  
}  
}  

In this section, we have discussed a lot of ways to check if a number is positive or negative. But we recommend you to use the relation operator to check the number is positive or negative.