function doWords(data) {
	var str = decodeURI(data.splice(2));
	var arr = str.split(" ");
	var obj = {
		response: 200,
		string: str,
		data: {
			words: arr.length,
			spaces: arr.length - 1,
			letters: str.match(/[a-zA-Z]/g).length
		}
	};
	return obj;
}

module.exports = doWords;