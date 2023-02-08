// Sphenic Number in Java



In this section, we will learn what is a sphenic number and also create Java programs to check if the given number is sphenic or not. The sphenic number program frequently asked in Java coding tests and academics.

Sphenic Number
A positive integer n is called a sphenic number if the product of factors of the given number (n) is exactly three and all factors are prime. In other words, if n is a sphenic integer then n=p x q x r (p, q, and are three distinct prime numbers and their product are n). It is a sequence A007304 in the OEIS. Let's understand it through an example.

A number will be a sphenic number if the product of three distinct prime numbers gives the number itself. The sphenic numbers have exactly 8 divisors.

The eight divisors are as follows:

1
Three distinct primes
Three semi-primes (in which each of the distinct prime factors of the sphenic number is omitted)
The sphenic number itself
Let's consider the number 42 and check it is sphenic or not.

The factors of 42 are 1, 2, 3, 7, 21. Let's find the 8 divisors.

21 equals 3 times 7, 2 is omitted.
14 equals 2 times 7, 3 is omitted.
6 equals 2 times 3, 7 is omitted.
42 itself.
Hence, 42 is a sphenic number because it has exactly three prime factors 2, 3, and 7 and the product of these factors gives the number itself.

Note: The product of the cube of a prime and another prime as well as seventh powers of primes also has 8 divisors.
Sphenic Number Example
Let's take the number 30 and check if it is sphenic or not.

The smallest three primes factors that form the same numbers are 2, 3, and 5. On multiplying them, we get the same number 30. Hence, the given number is a sphenic number.

Let's take another number, 110.

110=1,2,5,10,11,22,55,and 110

The smallest three primes factors that form the same numbers are 2, 5, and 11. On multiplying them, we get the same number 110. Hence, the given number is a sphenic number.

Let's take another number, 23.

23=1,23

The given number 23 is not a sphenic number. Because there are only two prime factors.

Similarly, we can check other numbers also. Some other sphenic numbers are 78, 102, 105, 110, 285, 286, 290, 310, 318, 322, 345, etc. We can find the complete list of all the sphenic numbers up to 10000 provided by OEIS.

Sphenic Number Java Program
Above, we have discussed that the sphenic number has exactly 8 divisors. So, first, we will try to find if the number is having exactly 8 divisors or not. After that, we will check that the first, three digits (except 1) are prime or not.

SphenicNumberExample1.java

import java.util.*;  
public class SphenicNumberExample1  
{  
//create a global array of size 100000  
static boolean arr[] = new boolean[10000];  
//finds all the primes smaller than the limit  
static void findPrime()  
{  
//marks all entries as true      
//A value in mark[p] will finally be false if 'p' is Not a prime, else true.  
Arrays.fill(arr, true);  
//iterate over all the numbers so that their multiples can be marked as composite  
for(int p = 2; p * p < 10000; p++)  
{  
//if p is not changed, then it is a prime  
if(arr[p])  
{  
//update all the multiples of p  
for(int i = p * 2; i < 10000; i = i + p)  
arr[i] = false;  
}  
}  
}  
//user-defined function that checks if the given number is sphenic or not  
static int isSphenic(int N)  
{  
//creating an array that stores the 8 divisors      
int []arr1 = new int[8];   
//counts the divisors  
int count = 0;    
int j = 0;  
for(int i = 1; i <= N; i++)    
{  
if(N % i == 0 && count < 8)    
{  
//increments the count by 1      
count++;  
arr1[j++] = i;  
}  
}  
//checks that there is exactly 8 divisors or not and all the numbers are distincit prime or not  
//if yes returns 1, else returns 0  
if(count == 8 && (arr[arr1[1]] && arr[arr1[2]] && arr[arr1[3]]))  
return 1;  
return 0;  
}  
//driver code  
public static void main(String args[])  
{  
//calling user-defined function that find the priime numbers  
findPrime();  
Scanner sc=new Scanner(System.in);  
System.out.print("Enter a number to check: ");  
//reading an iteger from the user  
int n=sc.nextInt();  
int result = isSphenic(n);  
if(result == 1)  
//prints yes if the above condition returns true  
System.out.print("Yes, the given number is sphenic.");  
else  
//prints no if the above condition returns false  
System.out.print("No, the given number is not a sphenic.");  
}  
}  



import java.util.*;  
public class SphenicNumberExample2  
{  
public static void main(String args[])   
{  
Scanner sc=new Scanner(System.in);  
int lower, upper, i, n, f, count, k;  
System.out.print("Enter the lower limit: ");  
//reads the lower limit from the user  
lower=sc.nextInt();  
System.out.print("Enter the upper limit: ");  
//reads the upper limit from the user  
upper=sc.nextInt();  
System.out.println("\nSphenic numbers between the given range are: ");  
for(i=lower;i<=upper;i++)  
{  
n=i;  
k=0;  
//defining an array that stores distinct prime factors  
int prime[]={0,0,0};   
//finds all the prime factors  
for(f=2; n!=1;f++)      
{  
//counts the frequency of the prime factors      
count=0;                  
while(n%f==0)  
{  
count++;              
n=n/f;  
}  
if(count==1)           
prime[k++]=f;  
if(k==prime.length)    
//breaks the execution if there are 3 unique prime factors  
break;            
}  
//multiplying the prime factors  
n=prime[0]*prime[1]*prime[2];  
//compares the product (n) with the original number (i)  
if(i==n)            
System.out.print(i+" ");  
}  
System.out.println();  
}   
}   


Let's create another Java program to find all the sphenic numbers by using different logic.

SphenicNumberExample3.java

import java.util.*;  
public class SphenicNumberExample3  
{  
public static void main(String args[])  
{  
Scanner sc=new Scanner(System.in);  
int x,num,i,j,a,b,cp,ctr;  
System.out.print("Enter the lower limit: ");  
a=sc.nextInt();  
System.out.print("Enter the upper limit: ");  
b=sc.nextInt();  
for(num=a;num<=b;num++)  
{  
int c=0, f=1;  
cp=num;  
ctr=0;  
for (x=2;x<=cp;x++)  
{  
c=0;  
while((cp%x)==0)  
{  
cp=cp/x;  
c++;  
}  
if(c==1)  
{  
f=f*x;  
ctr++;  
}  
}  
if(f==num && ctr==3)  
System.out.print(num+"\t");  
}  
}  
}  

