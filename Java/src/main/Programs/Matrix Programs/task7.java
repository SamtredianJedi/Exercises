// Java Program to find the frequency of odd & even numbers in the given matrix

In this program, we need to find the frequencies of odd and even numbers present in the matrix.

In the above example, all odd numbers are represented by the blue square and even numbers are represented by red circles. To find the frequencies of odd and even numbers, loop through the array and check if the element of the array is divisible by 2. If it is divisible by 2(even) then, increment the count of countEven by 1. Else, increment the countOdd by 1.

Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols
STEP 3: SET countOdd = 0, countEven =0
STEP 4:INITIALIZE matrix a[][] ={{4,1,3},{3, 5, 7}, {8, 2, 6}}
STEP 5: rows = a.length
STEP 6: cols = a[0].length
STEP 7: REPEAT STEP 8 to STEP 9 UNTIL i<rows for(i=0; i<rows; i++)
STEP 8: REPEAT STEP 9 UNTIL j<cols
STEP 9: if(a[i][j]%2 ==0)
        countEven++
        else
        countOdd++
STEP 10: PRINT "Frequency of odd numbers " by assigning countOdd.
STEP 11: PRINT "Frequency of even numbers " by assigning countEven
STEP 12: END
Program
public class OddEven    
{    
    public static void main(String[] args) {    
        int rows, cols, countOdd = 0, countEven = 0;    
            
        //Initialize matrix a    
        int a[][] = {       
                        {4, 1, 3},    
                        {3, 5, 7},    
                        {8, 2, 6}    
                    };    
              
          //Calculates number of rows and columns present in given matrix    
          rows = a.length;    
        cols = a[0].length;    
            
        //Counts the number of even elements and odd elements    
        for(int i = 0; i < rows; i++){    
            for(int j = 0; j < cols; j++){    
              if(a[i][j] % 2 == 0)    
                countEven++;    
              else    
                countOdd++;    
            }    
        }    
            
        System.out.println("Frequency of odd numbers: " + countOdd);    
        System.out.println("Frequency of even numbers: " + countEven);    
    }    
} 

