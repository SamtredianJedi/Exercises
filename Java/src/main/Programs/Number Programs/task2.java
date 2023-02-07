// Autobiographical Number in Java

In this section, we will learn what is an autobiographical number and also create Java programs to check if the given number is autobiographical or not. The autobiographical number program frequently asked in Java coding tests to check the logic of the programmer.

Autobiographical Number
A digit count numerically précises the frequency of digits 0 through 9 in the order in which they occur in a number. In other words, a number that is a pompous and self-centered figure whose only purpose in life is to describe itself.

We can define an autobiographical number formally as:

An autobiographical number is a number (N) such that the first digit of N counts how many zeroes are presented in N, the second digit counts how many ones are presented in N, the third digit counts how many twos are presented in N, and so on. Sometimes, it is also known as a curious number. It is the sequence OEIS A046043.

It is just like Self-describing primes that uses a different method OEIS A108810 to describe the Self-describing primes. The only difference between the two is that in autobiographical numbers digits are described in increasing order while self-describing primes digits can be described in any order.

There is only a number 10213223 that describes itself. We observe that the frequency of 0 is 1, the frequency of 1 is 2, the frequency of 2 is 3, and the frequency of 3 is 2. Therefore, 10213223 is only a number that describes itself. The smallest autobiographical number is 1210.

Autobiographical Number Example
Suppose, we want to check the number 21200 is an autobiographical number or not.

First, find the sum of its digits (2+1+2+0+0) i.e. 5, and counts the number of digits of the given number i.e. 5. We observe that both are equal. Hence, the number 21200 is an autobiographical number.

Note: The method discussed above works only if the sum of digits is less than 10.
Let's take another number 1210. It has 1 zero, 2 ones, 1 two, and 0 threes. Hence, the number 21200 is an autobiographical number.

The above method can be used for all numbers.

Some autobiographical numbers are: 1210, 2020, 21200, 3211000, 42101000, 521001000, 6210001000.

Steps to Find Autobiographical Number
For each digit from 0 to 9 that is present in the number, write down the frequency of that digit and then the digit. After writing the frequency and digit the number that we get is called an autobiographical number.

Let's find all autobiographical numbers by using the zoom-in method.

By the above description, the autobiographical number cannot have more than 10 digits. So, it is clear that the autobiographical numbers cannot be too large.
In an autobiographical number, the sum of digits equals the number of digits. Remember that the sum of digits should not exceed 10. For example, 2020.
As we have discussed above, the 1st digit counts the frequency of 0's. We also know that self-describing numbers do not start with zeros. Hence, the number of zeroes is not zero.
Subtracting step 3 from step 2 above, we get a resulting statement that the sum of all the digits, except for the first one, is equal to the number of non-zero digits plus 1.
It means that except for the first digit, the set of all other non-zero digits consists of several 1's and one 2.
Exclusively, in the autobiographical numbers, the number of 1' is either 0, 1, or 2.
Now we will use the zooming-in method in three different ways depending on the number of 1's. In this section, we will consider only the case if there are no 1's in the number.

If the number of 1's is zero, the only non-zero non-first digit of such a will be 2.
The number (i.e. 2) will be included in the autobiographical number. Therefore, the 3rd digit of the number will not zero. Since it will be 2.
The number contains 2 twos.
Hence, the autobiographical number will be 2020.
Let's implement the above logic in a Java program.

Autobiographical Number Java Program
AutobiographicalNumberExample.java

import java.util.*;  
public class AutobiographicalNumberExample  
{  
public static void main(String args[])   
{  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter the number you want to check: ");  
//reading an integer from the user to check  
int num = sc.nextInt();  
//determines the absolute value of the given number  
num = Math.abs(num);  
//assigning the value of num into variable n  
int n = num;  
//the valueOf() method returns the string representation of int argument  
String str = String.valueOf(num);  
//creates an array of digits  
int digitarray[] = new int[str.length()];  
for(int i = digitarray.length - 1; i >= 0; i--)  
{  
//determines the last digit of the given number      
digitarray[i] = n % 10;  
//removes the last digit  
n = n/10;  
}  
boolean flag = true;  
//an inner loop compares the iterator of the outer loop with each digit of the inner loop //if they are equal then increment the occurrence count of the digit  
for(int i = 0; i < digitarray.length; i++)  
{  
int count = 0;  
for(int j = 0; j < digitarray.length; j++)  
{  
if(i == digitarray[j])  
//increments the count by 1 if the above condition returns true  
count++;  
}  
if(count != digitarray[i])  
{  
flag = false;  
//breaks the execution if the condition becomes true  
break;  
}  
}  
if(flag)  
//prints if the status returns true  
System.out.println(num + " is an autobiographical number.");  
else  
//prints if status returns false  
System.out.println(num + " is not an autobiographical number.");  
}  
}  

