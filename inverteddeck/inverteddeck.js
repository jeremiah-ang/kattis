const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
rl.on('line', (line) => {
	if (!n) return (n = line);
	if (n === 1) return console.log('1 1');
	const arr = line.split(' ');
	const cArr = [arr[0]];
	const iArr = [0];
	const mArr = [];
	for (let i = 1; i < n; i++) {
		if (arr[i - 1] === arr[i]) continue;
		cArr.push(arr[i]);
		iArr.push(i);
		mArr.push(arr[i] - arr[i - 1]);
	}
	mArr.push(1);

	const last = mArr[mArr.length - 1];
	// look for first -1
	mArr[mArr.length - 1] = -1;
	let i = 0;
	while (mArr[i] > 0) {
		i++;
	}
	mArr[mArr.length - 1] = last;
	if (i === mArr.length - 1) return console.log('1 1');

	// look for first +1 after i
	let j = i;
	while (mArr[j] < 0) {
		j++;
	}

	// look for next -1 after j
	let k = j;
	mArr[mArr.length - 1] = -1;
	while (mArr[k] > 0) {
		k++;
	}
	mArr[mArr.length - 1] = last;

	// is sorted after reversing
	if (
		k === mArr.length - 1 &&
		(j === mArr.length - 1 || cArr[i] <= cArr[j + 1]) &&
		(i === 0 || cArr[j] >= cArr[i - 1])
	) {
		console.log(`${iArr[i] + 1} ${j + 1 > iArr.length - 1 ? n : iArr[j + 1]}`);
	} else {
		console.log('impossible');
	}
});
