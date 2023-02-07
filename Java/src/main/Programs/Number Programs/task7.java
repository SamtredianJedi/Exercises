// Emirp Number in Java



In this section, we will learn what is an emirp number and also create Java programs to check if the given number is emirp or not. The emirp number Java program frequently asked in Java coding tests to check the logic of the programmer.

Emirp Number
A number is called an emirp number if we get another prime number on reversing the number itself. In other words, an emirp number is a number that is prime forwards or backward. It is also known as twisted prime numbers.

Note: Palindrome primes are excluded.
Emirp Number Example
Suppose, we want to check the number 79 is emirp or not.

We know that 79 is a prime number means that divisible by 1 and self only. On reversing the number, we get 97 which is another prime number. Therefore, 79 and 97 both are prime numbers. Hence, 79 is a prime number. Similarly, we can check other numbers also.

Some other emirp numbers are 13, 199, 107, 113, 1399, 1583, 1201, 3049, etc.

Steps to find Emirp Number
Read or initialize a number (n).
First, check the given number (n) is prime or not.
If not, break the execution and exit.
If prime, find the reverse (r) of the given number (n).
Check the reverse number (r) is prime or not.
If not, print number (n) is not emirp.
If prime, print the given number (n) as an emirp number.
Let's implement the above logic in a Java program.

Emirp Number Java Program
EmirpNumberExample1.java

import java.io.*;  
import java.util.*;  
public class EmirpNumberExample1   
{  
//function that checks the given number is prime or not  
public static boolean isPrime(int n)  
{  
//base case  
if (n <= 1)  
return false;  
//loop executes from 2 to n-1  
for (int i = 2; i < n; i++)  
if (n % i == 0)  
//returns false if the condition returns true  
return false;  
//returns true if the condition returns false  
return true;  
}  
//function that checks if the given number is emirp or not  
public static boolean isEmirp(int n)  
{  
//checks if the given number is prime or not  
if (isPrime(n) == false)  
return false;  
//variable that stores the reverse of the number  
int reverse = 0;  
//the while loop executes until the specified condition becomes false  
while (n != 0)   
{  
//finds the last digit of the number (n)  
int digit = n % 10;  
//finds the reverse of the given number  
reverse = reverse * 10 + digit;  
//removes the last digit  
n = n/10;  
}  
//calling the user-defined function that checks the reverse number is prime or not  
return isPrime(reverse);  
}  
//driver code  
public static void main(String args[])   
{  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter a number to check: ");  
//reading an integer from the user  
int n=sc.nextInt();  
if (isEmirp(n) == true)  
System.out.println("Yes, the given number is an emirp number.");  
else  
System.out.println("No, the given number is not an emirp number.");  
}  
}  

