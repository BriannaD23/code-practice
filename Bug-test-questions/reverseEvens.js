function reverseEvens(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evens.push(arr[i]);
        }
    }
    return evens.reverse();
}

console.log(reverseEvens([1, 2, 3, 4, 5, 6]));  // Expected: [6, 4, 2]
