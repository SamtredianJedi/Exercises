// Java Program to display the lower triangular matrix



In this program, we need to display the lower triangular matrix.

Lower Triangular Matrix
Lower triangular matrix is a square matrix in which all the elements above the principle diagonal will be zero. To find the lower triangular matrix, a matrix needs to be a square matrix that is, the number of rows and columns in the matrix need to be equal. Dimensions of a typical square matrix can be represented by n x n.

Consider the above example, principle diagonal element of given matrix is (1, 6, 6). All the elements above the diagonal needs to made zero. In our example, those elements are at positions (1, 2), (1, 3) and (2, 3). To convert given matrix into the lower triangular matrix, loop through the matrix and set the values of the element to zero where column number is greater than row number.

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
STEP 7: REPEAT STEP 4 to STEP 6 UNTIL i<rows
        //for(i=0; i<rows; i++)
STEP 8: REPEAT STEP 9 UNTIL j<cols // for(j=0; j<cols; j++)
        If(j>i) then PRINT 0 else PRINT a[i][j]
STEP 9: PRINT new line
STEP 10: END
Program
public class LowerTriangular    
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
              //Performs required operation to convert given matrix into lower triangular matrix    
              System.out.println("Lower triangular matrix: ");    
              for(int i = 0; i < rows; i++){    
                  for(int j = 0; j < cols; j++){    
                    if(j > i)    
                      System.out.print("0 ");    
                    else    
                      System.out.print(a[i][j] + " ");    
                }    
                System.out.println();    
            }    
        }    
    }    
} 

