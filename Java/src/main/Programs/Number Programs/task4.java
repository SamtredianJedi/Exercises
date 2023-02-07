// Bouncy Number in Java


In this section, we will learn what is a bouncy number and also create Java programs to check if the given number is bouncy. The bouncy number program frequently asked in Java coding tests and academics. Before understanding the bouncy number, first, we will understand what is increasing and decreasing numbers.

Increasing Numbers
In an integer traversing from left to right if the current digit is greater than or equal to the previous digit, the number is known as increasing numbers. In other words, we can say that if no digit is exceeded by the digit to its left is called increasing numbers. For example, 1233, 13689, 112334566, etc.

Decreasing Numbers
In an integer traversing from left to right if the current digit is less than the previous digit, the number is known as decreasing numbers. In other words, we can say that if no digit is exceeded by the digit to its right is called decreasing numbers. For example, 321, 88531, 8755321, etc.



Let's move to the bouncy number.

Bouncy Number
A positive integer that is neither in increasing nor decreasing number is called a bouncy number. It means they bounce between increasing and decreasing. In other words, we can say that if the digits of the number are unsorted.

For example, 123742, 101, 43682, etc. We observe that in the given number's digits are neither increasing nor decreasing if we traverse from left to right, hence they are called bouncy numbers.

Note that there is no bouncy number between 1 to 100. The first bouncy number is 101.


Steps to Find Bouncy Number
Read or initialize a number N.
Convert the given number into a string and store the string in variable str.
Initialize a flag with true value.
Start moving from left to right character by character by using a for loop and do the following:
Define a method with the name isIncreasing(). It checks if any digit is greater than or equal to the next digit. If yes, set the flag to false and exit from the loop.
Define another method with the name isDecreasing(). It checks if any digit is less than the next digit. If yes, set the flag to false and exit from the loop.
Return the value of the flag variable.
Let's implement the above steps in the Java program and check whether the given number is bouncy or not.

Bouncy Number Java Program
BouncyNumberExample1.java

import java.util.*;  
public class BouncyNumberExample1  
{  
public static void main(String args[])   
{  
Scanner scan = new Scanner(System.in);  
System.out.print("Enter any number you want to check: ");  
//reading an integer from the user  
int inputNumber = scan.nextInt();  
//if any of the following condition returns true, the number id not bouncy   
if (isIncreasing(inputNumber) || isDecreasing(inputNumber) || inputNumber < 101)  
//prints if the number is not bouncy  
System.out.println(inputNumber+" not a bouncy number.");  
else  
//prints if the number is bouncy  
System.out.println(inputNumber+" is a bouncy number.");  
}  
//function that checks if the number is an increasing number or not  
public static boolean isIncreasing(int inputNumber)   
{  
//converts the number into string  
String str = Integer.toString(inputNumber);  
char digit;  
//flag set to true  
boolean flag = true;  
//iterates over the string up to length-1  
for(int i=0;i < str.length()-1;i++)   
{  
digit = str.charAt(i);  
//if any digit is greater than check next digit, it will not check further  
if(digit > str.charAt(i+1))   
{  
//flag set to false if the condition returns true     
flag = false;  
break;  
}      
}  
return flag;  
}  
//function that checks if the number is a decreasing number or not  
public static boolean isDecreasing(int inputNumber)   
{  
//converts the number into string  
String str = Integer.toString(inputNumber);  
char digit;  
//flag set to true  
boolean flag = true;  
//iterates over the string up to length-1  
for(int i=0;i < str.length()-1;i++)   
{  
digit = str.charAt(i);  
//if any digit is less than the next digit, it will not check further  
if(digit < str.charAt(i+1))   
{  
//flag set to false if the condition returns true     
flag = false;  
break;  
}      
}  
return flag;          
}  
}  


BouncyNumberExample2.java

import java.util.Scanner;  
public class BouncyNumberExample2  
{  
public static void main(String args[])   
{  
int n;  
Scanner in = new Scanner(System.in);  
System.out.print("Enter a number: ");  
//reading an integer from the user  
n = in.nextInt();  
//checks if the number is less than 100 or not  
if (n < 100)   
{  
//if yes, prints not bouncy number      
System.out.println(n + " is not a Bouncy Number.");  
return;  
}  
//assigning the given number into a variable  
int t = n;  
boolean isIncreasing = true, isDecreasing = true;  
int prev = t % 10;  
while (t != 0)   
{  
int d = t % 10;  
if (d > prev)   
{  
isIncreasing = false;  
break;  
}  
prev = d;  
t = t/10;  
}  
t = n;  
prev = t % 10;  
while (t != 0)   
{  
int d = t % 10;  
if (d < prev)   
{  
isDecreasing = false;  
break;  
}  
prev = d;  
t = t/10;  
}  
//returns true if both conditions return true  
if (!isIncreasing && !isDecreasing)  
System.out.println(n + " is a bouncy number.");  
else  
System.out.println(n + " is not a bouncy number.");  
}  
}  

