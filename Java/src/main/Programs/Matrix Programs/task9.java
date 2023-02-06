// Java Program to find the sum of each row and each column of a matrix

In this program, we need to calculate the sum of elements in each row and each column of the given matrix.

Above diagram shows the sum of elements of each row and each column of a matrix.

Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols, sumRow, sumCol
STEP 3: INITIALIZE matrix a[][] ={{1, 2, 3},{4, 5, 6}, {7, 8, 9}}
STEP 4: rows = a.length
STEP 5: cols = a[0].length
STEP 6: REPEAT STEP 7 to STEP 10 UNTIL i<rows
        // for(i=0; i<rows; i++)
STEP 7: SET sumRow =0
STEP 8: REPEAT STEP 9 UNTIL j<cols
STEP 9: sumRow = sumRow + a[i][j]
STEP 10: PRINT i+1, sumRow
STEP 11: REPEAT STEP 12 to STEP 15 UNTIL i<cols
        //for(i=0; i<cols; i++)
STEP 12: SET sumCol =0
STEP 13: REPEAT STEP 14 UNTIL j<rows
        //for(j=0; j<rows; j++)
STEP 14: sumCol =sumCol + a[j][i]
STEP 15: PRINT i+1, sumCol
STEP 16: END
Program
public class SumofRowColumn    
{    
    public static void main(String[] args) {    
        int rows, cols, sumRow, sumCol;    
            
        //Initialize matrix a    
        int a[][] = {       
                        {1, 2, 3},    
                        {4, 5, 6},    
                        {7, 8, 9}    
                    };    
              
          //Calculates number of rows and columns present in given matrix    
          rows = a.length;    
        cols = a[0].length;    
            
        //Calculates sum of each row of given matrix    
        for(int i = 0; i < rows; i++){    
            sumRow = 0;    
            for(int j = 0; j < cols; j++){    
              sumRow = sumRow + a[i][j];    
            }    
            System.out.println("Sum of " + (i+1) +" row: " + sumRow);    
        }    
            
        //Calculates sum of each column of given matrix    
        for(int i = 0; i < cols; i++){    
            sumCol = 0;    
            for(int j = 0; j < rows; j++){    
              sumCol = sumCol + a[j][i];    
            }    
            System.out.println("Sum of " + (i+1) +" column: " + sumCol);    
        }    
    }    
}

