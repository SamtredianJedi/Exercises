// Java Program to Find Largest of Three Numbers

In this section, we will learn how to create a Java program to find the largest of three numbers. Along with this, we will also learn to find the largest of three numbers in Java using the ternary operator.

Using Ternary Operator
Before moving to the program, let's understand the ternary operator.

It is a part of the Java conditional statement. It contains three operands. It evaluates a Boolean expression and assigned a value based on the result. We can use it in place of the if-else statement. The syntax of the ternary operator is as follows:

variable_name = (expression) ? value if true:value if false  
If the above expression returns true the value before the colon is assigned to the variable variable_name, else the value after the colon is assigned to the variable.

Let's use the ternary operator in a Java program to compare three variables.

In the following program, we have used two ternary operators to compare three numbers.

LargestNumberExample1.java

import java.util.Scanner;  
public class LargestNumberExample1  
{  
public static void main(String[] args)   
{  
int a, b, c, largest, temp;  
//object of the Scanner class  
Scanner sc = new Scanner(System.in);  
//reading input from the user  
System.out.println("Enter the first number:");  
a = sc.nextInt();  
System.out.println("Enter the second number:");  
b = sc.nextInt();  
System.out.println("Enter the third number:");  
c = sc.nextInt();  
//comparing a and b and storing the largest number in a temp variable  
temp=a>b?a:b;  
//comparing the temp variable with c and storing the result in the variable  
largest=c>temp?c:temp;  
//prints the largest number  
System.out.println("The largest number is: "+largest);  
}  
}  

We can also compare all the three numbers by using the ternary operator in a single statement. If we want to compare three numbers in a single statement, we must use the following statement.

d = c > (a>b ? a:b) ? c:((a>b) ? a:b);  
In the following program, we have used a single statement to find the largest of three numbers.

LargestNumberExample2.java

import java.util.Scanner;  
public class LargestNumberExample2  
{  
public static void main(String[] args)   
{  
int a, b, c, largest;  
//object of the Scanner class  
Scanner sc = new Scanner(System.in);  
//reading input from the user  
System.out.println("Enter the first number:");  
a = sc.nextInt();  
System.out.println("Enter the second number:");  
b = sc.nextInt();  
System.out.println("Enter the third number:");  
c = sc.nextInt();  
largest = c > (a > b ? a : b) ? c : ((a > b) ? a : b);  
System.out.println("The largest number is: "+largest);  
}  
}  

Using if-else..if
LargestNumberExample3.java

public class LargestNumberExample3  
{  
public static void main(String[] args)   
{  
//initializing numbers to compare  
int a=40, b=78, c=19;  
//comparing numbers, a with b and a with c   
//if both conditions are true, prints a  
if(a>=b && a>=c)  
System.out.println(a+" is the largest Number");  
//comparing b with a and b with c  
//if both conditions are true, prints b  
else if (b>=a && b>=c)  
System.out.println(b+" is the largest Number");  
else  
//prints c if the above conditions are false  
System.out.println(c+" is the largest number");  
}  
}  

Using nested if
LargestNumberExample4.java

public class LargestNumberExample4  
{  
public static void main(String[] args)   
{  
//initializing numbers to compare  
int x = 1010, y = 170, z = 169;  
if(x >= y)   
{  
if(x >= z)  
//prints x, if the above two conditions are true  
System.out.println("The largest number is: "+x);  
else  
//prints z, if the condition defined in inner if is true and the condition defined in inner if is false  
//means x>y and x<z  
System.out.println("The largest number is: "+z);  
}   
else   
{  
if(y >= z)  
//prints y, if the condition defined in outer if is false and the condition defined in inner if is true  
//means z>x and y>z  
System.out.println("The largest number is: "+y);  
else  
//prints z, if the condition defined in both inner and outer loop is false  
//z>x and z>y  
System.out.println("The largest number is: "+z);  
}  
}  
}  

LargestNumberExample5.java

import java.util.Scanner;  
public class LargestNumberExample5  
{  
public static void main(String args[])  
{  
int num1, num2, num3;  
System.out.println("Enter three integers: ");  
Scanner in = new Scanner(System.in);  
num1=in.nextInt();  
num2=in.nextInt();  
num3=in.nextInt();  
if (num1 > num2 && num1 > num3)  
System.out.println("The largest number is: "+num1);  
else if (num2 > num1 && num2 > num3)  
System.out.println("The largest number is: "+num2);  
else if (num3 > num1 && num3 > num2)  
System.out.println("The largest number is: "+num3);  
else  
System.out.println("The numbers are same.");  
}  
}  

