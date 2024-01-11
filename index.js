function hasTargetSum(array, target) {
  // Write your algorithm here
  // Obtain pairs of numbers in the array
  

  let indx = 0;
  let end = array.length;
  
  
  while (indx < end){

      // create a copy of the array
      arrayCopy = [...array];

      // Store current element in a variable
      let currentElement = arrayCopy[indx];

      // Get rid of current element from array
      arrayCopy.splice(indx, 1)

      // Add current element to each item in array
      newArray = arrayCopy.map(item => item + currentElement);

      // Compare the sum of each with the target
      if (newArray.includes(target)){
        return true;
      }
      // if it does not include the target do not return anything
      // After completing the loop and it does not return any true value that would break and exit,
      // it goes out of the while loop and returns "false", then exits
    indx++;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here

  Obtain pairs of numbers in the array
  Add pairs of numbers
  Compare the sum of each pair with the target

*/

/*
  Add written explanation of your solution here
*/

// Test Cases
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
