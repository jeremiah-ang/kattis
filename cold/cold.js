const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
rl.on('line', (line) => {
	if (!n) return (n = parseInt(line));
	console.log(
		line
			.split(' ')
			.map((x) => parseInt(x))
			.filter((x) => x < 0).length,
	);
});
