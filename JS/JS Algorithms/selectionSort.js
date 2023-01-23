function selectionSorting(inputArr) {
    for (var i = 0; i < inputArr.length; i++) {
        var tempEle = inputArr[i];
        for (var j = i + 1; j < inputArr.length; j++) {
            if (tempEle > inputArr[j]) {
                tempEle = inputArr[j];
            }
        }
        var index = inputArr.indexOf(tempEle);
        var tempVal = inputArr[i];
        inputArr[i] = tempEle;
        inputArr[index] = tempVal;
    }
}
var inputArr = [2, 7, 9, 1, 8];
console.log("Here is the input array: ", inputArr);
selectionSorting(inputArr);
console.log("Here is the sorted array: ", inputArr);