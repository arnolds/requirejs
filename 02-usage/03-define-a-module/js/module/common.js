define(function (require, exports, module) {
	var foo = require('../dep/foo');
	var bar = require('../dep/bar');

	return function (message) {
		console.log(foo);
		console.log(bar);
		console.log(message);
	}
});