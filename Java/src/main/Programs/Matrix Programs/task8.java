// Java Program to find the product of two matrices



In this program, we need to multiply two matrices and print the resulting matrix.

Product of two matrices
The product of two matrices can be computed by multiplying elements of the first row of the first matrix with the first column of the second matrix then, add all the product of elements. Continue this process until each row of the first matrix is multiplied with each column of the second matrix.

Consider above example, first element in resulting matrix prod[0,0] can be computed by multiplying first row of first matrix i.e. (1, 3, 2) with first column of second matrix i.e. (2, 1, 1) and finally sum all the product of elements i.e. (1*2) + (3*1) + (2*1) = 7. Similarly, second entry prod[0,1] can be computed by multiplying the first row of the first matrix with the second column of the second matrix and sum all the product.

Two matrices can be multiplied if and only if they satisfy the following condition:

The number of columns present in the first matrix should be equal to the number of rows present in the second matrix.
Suppose dimension of matrix A is p × q and matrix B is q × r, then the dimension of resulting matrix will be p × r. Matrix multiplication can be represented as

C<sub>ij</sub> = Σ A<sub>ik</sub>B<sub>kj</sub>  
Algorithm
STEP 1: START
STEP 2: DEFINE row1, col1, row2, col2
STEP 3: INITIALIZE matrix a[][] ={{1,3,2},{3,1,1}, {1,2,2}}
STEP 4: INITIALIZE matrix b[][] ={{2,1,1},{1,0,1}, {1,3,1}}
STEP 5: row1 = a.length
STEP 6: col1 = a[0].length
STEP 7: row2 =b.length
STEP 8: row2 = b[0].length
STEP 9: if(col1!=row2)
        PRINT "Matrices cannot be multiplied"
        else
        Go to step 10;
STEP 10: prod[][] = [row1][col2]
STEP 11: REPEAT STEP 12 to STEP 14 UNTIL i<row1
        //for(i=0; i<row1; i++)
STEP 12: REPEAT STEP 13 to STEP 14 UNTIL j<col2 // for(j=0; j<col2; j++)
        If(j>i) then PRINT 0 else PRINT a[i][j]
STEP 13: REPEAT STEP 14 UNTIL k<row2 // for(k=0; k<row2; k++)
STEP 14: prod[i][j] = prod[i][j] + a[i][k]*b[k][j]
STEP 15: REPEAT STEP 16 to STEP 18 UNTIL i<row1
STEP 16: REPEAT STEP 17 UNTIL j<col2
STEP 17: PRINT prod[i][j]
STEP 18: PRINT new line
STEP 19: END


Program
public class ProdMatrix    
{    
    public static void main(String[] args) {    
        int row1, col1, row2, col2;    
        //Initialize matrix a    
        int a[][] = {    
                          {1, 3, 2},    
                          {3, 1, 1},    
                          {1, 2, 2}    
                       };    
              
          //Initialize matrix b    
          int b[][] = {    
                          {2, 1, 1},    
                         {1, 0, 1},    
                         {1, 3, 1}    
                     };    
              
          //Calculates number of rows and columns present in first matrix    
          row1 = a.length;    
        col1 = a[0].length;    
            
        //Calculates the number of rows and columns present in the second matrix    
    
          row2 = b.length;    
        col2 = b[0].length;    
            
        //For two matrices to be multiplied,     
        //number of columns in first matrix must be equal to number of rows in second matrix    
        if(col1 != row2){    
            System.out.println("Matrices cannot be multiplied");    
        }    
        else{    
            //Array prod will hold the result    
            int prod[][] = new int[row1][col2];    
                
            //Performs product of matrices a and b. Store the result in matrix prod    
            for(int i = 0; i < row1; i++){    
                for(int j = 0; j < col2; j++){    
                    for(int k = 0; k < row2; k++){    
                       prod[i][j] = prod[i][j] + a[i][k] * b[k][j];     
                    }    
                }    
            }    
                
            System.out.println("Product of two matrices: ");    
            for(int i = 0; i < row1; i++){    
                for(int j = 0; j < col2; j++){    
                   System.out.print(prod[i][j] + " ");    
                }    
                System.out.println();    
            }    
        }    
    }    
}    

