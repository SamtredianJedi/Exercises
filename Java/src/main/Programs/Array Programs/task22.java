// Program to print the largest element in an array

In this program, we need to find out the largest element present in the array and display it. This can be accomplished by looping through the array from start to end by comparing max with all the elements of an array. If any of element is greater than max, then store a value of the element in max. Initially, max will hold the value of the first element. At the end of the loop, max represents the largest element in the array.

In the above array, initially, max will hold the value 25. In the 1st iteration, max will be compared with 11, since 11 is less than max. Max will retain its value. In the next iteration, it will be compared to 7, 7 is also less than max, no change will be made to the max. Now, max will be compared to 75. 75 is greater than max so that max will hold the value of 75. Continue this process until the end of the array is reached. At the end of the loop, max will hold the largest element in the array.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] = {25, 11, 7, 75, 56}
STEP 3: max = arr[0]
STEP 4: REPEAT STEP 5 for(i=0; i< arr.length; i++)
STEP 5: if(arr[i]>max) max=arr[i]
STEP 6: PRINT "Largest element in given array:"
STEP 7: PRINT max
STEP 8: END
Program:
public class LargestElement_array {  
    public static void main(String[] args) {  
  
        //Initialize array  
        int [] arr = new int [] {25, 11, 7, 75, 56};  
        //Initialize max with first element of array.  
        int max = arr[0];  
        //Loop through the array  
        for (int i = 0; i < arr.length; i++) {  
            //Compare elements of array with max  
           if(arr[i] > max)  
               max = arr[i];  
        }  
        System.out.println("Largest element present in given array: " + max);  
    }  
}  

