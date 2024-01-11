function hasTargetSum(array, target) {
  // Write your algorithm here
  // Obtain pairs of numbers in the array
  
  let i = 0;
  while (i < array.length){

    for (let indx = 0; indx < array.length-1; indx++){

      // Store current element in a variable
      let currentElement = array[indx];

      // Get rid of current element from array
      array.splice(indx, 1)

      // Add current element to each item in array
      newArray = array.map(item => item + currentElement);

      // Compare the sum of each with the target
      if (newArray.includes(target)){
        return true;
      }
    }
    i++;
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
}

module.exports = hasTargetSum;
