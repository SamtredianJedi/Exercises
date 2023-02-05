// Program to print the elements of an array present on odd position



In this program, we need to print the elements of the array which are present in odd positions. This can be accomplished by looping through the array and printing the elements of an array by incrementing i by 2 till the end of the array is reached.



In the above array, the elements present on odd positions are a, c and e.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] = {1, 2, 3, 4, 5}
STEP 3: PRINT "Elements of given array present on odd position:"
STEP 4: REPEAT STEP 5 for(i=0; i< arr.length; i= i+2)
STEP 5: PRINT arr[i]
STEP 6: END
Program:
public class OddPosition {  
    public static void main(String[] args) {  
        //Initialize array  
       int [] arr = new int [] {1, 2, 3, 4, 5};  
        System.out.println("Elements of given array present on odd position: ");  
        //Loop through the array by incrementing value of i by 2  
        for (int i = 0; i < arr.length; i = i+2) {  
            System.out.println(arr[i]);  
        }  
    }  
}  

