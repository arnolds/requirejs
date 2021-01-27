require.config({
	baseUrl: 'js',
	bundles: {
		primary: [
			'foo',
			'bar'
		],
		secondary: [
			'baz'
		]
	}
});

require([
	'foo',
	'bar',
	'baz'
], function (foo, bar, baz) {
	console.log(foo);
	console.log(bar);
	console.log(baz);
});
