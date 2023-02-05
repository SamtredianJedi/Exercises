// Program to print the elements of an array present on even position

In this program, we need to print the element which is present on even position. Even positioned element can be found by traversing the array and incrementing the value of i by 2.



In the above array, elements on even position are b and d.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] = {1, 2, 3, 4, 5}
STEP 3: PRINT "Elements of given array present on even position:"
STEP 4: REPEAT STEP 5 for(i=1; i< arr.length; i= i+2)
STEP 5: PRINT arr[i]
STEP 6: END
Program:
public class EvenPosition {  
    public static void main(String[] args) {  
  
        //Initialize array  
        int [] arr = new int [] {1, 2, 3, 4, 5};  
  
        System.out.println("Elements of given array present on even position: ");  
        //Loop through the array by incrementing value of i by 2  
        //Here, i will start from 1 as first even positioned element is present at position 1.  
        for (int i = 1; i < arr.length; i = i+2) {  
            System.out.println(arr[i]);  
        }  
    }  
}  

