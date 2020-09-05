//helper methods

function getDigit(num, i) {
    return Math.floor(num / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(num)) + 1
}

function mostDigits(arr) {
    let maxDigits = 0
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}

//Radix sort

function radixSort(nums) {
    let maxDigits = mostDigits(nums)
    for (let k = 0; k < maxDigits; k++) {
        //line below creates an array of 10 empty arrays
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets) //adds our digitBucket numbers to a new array. spread operator makes it so that they don't show up in separate arrays within the array.
    }
    return nums
}

console.log(radixSort([1,5,100,3,30,99]))