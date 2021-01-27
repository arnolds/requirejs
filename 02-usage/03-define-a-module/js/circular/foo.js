define(['bar'], function (bar) {
	console.log(bar); // {value: "bar"}

	return {
		value: 'foo',
		action: function () {
			return bar.action();
		}
	};
});