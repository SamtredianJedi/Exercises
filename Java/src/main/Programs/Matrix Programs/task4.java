// Java Program to determine whether two matrices are equal



In this program, we need to check whether given matrices are equal or not.

Two matrices are said to be equal if and only if they satisfy the following conditions:

Both the matrices should have the same number of rows and columns.
Both the matrices should have the same corresponding elements.

Consider the above example, where matrices A and B are equal as they have the same size and same corresponding elements.

Algorithm
STEP 1: START
STEP 2: DEFINE row1, col1, row2, col2
STEP 3: INITIALIZE first matrix a[][] ={{1, 2, 3}, {8, 4,6}, {4, 5,7}}
STEP 4: INITIALIZE second matrix b[][] ={{1 2, 3}, {8, 4, 6}{4, 5, 7}}
STEP 5: row1 = a.length
STEP 6: col1 = a[0].length
STEP 7: row2 =b.length
STEP 8: col2 = b[0].length
STEP 9: if(row1!=row2 || col1!=col2)
        then
        PRINT "No"
        else
        go to step 10;
STEP 10: REPEAT STEP 11 UNTIL i<row1
        //for(i=0; i<row1; i++)
STEP 11: REPEAT STEP12 UNTIL j<col1
        //for(j=0; j<col1; j++)
STEP 12: if(a[i][j]=b[i][j]) then
        flag =false
        break
STEP 13: if(flag)
        then PRINT "Yes"
        else
        PRINT "No"
STEP 14: END



program
public class EqualMatrix    
{    
    public static void main(String[] args) {    
        int row1, col1, row2, col2;    
        boolean flag = true;    
            
        //Initialize matrix a    
        int a[][] = {       
                        {1, 2, 3},    
                        {8, 4, 6},    
                        {4, 5, 7}    
                    };    
              
          //Initialize matrix b    
        int b[][] = {       
                        {1, 2, 3},    
                        {8, 4, 6},    
                        {4, 5, 7}    
            };    
              
        //Calculates the number of rows and columns present in the first matrix    
    
          row1 = a.length;    
        col1 = a[0].length;    
            
        //Calculates the number of rows and columns present in the second matrix    
    
          row2 = b.length;    
        col2 = b[0].length;    
            
        //Checks if dimensions of both the matrices are equal    
        if(row1 != row2 || col1 != col2){    
            System.out.println("Matrices are not equal");    
        }    
        else {    
            for(int i = 0; i < row1; i++){    
                for(int j = 0; j < col1; j++){    
                  if(a[i][j] != b[i][j]){    
                      flag = false;    
                      break;    
                  }    
                }    
            }    
                
            if(flag)    
                System.out.println("Matrices are equal");    
            else    
                System.out.println("Matrices are not equal");    
        }    
    }    
}  

