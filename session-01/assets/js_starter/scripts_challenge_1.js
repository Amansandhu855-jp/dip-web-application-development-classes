// Initialise the array of user to change the password
let users = [
  [1, "password1"],
  [2, "password2"],
  [3, "password3"],
];

// Define the function update password
function updatePassword() {
  return users.map((user) => user[1] + "hghghgh");
}

// Call the function with the numbers array
let updatedUsers = updatePassword(users);

// Console log the new array
console.log(updatedUsers);
