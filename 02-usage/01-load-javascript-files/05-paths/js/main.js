require.config({
	baseUrl: 'js/lib',
	paths: {
		'module': '../module'
	}
});

require([
	'jquery',
	'underscore',
	'module/foo'
]);
