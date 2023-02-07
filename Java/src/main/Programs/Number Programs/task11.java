// ISBN Number Java



ISBN is another special number in Java. ISBN stands for the International Standard Book Number that is carried by almost each every book. The ISBN is a ten-digit unique number. With the help of the ISBN, we can easily find any book. The ISBN number is a legal number when 1*Digit1 + 2*Digit2 + 3*Digit3 + 4*Digit4 + 5*Digit5 + 6*Digit6 + 7*Digit7 + 8*Digit8 + 9*Digit9 + 10*Digit10 is divisible by 11. The digits are taken from right to left. So, if the ten-digit number is 7426985414, Digit1 and Digit10 will be 4 and 7, respectively.

Let's take two numbers and check whether the numbers are legal or not.

Example:
Number1: 8147852369

Sum = (1*9) + (2*6) + (3*3) + (4*2) + (5*5) + (6*8) + (7*7) + (8*4) + (9*1) + (10*8)

Sum = 9 + 12 + 9 + 8 + 25 + 48 + 49 + 32 + 9 + 80

Sum = 281

Now, we divide the sum with 11 and check whether the remainder is 0 or not. If the remainder is 0, the number is a legal ISBN.

rem = 281 % 11

rem = 6 != 0

Number 8147852369 is not a legal ISBN because the remainder is not equal to the 0.

Number2: 1259060977

Sum = (1*10) + (2*9) + (5*8) + (9*7) + (0*6) + (6*5) + (0*4) + (9*3) + (7*2) + (7*1)

Sum = 10 + 18 + 40 + 63 + 0 + 30 + 0 + 27 + 14 + 7

Sum = 209

Now, we divide the sum with 11 and check whether the remainder is 0 or not.

rem = 209 % 11

rem = 0

Number 1259060977 is a legal ISBN because the remainder is equal to 0.

Steps to implement the ISBN program
These are the following steps that we use to implement the program of ISBN in Java.

Take a ten-digit ISB number from the user.
Check whether the user entered a ten-digit number or not because if the number is not a ten-digit number, it can't be an ISBN.
Find each digit's sum by multiplying each digit from left to right by 1, 2, 3,…….,10.
Find the remainder of the sum with 11. If the remainder is equal to 0, the number is an ISBN else, not an ISBN.
Let's implement the code to check whether the number is an ISBN or not by using the above steps:

ISBNNumberExample.java

//import required classes and packages  
import java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create ISBNNumberExample class to check whether the given number is a valid ISBN or not  
class ISBNNumberExample {   
    
     static boolean checkISBNNumber(long number)  
    {  
            int sum = 0;  
    int i, t, intNumber, dNumber;  
    String strNumber;  
          
    strNumber = ""+number;  
          
    if (strNumber.length() != 10) {  
                    return false;  
            }  
          
            for (i = 0; i < strNumber.length(); i++) {  
                    intNumber = Integer.parseInt(strNumber.substring(i, i+1));  
                    dNumber = i + 1;  
                    t = dNumber * intNumber;  
                    sum = sum + t;  
            }  
  
            // check whether the sum is divisible by 11 or not  
        
            if ((sum % 11) == 0) {  
                    return true;  
            }  
          
    return false;  
          
    }  
    
    // main() method start  
    public static void main(String args[])   
    {     
long n1, n2;  
          
    try {  
              
        //create BufferedReader class object to get input from user  
        InputStreamReader in = new InputStreamReader(System.in);  
        BufferedReader br = new BufferedReader(in);  
          
        //show custom message  
        System.out.println("Enter first 10 digit ISBN number");  
              
        //store user entered value into variable n1  
        n1 = Long.parseLong(br.readLine());  
              
        //show custom message  
        System.out.println("Enter second 10 digit ISBN number");  
              
        //store user entered value into variable n2  
        n2 = Long.parseLong(br.readLine());  
              
        if (checkISBNNumber(n1))   
            System.out.println(n1 + " is a valid ISBN number");   
        else  
            System.out.println(n1 + " is not a valid ISBN number");   
        if (checkISBNNumber(n2))   
            System.out.println(n2 + " is a a valid ISBN number");   
        else  
            System.out.println(n2 + " is not a valid ISBN number");  
              
        }catch(java.lang.Exception e) {  
            System.out.println("Error while reading the data.");  
        }   
        }   
}  


