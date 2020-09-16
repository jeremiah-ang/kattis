const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
rl.on('line', (line) => {
	if (!n) return (n = line);
	let lMax = 0;
	console.log(
		line
			.split(' ')
			.map((x) => parseInt(x))
			.reduce((count, x, index) => {
				if (lMax + 1 == x && index + 1 == x) count++;
				lMax = Math.max(lMax, x);
				return count;
			}, 0),
	);
});
