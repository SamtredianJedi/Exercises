// Armstrong Number in Java


In this section, we will discuss what is Armstrong number and also create Java programs to check if the given number is an Armstrong number or not. The Armstrong number program frequently asked in Java coding interviews and academics.

Armstrong Number
An Armstrong number is a positive m-digit number that is equal to the sum of the mth powers of their digits. It is also known as pluperfect, or Plus Perfect, or Narcissistic number. It is an OEIS sequence A005188. Let’s understand it through an example.

Armstrong Number Example


1: 11 = 1

2: 21 = 2

3: 31 = 3

153: 13 + 53 + 33 = 1 + 125+ 27 = 153

125: 13 + 23 + 53 = 1 + 8 + 125 = 134 (Not an Armstrong Number)

1634: 14 + 64 + 34 + 44 = 1 + 1296 + 81 + 256 = 1643

Similarly, we can check other number also.

The first few Armstrong numbers between 0 to 999 are 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407. Some other Armstrong numbers are 1634, 8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051, 88593477, 146511208, 472335975, 534494836, 912985153, 4679307774, 32164049650, 32164049651.

Note that there is no two-digit Armstrong number.


Armstrong Number Java Program

import java.util.Scanner;  
import java.lang.Math;  
public class ArmstsrongNumberExample  
{  
//function to check if the number is Armstrong or not  
static boolean isArmstrong(int n)   
{   
int temp, digits=0, last=0, sum=0;   
//assigning n into a temp variable  
temp=n;   
//loop execute until the condition becomes false  
while(temp>0)    
{   
temp = temp/10;   
digits++;   
}   
temp = n;   
while(temp>0)   
{   
//determines the last digit from the number      
last = temp % 10;   
//calculates the power of a number up to digit times and add the resultant to the sum variable  
sum +=  (Math.pow(last, digits));   
//removes the last digit   
temp = temp/10;   
}  
//compares the sum with n  
if(n==sum)   
//returns if sum and n are equal  
return true;      
//returns false if sum and n are not equal  
else return false;   
}   
//driver code  
public static void main(String args[])     
{     
int num;   
Scanner sc= new Scanner(System.in);  
System.out.print("Enter the limit: ");  
//reads the limit from the user  
num=sc.nextInt();  
System.out.println("Armstrong Number up to "+ num + " are: ");  
for(int i=0; i<=num; i++)  
//function calling  
if(isArmstrong(i))  
//prints the armstrong numbers  
System.out.print(i+ ", ");  
}   
}  


Let’s create another Java program that checks if the given number is an Armstrong number or not.

import java.util.Scanner;  
import java.lang.Math;  
public class ArmstsrongNumberExample2  
{  
//function to check if the number is Armstrong or not  
static boolean isArmstrong(int n)   
{   
int temp, digits=0, last=0, sum=0;   
//assigning n into a temp variable  
temp=n;   
//loop execute until the condition becomes false  
while(temp>0)    
{   
temp = temp/10;   
digits++;   
}   
temp = n;   
while(temp>0)   
{   
//determines the last digit from the number      
last = temp % 10;   
//calculates the power of a number up to digit times and add the resultant to the sum variable  
sum +=  (Math.pow(last, digits));   
//removes the last digit   
temp = temp/10;   
}  
//compares the sum with n  
if(n==sum)   
//returns if sum and n are equal  
return true;      
//returns false if sum and n are not equal  
else return false;   
}   
//driver code  
public static void  main(String args[])     
{     
int num;   
Scanner sc= new Scanner(System.in);  
System.out.print("Enter the number: ");  
//reads the limit from the user  
num=sc.nextInt();  
if(isArmstrong(num))  
{  
System.out.print("Armstrong ");  
}  
else   
{  
System.out.print("Not Armstrong ");  
}  
}   
}  

