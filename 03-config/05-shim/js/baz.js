window.Baz || (window.Baz = function () {	
	return {
		message: 'Hello, World!',
		greeting: function () {
			console.log(this.message);
		}
	};
}());