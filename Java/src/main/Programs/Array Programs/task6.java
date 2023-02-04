// Java Program to find Third Largest Number in an Array

We can find the third largest number in an array in java by sorting the array and returning the 3nd largest number. Let's see the full example to find the third largest number in java array.

public class ThirdLargestInArrayExample{  
public static int getThirdLargest(int[] a, int total){  
int temp;  
for (int i = 0; i < total; i++)   
        {  
            for (int j = i + 1; j < total; j++)   
            {  
                if (a[i] > a[j])   
                {  
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;  
                }  
            }  
        }  
       return a[total-3];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Third Largest: "+getThirdLargest(a,6));  
System.out.println("Third Largest: "+getThirdLargest(b,7));  
}}  

Find 3rd Largest Number in Array using Arrays
Let's see another example to get third largest element or number in java array using Arrays.

import java.util.*;  
public class ThirdLargestInArrayExample1{  
public static int getThirdLargest(int[] a, int total){  
Arrays.sort(a);  
return a[total-3];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Third Largest: "+getThirdLargest(a,6));  
System.out.println("Third Largest: "+getThirdLargest(b,7));  
}}  



Find 3rd Largest Number in Array using Collections
Let's see another example to get third largest number in java array using collections.

import java.util.*;  
public class ThirdLargestInArrayExample2{  
public static int getThirdLargest(Integer[] a, int total){  
List<Integer> list=Arrays.asList(a);  
Collections.sort(list);  
int element=list.get(total-3);  
return element;  
}  
public static void main(String args[]){  
Integer a[]={1,2,5,6,3,2};  
Integer b[]={44,66,99,77,33,22,55};  
System.out.println("Third Largest: "+getThirdLargest(a,6));  
System.out.println("Third Largest: "+getThirdLargest(b,7));  
}}  

