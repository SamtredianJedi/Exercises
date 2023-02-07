// Evil Number Java



The Evil number is another special positive whole number in Java that has an even number of 1's in its binary equivalent. Unlike Prime and Armstrong numbers, Evil number is not so popular and asked by the interviewers.

The numbers which are not evil are called odious numbers. Let's some examples of evil and odious numbers.

15 is an evil number because in its binary equivalent, i.e., 1111, it has an even number of ones.
16 is an odious number because in its binary equivalent, i.e., 10000 has not even number of ones
23 is also an evil number because it has an even number of ones in its binary equivalent, i.e., 10111.
In order to check whether the number is evil or not, we have to follow the following steps:

We first take a number.
We then find the binary equivalent of this number and store it into another variable.
We find the total number of ones in the binary number.
If we found an even number of ones in the binary equivalent number, then the number is an evil number. Else the given number is not an evil number.
Note: To convert a decimal number into binary, we can use the toBinaryString() in-built method or do it manually by using the loop.
Let's implement the code to check whether the number is evil or not.

EvilNumberExample.java

//import required classes and packages  
import Java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create EvilNumberExample class to check whether the given number is an Evil number or not  
public class EvilNumberExample {  
  
    // create checkNumber() method that returns true when it founds number Evil   
    public static boolean checkNumber(int n) {  
  
        // find the equivalence binary number using user defined convertToBinary() method  
        long binaryNumber = convertToBinary(n);  
  
        // find total number of 1's in binary number  
        int count = 0;  
  
        // iterate each digit of binary number  
        while(binaryNumber != 0) {  
  
            // if the last digit of binary number is 1, increase the count value  
            if(binaryNumber % 10 == 1)   
                count++;  
  
            // remove the last digit from the number  
            binaryNumber = binaryNumber / 10;  
        }  
  
        // check whether the value of count is even or odd  
        if(count % 2 == 0)  
            return true;    //return true when the value of count is even  
  
        //return false if the value of the count is false  
        return false;  
    }  
  
    //create convertToBinary() method to convert the decimal value into binary  
    private static long convertToBinary(int number) {  
        long binaryNumber = 0;  
        int rem = 0;  
        int j = 1;  
        while(number != 0) {  
            rem = number % 2;  
            binaryNumber += rem * j;  
            number = number / 2;  
            j = j * 10;  
        }  
          
        return binaryNumber;    //return the binary equivalent number of the decimal number  
    }  
      
    //main() method start  
    public static void main(String[] args) {  
      
        // declare variable in which the user entered value will be store  
        int num = 0;  
  
        // create scanner class object   
        Scanner sc =  new Scanner(System.in);  
          
        //display custom message  
        System.out.print("Enter a number : ");  
          
        //get input from user  
        num = sc.nextInt();  
  
        // check whether the number is evil number or not  
        if(checkNumber(num))  
            System.out.println(num + " is an evil number");  
        else  
            System.out.println(num + " is not an evil number");  
  
    }  
}  


Let's implement one more program to get all the Evil numbers in a given range

FindAllEvilNumber.java

//import required classes and packages  
import java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create a class to get all the Evil number in a given range  
public class FindAllEvilNumber {  
  
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
            if(checkNumber(i)){  
                System.out.println(i + " is an Evil number");  
            }  
    }  
      
    // create checkNumber() method that returns true when it founds number Evil   
    public static boolean checkNumber(int n) {  
  
        // find the equivalence binary number using user defined convertToBinary() method  
        long binaryNumber = convertToBinary(n);  
  
        // find total number of 1's in binary number  
        int count = 0;  
  
        // iterate each digit of binary number  
        while(binaryNumber != 0) {  
  
            // if the last digit of binary number is 1, increase the count value  
            if(binaryNumber % 10 == 1)   
                count++;  
  
            // remove the last digit from the number  
            binaryNumber = binaryNumber / 10;  
        }  
  
        // check whether the value of count is even or odd  
        if(count % 2 == 0)  
            return true;    //return true when the value of count is even  
  
        //return false if the value of the count is false  
        return false;  
    }  
  
    //create convertToBinary() method to convert the decimal value into binary  
    private static long convertToBinary(int number) {  
        long binaryNumber = 0;  
        int rem = 0;  
        int j = 1;  
        while(number != 0) {  
            rem = number % 2;  
            binaryNumber += rem * j;  
            number = number / 2;  
            j = j * 10;  
        }  
          
        return binaryNumber;    //return the binary equivalent number of the decimal number  
    }  
}  


