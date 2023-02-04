// Program to find the frequency of each element in the array



In this program, we have an array of elements to count the occurrence of its each element. One of the approaches to resolve this problem is to maintain one array to store the counts of each element of the array. Loop through the array and count the occurrence of each element as frequency and store it in another array fr.

1    2   8  3   2   2   2   5   1  
In the given array, 1 has appeared two times so its frequency be 2 and 2 has appeared four times so have frequency 4 and so on.

Algorithm
STEP 1: START
STEP 2: INITIALIZE arr[] ={1, 2, 8, 3, 2, 2, 2, 5, 1 }.
STEP 3: CREATE fr[] of arr[] length.
STEP 4: SET visited = -1.
STEP 5: REPEAT STEP 6 to STEP 9 for(i=0;i<arr.length;i++)
STEP 6: SET count = 1
STEP 7: REPEAT STEP 8 for(j=i+1;j<arr.length;j++)
STEP 8: if(arr[i]==arr[j]) then
            count++
            fr[j] =visited
STEP 9: if(fr[i]!=visited) then
            fr[i]=count
STEP 10: PRINT "------------"
STEP 11: PRINT "Element | Frequency"
STEP 12: PRINT "-------------"
STEP 13: REPEAT STEP 14 for(i=0;i<fr.length;i++)
STEP 14: if(fr[i]!=visited) then
            PRINT arr[i] and fr[i]
STEP 15: PRINT "-------------"
STEP 16: END
Program:
public class Frequency {  
    public static void main(String[] args) {  
        //Initialize array  
        int [] arr = new int [] {1, 2, 8, 3, 2, 2, 2, 5, 1};  
        //Array fr will store frequencies of element  
        int [] fr = new int [arr.length];  
        int visited = -1;  
        for(int i = 0; i < arr.length; i++){  
            int count = 1;  
            for(int j = i+1; j < arr.length; j++){  
                if(arr[i] == arr[j]){  
                    count++;  
                    //To avoid counting same element again  
                    fr[j] = visited;  
                }  
            }  
            if(fr[i] != visited)  
                fr[i] = count;  
        }  
  
        //Displays the frequency of each element present in array  
        System.out.println("---------------------------------------");  
        System.out.println(" Element | Frequency");  
        System.out.println("---------------------------------------");  
        for(int i = 0; i < fr.length; i++){  
            if(fr[i] != visited)  
                System.out.println("    " + arr[i] + "    |    " + fr[i]);  
        }  
        System.out.println("----------------------------------------");  
    }}  

