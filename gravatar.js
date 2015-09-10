var crypto = require('crypto');

function getGravatar(data)
{
	var md5 = crypto.createHash('md5');
	md5.update(data[2]);
	var url = "http://gravatar.com/avatar/" + md5.digest("hex") +"?size=200";

	return "<a href = '" + url + "'><img src='" + url + "'></img></a>";
}

module.exports = getGravatar;