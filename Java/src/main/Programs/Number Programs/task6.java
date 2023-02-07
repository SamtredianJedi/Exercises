// Duck Number Java


Duck number is another special positive non-zero number that contains zero in it. The digit zero should not be presented at the starting of the number. Zero can be present at any of the positions except the beginning of the number.

Let's understand some examples of Duck numbers.

3210 is a Duck number because it contains zero at the end of the number but not present at the beginning of it.
08237 is not a Duck number because it contains zero at the beginning of it.
7033 is a Duck number because it contains zero at the second position, not at the beginning.
030405 is not a Duck number because it also contains zero in starting of the number.
00153 is also not a Duck number because it contains leading zeros.
These are the following steps that we use to check whether the given number is a Duck number or not.

We first take a number.
We then find the last digit of the number.
If the last digit is zero, it is a Duck number.
Otherwise, we remove that digit from the number.
Perform steps 2, 3, and 4 until the number becomes zero.
Let's implement the code to check a valid Duck number.

DuckNumber.java

//import required classes and packages  
import java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create DuckNumberExample class to check whether the given number is a Duck number or not  
public class DuckNumberExample {  
  
   // create checkNumber() method that returns true when it founds number Buzz   
   public static boolean checkNumber(int number) {  
  
      // use loop to repeat steps  
      while(number != 0) {  
  
         // check whether the last digit of the number is zero or not  
         if(number%10 == 0)  
            return true;    //return true if the number is Duck  
  
         // divide the number by 10 to remove the last digit  
         number = number / 10;  
      }  
  
      return false; //return false if the number is not Duck  
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
            System.out.println(n1 + " is a Duck number");   
        else  
            System.out.println(n1 + " is not a Duck number");   
        if (checkNumber(n2))   
            System.out.println(n2 + " is a Duck number");   
        else  
            System.out.println(n2 + " is not a Duck number");   
    }  
}  




Let's implement one more program to get all the Duck number in a given range

FindAllDuckNumber.java

//import required classes and packages  
import java.util.*;   
import java.io.*;   
import java.util.Scanner;  
  
//create FindAllDuckNumber class to get all the Duck number in a given range  
class FindAllDuckNumber  
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
            if(checkNumber(i)){  
                System.out.println(i + " is a Duck number");  
            }  
    }  
  
    // create checkNumber() method that returns true when it founds number Buzz   
    public static boolean checkNumber(int number) {  
  
        // use loop to repeat steps  
        while(number != 0) {  
  
            // check whether the last digit of the number is zero or not  
            if(number%10 == 0)  
                return true;    //return true if the number is Duck  
  
            // divide the number by 10 to remove the last digit  
            number = number / 10;  
        }  
  
        return false;   //return false if the number is not Duck  
   }  
}  

