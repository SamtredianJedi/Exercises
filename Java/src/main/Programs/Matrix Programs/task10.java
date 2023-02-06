// Java Program to find the transpose of a given matrix




In this program, we need to find the transpose of the given matrix and print the resulting matrix.

Transpose of Matrix
Transpose of a matrix can be found by interchanging rows with the column that is, rows of the original matrix will become columns of the new matrix. Similarly, columns in the original matrix will become rows in the new matrix. The operation can be represented as follows:


If the dimension of the original matrix is 2 × 3 then, the dimensions of the new transposed matrix will be 3 × 2.

[ AT ]<sub>ij</sub> = [ A ]<sub>ji</sub>  
Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols
STEP 3: INITIALIZE matrix a[][] ={{1, 2, 3},{4, 5, 6}, {7, 8, 9}}
STEP 4: rows = a.length
STEP 5: cols = a[0].length
STEP 6: t[][] = [cols][rows]
STEP 7: REPEAT STEP 8 to STEP 9 UNTIL i<cols
        // for(i=0; i<cols; i++)
STEP 8: REPEAT STEP 9 UNTIL j<rows
        // for(j=0; j<rows; j++)
STEP 9: t[i][j] = a[j][i]
STEP 10: PRINT "Transpose of given matrix"
STEP 11: REPEAT STEP 12 to STEP 14 UNTIL i<cols
        //for(i=0; i<cols; i++)
STEP 12: REPEAT STEP 13 UNTIL j<rows
        //for(j=0; j<rows; j++)
STEP 13: PRINT t[i][j]
STEP 14: PRINT new line
STEP 15: END
Program
public class Transpose    
{    
    public static void main(String[] args) {    
        int rows, cols;    
            
        //Initialize matrix a    
          int a[][] = {    
                          {1, 2, 3},    
                          {4, 5, 6},    
                          {7, 8, 9}    
                       };    
              
          //Calculates number of rows and columns present in given matrix    
          rows = a.length;    
        cols = a[0].length;    
            
        //Declare array t with reverse dimensions    
        int t[][] = new int[cols][rows];    
            
        //Calculates transpose of given matrix    
        for(int i = 0; i < cols; i++){    
            for(int j = 0; j < rows; j++){    
                //Converts the row of original matrix into column of transposed matrix    
                t[i][j] = a[j][i];    
            }    
        }    
        
        System.out.println("Transpose of given matrix: ");    
        for(int i = 0; i < cols; i++){    
            for(int j = 0; j < rows; j++){    
               System.out.print(t[i][j] + " ");    
            }    
            System.out.println();    
        }    
    }    
}  

