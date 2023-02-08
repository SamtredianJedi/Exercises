// Spy Number in Java

In this section, we will learn what is a spy number and also create Java programs to check if the given number is Spy or not. The spy number program is frequently asked in Java coding test.

Spy Number
A positive integer is called a spy number if the sum and product of its digits are equal. In other words, a number whose sum and product of all digits are equal is called a spy number.

Example of Spy Number
Let's take the number 1124 and check whether the number is a spy or not. First, we will split it into digits (1, 1, 2, 4). After that find the sum and product of all the digits.

Sum=1+1+2+4=8

Product=1*1*2*4=8

We observe that the sum and product of the digits both are equal. Hence, 1124 is a spy number.

Similarly, we can check other numbers also. Some other spy numbers are 22, 123, 132, etc.



Steps to Find Spy Number
Read or initialize a number (n) that you want to check.
Declare two variables sum and product to store sum and product of digits. Initialize sum with 0 and product with 1.
Find the last digit (n%10) of the given number by using the modulo operator.
Add the last digit to the variable sum.
Multiply the last digit with the product variable.
Divide the given number (n) by 10. It removes the last digit.
Repeat steps 3 to 6 until the given number (n) becomes 0.
If the variable sum and product have the same value, then the given number (n) is a spy number, else not a spy number.
Let's implement the above steps in a Java program.

Spy Number Java Program
SpyNumberExample1.java

import java.util.Scanner;  
public class SpyNumberExample1   
{  
public static void main(String args[])  
{   
int num, product=1, sum=0, lastdigit;  
// create object of scanner  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number to check: " );  
//reads an integer from the user and stores it in the variable num  
num=sc.nextInt();  
//executes untill the condition becomes false  
while(num>0)  
{  
//finds the last digit of the number      
lastdigit=num%10;  
//adds last digit to the variable sum  
sum=sum+lastdigit;  
//calculates the product  
product=product*lastdigit;  
//removes the last digit from the given number  
num=num/10;  
}  
//compares the sum and product  
if(sum==product)  
//prints if the above condition returns true  
System.out.println("The given number is a spy number.");  
else  
//prints if the above condition returns false  
System.out.println("The given number is not a spy number.");  
}  
}  

SpyNumberExample2.java

import java.util.Scanner;  
public class SpyNumberExample2  
{  
//method to check the Spy number  
private static boolean isSpyNumber(int number)   
{  
int lastDigit = 0;  
int sum = 0;  
int product = 1;  
//executes until the condition returns true  
while(number != 0)   
{  
//determines the last digit of the given number  
lastDigit = number % 10;  
//adds the last digit to the variable sum  
sum = sum + lastDigit;  
//multiply last digit with product  
product = product * lastDigit;  
//removes the last digit of the given number  
number = number / 10;  
}  
//compares the variable sum with product and returns the result accordingly  
if(sum == product)  
return true;  
return false;  
}  
//driver code  
public static void main(String args[])   
{  
int lowerRange = 0, upperRange = 0;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the lower range: ");  
//reads lower range  
lowerRange = sc.nextInt();  
System.out.print("Enter upper range: ");  
//reads the upper range   
upperRange = sc.nextInt();  
System.out.println("The Spy numbers between "+ lowerRange + " to "+ upperRange+" are: ");  
for(int i=lowerRange; i<=upperRange; i++)   
{  
//calling user-defined function that checks if the given number is spy or not  
if(isSpyNumber(i))  
//prints all the spy numbers  
System.out.print(i +" ");  
}  
}  
}  

