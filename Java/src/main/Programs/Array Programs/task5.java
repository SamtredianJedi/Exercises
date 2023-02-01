// Java Program to find Smallest Number in an Array




We can find the smallest element or number in an array in java by sorting the array and returning the 1st element. Let's see the full example to find the smallest number in java array.

public class SmallestInArrayExample{  
public static int getSmallest(int[] a, int total){  
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
       return a[0];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Smallest: "+getSmallest(a,6));  
System.out.println("Smallest: "+getSmallest(b,7));  
}}  

Find Smallest Number in Array using Arrays
Let's see another example to get the smallest element or number in java array using Arrays.

import java.util.*;  
public class SmallestInArrayExample1{  
public static int getSmallest(int[] a, int total){  
Arrays.sort(a);  
return a[0];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Smallest: "+getSmallest(a,6));  
System.out.println("Smallest: "+getSmallest(b,7));  
}}  

Find Smallest Number in Array using Collections
Let's see another example to get smallest number in java array using collections.

import java.util.*;  
public class SmallestInArrayExample2{  
public static int getSmallest(Integer[] a, int total){  
List<Integer> list=Arrays.asList(a);  
Collections.sort(list);  
int element=list.get(0);  
return element;  
}  
public static void main(String args[]){  
Integer a[]={1,2,5,6,3,2};  
Integer b[]={44,66,99,77,33,22,55};  
System.out.println("Smallest: "+getSmallest(a,6));  
System.out.println("Smallest: "+getSmallest(b,7));  
}}  

