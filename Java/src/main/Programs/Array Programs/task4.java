// Java Program to find Second Smallest Number in an Array



We can find the second smallest number in an array in java by sorting the array and returning the 2nd element. Let's see the full example to find the second smallest number in java array.

public class SecondSmallestInArrayExample{  
public static int getSecondSmallest(int[] a, int total){  
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
       return a[1];//2nd element because index starts from 0  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Second smallest: "+getSecondSmallest(a,6));  
System.out.println("Second smallest: "+getSecondSmallest(b,7));  
}}  

Find 2nd Smallest Number in Array using Arrays
Let's see another example to get second smallest element or number in java array using Arrays.

import java.util.*;  
public class SecondSmallestInArrayExample1{  
public static int getSecondSmallest(int[] a, int total){  
Arrays.sort(a);  
return a[1];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Second Smallest: "+getSecondSmallest(a,6));  
System.out.println("Second Smallest: "+getSecondSmallest(b,7));  
}}  

Find 2nd Smallest Number in Array using Collections
Let's see another example to get second smallest number in java array using collections.

import java.util.*;  
public class SecondSmallestInArrayExample2{  
public static int getSecondSmallest(Integer[] a, int total){  
List<Integer> list=Arrays.asList(a);  
Collections.sort(list);  
int element=list.get(1);  
return element;  
}  
public static void main(String args[]){  
Integer a[]={1,2,5,6,3,2};  
Integer b[]={44,66,99,77,33,22,55};  
System.out.println("Second Smallest: "+getSecondSmallest(a,6));  
System.out.println("Second Smallest: "+getSecondSmallest(b,7));  
}}  

