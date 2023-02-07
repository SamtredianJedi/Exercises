// Fascinating Number in Java


In this section, we will learn what is a fascinating number and also create Java programs to check if the given number is fascinating or not. The fascinating number program is frequently asked in Java coding tests.

Fascinating Numbers
Multiplying a number by two and three separately, the number obtained by writing the results obtained with the given number will be called a fascinating number. If the result obtained after concatenation contains all digits from 1 to 9, exactly once.

In other words, we can also say that a number (n) may be a fascinating number if it satisfies the following two conditions:

If the given number is a 3 or more than three-digit
If the value getting after concatenation contains all digits from 1 to 9, exactly once.
For example, 192, 1920, 2019, 327, etc. Let's understand the concept of fascinating numbers through an example.

Fascinating Number Example
Let's take any number (n) say 327 and check whether the given number is fascinating or not. On multiplying the given number (n) by 2 and 3, we get:

327×2=654

327×3=981

Now, concatenate the above results to the given number (n).

"327"+"654"+ "981"= 327654981

We observe that the resultant () contains all the digits from 1 to 9, exactly once. Hence, the given number 327 is a fascinating number. Note that, we have not added the result to the given number. Some other fascinating numbers are 192, 219, 273, 327, 1902, 1920, 2019 etc.

Steps to Find Fascinating Numbers
First, check the given number consist of three digits or not. If no, print cannot be a fascinating number.
Else, multiply the given number by 2 and 3, separately.
Convert the results (from step 2) into a string.
Concatenate the strings (from step 3) with the given number (n).
Iterate over the string that we get after concatenation and count the frequency of each digit.
Print "not a fascinating number" if any digit is missing or appeared multiple times. Else, print "fascinating number".
Let's implement the above steps in a Java program.


Fascinating Number Java Program
The base condition to check whether a number is fascinating or not is that the number must have at least 3 or more than three digits.

FascinatingNumberExample1.java

import java.util.*;  
public class FascinatingNumberExample1  
{  
public static void main(String args[])  
{  
int num, n2, n3;      
Scanner sc=new Scanner(System.in);  
System.out.print("Enter any Number: ");  
num = sc.nextInt();  
n2 = num * 2;  
n3 = num * 3;  
//concatenating num, n2, and n3  
String concatstr = num + "" + n2 + n3;  
boolean found = true;  
//checks all digits from 1 to 9 are present or not  
for(char c = '1'; c <= '9'; c++)  
{  
int count = 0;  
//loop counts the frequency of each digit  
for(int i = 0; i < concatstr.length(); i++)  
{  
char ch = concatstr.charAt(i);  
//compares the character of concatstr with i  
if(ch == c)  
//incerments the count by 1 if the specified condition returns true  
count++;  
}  
//returns true if any of the condition returns true  
if(count > 1 || count == 0)  
{  
found = false;  
break;  
}  
}  
if(found)  
System.out.println(num + " is a fascinating number.");  
else  
System.out.println(num + " is not a fascinating number.");  
}  
}  



Let's create another Java program that finds all the fascinating numbers between the given range.

FascinatingNumberExample2.java

import java.util.Scanner;  
public class FascinatingNumberExample2  
{  
//function to check the Fascinating number  
public static boolean isFascinatingNumber(int number)   
{  
int digit = 0;  
//new number  
String str = "" + number + number*2 + number*3;  
//declaring an array  
int digitarray[] = new int[10];  
  
//comparing array elements with characters of the string  
for(int i=0; i<str.length(); i++)   
{  
//converts ith character into an integer  
digit = str.charAt(i) - '0';  
//check arr[digit] element and ignore 0s  
if(digit==0 || digitarray[digit]==0)  
digitarray[digit]++;  
else return false;  
}  
//checks the numbers that are missing  
for(int i=1; i<digitarray.length; i++)   
{  
//digit i was not there in String  
if(digitarray[i]==0)  
return false;  
}  
//all conditions satisfied so, return true  
return true;  
}  
//driver code  
public static void main(String args[])   
{  
// declare variables  
int lowerRange = 0, upperRange = 0;  
//create Scanner class object to take input  
Scanner scan = new Scanner(System.in);  
System.out.print("Enter lower range:");  
lowerRange = scan.nextInt();  
System.out.print("Enter upper range:");  
upperRange = scan.nextInt();  
System.out.println("The Fascinating number from "+ lowerRange + " to "+ upperRange+" are: ");  
//loop executes until the given condition returns false  
for(int i=lowerRange; i<=upperRange; i++)   
{  
//calling user-defined number  
if(isFascinatingNumber(i))  
//prints all the fascinating numbers between a given range  
System.out.print(i +" ");  
}  
}  
}  

