const name = "Tim";
let hasHobbies = true;
let age = 30;

const summarizeUser = (userName, userAge, userHasHobby) =>
	`Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`;

console.log(summarizeUser(name, age, hasHobbies));
