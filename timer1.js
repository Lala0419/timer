const timer = function (delays) {
	for (let i = 0; i < delays.length; i++) {
		//check if delay is a number or not
		// true if its not, false if it is
		if (isNaN(delays[i])) {
			continue;
		}
		if (delays[i] > 0) {
			setTimeout(() => {
				process.stdout.write(".");
			}, delays[i] * 1000);
		}
	}
};
let delays = process.argv.slice(2);
timer(delays);
