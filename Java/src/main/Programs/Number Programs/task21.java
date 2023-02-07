// Java Program to Find Square Root of a Number Without sqrt Method

In Java, to find the square root of a number is very easy if we are using the pre-defined method. Java Math class provides sqrt() method to find the square root of a number. In this section, we will create a Java program to find the square root of a number without using the sqrt() method. It is the most popular question asked in the Java interview.

If the square of a number is x, the square root of that number will be the number multiplied by itself. For example, the square root of 625 is 25. If we multiply 25 two times, we get the square of the number. Mathematically, the square root of a number is given as:

x=√x
We have used the following formula to find the square root of a number.

sqrtn+1=(sqrtn+(num/sqrtn))/2.0
Note: The first sqrt number should be the input number/2.
Let's implement the above formula in a Java program and find the square root.

FindSquareRootExample1 .java

import java.util.Scanner;  
public class FindSquareRootExample1   
{  
public static void main(String[] args)    
{   
System.out.print("Enter a number: ");  
//creating object of the Scanner class  
Scanner sc = new Scanner(System.in);  
//reading a number form the user  
int n = sc.nextInt();  
//calling the method and prints the result  
System.out.println("The square root of "+ n+ " is: "+squareRoot(n));  
}  
//user-defined method that contains the logic to find the square root  
public static double squareRoot(int num)   
{  
//temporary variable  
double t;  
double sqrtroot=num/2;  
do   
{  
t=sqrtroot;  
sqrtroot=(t+(num/t))/2;  
}   
while((t-sqrtroot)!= 0);  
return sqrtroot;  
}  
}  

Let's see another logic to find the square root.

In the following example, we have used the following procedure to find the square root.

We have initialized an iterator variable i=1.
Check the number that we have entered is a perfect square or not. If the square of i is equal to n, i will be the square root value of n.
Otherwise, find the lowest value of i. Remember that the square of i must be greater than n. The square root of a number lies between i-1 and i. After performing the steps, we use the binary search algorithm to find the square root of a number up to n decimal places.
Increment the variable i by 1.
Binary Search Algorithm
Find the midvalue of i-1 and i.
Find the square of midvalue and compare it with n.
If midvalue * midvalue = n, the midvalue is the square root of the given number. Compare the square of midvalue with n (up to n decimal places) if the difference is minor, the midvalue will be the square root of the number.
If midvalue * midvalue > n, the square root belongs to the first half.
If midvalue * midvalue < n, the square root belongs to the second half.

Let's implement the algorithm in a Java program and find the square root of a number.

FindSquareRootExample2.java

import java.util.Scanner;  
public class FindSquareRootExample2   
{  
public static void main(String[] args)   
{  
double number = 0, sqrt=0;  
//object of the Scanner class  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter a number: ");  
//reading a double value from the user  
number = sc.nextDouble();  
//method calling  
sqrt = squareRoot(number);  
//prints the result  
System.out.println(The square root of "+number+ " is " +sqrt);  
}  
//user-defined method to find the square root of a number  
private static double squareRoot(double number)   
{  
//iterator variable      
int i = 1;  
while(true)   
{  
//for perfect square numbers  
if(i*i == number)  
return i;  
//for not perfect square numbers  
else if(i*i > number)   
//returns the value calculated by the method decimalSqrt()  
return decimalSqrt(number,i-1,i);  
//increments the variable i by 1  
i++;  
}  
}  
// recursive method to find the square root of a number up to 7 decimal places    
private static double decimalSqrt(double number, double i, double j)   
{  
//calculates the middle of i and j  
double midvalue = (i+j)/2;  
//finds the square of the midvalue  
double square = midvalue * midvalue;  
//compares the midvalue with square up to n decimal places  
if(square==number||Math.abs(square-number)<0.0000001)   
return midvalue;   
//if the square root belongs to second half  
else if(square>number)  
return decimalSqrt(number, i, midvalue);  
//if the square root belongs to first half  
else  
return decimalSqrt(number, midvalue, j);  
}  
}  

