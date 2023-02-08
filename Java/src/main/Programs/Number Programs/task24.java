// Keith Number in Java


In this section, we will learn what is Keith number and also create Java programs to check if the given number is Keith or not. The Keith number program frequently asked in Java coding test.

Keith Number
A positive n digit number X is called a Keith number (or repfigit number) if it is arranged in a special number sequence generated using its digits. The special sequence has first n terms as digits of x and other terms are recursively evaluated as the sum of previous n terms. For example, 197, 19, 742, 1537, etc.

Keith Number Example
Let's check the number 742 is a Keith number or not.

First, we will separate each digit, as 7, 4, 2

To find the next term of the above-created series, we add these digits (i.e. 7+4+2), and the resultant (13) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13

To find the next term of the above series, we add the last three terms (i.e. 13+2+4), and the resultant (19) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19

To find the next term of the above series, we add the last three terms (i.e. 19+13+2), and the resultant (34) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19, 34

To find the next term of the above series, we add the last three terms (i.e. 34+19+13), and the resultant (66) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19, 34, 66

To find the next term of the above series, we add the last three terms (i.e. 66+34+19), and the resultant (119) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19, 34, 66, 119

To find the next term of the above series, we add the last three terms (i.e. 119+66+34), and the resultant (219) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19, 34, 66, 119, 219

To find the next term of the above series, we add the last three terms (i.e. 219+119+66), and the resultant (404) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19, 34, 66, 119, 219, 404

To find the next term of the above series, we add the last three terms (i.e. 404+219+119), and the resultant (742) that we get becomes the next term of the series.

Now, the series becomes, 7, 4, 2, 13, 19, 34, 66, 119, 219, 404, 742

Here, we will stop the process because we get the same number (742) as a term of the series. Hence, the given number 742 is a Keith number.



Steps to Find Keith Number
Read or initialize a number (X).
Separate each digit from the given number (X).
Add all the n-digits. It gives the next term of the series.
Again, add the last n-terms of the series to find the next term.
Repeat step 4 until we get the term the same as the number we have taken.
Let's implement the above steps in a Java program.

Keith Number Java Program
The logic is not much difficult. Compute the series using the sum of n previous numbers where n is the number of digits. If one of the numbers computed in the series is the same as the input number, it is a Keith number. The program stops if the value computed is greater than the input number.

Let's create a Java program and implement the above logic into it.

KeithNumberExample1.java

import java.util.*;  
class KeithNumberExample1  
{  
//user-defined function that checks if the given number is Keith or not  
static boolean isKeith(int x)  
{  
//List stores all the digits of the X  
ArrayList<Integer> terms=new ArrayList<Integer>();  
//n denotes the number of digits   
int temp = x, n = 0;   
//executes until the condition becomes false  
while (temp > 0)  
{  
//determines the last digit of the number and add it to the List      
terms.add(temp%10);  
//removes the last digit  
temp = temp/10;  
//increments the number of digits (n) by 1  
n++;  
}  
//reverse the List  
Collections.reverse(terms);  
int next_term = 0, i = n;  
//finds next term for the series  
//loop executes until the condition returns true  
while (next_term < x)  
{  
next_term = 0;  
//next term is the sum of previous n terms (it depends on number of digits the number has)  
for (int j=1; j<=n; j++)  
next_term = next_term + terms.get(i-j);  
terms.add(next_term);  
i++;  
}  
//when the control comes out of the while loop, there will be two conditions:  
//either next_term will be equal to x or greater than x  
//if equal, the given number is Keith, else not  
return (next_term == x);  
}  
//driver code  
public static void main(String[] args)  
{  
//calling the user-defined method inside the if statement and print the result accordingly    
if (isKeith(19))  
System.out.println("Yes, the given number is a Keith number.");  
else  
System.out.println("No, the given number is not a Keith number.");  
if(isKeith(742))  
System.out.println("Yes, the given number is a Keith number.");  
else  
System.out.println("No, the given number is not a Keith number.");  
if(isKeith(4578))  
System.out.println("Yes, the given number is a Keith number.");  
else  
System.out.println("No, the given number is not a Keith number.");  
}  
}  



Let's create another Java program to find all the Keith numbers that contain the same number of digits.

KeithNumberExample2.java

import java.util.Scanner;  
public class KeithNumberExample2  
{  
public static void main(String args[])   
{  
Scanner sc= new Scanner(System.in);  
System.out.print("Enter the number of digits the series must have: ");   
//reads an integer as length of the number from the user  
int numlen = sc.nextInt();  
//checks if the length of the number is greater than 2 or not  
if (numlen < 2)   
{  
//prints if the above condition returns false      
System.out.println("The number must have at least 2 digits.");  
}   
//executes if the above condition returns true  
else   
{  
//calculates the lower bound from where the series starts  
long lowBound = (long) Math.pow(10, numlen - 1);  
//calculates the upper bound from where the series ends  
long upperBound = (long) Math.pow(10, numlen);  
for (long l = lowBound; l < upperBound; l++)   
{  
if (isKeith(String.valueOf(l)))   
{  
//prints all the Keith number between given range      
System.out.print(l + ", ");  
}  
}  
}  
sc.close();  
}  
//function that checks whether the given number is Keith or not  
public static boolean isKeith(String input)   
{  
int numlen = input.length();  
//keep track only the last three terms  
long[] series = new long[numlen];  
for (int i = 0; i < numlen; i++)   
{  
series[i] = Long.valueOf(input.substring(i, i + 1));  
}  
long next_term = 0;  
long number = Long.valueOf(input);  
while (next_term < number)   
{  
next_term = 0;    
//calculates next term of the series  
for (int i = 0; i < numlen; i++)   
{  
next_term = next_term + series[i];  
if (i < numlen - 1)   
{  
//shift series to the left      
series[i] = series[i + 1];   
}   
else   
{  
//add new value to the series      
series[i] = next_term;   
}  
}  
//compares the next term of the series with the number and returns boolean value accordingly  
if (next_term == number)   
{  
return true;  
}  
}  
return false;  
}  
}  


