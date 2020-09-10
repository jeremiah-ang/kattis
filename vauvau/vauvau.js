const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let A, B, C, D;
rl.on('line', (line) => {
	if (!A) {
		[A, B, C, D] = line.split(' ').map((i) => parseInt(i));
		return;
	}
	line.split(' ').forEach((x) => {
		let active = 0;
		x = parseInt(x) - 1;
		if (x % (A + B) < A) active++;
		if (x % (C + D) < C) active++;
		if (active === 0) console.log('none');
		else if (active === 1) console.log('one');
		else console.log('both');
	});
});
