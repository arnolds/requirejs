require.config({
	baseUrl: 'js'
});

require(['foo'], function (foo) {
	console.log(foo);
});