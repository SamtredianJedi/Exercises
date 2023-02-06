// Java Program to transpose matrix



Converting rows of a matrix into columns and columns of a matrix into row is called transpose of a matrix.

Let's see a simple example to transpose a matrix of 3 rows and 3 columns.

public class MatrixTransposeExample{  
public static void main(String args[]){  
//creating a matrix  
int original[][]={{1,3,4},{2,4,3},{3,4,5}};    
    
//creating another matrix to store transpose of a matrix  
int transpose[][]=new int[3][3];  //3 rows and 3 columns  
    
//Code to transpose a matrix  
for(int i=0;i<3;i++){    
for(int j=0;j<3;j++){    
transpose[i][j]=original[j][i];  
}    
}    
  
System.out.println("Printing Matrix without transpose:");  
for(int i=0;i<3;i++){    
for(int j=0;j<3;j++){    
System.out.print(original[i][j]+" ");    
}    
System.out.println();//new line    
}    
System.out.println("Printing Matrix After Transpose:");  
for(int i=0;i<3;i++){    
for(int j=0;j<3;j++){    
System.out.print(transpose[i][j]+" ");    
}    
System.out.println();//new line    
}    
}}  


Java Program to display transpose matrix
Let's see another example where we are displaying transpose of a matrix. Here, we are not creating another matrix.

public class MatrixTransposeExample2{  
public static void main(String args[]){  
//creating a matrix  
int original[][]={{1,3,4},{2,4,3},{3,4,5}};    
  
System.out.println("Printing Matrix without transpose:");  
for(int i=0;i<3;i++){    
for(int j=0;j<3;j++){    
System.out.print(original[i][j]+" ");    
}    
System.out.println();//new line    
}    
System.out.println("Printing Matrix After Transpose:");  
for(int i=0;i<3;i++){    
for(int j=0;j<3;j++){    
System.out.print(original[j][i]+" ");    
}    
System.out.println();//new line    
}    
}}  


Java program to transpose matrix (Another way)
You can also use a method where values of matrix are not predefined. Here, user has to put the values as input.

import java.util.Scanner;  
public class MatrixTransposeExample2   
{  
    public static void main(String args[])    
    {  
    int i, j;  
    System.out.println("Enter total rows and columns: ");  
    Scanner s = new Scanner(System.in);  
    int row = s.nextInt();  
    int column = s.nextInt();  
    int array[][] = new int[row][column];  
    System.out.println("Enter matrix:");  
    for(i = 0; i < row; i++)  
    {  
        for(j = 0; j < column; j++)   
            {  
            array[i][j] = s.nextInt();  
            System.out.print(" ");  
            }  
    }  
    System.out.println("The above matrix before Transpose is ");  
    for(i = 0; i < row; i++)  
        {  
            for(j = 0; j < column; j++)  
            {  
            System.out.print(array[i][j]+" ");  
            }  
            System.out.println(" ");  
        }  
    System.out.println("The above matrix after Transpose is ");  
    for(i = 0; i < column; i++)  
        {  
            for(j = 0; j < row; j++)  
            {  
                System.out.print(array[j][i]+" ");  
            }  
            System.out.println(" ");  
        }  
    }  
}  

