// Because we used the data-main attribute:
// <script src="js/require.js" data-main="js/main"></script>
// The baseUrl will be set to "js".
// We can override the implied baseUrl config like so:
require.config({
	baseUrl: 'js'
});

require(['foo'], function (foo) {
	console.log(foo.message);
});