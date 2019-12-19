const name = "Tim";
let hasHobbies = true;
let age = 30;

function summarizeUserES5(userName, userAge, userHasHobby) {
	return (
		"Name is " +
		userName +
		", age is " +
		userAge +
		" and the user has hobbies: " +
		userHasHobby +
		"."
	);
}

const summarizeUserES6 = (userName, userAge, userHasHobby) =>
	"Name is " +
	userName +
	", age is " +
	userAge +
	" and the user has hobbies: " +
	userHasHobby +
	".";

console.log(summarizeUserES5(name, age, hasHobbies));
console.log(summarizeUserES6(name, age, hasHobbies));
