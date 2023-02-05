// Java Program to determine whether a given matrix is an identity matrix



In this program, we need to check whether the given matrix is an identity matrix.

Identity Matrix

A matrix is said to be an identity matrix if it is a square matrix in which elements of principle diagonal are ones, and the rest of the elements are zeroes.

Algorithm
STEP 1: START
STEP 2: DEFINE rows, cols
STEP 3: SET flag =true
STEP 4: INITIALIZE matrix a[][] ={{1,0,0},{0,1,0}, {0,0,1}}
STEP 5: rows = a.length
STEP 6: cols = a[0].length
STEP 7: if(rows!=cols)
            then
          PRINT "Matrix should be a square matrix"
         else
       go to step 8
STEP 8: REPEAT STEP 9 to STEP 11 UNTIL i<rows
            //for(i=0; i<rows; i++)
STEP 9: REPEAT STEP 10 to STEP 11 UNTIL j<cols
            //for(j=0; j<cols; j++)
STEP 10: if(i==j && a[i][j]== 1) then
            SET flag =false
            break
STEP 11: if( i!=j && a[i][j]!=0)
            SET flag = false
            break
STEP 12: if(flag)
            then PRINT ("Given matrix is an identity matrix")
            else
            PRINT ("Given matrix is not an identity matrix")
STEP 13: END
Program:
public class IdentityMatrix     
{    
    public static void main(String[] args) {    
        int rows, cols;    
        boolean flag = true;    
            
        //Initialize matrix a    
        int a[][] = {       
                        {1, 0, 0},    
                        {0, 1, 0},    
                        {0, 0, 1}    
                    };    
            
        //Calculates the number of rows and columns present in the given matrix    
    
          rows = a.length;    
        cols = a[0].length;    
            
        //Checks whether given matrix is a square matrix or not    
        if(rows != cols){    
            System.out.println("Matrix should be a square matrix");    
        }    
        else {    
            //Checks if diagonal elements are equal to 1 and rest of elements are 0    
            for(int i = 0; i < rows; i++){    
                for(int j = 0; j < cols; j++){    
                  if(i == j && a[i][j] != 1){    
                      flag = false;    
                      break;    
                  }    
                  if(i != j && a[i][j] != 0){    
                      flag = false;    
                      break;    
                  }    
                }    
            }    
                
            if(flag)    
                System.out.println("Given matrix is an identity matrix");    
            else    
                System.out.println("Given matrix is not an identity matrix");    
        }    
    }    
}    

