// Java Program to Find Sum of Natural Numbers



The natural numbers are the numbers that include all the positive integers from 1 to infinity. For example, 1, 2, 3, 4, 5, ......, n. When we add these numbers together, we get the sum of natural numbers.

In this section, we will create the following programs:

Java program to find the sum of the first 100 natural numbers
Java program to find the sum of n natural numbers
Java program to find the sum of n natural numbers using the function
We can also find the sum of n natural number using the mathematical formula:

Sum of n natural numbers=n*(n+1)/2
Suppose, we want to find the sum of the first 100 natural numbers. By putting the value in the above formula, we get:

Java Program to Find Sum of Natural Numbers
In this section, we are going to use the following ways to find the sum of natural numbers.

Using Java for Loop
Using Java while Loop
Using Function

Using Java for Loop
Using Java for loop is the easiest way to find the sum of natural numbers.

SumOfNaturalNumber1.java

public class SumOfNaturalNumber1  
{  
public static void main(String[] args)   
{  
int i, num = 10, sum = 0;  
//executes until the condition returns true  
for(i = 1; i <= num; ++i)  
{  
//adding the value of i into sum variable  
sum = sum + i;  
}  
//prints the sum   
System.out.println("Sum of First 10 Natural Numbers is = " + sum);  
}  
}  

Using Java while Loop
In the following example, we have replaced the for loop with the while loop. The while loop executes until the condition i <= num do not become false. It calculates the sum of natural numbers up to a specified limit.

SumOfNaturalNumber2.java

public class SumOfNaturalNumber2  
{  
public static void main(String[] args)   
{  
int num = 100, i = 1, sum = 0;  
//executes until the condition returns true  
while(i <= num)  
{  
//adding the value of i into sum variable  
sum = sum + i;  
//increments the value of i by 1  
i++;  
}  
//prints the sum   
System.out.println("Sum of First 100 Natural Numbers is = " + sum);  
}  
}  

Sum of n Natural Numbers
The following program finds the sum of n natural numbers. In this program, we have used the same while loop, as we have used in the above program. We have also taken two inputs from the user i.e. i and num. The variable i is the starting number and the variable num is the end number. For example, if we want to find the sum of natural numbers from 20 (i) to 100 (num).

SumOfNaturalNumber3.java

import java.util.Scanner;  
public class SumOfNaturalNumber3  
{  
public static void main(String[] args)   
{     
int num, i, sum = 0;  
//object of Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Sum from: ");  
//takes an integer as input  
i = sc.nextInt();  
System.out.print("Sum up to: ");  
//takes an integer as input  
num = sc.nextInt();  
while(i <= num)  
{  
//adding the value of i into sum variable  
sum = sum + i;  
//increments the value of i by 1  
i++;  
}  
//prints the sum  
System.out.println("Sum of Natural Numbers = " + sum);  
}  
}  

Using Function
In the following program, we have found the sum of n natural number using the function.

SumOfNaturalNumber4.java

public class SumOfNaturalNumber4  
{  
//method that returns the sum of n natural numbers   
static int naturalNumberSum(int n)   
{   
int sum = 0;   
//executes until the condition becomes false  
for (int i = 1; i <= n; i++)    
//adding the value of i to the sum variable  
sum = sum + i;   
return sum;   
}   
//main method  
public static void main(String args[])   
{   
int n = 50;   
//calling method and prints the sum  
System.out.println("Sum of Natural Numbers is: "+naturalNumberSum(n));  
}    
}   

Let's see another program.

In the following program, we have used the formula to find the sum of natural numbers.

SumOfNaturalNumber5.java

public class SumOfNaturalNumber5  
{   
//method that returns the sums   
static int sumOfNaturalNumbers(int n)   
{   
//formula to calculate the sum of natural numbers      
return n * (n + 1) / 2;   
}   
//main method  
public static void main(String args[])   
{   
int n = 5;   
//calling the method and printing the sum  
System.out.println("Sum of Natural Numbers is: "+sumOfNaturalNumbers(n));   
}   
}   

