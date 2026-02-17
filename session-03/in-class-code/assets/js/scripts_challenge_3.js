// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
  constructor(
    firstName,
    lastName,
    age,
    isStudent,
    address,
    skills,
    socialProfiles,
    isEmployed,
    changeAge,
    changeArrowAge,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isStudent = isStudent;
    this.address = address;
    this.skills = skills;
    this.socialProfiles = socialProfiles;
    this.isEmployed = isEmployed;
    this.changeAge = changeAge;
    this.changeArrowAge = changeArrowAge;
  }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const user1 = new UserObject(
  "Aldus",
  "Huxley",
  30,
  false,
  "123 Main St Perth 6000",
  ["JavaScript", "HTML", "CSS"],
  {
    twitter: "@aldus",
    linkedIn: "linkedin.com/in/ahuxley",
  },
  true,
  function () {
    return (this.age += 1);
  },
  () => {
    this.age += 1;
  },
);

// Log the new instance of the object
console.log(user1);
