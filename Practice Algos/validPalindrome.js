//Example: validPalindrome("obb") returns true
//validPalindrome("oobe") returns false
//Creating function validPalindrome that takes in string
//Create an empty object
//Loop through string and set key of object to be char
//Value is amount of occurances
//Separate for loop will go through str again and decrement the value of each key in object
//Another for loop through Object.values(object)
//If that array includes > 0, return false
//Return true

function validPalindrome(str) {
    let object = {}
    for (let char of str) {
      if (!object[char]) {
        object[char] = 1
      } else {
        object[char]++
      }
    }
    let counter = 1
    for (let char in object) {
      if (object[char] % 2 === 1 && counter) {
        counter--
      } else if (!counter) {
        return false
      }
    }
    return true
  }
  
  console.log(validPalindrome("racecar"))