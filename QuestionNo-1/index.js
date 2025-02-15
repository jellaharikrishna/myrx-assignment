function sortedSquares(arr) {
    let n = arr.length;
    let result = new Array(n);
    let left = 0, right = n - 1;
    let index = n - 1;
    
    while (left <= right) {
        let leftSq = arr[left] * arr[left];
        let rightSq = arr[right] * arr[right];
        
        if (leftSq > rightSq) {
            result[index] = leftSq;
            left++;
        } else {
            result[index] = rightSq;
            right--;
        }
        index--;
    }
    
    return result;
}

let arr = [-12, -8, -7, -5, 2, 4, 5, 11, 15];
console.log(sortedSquares(arr));
