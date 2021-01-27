// We don't use data-main, and we don't configure a baseUrl.
// Then the baseUrl will be set to the directory that contains the 
// HTML page.
require(['js/foo'], function (foo) {
	console.log(foo.message);
});