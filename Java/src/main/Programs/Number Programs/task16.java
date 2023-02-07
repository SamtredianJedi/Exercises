// Java Program to Display Even Numbers From 1 to 100




In this section, we will create a Java program to display even numbers from 1 to 100. To learn the Java even number program, you must have the basic knowledge of Java for loop and if statement.

We can use different ways to display even numbers:

Using Java for Loop
Using nested-if Statement
Using while Loop
Using Java for Loop
In the following example, we have declared a variable named number and initialized it with 100 (the limit to print the even number). We have used a for loop that executes up to 100 times and for each iteration of i the if statement checks the number is even or not. After printing each even number, the value if i is increased by 1.

In order to check the number, we have divided the number by 2 if it does not leave any remainder, the number is even and the print statement prints that number.

DisplayEvenNumbersExample1.java

public class DisplayEvenNumbersExample1  
{  
public static void main(String args[])   
{  
int number=100;  
System.out.print("List of even numbers from 1 to "+number+": ");  
for (int i=1; i<=number; i++)   
{  
//logic to check if the number is even or not  
//if i%2 is equal to zero, the number is even  
if (i%2==0)   
{  
System.out.print(i + " ");  
}  
}  
}  
}  

Using nested-if Statement
The following program is slightly different from the above program because we have defined a method that contains the logic to check even number. Inside the method, we have used nested-if statement.

DisplayEvenNumbersExample2.java

public class DisplayEvennumbersExample2  
{  
public static void main(String[] args)   
{  
System.out.println("List of even numbers: ");       
//method calling  
displayEvenNumbers(1, 100);   
}   
//method that checks the number is even or not  
private static void displayEvenNumbers(int number, int end)   
{   
if(number>end)   
return;   
if(number%2==0)   
{   
//prints the even numbers  
System.out.print(number +" ");   
//calling the method and increments the number by 2 if the number is even  
displayEvenNumbers(number + 2, end);   
}   
else   
{   
//increments the number by 1 if the number is odd  
displayEvenNumbers(number + 1, end);   
}   
}   
}  

Using while Loop
In the following program, we have replaced the for loop with while loop.

DisplayEvenNumbersExample3.java

import java.util.Scanner;  
public class DisplayEvenNumbersExample3  
{  
public static void main(String[] args)   
{  
int number, i;  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter the limit: ");  
number = sc.nextInt();    
i=2;   
System.out.print("Lit of even numbers: ");  
//the while loop executes until the condition become false  
while(i<=number)  
{  
//prints the even number  
System.out.print(i +" ");   
//increments the variable i by 2  
i=i+2;  
}     
}  
}  

