//(O(n))
function rotation(arr, num) {
  let i = 0;
  while (i < num) {
    arr.push(arr.shift());
    i++;
  }
  return arr;
}

//O(1)
function rotate(arr, num) {
    num = num % arr.length
    arr = arr.concat(arr.splice(0 , num))
    return arr
  }
  arr = [1,2,3,4,5]
  num = 2
  console.log(rotate(arr,num))

console.log(rotation([1, 2, 3, 4, 5], 2));
