// Java Program to Swap Two Numbers Using Bitwise Operator



In Java, there are many ways to swap two numbers. Generally, we use either swap() method of the Math class or use a third (temporary) variable to swap two numbers. Except these two ways, we can also swap two numbers using the bitwise operator (XOR) and using division and multiplication.

In this section, we will focus on creating a Java program to swap two numbers using bitwise operator (^).

Using Bitwise Operator
Bitwise Operator: Bitwise XOR operator is used to swap two numbers. It is represented by the symbol (^). It compares bits of two operands and returns false or 0 if they are equal and returns true or 1 if they are not equal. The truth table of XOR operator is as follows:

We can use the bitwise XOR operator to swap two numbers without using the swap() method and third variable. We must follow the steps given below:

Find the binary equivalent of given variables, say X and Y.
Find X^Y and store it in x, i.e. X = X ^ Y.
Again, find X^Y and store it in Y, i.e. Y = X ^ Y.
Find X^Y and store it in X, i.e. X = X ^ Y.
The numbers are swapped.


We see that the variable X contains 1001 which is equivalent to 9 and Y contains 0101 which is equivalent to 5. Therefore, the variables X and Y are swapped.

X = 9 and Y = 5

Let's implements the above logic in a Java program.

SwapTwoNumbersExample1.java

import java.util.Scanner;  
public class SwapTwoNumbersExample1  
{  
public static void main(String args[])  
{  
int a, b;  
Scanner scanner = new Scanner(System.in);  
System.out.print("Enter the first number: ");  
a = scanner.nextInt();  
System.out.print("Enter the second number: ");  
b = scanner.nextInt();  
System.out.println("Before swapping:");  
System.out.println("a = " +a +", b = " +b);  
a = a ^ b;  
b = a ^ b;  
a = a ^ b;  
System.out.println("After swapping:");  
System.out.print("a = " +a +", b = " +b);  
}  
}  


Let's create a program that swap two numbers using the function.

SwapTwoNumbersExample2.java

public class SwapTwoNumbersExample2  
{  
static void swapNumbers(int x, int y)  
{  
System.out.println("Before swapping");      
System.out.println("x= " + x + ", y= " + y);  
x = x ^ y;  
y = x ^ y;  
x = x ^ y;  
System.out.println("After swapping");  
System.out.println("x= " + x + ", y= " + y);  
}  
public static void main(String[] args)   
{  
int x = 12;  
int y= 34;  
swapNumbers(x,y);  
}  
}  


Using Multiplication and Division
We can also swap two numbers using multiplication and division operator.

SwapTwoNumbersExample3.java


public class SwapTwoNumbersExample3  
{  
public static void main(String args[])  
{  
int x = 10;  
int y = 20;  
System.out.println("values before swapping:");   
System.out.println("x = " + x +" y = " + y);  
//swapping two numbers using multiplication and division  
x = x*y; //now x is 200   
y = x/y; //now x is 200 and y is 20, on dividing x/y is y=10 (original value of x)  
x = x/y; //now x is 200 and y is 10, on dividing x/y is x=20 (original value of y)  
System.out.println("values after swapping:");  
System.out.println("x = " + x +" y = " + y);  
}  
}  


