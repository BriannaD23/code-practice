function mergeAndSort(arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);

    
    let oddSum = 0;
    for (let i = 0; i < merged.length; i++) {

        if (merged[i] % 2 !== 0) {
            oddSum += merged[i];
        }

       
    }
    
    return oddSum;
}

console.log(mergeAndSort([1, 3, 5], [2, 4, 6]));  // Expected: 9
console.log(mergeAndSort([7, 8, 10], [1, 5, 3]));  // Expected: 16
