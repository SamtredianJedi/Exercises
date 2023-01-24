/**
 * 
 * Introduction
Sorting refers to arranging items of a list in a specific order (numerical or alphabetic). Sorting is generally used in tandem with searching.

It is generally easier to search for an element (called the key) in a given list if the list is sorted, both visually and algorithmically.

There are many ways (algorithms) to sort a given list of elements. Merge Sort is one of the more popular, and more efficient ways to do so.

In this article, we will see the logic behind Merge Sort, implement it in JavaScript, and visualize it in action. Finally, we will compare Merge Sort with other algorithms in terms of space and time complexity.

Understanding the Logic Behind Merge Sort
Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

Here are the steps Merge Sort takes:

Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
Continue dividing the subarrays in the same manner until you are left with only single element arrays.
Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
Repeat step 3 unit with end up with a single sorted array.

Implementation of Merge Sort in JavaScript
Let us first write code to merge() two sorted subarrays into a sorted array. It is very important to keep in mind that both the subarrays are already sorted, and we are just combing them using the merge() function.

We can do this by going over both of these subarrays, and adding one by one element so that the resulting array is also sorted:

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
In this function, we take two sorted subarrays (left, right) and merge them to get a single sorted array. First, we create an empty array. Later, we pick the smaller of the smallest unpicked element in the left and right subarrays and push them into the empty array. We need to only check the first elements in the left and right subarrays since they are both sorted.

While doing this, we delete the picked element from the subarray (this is achieved using the shift() function). We continue this process until one of the subarrays becomes empty. After that, we push the leftover elements of the non-empty subarray (because they are already sorted) into the main array.

As we now have the code to merge two sorted arrays (conquer part of divide-and-conquer), let us write the final code for our Merge Sort algorithm. This means that we need to keep splitting arrays, until we end up with arrays that only contain one element:

function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
Here, we identify the midpoint and split the array into two subarrays using the splice() function. If there are an odd number of elements, the left one gets a smaller number of elements. We are dividing until we are left with single element arrays (array.length < 2). After that, we start combining the subarrays using the previously written merge() function.

Now that we have the code in place, let's see the output of running the function on our previous example:


array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));
Which gives us the expected output:

1,2,3,4,7,8,11
The Efficiency of Merge Sort
The worst-case time complexity of Merge Sort is O(nlogn), same as that for best case time complexity for Quick Sort. When it comes to speed, Merge Sort is one of the fastest sorting algorithms out there.

Unlike Quick Sort, Merge Sort is not an in-place sorting algorithm, meaning it takes extra space other than the input array. This is because we are using auxiliary (helper) arrays to store the sub-arrays. The space complexity of the merge sort is O(n).

Another advantage of Merge Sort is that it lends itself very well to multi-threading, since each respective half and be sorted on its own. Another common way of reducing the runtime of Merge Sort is to stop when we get to relatively small subarrays (~7) and using Insertion Sort to sort them.

This is done because Insertion Sort performs really well on small, or nearly sorted arrays. Much better than it's more globally efficient counterparts.

Conclusion
In this article, we have seen the logic behind the Merge Sort algorithm, how to implement it in JavaScript, and learned about its performance. It's one of the basic sorting algorithms and is really useful for giving a clear example of the divide-and-conquer strategy.
 */