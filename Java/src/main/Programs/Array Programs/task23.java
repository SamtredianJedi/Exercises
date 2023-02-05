// Program to print the smallest element in an array

In this program, we need to find out the smallest element present in the array. This can be achieved by maintaining a variable min which initially will hold the value of the first element. Loop through the array by comparing the value of min with elements of the array. If any of the element's value is less than min, store the value of the element in min.

Consider above array. Initially, min will hold the value 25. In the 1st iteration, min will be compared with 11. Since 11 is less than 25. Min will hold the value 11. In a 2nd iteration, 11 will be compared with 7. Now, 7 is less than 11. So, min will take the value 7. Continue this process until the end of the array is reached. At last, min will hold the smallest value element in the array.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] = {25, 11, 7, 75, 56}
STEP 3: min = arr[0]
STEP 4: REPEAT STEP 5 for(i=0; i< arr.length; i++)
STEP 5: if(arr[i]<min)
min=arr[i]
STEP 6: PRINT "Smallest element in given array:"
STEP 7: PRINT min
STEP 8: END
Program:
public class SmallestElement_array {  
    public static void main(String[] args) {  
  
        //Initialize array  
        int [] arr = new int [] {25, 11, 7, 75, 56};  
        //Initialize min with first element of array.  
        int min = arr[0];  
        //Loop through the array  
        for (int i = 0; i < arr.length; i++) {  
            //Compare elements of array with min  
           if(arr[i] <min)  
               min = arr[i];  
        }  
        System.out.println("Smallest element present in given array: " + min);  
    }  
}  

