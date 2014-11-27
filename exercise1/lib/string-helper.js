var texttools = {};
texttools.titleize = function(string) {
	var words = string.split(/\W+/);
	for (var i = 0; i < words.length; i++) {
		if (!returnstr) {
			var returnstr = words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
		} else {
			returnstr += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
		}
	};
	return returnstr;
}

module.exports = texttools;