// Java Program to sort the elements of an array in ascending order

In this program, we need to sort the given array in ascending order such that elements will be arranged from smallest to largest. This can be achieved through two loops. The outer loop will select an element, and inner loop allows us to compare selected element with rest of the elements.

Elements will be sorted in such a way that the smallest element will appear on extreme left which in this case is 1. The largest element will appear on extreme right which in this case is 8.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] ={5, 2, 8, 7, 1 }.
STEP 3: SET temp =0
STEP 4: PRINT "Elements of Original Array"
STEP 5: REPEAT STEP 6 UNTIL i<arr.length
            //for(i=0; i<arr.length; i++)
STEP 6: PRINT arr[i]
STEP 7: REPEAT STEP 8 to STEP 9 UNTIL i<arr.length
            //for(i=0; i<arr.length; i++ )
STEP 8: REPEAT STEP 9 UNTIL j<arr.length
            //for(j=i+1;j<arr.length;j++)
STEP 9: if(arr[i]>arr[j]) then
            temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
STEP 10: PRINT new line
STEP 11: PRINT "Elements of array sorted in ascending order"
STEP 12: REPEAT STEP 13 UNTIL i<arr.length
            //for(i=0;i<arr.length;i++)
STEP 13: PRINT arr[i]
STEP 14: END
Program:
public class SortAsc {    
    public static void main(String[] args) {        
            
        //Initialize array     
        int [] arr = new int [] {5, 2, 8, 7, 1};     
        int temp = 0;    
            
        //Displaying elements of original array    
        System.out.println("Elements of original array: ");    
        for (int i = 0; i < arr.length; i++) {     
            System.out.print(arr[i] + " ");    
        }    
            
        //Sort the array in ascending order    
        for (int i = 0; i < arr.length; i++) {     
            for (int j = i+1; j < arr.length; j++) {     
               if(arr[i] > arr[j]) {    
                   temp = arr[i];    
                   arr[i] = arr[j];    
                   arr[j] = temp;    
               }     
            }     
        }    
          
        System.out.println();    
            
        //Displaying elements of array after sorting    
        System.out.println("Elements of array sorted in ascending order: ");    
        for (int i = 0; i < arr.length; i++) {     
            System.out.print(arr[i] + " ");    
        }    
    }    
}    

