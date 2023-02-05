// Java Program to determine whether a given matrix is a sparse matrix



In this program, we need to check whether the given matrix is a sparse matrix.

A matrix is said to be sparse matrix if most of the elements of that matrix are 0. It implies that it contains very less non-zero elements.

To check whether the given matrix is the sparse matrix or not, we first count the number of zero elements present in the matrix. Then calculate the size of the matrix. For the matrix to be sparse, count of zero elements present in an array must be greater than size/2.

Number of zeroes present in above matrix is 6 and size of the matrix is 3 * 3 = 9. Since, 6 > 4.5 that means, most elements of given array are zero. Hence, the above matrix is a sparse matrix.

Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols, size
STEP 3: SET count = 0
STEP 4: INITIALIZE first matrix a[][] ={{4,0,0}, {0,5,0}, {0,0,6}}
STEP 5: rows = a.length
STEP 6: cols = a[0].length
STEP 7: size = rows*cols
STEP 8: REPEAT STEP 9 to STEP 10 UNTIL i<rows
        //for(i=0;i<rows; i++)
STEP 9: REPEAT STEP 10 UNTIL j<cols
        //for(j=0;j<cols; j++)
STEP 10: if(a[i][j]==0) then count++
STEP 11: if(count>size/2) then PRINT "Yes" else PRINT "No"
STEP 12: END
Program
public class SparseMatrix    
{    
    public static void main(String[] args) {    
        int rows, cols, size, count = 0;    
            
        //Initialize matrix a    
        int a[][] = {       
                        {4, 0, 0},    
                        {0, 5, 0},    
                        {0, 0, 6}    
                    };    
              
          //Calculates number of rows and columns present in given matrix    
          rows = a.length;    
        cols = a[0].length;    
            
        //Calculates the size of array    
        size = rows * cols;    
            
        //Count all zero element present in matrix    
        for(int i = 0; i < rows; i++){    
            for(int j = 0; j < cols; j++){    
                if(a[i][j] == 0)    
                    count++;    
                }    
            }    
                
        if(count > (size/2))    
            System.out.println("Given matrix is a sparse matrix");    
        else    
            System.out.println("Given matrix is not a sparse matrix");    
    }    
}     

