// const name = "Tim";
// let hasHobbies = true;
// let age = 30;

const summarizeUser = (userName, userAge, userHasHobby) =>
	`Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`;

const person = {
	name: "Tim",
	age: 30,
	greet() {
		console.log(`Hi, I am ${this.name}`);
	}
};

// console.log(summarizeUser(name, age, hasHobbies));

person.greet();
