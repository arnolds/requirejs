define([
	'../dep/foo',
	'../dep/bar'
], function (foo, bar) {
	console.log(foo);
	console.log(bar);

	return {
		name: 'John Doe',
		age: 64
	}
});