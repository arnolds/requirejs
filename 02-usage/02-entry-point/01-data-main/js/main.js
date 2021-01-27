// Set configuration
require.config({
	baseUrl: 'js'
});

// Load application module(s)
require(['foo'], function (foo) {
	console.log(foo.message);
});