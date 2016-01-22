'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 237 &&
		buf[1] === 171 &&
		buf[2] === 238 &&
		buf[3] === 219;
};
