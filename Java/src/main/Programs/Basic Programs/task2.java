// Factorial Program

Factorial of n is the product of all positive descending integers. Factorial of n is denoted by n!. For example:

4! = 4*3*2*1 = 24  
5! = 5*4*3*2*1 = 120  
Here, 4! is pronounced as "4 factorial", it is also called "4 bang" or "4 shriek".

The factorial is normally used in Combinations and Permutations (mathematics).

There are many ways to write the factorial program in java language. Let's see the 2 ways to write the factorial program in java.

Factorial Program using loop
Factorial Program using recursion


Factorial Program using loop in java

class FactorialExample{  
 public static void main(String args[]){  
  int i,fact=1;  
  int number=5;//It is the number to calculate factorial    
  for(i=1;i<=number;i++){    
      fact=fact*i;    
  }    
  System.out.println("Factorial of "+number+" is: "+fact);    
 }  
}  

Factorial Program using recursion in java

class FactorialExample2{  
 static int factorial(int n){    
  if (n == 0)    
    return 1;    
  else    
    return(n * factorial(n-1));    
 }    
 public static void main(String args[]){  
  int i,fact=1;  
  int number=4;//It is the number to calculate factorial    
  fact = factorial(number);   
  System.out.println("Factorial of "+number+" is: "+fact);    
 }  
}  

