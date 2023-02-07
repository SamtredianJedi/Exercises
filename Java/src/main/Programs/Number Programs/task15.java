// Java Program to Display Alternate Prime Numbers



In this section, we will learn how to create a Java program to display alternate prime numbers.

Prime Number: A prime number is a number p such that whenever p divides ab, then either p divides a or p divides b. In other words, a number that is divisible by itself only is called a prime number. For example, 2, 3, 5, 7, etc. are prime numbers.

In the following program, we have defined two methods named checkPrime() and printAlternatePrimeNumber().

The checkPrime() method checks the number (that we have passed as an argument) is prime or not. It returns 1 if the number is prime, else returns 0.

The printAlternatePrimeNumber() method prints the alternate prime numbers up to n.

AlternatePrimeNumberExample1.java

public class AlternatePrimeNumberExample1  
{   
//main method  
public static void main(String[] args)    
{   
int num = 20;   
//prints alternate prime numbers  
System.out.print("Alternate prime numbers up to " + num+" are: ");    
//method calling  
printAlternatePrimeNumber(num);   
}  
//method checks that the number is prime or not  
static int checkPrime(int num)   
{   
int i, flag = 0;   
// we have started i=2 because 2 is a known prime number  
for(i = 2; i<= num / 2; i++)   
{   
if(num % i == 0)   
{   
flag = 1;   
break;   
}   
}   
if(flag == 0)   
return 1;   
else  
return 0;   
}   
//method for printing alternate prime numbers  
static void printAlternatePrimeNumber(int n)   
{   
//if the value of temp variable is odd, we do not print the prime number  
//if the value of temp variable is even, we print the prime number  
int temp = 2;   
for(int num = 2; num <= n-1; num++)   
{   
//checking the number is prime or not  
if (checkPrime(num) == 1)   
{    
//prints the prime number if temp is even  
if (temp % 2 == 0)   
System.out.print(num + " ");   
//increments the temp variable by 1  
temp ++;   
}   
}   
}   
}  

Let's see another logic to display the alternate prime numbers.

AlternatePrimeNumberExample2.java

import java.util.*;  
public class AlternatePrimeNumberExample2  
{  
public static void main(String args[])  
{  
int n;  
int status = 1;  
int num = 3;  
//object of the ArrayList class  
List<Integer> primelist=new ArrayList<Integer>();  
//object of the Scanner class  
Scanner scanner = new Scanner(System.in);  
System.out.print("Enter the value of n: ");  
//reading the value of n from the user  
n = scanner.nextInt();  
if (n >= 1)  
{  
System.out.println("First "+n+" prime numbers are: ");  
//2 is a known prime number  
System.out.println(2);  
//adding 2 in the ArrayList  
primelist.add(2);  
}  
for(int i = 2 ; i <=n ; )  
{  
for(int j = 2 ; j <= Math.sqrt(num) ; j++)  
{  
if(num%j == 0)  
{  
status = 0;  
break;  
}  
}  
if(status != 0)  
{  
System.out.println(num);  
//adding numbers to the ArrayList  
primelist.add(num);  
i++;  
}  
status = 1;  
num++;  
}  
System.out.println("Alternate prime numbers are:");  
//loop for printing the alternate prime numbers  
for(int k=0;k<primelist.size();k++)  
{  
if((k%2)==0)  
System.out.println(""+primelist.get(k));  
}  
}  
}  

