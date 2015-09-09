function doMath(data, op, defVal) {
	return data.splice(3).reduce(function(total, num) {
		if (num === 'add' || num == 'subtract' || num === 'multiply' || num === 'divide') {
			op = num;
			return total;
		}
		num = parseInt(num);
		switch (op) {
			case 'add':
				return total + num;
			case 'subtract':
				return total - num;
			case 'multiply':
				return total * num;
			case 'divide':
				return total / num;
			default:
				return num;
		}
	}, defVal);
}

module.exports = doMath;