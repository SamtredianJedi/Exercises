// Strontio Number in Java

In this section, we will learn what is a strontio number and also create Java programs to check if the given number is strontio. The strontio number program frequently asked in Java coding tests and academics.

Strontio Number
Strontio numbers are those four digits numbers when multiplied by 2 give the same digit at the hundreds and tens place. Remember that the input number must be a four-digit number.

Strontio Number Example
1386*2=2772, we observe that at tens and hundreds place digits are the same. Hence, 1386 is a strontio number. 1221*2=2442, digits at tens and hundreds place are the same. Hence, 1221 is a strontio number.

Some other strontio numbers are 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 1001, 2002, 3003, etc.

Steps to Find Strontio Number
Read or initialize a number N.
Multiply the given number (N) by 2.
Find remainder by dividing the resultant (from step 2) by 1000. Divide the resultant (from step 2) by 1000. It removes the first digit from the resultant.
Divide the resultant (from step 3) by 10. It removes the last digit from the resultant and gives a two-digit number.
Again, divide the two-digit number (from step 4) by 10, it gives the quotient. By using the modulo operator find the remainder.
Compare both remainder and quotient. If they are equal, the given number (N) is strontio, else not.
Let's understand the above steps mathematically.

1221         (from step 1)

1221×2=2442        & nbsp;(from step 2)

2442%1000=442          (from step 3)

442/10=44          (from step 4)

44/10=4          (from step 5)

44%10=4          (from step 5)

4=4          (from step 6)

We observe that tens and hundreds place have the same digits. Hence, the given number 1221 is a strontio number. Similarly, we can check other numbers also.

Let's implement the above steps in a Java program.

Strontio Number Java Program
StrontioNumberExample1.java

import java.util.*;  
public class StrontioNumberExample1   
{  
public static void main(String args[])   
{  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter the number: ");  
//reading an integer from the user  
int num=sc.nextInt();  
int n=num;  
//first, we have multiplied a number by 2  
//the resultant is divided by 1000 that gives the remainder and removes the first digit  
//at last, the resultant is divided by 10 that removes the last digit   
//therefore, we get a two-digit number that are mean digits of the given number  
num=(num*2%1000)/10;  
//divide the two-digit number (that we get from the above) by 10 and find the remainder  
//compares the remainder and quotient   
if(num%10==num/10)  
//if equal, prints strontio number  
System.out.println(n+ " is a strontio number.");  
else  
//prints if not a strontio number  
System.out.println(n+ " is not a strontio number.");  
}  
}  



Let's create another Java program to check if the given number is strontio or not.

In the following program, we have used the same logic as above. The only difference is that in the following program we have performed each step separately. While in the above program, we have performed three to four steps in a single statement. The above program reduces the lines of code.

StrontioNumberExample2.java

import java.util.*;  
public class StrontioNumberExample2   
{  
public static void main(String args[])   
{  
Scanner sc=new Scanner (System.in);  
System.out.print("Enter a four-digit number:");  
//reading an integer from the user  
int num=sc.nextInt();  
//checks if the given number is a four-digit number or not  
if((num>999)&&(num<10000))  
{  
int n=num;  
//multiplies the given number by 2  
num=num*2;   
//removes first digit  
num=num/10;   
//removes last digit  
num=num%100;   
//compares the quotient and remainder   
if((num/10)==(num%10))  
System.out.println(n+" is a strontio number.");  
else  
System.out.println(n+" is not a strontio number");  
}  
else  
System.out.println("Please enter a four-digit number.");  
}  
}  

