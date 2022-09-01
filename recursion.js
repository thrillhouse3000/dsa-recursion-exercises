/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = '') {
  if (i === words.length) return longestWord.length
  if (words[i].length > longestWord.length) longestWord = words[i]
  return longest(words, i + 1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, word = '') {
  if (i === str.length) return word
  if (i % 2 === 0 ) word += str[i]
  return everyOther(str, i + 1, word)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = str.length - 1) {
  if (i > j) return true
  if (str[i] !== str[j - i]) return false
  return isPalindrome(str, i + 1, j) 
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1
  if (arr[i] === val) return i
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, word = '') {
  if (i < 0) return word
  word += str[i]
  return revString(str, i - 1, word)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let val of Object.values(obj)) {
    if(typeof(val) === "object") {
      gatherStrings(val, arr)
    } else if (typeof(val) === "string") {
      arr.push(val)
    }
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right || val > arr[right] || val < arr[left]) return -1

  let mid = Math.floor((left + right)/2)
  
  if (val > arr[mid]) {
    left = mid + 1
    return binarySearch(arr, val, left, right)
  } else if (val < arr[mid]) {
    right = mid - 1
    return binarySearch(arr, val, left, right)
  } else {
    return mid
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
