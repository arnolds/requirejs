// Will try calling js from the directory that contains the HTML file.
require(['foo.js']);

// Will try calling js from the path /path/to/bar.js
require(['/path/to/bar.js']);

// Will try calling js from the url https://example.org/baz.js
require(['https://example.org/baz.js']);
