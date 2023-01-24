/**
 * 
 * Cocktail Shaker Sort vs Bubble Sort
Another optimization of Bubble Sort is its derived variant called Cocktail Shaker Sort, also known as Bidirectional Bubble Sort or simply Cocktail Sort.

This algorithm extends Bubble Sort by operating in two directions. Instead of going from the start to finish, and repeating that, it goes from start to finish, and then from finish to start again, in a single full iteration. Effectively, it accomplishes double the work of Bubble Sort in a single full iteration, though in practice it doesn't typically perform two times faster.

This is because it has a similar comparison-count. It compares more elements per iteration than regular Bubble Sort and it does double the swaps per iteration. The reason it's faster is because the range of possible swaps per iteration gets smaller and smaller, giving it a slightly better performance.

Let's go ahead and implement the algorithm:

function cocktailShakerSort(inputArr) {

    let n = inputArr.length;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < n - 1; i++) {
            if (inputArr[i] > inputArr[i + 1]){
               let tmp = inputArr[i];
               inputArr[i] = inputArr[i + 1];
               inputArr[i+1] = tmp;
               sorted = false;
            }
   }

   if (sorted)
       break;
   sorted = true;

        for (let j = n - 1; j > 0; j--) {
            if (inputArr[j-1] > inputArr[j]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j+1] = tmp;
                sorted = false;
            }
        }
    }
    return inputArr;
}



The first part is the same as regular Bubble Sort. Though, after we pass forwards, we go backwards. First, we check if the array is sorted with the previous forward-pass. If not, we go backwards, swapping if necessary. If no swaps are made, the algorithm is terminated and the result is returned.

If we didn't check for swaps in the second pass, we'd have to pass an additional time forwards to verify if the array is sorted.

Let's take a look at the manual example from before - this time, with Cocktail Shaker:

[5, 1, 4, 2, 8] -> [1, 5, 4, 2, 8] - We are swapping 5 and 1, since 5 > 1
[1, 5, 4, 2, 8] -> [1, 4, 5, 2, 8] - We are swapping 5 and 4, since 5 > 4
[1, 4, 5, 2, 8] -> [1, 4, 2, 5, 8] - We are swapping 5 and 2, since 5 > 2
[1, 4, 2, 5, 8] -> [1, 4, 2, 5, 8] - No change, since 5 < 8
[1, 4, 2, 5, 8] -> [1, 4, 2, 5, 8] - No change, since 5 > 2
[1, 4, 2, 5, 8] -> [1, 2, 4, 5, 8] - We are swapping 4 and 2, since 2 < 4
[1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] - No change, since 2 > 1

Here, our array is sorted within 1 iteration, unlike Bubble Sort's 2 iterations. Cocktail Sort did this with 7 comparisons, whereas Bubble Sort did this with 8. This isn't a lot at this scale, though with larger numbers, we'll see performance boosts.

Typically, this results in a 33% faster performance.

Donald E. Knuth mentioned Cocktail Shaker Sort, along with a few similar Bubble Sort variants, in his famous monograph "The Art of Computer Programming":

But none of these refinements leads to an algorithm better than straight insertion [that is, insertion sort]; and we already know that straight insertion isn't suitable for large N. [...]

In short, the bubble sort seems to have nothing to recommend it, except a catchy name and the fact that it leads to some interesting theoretical problems.
 */