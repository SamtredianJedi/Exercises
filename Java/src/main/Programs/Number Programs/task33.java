// Sunny Number in Java



In this section, we will learn what is sunny numbers and how to create a Java program to find the sunny numbers. We will also create a Java program to find all the sunny numbers between the specified range.

Sunny Number
A number is called a sunny number if the number next to the given number is a perfect square. In other words, a number N will be a sunny number if N+1 is a perfect square.

Let's understand it through an example.

Sunny Number Example
Suppose, we have to check if 80 is a sunny number or not.

Given, N=80 then N+1 will be 80+1=81, which is a perfect square of the number 9. Hence 80 is a sunny number.

Let's take another number 10.

Given, N=10 then N+1 will be 10+1=11, which is not a perfect square. Hence 10 is not a sunny number.

Steps to Find Sunny Number
The logic is very simple. To find the sunny number, we need only to check whether N+1 is the perfect square or not.

Read or initialize a number (num).
Add 1 to the given number i.e. num+1.
Find the square root of num+1.
If the square root is an integer, the given number is sunny, else not a sunny number.
Let's implement the above steps in a Java program.

Sunny Number Java Program
SunnyNumberExample1.java

import java.util.*;   
public class SunnyNumberExample1  
{   
//driver code   
public static void main(String args[])   
{   
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number to check: ");  
//reading a number from the user  
int N=sc.nextInt();  
//calling user-defined function   
isSunnyNumber(N);   
}       
//function checks whether the given is a perfect square or not   
static boolean findPerfectSquare(double num)   
{   
//finds the square root of the ggiven number  
double square_root = Math.sqrt(num);   
//if square root is an integer   
return((square_root - Math.floor(square_root)) == 0);   
}   
//function that checks whether the given number is Sunny or not  
static void isSunnyNumber(int N)   
{   
//checks N+1 is perfect square or not  
if (findPerfectSquare(N + 1))   
{   
System.out.println("The given number is a sunny number.");   
}   
//executes if N+1 is not a perfect square  
else  
{   
System.out.println("The given number is not a sunny number.");   
}   
}   
}  

Let's create another Java program and find all the sunny numbers between a given range.

SunnyNumberExample2.java

import java.util.Scanner;  
public class SunnyNumberExample2  
{  
//user-defined function that determines all the sunny numbers  
public static boolean isSunnyNumber(int number)   
{  
//determines the square root of number+1 using Math.sqrt() method  
if(Math.sqrt(number+1)%1 == 0)  
return true;  
else   
return false;  
}  
//driver code  
public static void main(String args[])   
{  
//lr is lower range and ur is upper range  
int lr = 0, ur = 0;  
Scanner scan = new Scanner(System.in);  
System.out.print("Enter lower range: ");  
//reads an integer (lr) from the user  
lr = scan.nextInt();  
System.out.print("Enter upper range: ");  
//reads an integer (ur) from the user  
ur = scan.nextInt();  
System.out.println("The Sunny number from "+ lr + " to "+ ur+" are: ");  
for(int i=lr; i<=ur; i++)   
{  
//calling user-defined number  
if(isSunny(i))  
System.out.print(i +" ");  
}  
}  
}  

