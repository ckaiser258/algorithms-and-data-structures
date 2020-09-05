function binarySearch(arr, val){
    let min = 0
    let max = arr.length - 1
    var middle

    while (min <= max) {
        middle = Math.floor(((min + max) / 2))
        if (arr[middle] === val) {
            return middle
        }
        else if (arr[middle] < val) {
            min = middle + 1
        }
        else if (arr[middle] > val) {
            max = middle - 1
        }
    }
    return -1
}

let arr = [1,2,3,4,5]

console.log(binarySearch([1,2,3,4,5], 4))