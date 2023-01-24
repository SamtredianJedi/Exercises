/**
 * 
 * 
 * Bubble Sort
Bubble Sort is a comparison-type sorting algorithm. This means that it compares individual elements within the collection during runtime. Depending on your data type and purpose, the comparison can be done via a relational operator or through a custom comparison function.

The idea behind Bubble Sort is rather simple. Starting from the beginning of the collection we want to be sorted - we compare elements within a pair. If the pair is in the desired order, we do nothing. If it isn't, we swap the elements it consists of.

This is done again, and again, until all elements in the collection are sorted. Let's look at a visual representation of how Bubble Sort works:


Taking a look at the element with the value of 8, we can see it "bubbling up" from the beginning of the array to its proper place. This is where the name of "Bubble Sort" comes from.

Bubble Sort Implementation
Now that we've went over the idea behind Bubble Sort, we can start with the implementation:

function bubbleSort(inputArr) {
    let n = inputArr.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // Comparing and swapping the elements
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    return inputArr;
}
The implementation is pretty intuitive. We iterate through the array n times with a for loop, where n is the length of the array. For each iteration, we "bubble up" an element to its correct place. This is done through another for loop that compares the element to its adjacent one, switching them if need be.

Finally, we return the sorted array. Let's populate an array and sort it:

let inputArr = [5,1,4,2,8];
bubbleSort(inputArr);
console.log(inputArr);
Running this code will yield:

(5) [1, 2, 4, 5, 8]
Let's take a look at how this is done with concrete values:

First iteration:

[5, 1, 4, 2, 8] -> [1, 5, 4, 2, 8] - We are swapping 5 and 1, since 5 > 1
[1, 5, 4, 2, 8] -> [1, 4, 5, 2, 8] - We are swapping 5 and 4, since 5 > 4
[1, 4, 5, 2, 8] -> [1, 4, 2, 5, 8] - We are swapping 5 and 2, since 5 > 2
[1, 4, 2, 5, 8] -> [1, 4, 2, 5, 8] - No change, since 5 < 8

Second iteration:

[1, 4, 2, 5, 8] -> [1, 4, 2, 5, 8] - No change, since 1 < 4
[1, 4, 2, 5, 8] -> [1, 2, 4, 5, 8] - We are swapping 4 and 2, since 4 > 2
[1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] - No change, since 4 < 5
[1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] - No change, since 5 < 8

The array is sorted within two iterations, however, our algorithm will continue running n times, comparing all the elements over and over again. This is because we've told it to iterate inputArr.length times.

Bubble Sort is inefficient in and of itself - especially with a flaw like this. There are two things we can do to optimize it, though.

Optimizations
The first optimization we can implement is - terminate the algorithm if the array is sorted - i.e. no swaps are made. This can be done via a boolean flag. Each time we swap any elements, it's set to true:

function bubbleSort(inputArr) {
    let n = inputArr.length;
    let sorted = false;
        
    while (!sorted) {
        sorted = true;
        for(let i = 0; i < n; i++){
            if(inputArr[i] > inputArr[i+1]){
                let t = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = t;
                sorted = false;
            }
        }
    }
    return inputArr;
}
As soon as we finish iterating through the array, and no swaps were made, the while loop will stop looping and the array is returned.

Let's populate the array again and sort it:

let inputArr = [5,1,4,2,8];
bubbleSort(inputArr);
console.log(inputArr);

A thing that's worth noting is that with the first iteration finished, the largest element will be located at the end of the array. The next iteration will place the second largest element before the largest one, and so on.

This means that with each iteration, we don't really need to look at the last element, since we know it's in the right place. Thus, in the k-th iteration, we only really need to take a look at n-k+1 iterations:

function bubbleSort(inputArr) {
        
    let n = inputArr.length;
    let sorted = false;
    let numOfIterations = 0;
        
    while(!sorted) {
        sorted = true;
        for(let i = 0; i < n-numOfIterations+1; i++){
            if(inputArr[i] > inputArr[i+1]){
                let t = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = t;
                sorted = false;
                numOfIterations++;
            }
        }
    }  
    return inputArr;
}
Let's populate the array again and sort it:

let inputArr = [5,1,4,2,8];
bubbleSort(inputArr);
console.log(inputArr);
 */