//Pivot helper function

function pivot(arr, start=0, end=arr.length+1) {
    let pivotIndex = start //This keeps track of how many things are greater than the pivot so we can swap to that index at the very end
    let pivot = arr[start]
    for (let i = start + 1; i < arr.length; i++) {
        let temp
        if (pivot > arr[i]) {
            //increment pivotIndex and swap current selected element with the one in the current pivotIndex
            pivotIndex ++
            temp = arr[i]
            arr[i] = arr[pivotIndex]
            arr[pivotIndex] = temp
        }
    }
    //finally swap the original pivot element with the element in the final pivotIndex
    let newTemp = arr[start]
    arr[start] = arr[pivotIndex]
    arr[pivotIndex] = newTemp
    return pivotIndex //return the index at which the pivot point has ended up
}

function quickSort(arr, left=0, right=arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
console.log(quickSort([3,1,5,9,2]))