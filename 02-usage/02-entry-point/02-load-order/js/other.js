// This doesn't work.
// `main.js` sets the configuration required, since it's loaded
// async the configuration isn't available to `other.js`.
// Instead we try to load foo relative to the data-main baseUrl.
require(['foo'], function (foo) {
	console.log(foo.message);
});