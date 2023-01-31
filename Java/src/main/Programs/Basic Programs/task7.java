// How to Print ASCII Value in Java



ASCII acronym for American Standard Code for Information Interchange. It is a 7-bit character set contains 128 (0 to 127) characters. It represents the numerical value of a character. For example, the ASCII value of A is 65.

In this section, we will learn how to print ASCII value or code through a Java program.

There are two ways to print ASCII value in Java:

Assigning a Variable to the int Variable
Using Type-Casting
Assigning a Variable to the int Variable
To print the ASCII value of a character, we need not use any method or class. Java internally converts the character value to an ASCII value.

Let's find the ASCII value of a character through a Java program.

In the following program, we have assigned two characters a and b in the ch1 and ch2 variables, respectively. To find the ASCII value of a and b, we have assigned ch1 and ch2 variables to the integer variables asciivalue1 and asciivalue2, respectively. Finally, we have printed the variable asciivalue1 and asciivalue2 in which ASCII values of the characters are stored.

PrintAsciiValueExample1.java

public class PrintAsciiValueExample1   
{  
public static void main(String[] args)   
{  
// character whose ASCII value to be found  
char ch1 = 'a';  
char ch2 = 'b';  
// variable that stores the integer value of the character  
int asciivalue1 = ch1;  
int asciivalue2 = ch2;  
System.out.println("The ASCII value of " + ch1 + " is: " + asciivalue1);  
System.out.println("The ASCII value of " + ch2 + " is: " + asciivalue2);  
}  
}  


PrintAsciiValueExample2.java

public class PrintAsciiValueExample2  
{  
public static void main(String[] String)   
{  
int ch1 = 'a';  
int ch2 = 'b';  
System.out.println("The ASCII value of a is: "+ch1);  
System.out.println("The ASCII value of b is: "+ch2);  
}  
}  


Similarly, we can print the ASCII value of other characters (A, B, C, …., Z) and symbols (!, @, $, *, etc.).

Using Type-Casting
Type-casting is a way to cast a variable into another datatype.

In the following program, we have declared two variables ch1 and ch2 of type char having the character a and b, respectively. In the next two lines, we have cast char type to int type using (int). After executing these two lines, the variable ch1 and ch2 are converted to an int variable ascii1 and ascii2, respectively.

Finally, we have printed the variable ascii1 and ascii2 in which ASCII values of the characters are stored.

PrintAsciiValueExample3.java

public class PrintAsciiValueExample3   
{  
public static void main(String[] args)   
{  
//characters whose ASCII value to be found  
char ch1 = 'a';  
char ch2 = 'b';  
//casting or converting a charter into int type  
int ascii1 = (int) ch1;  
int ascii2 = (int) ch2;  
System.out.println("The ASCII value of " + ch1 + " is: " + ascii1);  
System.out.println("The ASCII value of " + ch1 + " is: " + ascii2);  
}  
}  


If we do not want to assign character, we can also take a character from the user.

PrintAsciiValueExample4.java

import java.util.Scanner;  
public class PrintAsciiValueExample4  
{  
public static void main(String args[])  
{  
System.out.print("Enter a character: ");  
Scanner sc = new Scanner(System.in);  
char chr = sc.next().charAt(0);  
int asciiValue = chr;  
System.out.println("ASCII value of " +chr+ " is: "+asciiValue);  
}  
}  

AsciiValueOfAllChracters.java

public class AsciiValueOfAllChracters  
{  
public static void main(String[] args)   
{  
for(int i = 0; i <= 255; i++)  
{  
System.out.println(" The ASCII value of " + (char)i + "  =  " + i);  
}  
}  
}   

If we want to print the ASCII value of all the alphabets (A to Z), we can set the values in the loop and print them.

AsciiValueAtoZ.java

public class AsciiValueAtoZ  
{  
public static void main(String[] args)   
{  
for(int i = 65; i <= 90; i++)  
{  
System.out.println(" The ASCII value of " + (char)i + "  =  " + i);  
}  
}  
}  

Similarly, we can print the ASCII value of a to z by changing the loop in the above code.

for(int i = 97; i <= 122; i++)  

