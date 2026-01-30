const number = 15;

if (number === 0) {
	console.log("Sie haben eine 0 eingegeben. 0 ist durch jede Zahl teilbar.");
} else {
	const remainder = number % 3;

	if (remainder === 0) {
		console.log(number + " ist durch 3 teilbar.");
	} else {
		console.log(number + " ist NICHT durch 3 teilbar.");
	}
}
