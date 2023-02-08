// Neon Number in Java



Neon Number in Java
In this section, we will discuss what is the neon numbers and also create a Java program to check if the given number is neon or not. Also, we will find all the neon numbers between a specified range.

Neon Number
A positive integer whose sum of digits of its square is equal to the number itself is called a neon number.

Example of Neon Number
Let's take an example and check 9 and 45 are neon numbers or not.

Steps to Find Neon Number
Read an integer from the user or initialize a number (n) to check.
Calculate the square of the given number (n) and store it in variable sq.
Find the sum of the digits of the square (sq) and store the sum in the variable (sum).
Compare the given number n with If both are equal, the given number is a neon number, else, not a neon number.
Let's implement the above steps in a Java program.

Neon Number Java Program
The logic is very simple. First, we have to calculate the square of the given number. After that, calculate the sum of digits in the square.

Let's create a Java program that checks if the given number is neon or not.

NeonNumberExample1.java

import java.util.*;  
public class NeonNumberExample1  
{  
public static void main(String args[])  
{  
int sum = 0, n;      
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number to check: ");  
//raeds an integer from the user  
n = sc.nextInt();  
//calculate square of the given number  
int square = n * n;  
//loop executes until the condition becomes false  
while(square != 0)  
{  
//find the last digit of the square      
int digit = square % 10;  
//adds digits to the variable sum  
sum = sum + digit;  
//removes the last digit of the variable square  
square = square / 10;  
}  
//compares the given number (n) with sum  
if(n == sum)  
System.out.println(n + " is a Neon Number.");  
else  
System.out.println(n + " is not a Neon Number.");  
}  
}  


Let's find all the neon numbers between a specified range.

NeonNumberExample2.java

import java.io.*;   
public class NeonNumberExample2   
{   
//function to check Neon Number   
static boolean isNeon(int num)   
{   
//calculate the square of the given number  
int sq = num * num;   
//stores the sum of digits  
int sumOfdigits = 0;  
//executes until the condition becomes false  
while (sq != 0)   
{   
//finds the last digit of the variable sq and adds it to the variable sum     
sumOfdigits = sumOfdigits + sq % 10;   
//removes the last dogit of the variable sq  
sq = sq / 10;   
}   
//compares the sumOgDigits with num and returns the boolean value accordingly  
return (sumOfdigits == num);   
}   
//driver Code   
public static void main(String args[])  
{   
System.out.print("Neon Numbers between the given range are: ");      
// 0 is the lowe limit and 100000 is the upper limit  
for (int i = 0; i <= 100000; i++)   
//calling the user-defined number  
if (isNeon(i))   
//prints all the neon numbers between given range  
System.out.print(i+" ");           
}   
}   

We get only three neon numbers between 0 to 100000. So, there is a probability that 1 Trillion also includes 0, 1, 9 as the neon numbers.

