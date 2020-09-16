const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
const xmap = {};
const ymap = {};
const ldmap = {};
const rdmap = {};
let done = false;
rl.on('line', (line) => {
	// line
	if (!n) return (n = line);
	const [x, y] = line.split(' ').map((x) => parseInt(x));
	const ld = x + y;
	const rd = x - y;
	if ((xmap[x] || ymap[y] || ldmap[ld] || rdmap[rd]) && !done) {
		done = true;
		console.log('INCORRECT');
	}
	xmap[x] = 1;
	ymap[y] = 1;
	ldmap[ld] = 1;
	rdmap[rd] = 1;
	if (!--n && !done) return console.log('CORRECT');
});
