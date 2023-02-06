// Java Program to display the upper triangular matrix


In this program, we need to display the upper triangular matrix.

Upper Triangular Matrix
Upper triangular matrix is a square matrix in which all the elements below the principle diagonal are zero. To find the upper triangular matrix, a matrix needs to be a square matrix that is, the number of rows and columns in the matrix need to be equal. Dimensions of a typical square matrix can be represented by n x n.

Consider the above example, prinaciple diagonal element of given matrix is (1, 6, 6). All the elements below diagonal needs to be zero to convert it into an upper triangular matrix, in our example, those elements are at positions (2, 1), (3, 1) and (3, 2). To convert given matrix into the upper triangular matrix, loop through the matrix and set the values of the element to zero where row number is greater than column number.

Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols
STEP 3: INITIALIZE matrix a[][] ={{1,2,3},{8, 6, 4}, {4, 5, 6}}
STEP 4: rows = a.length
STEP 5: cols = a[0].length
STEP 6: if(rows!=cols)
        then
        PRINT "Matrix should be a square matrix"
        else
        Go to step 7
STEP 7: REPEAT STEP 8 to STEP 10 UNTIL i<rows
        //for(i=0; i<rows; i++)
STEP 8: REPEAT STEP 9 UNTIL j<cols // for(j=0; j<cols; j++)
STEP 9: If(i>j) then PRINT 0 else PRINT a[i][j]
STEP 10: PRINT new line
STEP 11: END
program
public class UpperTriangular    
{    
    public static void main(String[] args) {    
        int rows, cols;    
            
        //Initialize matrix a    
        int a[][] = {       
                        {1, 2, 3},    
                        {8, 6, 4},    
                        {4, 5, 6}    
                    };    
              
          //Calculates number of rows and columns present in given matrix    
          rows = a.length;    
        cols = a[0].length;    
            
        if(rows != cols){    
            System.out.println("Matrix should be a square matrix");    
        }    
        else {    
            //Performs required operation to convert given matrix into upper triangular matrix    
            System.out.println("Upper triangular matrix: ");    
            for(int i = 0; i < rows; i++){    
                for(int j = 0; j < cols; j++){    
                  if(i > j)    
                    System.out.print("0 ");    
                  else    
                    System.out.print(a[i][j] + " ");    
                }    
                System.out.println();    
            }    
        }    
    }    
} 


