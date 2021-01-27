({
	appDir: './',
	baseUrl: 'js',
	mainConfigfile: 'js/main.js',
	dir: './dist',
	modules: [
		{
			name: 'primary',
			create: true,
			include: [
				'foo',
				'bar'
			]
		},
		{
			name: 'secondary',
			create: true,
			include: [
				'baz'
			]
		}
	]
});