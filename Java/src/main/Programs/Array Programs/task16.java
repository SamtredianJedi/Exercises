// Program to left rotate the elements of an array



In this program, we need to rotate the elements of an array towards the left by the specified number of times. In the left rotation, each element of the array will be shifted to its left by one position and the first element of the array will be added to end of the list. This process will be followed for a specified number of times.

Consider above array, if n is 1 then, all elements of the array will be moved to its left by one position such that second element of the array will take the first position, the third element will be moved to the second position and so on. The first element of the array will be added to the last of the array.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] ={1, 2, 3, 4, 5 }.
STEP 3: SET n =3
STEP 4: PRINT "Original Array"
STEP 5: REPEAT STEP 6 for(i=0; i<arr.length; i++)
STEP 6: PRINT arr[i]
STEP 7: REPEAT STEP 8 to STEP 12 for(i=0; i<n; i++ )
STEP 8: DEFINE j, first.
STEP 9: first = arr[0]
STEP 10: REPEAT STEP 11 for(j= 0; j<arr.length-1; j++)
STEP 11: arr[j]= arr[j+1]
STEP 12: arr[j]= first
STEP 13: PRINT "Array after left rotation"
STEP 14: REPEAT STEP 15 for(i=0; i<arr.length; i++)
STEP 15: PRINT arr[i]
STEP 16: END
Program:
class RotateLeft {  
    public static void main(String[] args) {  
        //Initialize array  
        int [] arr = new int [] {1, 2, 3, 4, 5};  
        //n determine the number of times an array should be rotated  
        int n = 3;  
        //Displays original array  
        System.out.println("Original array: ");  
        for (int i = 0; i < arr.length; i++) {  
            System.out.print(arr[i] + " ");  
        }  
        //Rotate the given array by n times toward left  
        for(int i = 0; i < n; i++){  
            int j, first;  
            //Stores the first element of the array  
            first = arr[0];  
            for(j = 0; j < arr.length-1; j++){  
                //Shift element of array by one  
                arr[j] = arr[j+1];  
            }  
            //First element of array will be added to the end  
            arr[j] = first;  
        }  
        System.out.println();  
        //Displays resulting array after rotation  
        System.out.println("Array after left rotation: ");  
        for(int i = 0; i< arr.length; i++){  
            System.out.print(arr[i] + " ");  
        }  
    }  
}  

