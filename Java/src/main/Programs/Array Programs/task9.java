// Java Program to print the sum of all the items of the array



In this program, we need to calculate the sum of all the elements of an array. This can be solved by looping through the array and add the value of the element in each iteration to variable sum.

Sum of all elements of an array is 1 + 2 + 3 + 4 + 5 = 15.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] = {1, 2, 3, 4, 5}
STEP 3: SET sum = 0
STEP 4: REPEAT STEP 5 UNTIL i<arr.length
            //for(i=0; i< arr.length; i++)
STEP 5: sum = sum + arr[i]
STEP 6: PRINT "Sum of all the elements of an array:"
STEP 7: PRINT sum
STEP 8: END
Program:
public class SumOfArray {  
    public static void main(String[] args) {  
        //Initialize array  
        int [] arr = new int [] {1, 2, 3, 4, 5};  
        int sum = 0;  
        //Loop through the array to calculate sum of elements  
        for (int i = 0; i < arr.length; i++) {  
           sum = sum + arr[i];  
        }  
        System.out.println("Sum of all the elements of an array: " + sum);  
    }  
}  

