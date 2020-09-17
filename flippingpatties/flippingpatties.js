const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n,
	nn,
	hands = 0,
	time = {};
rl.on('line', (line) => {
	if (!n) {
		n = parseInt(line);
		nn = n;
		return;
	}
	const [d, t] = line.split(' ');
	const s = t;
	const f = s - d;
	const p = f - d;
	if (!time[s]) time[s] = 0;
	if (!time[f]) time[f] = 0;
	if (!time[p]) time[p] = 0;
	time[s]++;
	time[f]++;
	time[p]++;
	if (time[s] > hands) hands = time[s];
	if (time[f] > hands) hands = time[f];
	if (time[p] > hands) hands = time[p];
	if (--nn === 0) console.log(Math.ceil(hands / 2));
});
