// Challenge 4 Starter
(function () {
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
let index = numbers.findIndex(num => num === 5);

// If the number 5 is found in the array
if (index !== -1) {
  // print each number up to and including 5
  numbers.slice(0, index + 1).forEach(num => { 
  // Console log each number in the array up to and including 5
 console.log(num);
     });
  } else {
  // Output a message if the number 5 is not in the array
  console.log("Number not in array")
}
  })(); 
