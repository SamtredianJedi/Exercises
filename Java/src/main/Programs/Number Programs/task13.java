// Java Program to Check if a Given Number is Perfect Square

In this section, we have created a number of Java program to check if a given number is perfect square or not.

The perfect square or square number is a positive integer that is square of an integer. In other words, when we multiply two same numbers together, then the product that we get is called the perfect square. In short, it is the product of two positive equal integers or product of an integer with itself.

The property of the perfect square number is that it ends only with 0, 1, 4, 6, 9, and 25. The examples of perfect square are:

49=7*7
100=10*10
625=25*25

In Java, we can use the following way to check if a number is perfect square or not.

Using sqrt() method
Using User-Defined Logic
Using sqrt() Method
The approach, we have followed is:

First, find out the square root of the given number.
Calculate the floor value of the calculated square root.
Find the difference of the floor value with the square root that we have find in step 1.
At last, compare the value (that we get in step 3) with 0. If the value is equal to 0 the given number is perfect square, else not.
Let's understand the above stapes through an example.

Example: Check the number 324 is perfect square or not.

The square root of 324 is 18.
The floor value of the square root is 18.
The difference of square root and floor value is 0.
The difference is equal to 0. Hence, the given number is perfect square.

Let's implement the above steps in a Java program.

To find the square root and floor value of the number, we have used the following predefined methods of the Java Math class.

sqrt(): It is a static method of the Math class. We can call it directly by using the class name. It parses a parameter of type double. If we pass a number less than zero or NaN, it returns NaN. It returns a positive square root of a double value.

syntax:

public static double sqrt(double a)  
floor(): It is also a static method of the Math class. It calculates the floor value of the number. It parses a parameter of type double. It returns the largest (closest positive integer) floating-point value that is less than or equal to the argument and is equal to a mathematical integer.

syntax:

public static double floor(double a)  
In the following example, we have created a user-defined method named checkPerfectSquare(). It parses an argument of type double. The method contains the logic to check if a number is perfect square.

In the method, we have calculated the square root of the number by the Math.sqrt() method and store it in a variable named sqrt. After that, we have found the floor value of the calculated square root by the Math.floor() method. Along with this, we have found the difference between the two sqrt and floor value. The resultant of the difference compared with 0 and returns a Boolean value.

The returned value passed to the calling method (that is inside if statement). If the difference is equal to 0, the given number is perfect square, else not a perfect square.

CheckPerfectSquareExample1.java

import java.util.Scanner;  
public class CheckPerfectSquareExample1  
{   
//user-defined method that checks the number is perfect square or not  
static boolean checkPerfectSquare(double number)    
{   
//calculating the square root of the given number  
double sqrt=Math.sqrt(number);   
//finds the floor value of the square root and comparing it with zero  
return ((sqrt - Math.floor(sqrt)) == 0);   
}   
//main method  
public static void main(String[] args)    
{   
System.out.print("Enter any number: ");  
//object of the Scanner class  
Scanner sc=new Scanner(System.in);  
//reading a number of type double from the user  
double number=sc.nextDouble();   
//calling the user defined method  
if (checkPerfectSquare(number))   
System.out.print("Yes, the given number is perfect square.");   
else  
System.out.print("No, the given number is not perfect square.");   
}   
}   

Using User-Defined Logic
In the following example, we have not used any predefined method of the Java Math class. We have implemented own logic to check the perfect square.

CheckPerfectSquareExample2.java

import java.util.Scanner;  
public class CheckPerfectSquareExample2  
{  
public static void main(String[] args)   
{   
//object of the Scanner class  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter a number: ");   
//reading a number of type double from the user  
double number=sc.nextDouble();   
if (checkPerfectSquare(number))   
System.out.println("Yes, the given number is perfect square.");  
else  
System.out.print("No, the given number is not perfect square.");   
}  
//user-defined method that checks the number is perfect square or not   
static boolean checkPerfectSquare(double number)   
{   
for (int i=1; i*i<=number; i++)   
{   
//if (i * i = number)   
//comparing conditions using logical AND  
if((number%i==0) && (number/i==i))   
{   
//returns true if both conditions are true      
return true;   
}   
}   
//returns false if any one condition is false  
return false;   
}   
}  

In the following example, first we have calculated the remainder of the given number using the modulo operator. After that, we have compared the remainder with 2, 3, 7, and 8 using the Logical OR operator because the perfect square never ends with these numbers. If the number has the remainder 2, 3, 7, or 8, it cannot be the perfect square.

If the remainder of a number is 0, 1, 4, 6, and 9 it jumps to the for loop. For each iteration of i, we have calculated the i*i. If the square of i is equal to the entered number (n), the number is perfect square and it returns true, else returns false.

CheckPerfectSquareExample3.java

import java.util.*;  
public class CheckPerfectSquareExample3   
{  
public static void main(String[] args)   
{  
//object of the Scanner class      
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number: ");  
//reading an integer from the user  
int number = sc.nextInt();  
//method calling inside the print statement  
System.out.print("Is the number perfect square? " +checkPerfectSquare(number));  
}  
public static boolean checkPerfectSquare(int number)   
{  
//calculating the remainder of the given number using the modulo operator  
int x=number % 10;  
//comparing the value of x with 2, 3, 7, and 8 using the Logical OR operator  
//perfect square never end with 2, 3, 7, and 8  
if (x==2 || x==3 || x==7 || x==8)   
{  
return false;  
}  
for (int i=0; i<=number/2 + 1; i++)   
{  
//type-casting the variable i and checking its equality with n  
if (i*i==number)   
{  
return true;  
}  
}  
return false;  
}  
}  

Let's see another logic.

CheckPerfectSquareExample4.java

import java.util.Scanner;  
public class CheckPerfectSquareExample4  
{  
public static void main(String[] args)  
{  
//creating Scanner class object  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number: ");  
//taking an integer as input  
int number = sc.nextInt();   
//calculates the square root of the number  
double x = Math.sqrt(number);   
//typecast the root from double to int  
if(x == (int)x)  
{  
System.out.println(number+" is a perfect square.");  
}  
else  
{  
System.out.println(number+" is not a perfect square.");  
}  
}  
}  

Let's see another logic to check if a given number is perfect square or not.

In the following program, we have taken the square root of the number that we have entered and type-cast it into int. After that, we take the square of the value to see whether it is same as the number given. If they are equal to the number, we got a perfect square number.

CheckPerfectSquareExample5.java

import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStreamReader;  
public class CheckPerfectSquareExample5  
{  
public static void main(String[] args) throws IOException  
{  
BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));  
System.out.print("Please enter an integer: ");  
//reading a number form the user   
int n=Integer.parseInt(reader.readLine());  
//finds the square root of the number and type-cast the square root in to int  
int sqrt = (int) Math.sqrt(n);  
//comparing the square of the sqrt with the number  
if(sqrt*sqrt == n)   
{  
System.out.println(n+" is a perfect square number.");  
}  
else   
{  
System.out.println(n+" is not a perfect square number.");  
}  
}  
}  

Let's see another example with another logic.

In the following example, we have used the approach, given below:

Suppose, n is a number that we want to check.
Create a for loop that executes from 1 to n/2.
Calculate x=i*i, for each iteration.
The variable x has the following three conditions:
If x=n, the given number is perfect square.
If x>n, n is not a perfect square.
Continue if the above two conditions are not true.
CheckPerfectSquareExample6.java

public class CheckPerfectSquareExample6  
{  
//user defined mehod  
public static boolean checkPerfectSquare(int number)  
{  
//comparing the number with 0 and 1  
//returns true if any one condign is true because 0 and 1 are perfect square   
if(number==0||number==1)  
return true;  
for (int i=0; i<=number/2; i++)   
{  
//for each iteration of i calculating the square      
int x=i*i;  
//the number is perfect square if x is equal to number  
if(x==number)  
return true;  
//the number cannot be perfect square if number<x  
else if (number<x)  
return false;  
else  
continue;  
}  
return false;  
}  
public static void main(String[] args)   
{  
int number=50;  
//calling the method and prints the result accordingly  
System.out.println(number + " is a perfect square number? " + checkPerfectSquare(number));  
number=361;  
System.out.println(number + " is a perfect square number? " + checkPerfectSquare(number));  
}  
}  

