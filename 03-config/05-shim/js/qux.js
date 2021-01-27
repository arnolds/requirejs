window.Qux || (window.Qux = function () {	
	return {
		message: 'Hello, World!',
		greeting: function () {
			console.log(this.message);
		}
	};
}());