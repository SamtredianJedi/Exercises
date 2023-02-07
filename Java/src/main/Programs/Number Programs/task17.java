// Java Program to Display Odd Numbers From 1 to 100



In this section, we will create a Java program to display odd numbers from 1 to 100. To learn the Java odd number program, you must have the basic knowledge of Java for loop and if statement.

We can use different Java loops to display odd numbers:

Using Java for Loop
Using nested-if Statement
Using while Loop
Using Java for Loop
In the following example, we have declared a variable named number and initialized it with 100 (the limit to print the odd number). We have used a for loop that executes up to 100 times and for each iteration of i the if statement checks the number is odd or not. After printing each odd number, the value if i is increased by 1.

In order to check the number, we have divided the number by 2 if it leaves a remainder, the number is odd and the print statement prints that number.

DisplayOddNumbersExample1.java

public class DisplayOddNumbersExample1  
{  
public static void main(String args[])   
{  
int number=100;  
System.out.print("List of odd numbers from 1 to "+number+": ");  
for (int i=1; i<=number; i++)   
{  
//logic to check if the number is odd or not  
//if i%2 is not equal to zero, the number is odd  
if (i%2!=0)   
{  
System.out.print(i + " ");  
}  
}  
}  
}  

Using nested-if Statement
The following program is slight different from the above program because we have defined a method that contains the logic to check odd number. Inside the method, we have used nested-if statement.

DisplayOddNumbersExample2.java

public class DisplayOddnumbersExample2  
{  
public static void main(String[] args)   
{  
System.out.println("List of odd numbers: ");       
//method calling  
displayOddNumbers(1, 100);   
}   
//method that checks the number is odd or not  
private static void displayOddNumbers(int number, int end)   
{   
if(number>end)   
return;   
if(number%2!=0)   
{   
//prints the odd numbers  
System.out.print(number +" ");   
//calling the method and increments the number by 2 if the number is odd  
displayOddNumbers(number + 2, end);   
}   
else   
{   
//increments the number by 1 if the number is odd  
displayOddNumbers(number + 1, end);   
}   
}   
}  

Using while Loop
In the following program, we have replaced the for loop with while loop.

DisplayOddNumbersExample3.java

import java.util.Scanner;  
public class DisplayOddNumbersExample3  
{  
public static void main(String[] args)   
{  
int number, i;  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter the limit: ");  
number = sc.nextInt();    
i=1;   
System.out.print("Lit of odd numbers: ");  
//the while loop executes until the cond\ition become false  
while(i<=number)  
{  
//prints the odd number  
System.out.print(i +" ");   
//increments the variable i by 2  
i=i+2;  
}     
}  
}  

