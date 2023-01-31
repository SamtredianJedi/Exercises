// How to Generate Random Number in Java




In Java programming, we often required to generate random numbers while we develop applications. Many applications have the feature to generate numbers randomly, such as to verify the user many applications use the OTP. The best example of random numbers is dice. Because when we throw it, we get a random number between 1 to 6.

In this section, we will learn what is a random number and how to generate random numbers in Java.

Random Number
Random numbers are the numbers that use a large set of numbers and selects a number using the mathematical algorithm. It satisfies the following two conditions:

The generated values uniformly distributed over a definite interval.
It is impossible to guess the future value based on current and past values.
Generating Random Number in Java
In Java, there is three-way to generate random numbers using the method and classes.

Using the random() Method
Using the Random Class
Using the ThreadLocalRandom Class
Using the ints() Method (in Java 8)


Using the Math.random() Method
The Java Math class has many methods for different mathematical operations. One of them is the random() method. It is a static method of the Math class. We can invoke it directly. It generates only double type random number greater than or equal to 0.0 and less than 1.0. Before using the random() method, we must import the java.lang.Math class.

Syntax:

public static double random()  
It does not accept any parameter. It returns a pseudorandom double that is greater than or equal to 0.0 and less than 1.0.

Let's create a program that generates random numbers using the random() method.

import java.lang.Math;   
public class RandomNumberExample1  
{   
public static void main(String args[])   
{   
// Generating random numbers  
System.out.println("1st Random Number: " + Math.random());   
System.out.println("2nd Random Number: " + Math.random());  
System.out.println("3rd Random Number: " + Math.random());   
System.out.println("4th Random Number: " + Math.random());   
}   
}  

Remember: Every time we get a different output when we execute the program. Your output may differ from the output shown above.

We can also use the following formula if we want to a generate random number between a specified range.

Math.random() * (max - min + 1) + min  
In the above formula, the min value is inclusive while the max value is exclusive.

Let's create a program that generates random numbers between 200 to 400.

public class RandomNumberExample2  
{  
public static void main( String args[] )   
{  
int min = 200;  
int max = 400;  
//Generate random double value from 200 to 400   
System.out.println("Random value of type double between "+min+" to "+max+ ":");  
double a = Math.random()*(max-min+1)+min;   
System.out.println(a);  
//Generate random int value from 200 to 400   
System.out.println("Random value of type int between "+min+" to "+max+ ":");  
int b = (int)(Math.random()*(max-min+1)+min);  
System.out.println(b);  
}  
}  

Using the Random Class
Another way to generate a random number is to use the Java Random class of the java.util package. It generates a stream of pseudorandom numbers. We can generate a random number of any data type, such as integer, float, double, Boolean, long. If you are going to use this class to generate random numbers, follow the steps given below:

First, import the class java.lang.Random.
Create an object of the Random class.
Invoke any of the following methods:
nextInt(int bound)
nextInt()
nextFloat()
nextDouble()
nextLong()
nextBoolean()
All the above methods return the next pseudorandom, homogeneously distributed value (corresponding method) from this random number generator's sequence. The nextDouble() and nextFloat() method generates random value between 0.0 and 1.0.

The nextInt(int bound) method accepts a parameter bound (upper) that must be positive. It generates a random number in the range 0 to bound-1.

Let's create a program that generates random numbers using the Random class.

import java.util.Random;   
public class RandomNumberExample3  
{   
public static void main(String args[])   
{   
// creating an object of Random class   
Random random = new Random();   
// Generates random integers 0 to 49  
int x = random.nextInt(50);   
// Generates random integers 0 to 999  
int y = random.nextInt(1000);   
// Prints random integer values  
System.out.println("Randomly Generated Integers Values");  
System.out.println(x);   
System.out.println(y);   
// Generates Random doubles values  
double a = random.nextDouble();   
double b = random.nextDouble();   
// Prints random double values  
System.out.println("Randomly Generated Double Values");  
System.out.println(a);   
System.out.println(b);    
// Generates Random float values  
float f=random.nextFloat();  
float i=random.nextFloat();  
// Prints random float values  
System.out.println("Randomly Generated Float Values");  
System.out.println(f);   
System.out.println(i);   
// Generates Random Long values  
long p = random.nextLong();   
long q = random.nextLong();   
// Prints random long values  
System.out.println("Randomly Generated Long Values");  
System.out.println(p);   
System.out.println(q);    
// Generates Random boolean values  
boolean m=random.nextBoolean();  
boolean n=random.nextBoolean();  
// Prints random boolean values  
System.out.println("Randomly Generated Boolean Values");  
System.out.println(m);   
System.out.println(n);   
}   
}  




Using the ThreadLocalRandom Class
The ThreadLocalRandom class is defined in java.util.concurrent package. It is initialized with an internally generated seed, the same as the random generator of the Math class. It cannot be modified. We can use this class in the following way:

ThreadLocalRandom.current().nextX(...)   
Where X is Int, Long, etc.

Note: It is impossible to share a ThreadLocalRandom with multiple threads accidentally.
We can generate a random number of any data type, such as integer, float, double, Boolean, long. If you are going to use this class to generate random numbers, follow the steps given below:

First, import the class by using java.util.concurrent.ThreadLocalRandom.
Invoke the corresponding method for which you want to generate numbers randomly.
nextInt()
nextDouble()
nextLong()
nextFloat()
nextBoolean()
All the above methods override the corresponding method of the Random class and return the corresponding value.

nextInt(int bound)
nextDouble(int bound)
nextLong(int bound)
The above methods parse a parameter bound (upper) that must be positive. It returns corresponding randomly generated value between 0 (inclusive) and the specified bound (exclusive). It throws IllegalArgumentExcetion if the bound is negative.

nextInt(int origin, int bound)
nextDouble(int origin, int bound)
nextLong(int origin, int bound)
The above methods parse two parameters origin and bound. The origin specifies the least value returned and the bound specifies the upper bound. It returns corresponding randomly generated value between the specified origin (inclusive) and bound (exclusive). Also, throws IllegalArgumentExcetion if the origin is greater than or equal to bound.

Let's create a program that generates random numbers using the ThreadLocalRandom class.

import java.util.concurrent.ThreadLocalRandom;   
public class RandomNumberExample4  
{   
public static void main(String args[])   
{   
// Generate random integers between 0 to 999   
int a = ThreadLocalRandom.current().nextInt();   
int b = ThreadLocalRandom.current().nextInt();   
// Print random integer values  
System.out.println("Randomly Generated Integer Values:");  
System.out.println(a);   
System.out.println(b);   
// Generate Random double values  
double c = ThreadLocalRandom.current().nextDouble();   
double d = ThreadLocalRandom.current().nextDouble();   
// Print random doubles   
System.out.println("Randomly Generated Double Values:");  
System.out.println(c);   
System.out.println(d);   
// Generate random boolean values  
boolean e = ThreadLocalRandom.current().nextBoolean();   
boolean f = ThreadLocalRandom.current().nextBoolean();   
// Print random Booleans   
System.out.println("Randomly Generated Boolean Values:");  
System.out.println(e);   
System.out.println(f);   
}   
} 

Random Number Generation in Java 8
In Java 8, a new method ints() has been added to the Random class. We must import the java.util.Random before using the method.

ints():

The pseudorandom int values generated the same as calling the nextInt() method. It returns an unlimited stream of pseudorandom int values.

ints(long streamSize):

The method parses a parameter streamSize of type long. It specifies the number of values to be generated. The pseudorandom int values generated the same as calling the nextInt() method. It also returns a stream of randomly generated int values. It throws IllegalArgumentException if the stream size is less than zero.

ints(long streamSize, int randomNumberOrigin, int randomNumberBound):

Parameters:

streamSize:Number of values to generate.
randomNumberOrigin:Origin of each random value
randomNumberBound:Bound of each random value
It returns a stream of pseudorandom int values with the specified origin and bound. It throws IllegalArgumentException if:

stramSize < 0
origin > = bound
ints(int randomNumberOrigin, int randomNumberBound):  
Parameters:

randomNumberOrigin: Origin of each random value
randomNumberBound: Bound of each random value
It returns an unlimited stream of pseudorandom int values with the specified origin and bound. It throws IllegalArgumentException if the origin is greater than or equal to bound.

Similarly, we can also generate the stream of long and double types by using the longs() and doubles() method, respectively.

Let's create a program that generates a stream of integers using the ints() method of the Random class.



import java.util.Random;   
public class RandomNumberExample5   
{   
public static void main(String[] args)   
{   
randomInts(5);  
randomInts(9, 50, 90);  
//getStreamOfRandomInts(30, 50);  
}   
//method that generates a stream of integers having size 5  
public static void randomInts(int num)   
{  
Random random = new Random();  
random.ints(num).forEach(System.out::println);  
}  
//method that generates a stream of 9 integers between 50 to 90  
public static void randomInts(int num, int origin, int bound)   
{  
Random random1 = new Random();  
random1.ints(num, origin, bound).forEach(System.out::println);  
}  
}  

