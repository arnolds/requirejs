define(['require', 'foo'], function (require, foo) {
	console.log(foo); // undefined

	return {
		value: 'bar',
		action: function () {
			return require('foo'); // {value: "foo"}
		}
	};
});