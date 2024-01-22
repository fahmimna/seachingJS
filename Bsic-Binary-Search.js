const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (num) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === num) {
            return middle;
        } else if (num < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
};

console.log(search(6)); // 5
console.log(search(11)); // -1