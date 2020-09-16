const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const counterDict = {
	R: 'S',
	B: 'K',
	L: 'H',
};

let output = '';

function counter(X) {
	if (!counterDict[X]) return;
	output += counterDict[X];
}

rl.on('line', (line) => {
	let A, B, C;
	for (let i = 0; i < line.length; i++) {
		if (!A) A = line[i];
		else if (!B) B = line[i];
		else if (!C) C = line[i];
		if (!A || !B || !C) continue;
		if (A != B && B != C && A != C) {
			A = 0;
			B = 0;
			C = 0;
			output += 'C';
		} else {
			counter(A);
			A = B;
			B = C;
			C = 0;
		}
	}
	counter(A);
	counter(B);
	counter(C);
	console.log(output);
});
