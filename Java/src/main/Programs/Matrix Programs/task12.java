// Java Program to subtract the two matrices



In this program, we need to get the result of subtraction of two matrices.

Two matrices A and B can be subtracted if and only if they have same dimensions that are, the same number of rows and columns. It is not possible to subtract a 2 × 3 matrix from a 3 × 2 matrix. Subtraction of two matrices can be performed by subtracting their corresponding elements as

(A - B)<sub>ij</sub>= A<sub>ij</sub> - B<sub>ij</sub>  


Subtraction of two matrices can be performed by looping through the first and second matrix. Calculating the difference between their corresponding elements and store the result in the third matrix.

Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols
STEP 3: INITIALIZE first matrix a[][] ={{4,5,6},{3,4,1}, {1,2,3}}
STEP 4: INITIALIZE second matrix b[][] ={{2,0,3}, {2,3,1}{1,1,1}}
STEP 5: rows = a.length
STEP 6: cols = a[0].length
STEP 7: DEFINE diff[][]
STEP 8: REPEAT STEP 9 to STEP 10 UNTIL i<rows
            //for(i=0;i<rows; i++)
STEP 9: REPEAT STEP 10 UNTIL j<cols
            //for(j=0;j<cols; j++)
STEP 10: diff[i][j] =a[i][j] - b[i][j]
STEP 11: PRINT "Subtraction of two matrices:"
STEP 12: REPEAT STEP 13 to STEP 14 UNTIL i<rows
            //for(i=0;i<rows; i++)
STEP 13: REPEAT STEP 14 UNTIL j<cols
            //for(j=0; j<cols; j++)
STEP 13: PRINT diff[i][j]
STEP 14: PRINT new line
STEP 15: END
Program:
public class Sub_Matrix  
{  
    public static void main(String[] args) {  
        int rows, cols;  
  
        //Initialize matrix a  
          int a[][] = {  
                          {4, 5, 6},  
                          {3, 4, 1},  
                          {1, 2, 3}  
                       };  
  
          //Initialize matrix b  
          int b[][] = {  
                          {2, 0, 3},  
                         {2, 3, 1},  
                         {1, 1, 1}  
                     };  
  
          //Calculates number of rows and columns present in given matrix  
          rows = a.length;  
        cols = a[0].length;  
  
          //Array diff will hold the result  
        int diff[][] = new int[rows][cols];  
  
        //Performs subtraction of matrices a and b. Store the result in matrix diff  
        for(int i = 0; i < rows; i++){  
            for(int j = 0; j < cols; j++){  
                diff[i][j] = a[i][j] - b[i][j];  
            }  
        }  
  
        System.out.println("Subtraction of two matrices: ");  
        for(int i = 0; i < rows; i++){  
            for(int j = 0; j < cols; j++){  
               System.out.print(diff[i][j] + " ");  
            }  
            System.out.println();  
        }  
    }  
}    

