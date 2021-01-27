// Set configuration
require.config({
	paths: {
		'foo': 'module/foo'
	}
});

// This works.
// We set the configuration, then access the path.
// require(['foo'], function (foo) {
// 	console.log(foo.message);
// });