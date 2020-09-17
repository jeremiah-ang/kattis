const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let M, S;
const earliest = {};
const latest = {};
const minimum = {};
rl.on('line', (line) => {
	if (!M && !S) {
		[M, S] = line.split(' ');
		M = parseInt(M);
		S = parseInt(S);
		return;
	}
	const arr = line.split(' ');
	for (let i = 0; i < S; i++) {
		const a = arr[i];
		earliest[a] = Math.min(earliest[a] || S, i + 1);
		latest[a] = Math.max(latest[a] || 0, i + 1);
	}
	if (--M) return;
	for (let i = 1; i <= S; i++) {
		minimum[earliest[i]] = Math.max(latest[i], minimum[earliest[i]] || 1);
	}
	let max = minimum[1];
	let i = 1;
	for (; i < max; i++) {
		max = Math.max(minimum[i] || 0, max);
	}
	const answer = [];
	for (let j = 0; j < i; j++) {
		answer.push(arr[j]);
	}
	console.log(answer.length);
	console.log(answer.sort((x, y) => x - y).join(' '));
});
