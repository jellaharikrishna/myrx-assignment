function sortRGBBalls(arr) {
    let left = 0, mid = 0, right = arr.length - 1;
    
    while (mid <= right) {
        if (arr[mid] === 'R') {
            [arr[left], arr[mid]] = [arr[mid], arr[left]];
            left++;
            mid++;
        } else if (arr[mid] === 'G') {
            mid++;
        } else if (arr[mid] === 'B') {
            [arr[mid], arr[right]] = [arr[right], arr[mid]];
            right--;
        }
    }
    return arr;
}

let balls = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
console.log(sortRGBBalls(balls));
