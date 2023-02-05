// Program to print the elements of an array


This is a simple program to create an array and then to print it's all elements.

Now, just know about arrays.

Arrays are the special variables that store multiple values under the same name in the contiguous memory allocation. Elements of the array can be accessed through their indexes.

Here, 1, 2, 3, 4 and 5 represent the elements of the array. These elements can be accessed through their corresponding indexes, 1.e., 0, 1, 2, 3 and 4.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] = {1, 2, 3, 4, 5}.
STEP 3: PRINT "Elements of given array:"
STEP 4: REPEAT STEP 5 for(i=0; i<arr.length; i++)
STEP 5: PRINT arr[i]
STEP 6: END
Program:
public class PrintArray {  
    public static void main(String[] args) {  
        //Initialize array  
        int [] arr = new int [] {1, 2, 3, 4, 5};  
        System.out.println("Elements of given array: ");  
        //Loop through the array by incrementing value of i  
        for (int i = 0; i < arr.length; i++) {  
            System.out.print(arr[i] + " ");  
        }  
    }  
}  

