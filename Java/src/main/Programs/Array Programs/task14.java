// Program to copy all elements of one array into another array


In this program, we need to copy all the elements of one array into another. This can be accomplished by looping through the first array and store the elements of the first array into the second array at the corresponding position.

ARRAY 1  
1   2  3  4  5  
  
ARRAY 2  
1   2  3  4  5  
Algorithm
STEP 1: START
STEP 2: INITIALIZE arr1[] ={1, 2, 3, 4, 5}
STEP 3: CREATE arr2[] of size arr1[].
STEP 4: COPY elements of arr1[] to arr2[]
STEP 5: REPEAT STEP 6 UNTIL (i<arr1.length)
STEP 6: arr2[i] =arr1[i]
STEP 7: DISPLAY elements of arr1[].
STEP 8: REPEAT STEP 9 UNTIL (i<arr1.length)
STEP 9: PRINT arr1[i]
STEP 10: DISPLAY elements of arr2[].
STEP 11: REPEAT STEP 12 UNTIL (i<arr2.length)
STEP 12: PRINT arr2[i].
STEP 13: END
Program:
public class CopyArray {    
    public static void main(String[] args) {        
             //Initialize array     
        int [] arr1 = new int [] {1, 2, 3, 4, 5};     
         //Create another array arr2 with size of arr1    
        int arr2[] = new int[arr1.length];    
        //Copying all elements of one array into another    
        for (int i = 0; i < arr1.length; i++) {     
            arr2[i] = arr1[i];     
        }      
         //Displaying elements of array arr1     
        System.out.println("Elements of original array: ");    
        for (int i = 0; i < arr1.length; i++) {     
           System.out.print(arr1[i] + " ");    
        }     
            
        System.out.println();    
            
        //Displaying elements of array arr2     
        System.out.println("Elements of new array: ");    
        for (int i = 0; i < arr2.length; i++) {     
           System.out.print(arr2[i] + " ");    
        }     
    }    
}    
