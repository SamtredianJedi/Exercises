// Peterson Number in Java

In this section, we will learn what is Peterson number and how can we check whether a given number is Peterson or not through a Java program.

Peterson Number
A number is said to be Peterson if the sum of factorials of each digit is equal to the sum of the number itself.

Steps to Find Peterson Number
Read or initialize a number (n).
Find the last digit (d) of the given number.
Find the factorial (fact) of the digit.
Add the factorial (fact) to a variable
Repeat steps 2 to 4 until the given number becomes 0.
Compare the sum with n. If both are equal, the given number is Peterson, else not.
Example of Peterson Number
Suppose, we have to check the number (n) 145 is Peterson or not.

Number = 145

145 = !1 + !4 + !5

=1+4*3*2*1+5*4*3*2*1

=1+24+120

145=145

We observe that the number and the sum of factorials of digits are equal to the number itself. Hence, 145 is a Peterson number.

Let's implement the above logic in a Java program.

Peterson Number Java Program
In the following program, we have taken an array of factorial to quickly find the factorial. You can use the logic also.

PetersonNumberExample.java

import java.io.*;  
import java.util.*;  
public class PetersonNumberExample1   
{  
//an array is defined for the quickly find the factorial  
static long[] factorial = new int[] { 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600};  
//driver code  
public static void main(String args[])  
{  
//constructor of the Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number to check: ");  
//reading a number from the user  
int n=sc.nextInt();  
//calling the user-defined function to check Peterson number  
if (isPeterson(n))  
System.out.println("The given number is a Peterson number.");  
else  
System.out.println("The given number is not a Peterson number.");  
}  
//function to check the given number is Peterson or not  
static boolean isPeterson(int n)  
{  
int num = n;  
int sum = 0;  
//loop executes until the condition becomes false  
while (n > 0)   
{  
//determines the last digit of the given number      
int digit = n % 10;  
//determines the factorial of the digit and add it to the variable sum  
sum += factorial[digit];  
//removes the last digit of the given number  
n = n / 10;  
}  
//compares sum with num if they are equal returns the number itself  
return (sum == num);  
}  
}  

