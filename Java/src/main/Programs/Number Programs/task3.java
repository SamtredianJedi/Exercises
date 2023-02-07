// Automorphic Number Program in Java



In this section, we will learn automorphic numbers with examples and also create Java programs that check whether the number is automorphic or not.

What is an automorphic number?
A number is called an automorphic number if and only if the square of the given number ends with the same number itself. For example, 25, 76 are automorphic numbers because their square is 625 and 5776, respectively and the last two digits of the square represent the number itself. Some other automorphic numbers are 5, 6, 36, 890625, etc.

How to find automorphic number?
Follow the steps given below:

Read a number (num) from the user.
Find the square of the given number and store it in a variable (square).
Find the last digit(s) of the square.
Compare the last digit(s) of the variable with num.
If they are not equal, the given number is not an automorphic number.
If they are the same, go to the next step.
Remove the last digit of the given number i.e. num.
Repeat steps 4 to 6 until the given number becomes 0.
Java Automorphic Number Program
AutomorphicNumberExample1.java

public class AutomorphicNumberExample1  
{   
//user-defined static method that checks whether the number is automorphic or not   
static boolean isAutomorphic(int num)   
{   
//determines the square of the specified number  
int square = num * num;   
//comparing the digits until the number becomes 0  
while (num > 0)   
{   
//find the remainder (last digit) of the variable num and square and comparing them  
if (num % 10 != square % 10)   
//returns false if digits are not equal  
return false;   
//reduce num and square by dividing them by 10  
num = num/10;   
square = square/10;   
}   
return true;   
}   
//Driver code  
public static void main(String args[])   
{   
//number to be check      
//calling the method and prints the result accordingly  
System.out.println(isAutomorphic(76) ? "Automorphic" : "Not Automorphic");   
System.out.println(isAutomorphic(13) ? "Automorphic" : "Not Automorphic");   
}   
}  

Let's see another logic to check the number is automorphic or not.

AutomorphicNumberExample2.java

import java.util.Scanner;  
public class AutomorphicNumberExample2  
{  
public static void main(String args[])  
{  
Scanner in = new Scanner(System.in);  
System.out.print("Enter a number to check: ");  
//reading a number from the user  
int num = in.nextInt();  
int count=0;  
//determines the square of the given number  
int square = num*num;  
//copying the variable num into temp  
int temp = num;    
//iterate over the variable num until the condition become false  
while(temp>0)  
{  
count++;  
//removes last digit of the variable num  
temp=temp/10;  
}   
//determines the last digit of the variable square  
int lastDigit = (int) (square%(Math.pow(10, count)));   
//compare num with last digit of the variable square  
if(num == lastDigit)  
System.out.println(num+ " is an automorphic number.");  
else  
System.out.println(num+ " is not an automorphic number.");  
}  
}  


Let's create a Java program that determines all the automorphic numbers within a specified range.

AutomorphicNumberExample3.java

import java.util.Scanner;  
public class AutomorphicNumberExample3   
{  
//user-defined static method that checks whether the number is automorphic or not  
private static boolean isAutomorphic(int num)   
{  
int count=0;  
//determines the square of the given number  
int square = num*num;  
//copying the variable num into temp  
int temp = num;    
//iterate over the variable num until the condition become false  
while(temp>0)  
{  
count++;  
//removes last digit of the variable num  
temp=temp/10;  
}   
//determines the last digit of the variable square  
int lastDigit = (int) (square%(Math.pow(10, count)));   
//compare the last digit with num  
return num == lastDigit;  
}  
public static void main(String args[])  
{  
Scanner in = new Scanner(System.in);   
int start, end;  
System.out.print("Enter the starting value: ");  
start = in.nextInt();  
System.out.print("Enter the ending value: ");  
end = in.nextInt();  
System.out.println("Automorphic numbers between "+start+" and "+end+" are: ");  
//the for loop starts from the starting value and execute until the condition becomes false  
for(int i=start; i<=end; i++)  
{  
//calling the user-defined method      
if(isAutomorphic(i))  
//prints the number if it is automorphic  
System.out.print(i+" ");  
}  
}  
}  


