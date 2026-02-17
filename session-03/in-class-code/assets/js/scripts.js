// // localStorage API
// // Store data
// let localData = "The data that I want to store for later.";
// localStorage.setItem("myDataKey", localData);

// // Get data
// let savedData = localStorage.getItem("myDataKey");

// // Remove data
// localStorage.removeItem("myDataKey");

// // sessionStorage API
// // Store data
// let sessionData = "The data that I want to store temporarily.";
// sessionStorage.setItem("myTempDataKey", sessionData);

// // Get data
// let tempData = sessionStorage.getItem("myTempDataKey");

// // Remove data
// sessionStorage.removeItem("myTempDataKey");
const userObject = {
  firstName: "Aldus",
  lastName: "Huxley",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@aldus",
    linkedIn: "linkedin.com/in/ahuxley",
  },
  isEmployed: true,
  changeAge : function() {
    return this.age += 1
  },
  changeArrowAge : () => {this.age += 1}
};


function deepClone(user){
    return JSON.parse(JSON.stringify(user))
};

const userCopy = deepClone(userObject);

console.log(userCopy);