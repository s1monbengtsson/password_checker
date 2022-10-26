/**
 * Workshop: Password Checker
 *
 * Write code that checks if password in variable contains:
 * -  at least 6 chars whereof minimum 2 specialChars
 * -  at least 8 chars whereof 1 specialChar
 * -  at least 12 chars and 1 '-'
 * -  at least 16 chars
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@",
	"$",
	"%",
	"*",
	"^",
	"<",
	">",
	"?",
	"!",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"'",
];

// Solution

let count = 0;

for (let i = 0; i <= password.length; i++) {
	if (password.includes(specialChars[i])) {
		count++;
	}
}

if (password.length >= 16) {
	console.log("Your password is long enough");
} else if (password.length >= 12 && password.includes("-")) {
	console.log("Your password is long enough and contains '-'");
} else if (password.length >= 8 && count == 1) {
	console.log(
		"Your password is long enough and contains at least on specialChar"
	);
} else if (password.length >= 6 && count >= 2) {
	console.log(
		"Your password is long enough and contains at least 2 specialChars"
	);
} else {
	console.log("Your password is invalid");
}
