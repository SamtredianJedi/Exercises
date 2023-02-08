// Tech Number in Java

In this section, we will learn what is tech number and how can we find tech numbers through a Java program.

Tech Number
A number is called a tech number if the given number has an even number of digits and the number can be divided exactly into two parts from the middle. After equally dividing the number, sum up the numbers and find the square of the sum. If we get the number itself as square, the given number is a tech number, else, not a tech number. For example, 3025 is a tech number.

Tech Number Example
Let's take an example and check 2025 and 1312 are tech numbers or not.


Steps to Find Tech number
The base condition to check the tech number is that the number must contain an even number of digits. If so, we will move to the next step, else will not execute the code further. Let's see the steps.

Read or initialize a number (num).
Find the number of digits of the given number (num).
If the number of digits is not even, the number (num) is not even.
Else, split the given number into two parts (num1 and num2), equally. Note that each part must contain an equal number of digits.
Sum up the numbers (num1+num2) and store the result in a variable
Find the square of the variable sum and store it in a variable square.
Compare the num with the square of the sum if they are equal print Tech Number, else print Not a Tech Number.
Tech Number Java Program
Let's create a Java program and check whether the number is tech or not.

TechNumberExample1.java

import java.util.Scanner;  
public class TechNumberExample2  
{  
public static void main(String args[])  
{  
int n, num, firstHalf, secondHalf, digits = 0, squareOfSum = 0;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number to check: ");  
//reads an integer from the user  
n = sc.nextInt();  
//assign the value of n into num  
num = n;  
//the loop executes until the condition returns false  
while (num > 0)  
{  
//incerements the variable digits by 1      
digits++;  
//removes the last digit of the given number  
num = num / 10;  
}  
//check if the given number has an even number of digits or not  
if (digits % 2 == 0)  
{  
num = n;  
//determines the first half of the given number  
firstHalf = num % (int) Math.pow(10, digits / 2);  
//determines the second half of the given number  
secondHalf = num / (int) Math.pow(10, digits / 2);  
//calculate the square of both the numbers  
squareOfSum = (firstHalf + secondHalf) * (firstHalf + secondHalf);  
//compares the square of the sum with the given number  
if (n == squareOfSum)  
{  
System.out.println(n+" is a tech number.");  
}  
else  
{  
System.out.println(n+" is not a tech number.");  
}  
}  
else  
{  
System.out.println(n+ " is not a tech number.");  
}  
}  
}  

Let's find all the tech numbers between a specified range.

TechNumberExample2.java

public class TechNumberExample2  
{  
public static void main(String args[])   
{  
System.out.println("Tech numbers between 1 to 1000000 are: ");      
for (int i = 1; i <= 1000000; i++)   
{  
//determines the last digit of the given number  
int p1 = i % 100;  
//removes the last digit of the number  
int p2 = i / 100;  
//add the two parts i.e. p1 and p2  
int sum = p1 + p2;  
//square the sum that we get from the above statement and compare the square with the given number  
if (i == (sum * sum))  
//prints the tech number  
System.out.println(i);  
}  
}  
}  

Let's see another logic for the same.

TechNumberExample3.java

import java.util.*;  
public class TechNumberExample3  
{  
public static void main(String args[])  
{  
int count=0;      
Scanner sc = new Scanner( System.in );  
System.out.print("Enter the number to check: ");  
//reads an integer from the user  
int n=sc.nextInt();  
//loop counts the number of digits of the given number  
while(n>0)  
{  
count++;  
n=n/10;  
}  
//check if the given number has even number of digits or not  
if(count%2==0)  
System.out.println("The given number is a tech number.");  
else  
System.out.print("The given number is not a tech number.");  
}  
}  

