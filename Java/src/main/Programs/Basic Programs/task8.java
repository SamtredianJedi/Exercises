// How to Print Pattern in Java

Java pattern program enhances the coding skill, logic, and looping concepts. It is mostly asked in Java interview to check the logic and thinking of the programmer. We can print a Java pattern program in different designs. To learn the pattern program, we must have a deep knowledge of the Java loop, such as for loop do-while loop. In this section, we will learn how to print a pattern in Java.

We have classified the Java pattern program into three categories:

Start Pattern
Number Pattern
Character Pattern
Before moving to the pattern programs, let's see the approach.

Whenever you design logic for a pattern program, first draw that pattern in the blocks, as we have shown in the following image. The figure presents a clear look of the pattern.

Each pattern program has two or more than two loops. The number of the loop depends on the complexity of pattern or logic. The first for loop works for the row and the second loop works for the column. In the pattern programs, Java for loop is widely used.


In the above pattern, the row is denoted by i and the column is denoted by j. We see that the first row prints only a star. The second-row prints two stars, and so on. The colored blocks print the spaces.

Let's create the logic for the pattern, give above. In the following code snippet, we are starting row and column value from 0. We can also start it from 1, it's your choice.

for(int i=0; i<row; i++)   
{   
for(int j=0; j<=i; j++)   
{   
System.out.print("* ");   
}   
System.out.println(); 

In the above code snippet, the first for loop is for row and the second for loop for columns.

Let's see the execution of the code step by step, for n=4 (the number of rows we want to print).

The first print statement prints a star at the first row and the second println statement prints the spaces and throws the cursor at the next line.

*  

Now the value of i and j is increased to 1.

The first print statement prints two stars at the second row and the second println statement prints the spaces and throws the cursor at the next line.

*  
* *  

Now the value of i and j is increased to 2.

The first print statement prints three stars at the third row and the second println statement prints the spaces and throws the cursor at the next line.

*  
* *  
* * *  

Now the value of i and j is increased to 3.

The first print statement prints four stars at the fourth row and the second println statement prints the spaces and throws the cursor at the next line.

*  
* *  
* * *  
* * * *  

Star Pattern

public class RightTrianglePattern   
{   
public static void main(String args[])   
{   
//i for rows and j for columns      
//row denotes the number of rows you want to print  
int i, j, row=6;   
//outer loop for rows  
for(i=0; i<row; i++)   
{   
//inner loop for columns  
for(j=0; j<=i; j++)   
{   
//prints stars   
System.out.print("* ");   
}   
//throws the cursor in a new line after printing each line  
System.out.println();   
}   
}   
}  


2. Left Triangle Star Pattern

public class LeftTrianglePattern  
{    
public static void main(String args[])   
{    
//i for rows and j for columns      
//row denotes the number of rows you want to print  
int i, j, row = 6;       
//Outer loop work for rows  
for (i=0; i<row; i++)   
{  
//inner loop work for space      
for (j=2*(row-i); j>=0; j--)         
{  
//prints space between two stars      
System.out.print(" ");   
}   
//inner loop for columns  
for (j=0; j<=i; j++ )   
{   
//prints star      
System.out.print("* ");   
}   
//throws the cursor in a new line after printing each line  
System.out.println();   
}   
}   
}  

3. Pyramid Star Pattern

public class PyramidPattern  
{    
public static void main(String args[])   
{    
//i for rows and j for columns      
//row denotes the number of rows you want to print  
int i, j, row = 6;       
//Outer loop work for rows  
for (i=0; i<row; i++)   
{  
//inner loop work for space      
for (j=row-i; j>1; j--)   
{  
//prints space between two stars  
System.out.print(" ");   
}   
//inner loop for columns  
for (j=0; j<=i; j++ )   
{   
//prints star      
System.out.print("* ");   
}   
//throws the cursor in a new line after printing each line  
System.out.println();   
}   
}   
}  


4. Diamond Shape Pattern

import java.util.Scanner;  
public class DiamondPattern  
{  
public static void main(String args[])  
{  
int row, i, j, space = 1;  
System.out.print("Enter the number of rows you want to print: ");  
Scanner sc = new Scanner(System.in);  
row = sc.nextInt();  
space = row - 1;  
for (j = 1; j<= row; j++)  
{  
for (i = 1; i<= space; i++)  
{  
System.out.print(" ");  
}  
space--;  
for (i = 1; i <= 2 * j - 1; i++)  
{  
System.out.print("*");  
}  
System.out.println("");  
}  
space = 1;  
for (j = 1; j<= row - 1; j++)  
{  
for (i = 1; i<= space; i++)  
{  
System.out.print(" ");  
}  
space++;  
for (i = 1; i<= 2 * (row - j) - 1; i++)  
{  
System.out.print("*");  
}  
System.out.println("");  
}  
}  
}  

5. Downward Triangle Star Pattern

public class DownwardTrianglePattern  
{  
public static void main(String[] args)  
{  
int rows=7;      
//inner loop  
for (int i= rows-1; i>=0 ; i--)  
{  
//outer loop  
for (int j=0; j<=i; j++)  
{  
//prints star and space  
System.out.print("*" + " ");  
}  
//throws the cursor in the next line after printing each line  
System.out.println();  
}  
}  
}  

6. Mirrored Right Triangle Star Pattern

public class MirroredRightTrianglePattern   
{  
public static void main(String[] args)  
{  
int n=7;  
//inner loop  
for (int i= 0; i<= n; i++)  
{  
//outer loop  
for (int j=1; j<=n-i; j++)  
{  
System.out.print(" ");  
}  
for (int k=0;k<=i;k++)  
{  
System.out.print("*");  
}   
System.out.println("");  
}  
}  
}  


7. Reverse Pyramid Star Pattern

public class ReversePyramidPattern  
{  
public static void main(String[] args)  
{  
int rows=8;  
for (int i= 0; i<= rows-1; i++)  
{  
for (int j=0; j<=i; j++)  
{  
System.out.print(" ");  
}  
for (int k=0; k<=rows-1-i; k++)  
{  
System.out.print("*" + " ");  
}  
System.out.println();  
}  
}  
}  

8. Right Down Mirror Star Pattern

public class RightDownMirrorPattern  
{  
public static void main(String args[])  
{  
int row=7;  
for (int i= row; i>= 1; i--)  
{  
for (int j=row; j>i;j--)  
{  
System.out.print(" ");  
}  
for (int k=1;k<=i;k++)  
{  
System.out.print("*");  
}  
System.out.println("");  
}  
}  
}  

9. Right Pascal's Triangle

import java.util.Scanner;  
public class RightPascalTrianglePattern  
{  
public static void main(String[] args)  
{  
int i, j, rows;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number of rows you want to print: ");  
rows = sc.nextInt();          
for (i= 0; i<= rows-1; i++)  
{  
for (j=0; j<=i; j++)   
{  
System.out.print("*"+ " ");  
}   
System.out.println("");   
}   
for (i=rows-1; i>=0; i--)  
{  
for(j=0; j <= i-1;j++)  
{  
System.out.print("*"+ " ");  
}  
System.out.println("");  
}  
}  
}  

10. Left Pascal's Triangle

import java.util.Scanner;  
public class LeftPascalTrianglePattern  
{  
public static void main(String[] args)  
{  
int i, j, k, rows;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number of rows you want to print: ");  
rows = sc.nextInt();          
for (i= 1; i<= rows ; i++)  
{  
for (j=i; j <rows ;j++)              
{  
System.out.print(" ");  
}  
for (k=1; k<=i;k++)   
{  
System.out.print("*");   
}   
System.out.println("");   
}   
for (i=rows; i>=1; i--)  
{  
for(j=i; j<=rows;j++)  
{  
System.out.print(" ");  
}  
for(k=1; k<i ;k++)   
{  
System.out.print("*");  
}  
System.out.println("");  
}  
sc.close();  
}  
}  

11. Sandglass Star Pattern

import java.util.Scanner;  
public class SandglassPattern  
{  
public static void main(String[] args)  
{  
int i, j, k, n;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number of rows you want to print: ");  
n = sc.nextInt();              
for (i= 0; i<= n-1 ; i++)  
{  
for (j=0; j<i; j++)  
{  
System.out.print(" ");  
}  
for (k=i; k<=n-1; k++)   
{   
System.out.print("*" + " ");   
}   
System.out.println("");   
}   
for (i= n-1; i>= 0; i--)  
{  
for (j=0; j<i; j++)  
{  
System.out.print(" ");  
}  
for (k=i; k<=n-1; k++)  
{  
System.out.print("*" + " ");  
}  
System.out.println("");  
}  
sc.close();  
}  
}  


12. Alphabet Star Pattern

import java.util.*;  
public class AlphabetPattern  
{  
public static void main(String[] args)  
{  
int i, j, n=8;  
// Outer for loop for number of lines  
for (i = 0; i<=n; i++)   
{  
// Inner for loop for logic execution  
for (j = 0; j<= n / 2; j++)   
{  
// prints two vertical lines  
if ((j == 0 || j == n / 2) && i != 0 ||  
// print first line of alphabet  
i == 0  && j != n / 2 ||   
// prints middle line  
i == n / 2)   
System.out.print("*");  
else  
System.out.print(" ");  
}  
System.out.println();  
}  
}  
}  

13. Triangle Star Pattern

import java.util.Scanner;  
public class TrianglePattern  
{  
public static void main(String[] args)  
{  
int i, j, k, rows=9;  
for (i=1; i<= rows ; i++)  
{  
for (j = i; j < rows ; j++)   
{  
System.out.print(" ");  
}     
for (k = 1; k <= (2*i -1) ;k++)   
{  
if(k==1 || i == rows || k==(2*i-1))   
{  
System.out.print("*");  
}  
else   
{  
System.out.print(" ");  
}  
}  
System.out.println("");  
}  
}  
}  

14. Down Triangle Pattern

import java.util.Scanner;  
public class DownTrianglePattern  
{  
public static void main(String[] args)  
{  
int i, j, k, rows=9;     
for (i=rows; i>= 1 ; i--)  
{  
for (j = i; j<rows ; j++)   
{  
System.out.print(" ");  
}     
for (k = 1; k <= (2*i -1) ;k++)   
{  
if( k==1 || i == rows || k==(2*i-1))   
{  
System.out.print("*");  
}  
else   
{  
System.out.print(" ");  
}  
}  
System.out.println("");  
}  
}  
} 

15. Diamond Star Pattern

import java.util.*;  
public class DiamondPattern  
{  
public static void main(String[] args)  
{  
Scanner sc = new Scanner(System.in);  
System.out.println("Enter the number of rows you want to print: ");  
int rows = sc.nextInt();      
for (i=1; i<= rows ; i++)   
{  
for (j = rows; j > i ; j--)   
{  
System.out.print(" ");  
}  
System.out.print("*");  
for (k = 1; k < 2*(i -1) ;k++)   
{   
System.out.print(" ");   
}  
if( i==1)   
{   
System.out.println("");  
}  
else  
{  
System.out.println("*");   
}  
}   
for (i=rows-1; i>= 1 ; i--)  
{  
for (int j = rows; j > i ; j--)   
{  
System.out.print(" ");  
}  
System.out.print("*");  
for (int k = 1; k < 2*(i -1) ;k++)   
{  
System.out.print(" ");  
}  
if(i==1)  
System.out.println("");  
else  
System.out.println("*");  
}  
}  
}  



Number Pattern

public class Pattern1  
{  
public static void main(String args[])   
{   
int i, j,number, n=7;   
//loop for rows  
for(i=0; i<n; i++)  
{   
number=1;   
//loop for columns  
for(j=0; j<=i; j++)  
{   
//prints num  
System.out.print(number+ " ");   
//incrementing the value of number   
number++;   
}   
//throws the cursor at the next line after printing each row  
System.out.println();   
}   
}   
}  

Pattern-2 

public class Pattern2  
{              
public static void main(String[] args)   
{  
int i, j, k = 1;  
//inner loop  
for (i = 1; i <= 7; i++)   
{  
//outer loop  
for (j = 1; j< i + 1; j++)   
{  
//prints the value of k  
System.out.print(k++ + " ");  
}  
//throws the cursor at the next line  
System.out.println();  
}  
}  
}  

Pattern-3

public class Pattern3  
{              
public static void main(String[] args)   
{  
int n = 8;    //n is the number of rows you want to print  
for (int i = 0; i < n; i++)   
{  
int number = 1;  
System.out.printf("%" + (n - i) * 2 + "s", "");  
for (int j = 0; j <= i; j++)   
{  
System.out.printf("%4d", number);  
number = number * (i - j) / (j + 1);  
}  
System.out.println();  
}  
}  
}  

4. Pattern-4

public class Pattern4  
{              
public static void main(String[] args)   
{  
for (int i = 1; i <= 4; i++)  
{  
int n = 8;  
for (int j = 1; j<= n - i; j++)   
{   
System.out.print(" ");   
}   
for (int k = i; k >= 1; k--)  
{  
System.out.print(k);  
}  
for (int l = 2; l <= i; l++)   
{  
System.out.print(l);   
}   
System.out.println();   
}   
for (int i = 3; i >= 1; i--)  
{  
int n = 10;  
for (int j = 0; j<= n - i; j++)   
{  
System.out.print(" ");   
}   
for (int k = i; k >= 1; k--)  
{  
System.out.print(k);  
}  
for (int l = 2; l <= i; l++)  
{  
System.out.print(l);  
}  
System.out.println();  
}  
}  
}  


5. Pattern-5

import java.util.*;  
public class Pattern5  
{              
public static void main(String[] args)   
{  
int i, j, rows;  
Scanner sc = new Scanner(System.in);    
System.out.print("Enter the number of rows you want to print: ");      
 rows = sc.nextInt();           
for (i = 1; i <= rows; i++)   
{  
for (j = 1; j <= i; j++)  
{  
System.out.print(i+" ");  
}  
System.out.println();  
}           
}  
}  

6. Pattern-6

import java.util.*;  
public class Pattern6  
{  
public static void main(String[] args)  
{  
int i, j, rows;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number of rows youy want to print: ");  
rows = sc.nextInt();  
for (i = rows; i >= 1; i--)  
{  
for (j = rows; j >= i; j--)  
{  
System.out.print(j+" ");  
}  
   
System.out.println();  
}  
}  
}  

7. Pattern-7

import java.util.Scanner;  
public class Pattern7  
{  
public static void main(String[] args)   
{  
int i, j, n;  
Scanner sc = new Scanner(System.in);  
System.out.print("Enter the number of rows you want to print: ");  
n = sc.nextInt();  
for (i = 1; i <= n; i++)   
{   
for (j = i; j >= 1; j--)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}           
}  
}  

8. Pattern-8

public class Pattern8  
{  
public static void main(String[] args)   
{  
int rows=9;   //number of rows to print  
for (int i = 1; i <= rows; i++)   
{  
int num;  
if(i%2 == 0)  
{  
num = 0;  
for (int j = 1; j <= rows; j++)  
{  
System.out.print(num);  
num = (num == 0)? 1 : 0;  
}  
}  
else  
{  
num = 1;  
for (int j = 1; j <= rows; j++)  
{  
System.out.print(num);  
num = (num == 0)? 1 : 0;  
}  
}  
System.out.println();  
}  
}  
}   



9. Pattern-9

import java.util.Scanner;  
public class Pattern9  
{              
public static void main(String[] args)   
{  
int i, j, rows=9;         
for (i = 1; i <= rows; i++)   
{  
for (j = 1; j <= i; j++)  
{  
if(j%2 == 0)  
{  
System.out.print(0);  
}  
else  
{  
System.out.print(1);  
}  
}  
System.out.println();  
}  
}  
}  


10. Pattern-10

public class Pattern10  
{  
public static void main(String[] args)   
{  
int n = 10;    
for (int i = 1; i <= n; i++)   
{  
for (int j = 1; j < i; j++)   
{  
System.out.print(" ");  
}  
for (int k = i; k <= n; k++)   
{   
System.out.print(k+" ");  
}  
System.out.println();  
}  
for (int i = n-1; i >= 1; i--)   
{  
for (int j = 1; j < i; j++)   
{  
System.out.print(" ");  
}  
for (int k = i; k <= n; k++)  
{  
System.out.print(k+" ");  
}  
System.out.println();  
}  
}  
}  


11. Pattern-11

public class Pattern11  
{  
public static void main(String[] args)   
{  
int rows=8;   
//Prints upper half pattern  
for (int i = 1; i <= rows; i++)   
{  
for (int j = 1; j <= i; j++)   
{   
System.out.print(j+" ");   
}   
System.out.println();   
}   
//prints lower half pattern  
for (int i = rows-1; i >= 1; i--)  
{  
for (int j = 1; j <= i; j++)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
}  
}  

12. Pattern-12

public class Pattern12  
{  
public static void main(String[] args)   
{  
int rows=9;  
for (int i = 1; i <= rows; i++)   
{   
for (int j = rows; j >= i; j--)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
}  
}  

13. Pattern-13

public class Pattern14  
{  
public static void main(String[] args)   
{  
int i, j, rows=9;  
for (i = rows; i >= 1; i--)   
{  
for (j = 1; j <= i; j++)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
}  
}  


14. Pattern-14

public class Pattern14  
{  
public static void main(String[] args)   
{  
int rows=7, i, j;  
for (i = rows; i >= 1; i--)   
{  
for (j = i; j >= 1; j--)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
}  
}  

15. Pattern-15

public class Pattern15  
{  
public static void main(String[] args)   
{  
int i, j, rows=9;  
for (i = 1; i <= rows; i++)   
{  
//Prints first half of the row  
for (j = 1; j <= i; j++)   
{   
System.out.print(j+" ");   
}  
//Prints second half of the row   
for (j = i-1; j >= 1; j--)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
}  
}  

16. Pattern-16

public class Pattern16  
{  
public static void main(String[] args)   
{  
int i, j, rows=9;  
//Prints upper half  pattern  
for (i = rows; i >= 1; i--)   
{  
for (j = 1; j <= i; j++)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
//Prints lower half  pattern  
for (i = 2; i <= rows; i++)   
{  
for (j = 1; j <= i; j++)  
{  
System.out.print(j+" ");  
}  
System.out.println();  
}  
}  
}  

17. Pattern-17

public class Pattern17  
{  
public static void main(String[] args)   
{  
int rows=9;  
//Prints upper half pattern  
for (int i = 1; i <= rows; i++)   
{  
//Prints i spaces at the beginning of each row  
for (int j = 1; j < i; j++)   
{  
System.out.print(" ");  
}  
//Prints i to rows value at the end of each row  
for (int j = i; j <= rows; j++)   
{   
System.out.print(j);   
}   
System.out.println();   
}   
//Prints lower half  pattern   
for (int i = rows-1; i >= 1; i--)   
{  
//Prints i spaces at the beginning of each row  
for (int j = 1; j < i; j++)   
{  
System.out.print(" ");  
}  
//Prints i to rows value at the end of each row  
for (int j = i; j <= rows; j++)  
{  
System.out.print(j);  
}  
System.out.println();  
}  
}  
}  

18. Pattern-18

public class Pattern18  
{  
public static void main(String[] args)   
{  
int rows=8;  
for (int i = 1; i <= rows; i++)   
{  
for (int j = 1; j <= rows-i; j++)  
{  
System.out.print(1);  
}  
for (int j = 1; j <= i; j++)  
{  
System.out.print(i);  
}  
System.out.println();  
}  
}  
}  

19. Pattern-19

public class Pattern19  
{  
public static void main(String args[])  
{  
int rows=9;  
for (int i = 1; i <= rows; i++)   
{  
int num = i;  
for (int j = 1; j <= i; j++)   
{  
System.out.print(num+" ");  
num = num+rows-j;  
}  
System.out.println();  
}  
}  
}  

20. Pattern-20

public class Pattern20  
{  
public static void main(String[] args)   
{  
int i, j, k, rows=9;  
for(i=1;i< rows+1 ;i++)  
{  
for(j=i; j < rows+1 ;j++)  
{  
System.out.print(j + " ");  
}  
for(k=1; k < i ;k++)  
{  
System.out.print(k + " ");  
}  
System.out.println();  
}  
}  
}  

21. Pattern-21

import java.util.Scanner;  
public class Pattern21   
{   
public static void main(String[] args)    
{   
int i, j, min, n; //n is the number up to you want to print  
System.out.print("Enter the value of n: ");  
Scanner sc= new Scanner(System.in);  
n=sc.nextInt();  
//loo for upper left part  
for (i = 1; i <= n; i++)    
{   
for (j = 1; j <= n; j++)   
{   
min = i < j ? i : j;   
System.out.print(n - min + 1+ " ");   
}  
//loop for upper right part  
for (j = n - 1; j >= 1; j--)   
{   
min = i < j ? i : j;   
System.out.print(n - min + 1+ " ");   
}   
System.out.println();   
}   
//loop for lower left part  
for (i = n - 1; i >= 1; i--)    
{   
for (j = 1; j <= n; j++)    
{   
min = i < j ? i : j;   
System.out.print(n - min + 1+ " ");   
}   
//loop for lower right part  
for (j = n - 1; j >= 1; j--)    
{   
min = i < j ? i : j;   
System.out.print(n - min + 1+ " ");   
}   
System.out.println();   
}   
}   
}   

Character Pattern
1. Right Triangle Alphabetic Pattern

public class RightAlphabaticPattern  
{              
public static void main(String[] args)  
{  
int alphabet = 65; //ASCII value of capital A is 65  
//inner loop for rows  
for (int i = 0; i <= 8; i++)  
{  
//outer loop for columns      
for (int j = 0; j <= i; j++)  
{  
//adds the value of j in the ASCII value of A and prints the corresponding alphabet  
System.out.print((char) (alphabet + j) + " ");   
}  
System.out.println();  
}  
}  
}  

2. Repeating Alphabet Pattern

public class RepeatingPattern  
{              
public static void main(String[] args)  
{  
int letter = 65; //ASCII value of capital A is 65  
//inner loop for rwos  
for (int i = 0; i<= 9; i++)  
{  
//outer loop for columns  
for (int j = 0; j <= i; j++)  
{  
//prints the character  
System.out.print((char) letter + " ");  
}  
letter++;  
System.out.println();  
}  
}  
}  

3. K-shape Alphabet Pattern

public class KshapePattern  
{  
public static void main(String[] args)  
{  
for (int i = 8; i >= 0; i--)  
{  
int alphabet = 65;  
for (int j = 0; j <= i; j++)  
{  
System.out.print((char) (alphabet + j) + " ");  
}  
System.out.println();  
}  
for (int i = 0; i<= 8; i++)  
{  
int alphabet = 65;  
for (int j = 0; j <= i; j++)  
{  
System.out.print((char) (alphabet + j) + " ");  
}  
System.out.println();  
}  
}  
}  


4. Triangle Character Pattern

public class TriangleCharacterPattern  
{              
public static void main(String[] args)  
{  
for (int i = 0; i <= 8; i++)   
{  
int alphabet = 65;   
for (int j = 8; j > i; j--)  
{  
System.out.print(" ");  
}  
for (int k = 0; k <= i; k++)  
{  
System.out.print((char) (alphabet + k) + " ");  
}  
System.out.println();  
}  
}  
}  

5. Diamond Character Pattern

import java.util.Scanner;  
public class DiamondCharacterPattern  
{  
public static void main(String[] args)   
{  
char[] alphabet = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };  
int alphabet _number = 0;  
String[] diamond = new String[26]; // array of strings  
System.out.print("Enter a Character between A to Z : ");  
Scanner reader = new Scanner(System.in);  
try   
{  
char user_ alphabet = reader.next("[A-Z]").charAt(0);  
// search for letter number in the array letter  
for (int i = 0; i < alphabet.length; i++)   
{  
if (letter[i] == user_ alphabet)   
{  
alphabet _number = i;  
break;  
}  
}  
//construct diamond  
for (int i = 0; i <= alphabet _number; i++)   
{  
diamond[i] = "";  
//add initial spaces  
for (int j = 0; j < alphabet _number - i; j++)   
{  
diamond[i] += " ";  
}  
// add alphabet  
diamond[i] += alphabet  
//add space between letters  
if (alphabet[i] != 'A')   
{  
for (int j = 0; j < 2 * i - 1; j++)   
{   
diamond[i] += " ";   
}   
// add alphabet  
diamond[i] += alphabet[i];   
}   
// Draw the first part of the diamond   
System.out.println(diamond[i]);   
}   
for (int i = alphabet _number - 1; i >= 0; i--)  
{  
// Draw the second part of the diamond  
// prints the diamondArray in the reverse order  
System.out.println(diamond[i]);  
}  
}  
catch (Exception e)   
{  
e.printStackTrace();  
}  
finally   
{  
reader.close();  
}  
}  
}  



