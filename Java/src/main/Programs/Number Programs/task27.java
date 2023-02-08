// nth Prime Number Java

A number is prime if it is divisible by 1 and itself. In other words, a prime number is a natural number with exactly two distinct natural number divisors 1 and itself. For example, 2, 3, 5, 7, 11, etc. are the prime numbers. Note that 0 and 1 are not prime numbers. The number 2 is the only even prime number because all the other even numbers are divisible by 2. In this section, we will learn how to find the nth prime number in Java.

There are two ways to find the nth prime number in Java:

Using Basic/ traditional Approach
Using Sieve of Eratosthenes Approach
Using Basic/ traditional Approach
In the basic approach, we follow the same approach that we have used to find the prime number. Follow the steps given below.

Read an integer (n) from the user.
In the while loop, execute the condition (c!=n). Initially, the variable c is 0 and counts the discovered prime numbers.
Increment the variable i (initially 1) by 1 for the next number check.
Check if the variable i is prime or not.
If yes, increment the variable c by 1.

Let's find the nth prime number through a Java program using a while loop.

NthPrimeNumberExample.java

import java.util.Scanner;  
public class NthPrimeNumberExample   
{  
public static void main(String[] args)   
{  
//constructor of the Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the value of n to compute the nth prime number: ");  
//reading an integer from the user  
int n = sc.nextInt();   
int num=1, count=0, i;  
while (count < n)  
{  
num=num+1;  
for (i = 2; i <= num; i++)  
{   
//determines the modulo and compare it with 0   
if (num % i == 0)   
{  
//breaks the loop if the above condition returns true  
break;  
}  
}  
if (i == num)  
{  
//increments the count variable by 1 if the number is prime  
count = count+1;  
}  
}  
//prints the nth prime number  
System.out.println("The " +n +"th prime number is: " + num);  
}  
}  

We have taken an integer from the user and store it in the variable n. The while loop continues until the value of the count variable is less than n. If the while loop returns true, the value of the variable num is incremented by 1.

After that, a for loop comes into existence that begins with the initialization of i by 2. The for loop executes until the condition i<=num returns true. Every time when the condition returns true, it divides the variable num by i also compare the resultant with 0. If the resultant is equal to 0, the loop breaks and jumps to the next statement that compares i is equal to num or not. If the variable i is equal to num, the value of the variable count is incremented by 1.

After that, the control again moves to the while loop. On terminating the while loop, we get the nth prime number.

Let's see another approach to find the nth prime number.

Using Sieve of Eratosthenes Approach
The Sieve of Eratosthenes is an ancient algorithm through which we can find the prime numbers up to a specified number (limit). It does so by identifying and marking the multiples of each prime number, starting from the first prime number 2. When all the multiples of each prime are marked as composite (not prime), the remaining unmarked numbers are prime numbers. It is the most efficient approach to find all the prime numbers smaller than n (better for n<10,000,000). The approach consumes the O(n) of the memory and its time complexity is O(nloglogn). Let's see what should be the approach.

Approach
First, find all the prime numbers up to the given limit using the Sieve of Eratosthenes algorithm.
Store all the prime numbers in a Vector.
For a given number N, return the element at (N-1)th index in a vector.
Algorithm
Generate a list of consecutive integers starting from 2 to n.
Initially, let p=2. We have considered that the first prime number 2 is p.
Starting from p2, count up in increments of p and mark each of these numbers greater than or equal to p2 itself in the list. These numbers will be p(p+1), p(p+2), p(p+3), etc.
Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this number (which is the next prime), and repeat from step 3.
After terminating the algorithm, all the numbers that are not marked are prime.

Example
Let's understand the above approach through an example.

Suppose, we want to find all the prime numbers less than or equal to 20 (n). So, we need to print all the prime numbers less than or equal to n. Let's create a list of the numbers starting from 2 to 20.




Hence, we get the prime numbers (2, 3, 5, 7, 11, 13, 17, and 19).

NthPrimeNumber.java

import java.util.ArrayList;  
public class NthPrimeNumber  
{  
//declare the maximumm size as constant   
static int MAX_SIZE = 1000005;  
//creating an instance of the ArrayList class that stores all the prime numbers  
static ArrayList<Integer> primelist = new ArrayList<Integer>();  
//defining a static function to find the nth prime number using Sieve of Eratosthenes approach  
static void findnthPrimeNumber()   
{   
//creating a boolean array and marking all entries as true  
//the value IsPrime[i] will be false if i is not a IsPrime  
boolean [] IsPrime = new boolean[MAX_SIZE];   
for(int i = 0; i < MAX_SIZE; i++)  
IsPrime[i] = true;  
for (int p = 2; p * p < MAX_SIZE; p++)   
{   
// If IsPrime[p] is not changed,   
// then it is a prime   
if (IsPrime[p] == true)   
{   
//finds the multiples of p greater than or equal to the square of it  
//we have already marked the numbers that rae multiple of p and are less than p to the power 2   
for (int i = p * p; i < MAX_SIZE; i += p)   
IsPrime[i] = false;   
}   
}   
for (int p = 2; p < MAX_SIZE; p++)   
if (IsPrime[p] == true)   
//adding prime number to the ArrayList  
primelist.add(p);  
}   
// Driver Code  
public static void main (String args[])   
{  
//calling the static function  
findnthPrimeNumber();  
//get() method returns the specified position in this list  
System.out.println("7th prime number is " + primelist.get(6));  
System.out.println("22nd prime number is " + primelist.get(21));  
System.out.println("10000th prime number is " + primelist.get(9999));  
}  
}   

