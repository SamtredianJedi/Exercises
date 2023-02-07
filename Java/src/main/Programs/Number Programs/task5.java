// Buzz Number Java



Buzz number is another special number in Java that ends with digit 7 or divisible by 7. Unlike Prime and Armstrong numbers, the Buzz number is not so popular and asked by the interviewers.

In simple words, a number is said to be Buzz if it ends with 7 or is divisible by 7.

Let's take some examples of Buzz numbers.

42 is a Buzz number because it is divisible by 7.
107 is a Buzz number because it ends with 7.
147 is a Buzz number because it ends with 7 and also divisible by 7.
134 is not a Buzz number because it is neither end with 7 nor divisible by 7.
These are the following steps that we use to check whether the given number is a Buzz number or not.

We first take a number.
We then find the last digit of the number and check whether it is equals to 7 or not. If it equals 7, print "the number is a Buzz" number.
We then find the remainder of the number with 7. If the remainder equal to 0, print "the number is a Buzz number".
Else print "number is not a buzz number".
Let's implement a program to check whether the user entered number is a Buzz number or not.

BuzzNumberExample.java

//import required classes and packages  
import Java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create BuzzNumberExample class to check whether the given number is Buzz number or not  
class BuzzNumberExample {   
    
    // create checkNumber() method that returns true when it founds number Buzz   
    static boolean checkNumber(int number)   
    {   
        // check whether the number ends with 7, is divisible by 7 or not  
        if(number % 10 == 7 || number % 7 == 0)  
            return true;    //returns true when the number is Buzz  
        else  
            return false;   //returns flase when the number is not Buzz  
    }   
    
    // main() method start  
    public static void main(String args[])   
    {     
        int n1, n2;  
          
        //create scanner class object to get input from user  
        Scanner sc=new Scanner(System.in);  
          
        //show custom message  
        System.out.println("Enter first number");  
          
        //store user entered value into variable n1  
        n1 = sc.nextInt();  
          
        //show custom message  
        System.out.println("Enter second number");  
          
        //store user entered value into variable n2  
        n2 = sc.nextInt();  
          
        if (checkNumber(n1))   
            System.out.println(n1 + " is a Buzz number");   
        else  
            System.out.println(n1 + " is not a Buzz number");   
        if (checkNumber(n2))   
            System.out.println(n2 + " is a Buzz number");   
        else  
            System.out.println(n2 + " is not a Buzz number");   
    }   
}   



Let's implement one more program to get all the Buzz number in a given range

FindAllBuzzNumbers.java

//import required classes and packages  
import java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create FindAllBuzzNumber class to get all the Buzz number in a given range  
class FindAllBuzzNumbers  
{  
    //main() method start  
    public static void main(String args[])  
    {  
        int range;  
          
        //create scanner class object  
        Scanner sc=new Scanner(System.in);  
          
        //show custom message  
        System.out.println("Enter the value of range");  
          
        //store user entered value into variable range  
        range = sc.nextInt();  
  
        for(int i = 1; i <= range; i++)  
            checkNumber(i);  
    }  
  
     // create checkNumber() method to check Buzz number  
    static void checkNumber(int number)   
    {   
        // check whether the number ends with 7, is divisible by 7 or not  
        if(number % 10 == 7 || number % 7 == 0)  
            System.out.println(number + " is an Buzz number");  
    }  
  
}  


