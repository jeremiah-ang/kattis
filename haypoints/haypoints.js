const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let m, n;
let haypoint = 0;
const dict = {};
rl.on('line', (line) => {
	if (!m && !n) {
		[m, n] = line.split(' ').map((x) => parseInt(x));
		return;
	}
	if (m-- > 0) {
		const [key, value] = line.split(' ');
		dict[key] = parseInt(value);
		return;
	}
	if (line === '.') {
		console.log(haypoint);
		haypoint = 0;
		return;
	}
	haypoint += line
		.split(' ')
		.map((x) => dict[x] || 0)
		.reduce((sum, x) => sum + x, 0);
});
