function findFirstDuplicate(arr) {

  // create a new variable to hold an array of unique elements
  let unique = [];

  // iterate through the given array
  for (let i = 0; i < arr.length; i ++) {

    // with every iteration check if the element from the given array is already included in array of unique values
    if (unique.includes(arr[i])) {

      // if element is already included, return value
      return arr[i];

    } else {

      // if element is not included, push it to the array of unique values
      unique.push(arr[i]);
    }
  }

  // if array doesn't have duplicates, return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
