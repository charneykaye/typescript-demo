module.exports = function(grunt) {
	//Configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json') ,
		jshint: {
			options: {
				smarttabs: false,
				immed: true,
				latedef: true,
				noarg: true,
				quotmark: 'single',
				unused: true,
				strict: true,
				trailing: true,
				globals: {
					jQuery: true,
					window: true,
					document: true,
					navigator: true
				}
			},
			all: [
				'src/js/*.js',
				]
		},
		qunit: {
			all: ['test/index.html']
		},
		uglify: {
			options: {
				banner: '/*! typescript-demo <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | Outright Mental Inc. - https://github.com/outrightmental/typescript-demo.git \n'
			},
			all: {
				files: [
					{expand: true, cwd: 'src/js/', src: ['*.js'], dest: 'build/js/'},
				]
			}
		},
		htmlmin: {
			all: {  
				options: { 
					removeComments: true,
					collapseWhitespace: true
				},
				files: [
					// Index HTML
					{src: ['src/index.html'], dest: 'build/index.html', filter: 'isFile'}
				]
			}
		},
		copy: {
			all: {
				files: [
					// Copy JavaScript libraries
					{expand: true, cwd: 'src/js/lib/', src: ['*.js'], dest: 'build/js/lib/'},
					// Copy CSS files
					{expand: true, cwd: 'src/css/', src: ['*.css'], dest: 'build/css/'},
					// Copy Images
					{expand: true, cwd: 'src/img/', src: ['**'], dest: 'build/img/'},
				]
			}
		},
		watch: {
			javascript: {
				files: ['src/js/*.js'],
				tasks: ['jshint','qunit','uglify'],
				options: {
					nospawn: true,
				},
			},
			html: {
				files: ['src/*.html'],
				tasks: ['htmlmin'],
				options: {
					nospawn: true,
				},
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['copy'],
				options: {
					nospawn: true,
				},
			}
		},		
	});

	//Dependencies.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Tasks.
	grunt.registerTask('default', ['jshint', 'qunit', 'uglify', 'htmlmin', 'copy']);
//	grunt.registerTask('travis', ['jshint', 'qunit']);
};