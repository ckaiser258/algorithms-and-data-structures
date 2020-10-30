var lengthOfLastWord = function(s) {
    if (!s) return 0
    //trim() removes white space from the outsides in case of "hello   "
    //split(' ') splits the string anywhere there is a ' '
    //and adds each word to an array
    let arr = s.trim().split(' ')
    return arr[arr.length - 1].length
};