// Xylem and Phloem Number in Java



In this section, we will learn what is xylem and phloem number and also create Java programs to check if the given number is xylem or phloem. The xylem and phloem number program frequently asked in Java coding tests and academics.

Xylem and Phloem Number
A number N will be a xylem number if the sum of its extreme (first and last) digits is equal to the sum of mean (all digits except first and last) digits. If the sum of extreme digits is not equal to the sum of mean digits, the number is called phloem number.

In short, we can say that:

Xylem Number

Sum of extreme digits = Sum of mean digits
Xylem Number

Sum of extreme digits ≠ Sum of mean digits


Steps to find Xylem and Phloem Number
Read or initialize a number N.
Find the extreme digits of N.
Sum up the extreme digits and store the sum in a variable (extreme_sum).
Find the mean digits of N.
Sum up the mean and store the sum in a variable (mean_sum).
Compare both sums (that we get from steps 3 and 5).
If they are equal, the number is a xylem
Else, the number is a phloem
Let's implement the above steps in a Java program and check if the given number is xylem or phloem.

Xylem and Phloem Number Java Program
XylemPhloemExample .java

import java.util.*;  
import java.io.*;  
public class XylemPhloemExample  
{  
public static void main(String args[])  
{  
//the variable extreme_sum stores the sum of extreme digits   
//the variable mean_sum stores the sum of mean digits   
int num, extreme_sum = 0, mean_sum = 0, n;   
Scanner sc= new Scanner (System.in);  
System.out.print("Enter a number: ");  
//reading an integer from the user  
num = sc.nextInt();  
//finds the absolute value of the given number  
num = Math.abs(num);  
//copying the given number into n  
n = num;  
//the while loop executes until the specified condition becomes false  
while(n != 0)  
{  
//returns true if one of the conditions is true  
if(n == num || n < 10)  
//finds the last digit and add it to the variable extreme_sum  
extreme_sum = extreme_sum + n % 10;  
else  
//finds the mean digits and add it to the variable mean_sum  
mean_sum = mean_sum + n % 10;  
//removes the last digit from the number  
n = n / 10;  
}  
System.out.println("The sum of extreme digits: " + extreme_sum );  
System.out.println("The sum of mean digits: " + mean_sum);  
//comparing the sum of extreme digits and with the sum of mean digits  
if(extreme_sum  == mean_sum)  
//prints if sums are equal  
System.out.println(num + " is a xylem number.");  
else  
//prints if sums are not equal  
System.out.println(num + " is a phloem number.");  
}  
}  




