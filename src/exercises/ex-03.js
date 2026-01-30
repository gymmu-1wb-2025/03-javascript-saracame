const name = process.argv[2];
let age = process.argv[3];

console.log("Hallo " + name + "! Du bist aktuell " + age + " Jahre alt.");

age = Number(age);

const ageAtMatura = age + 4;

console.log(
	"An der Matur wirst du ungefähr " + ageAtMatura + " Jahre alt sein.",
);
