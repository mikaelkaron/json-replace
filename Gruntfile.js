/**
 * json-replace
 * @license MIT http://mikael.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		"jshint": {
			"all": [
				"Gruntfile.js",
				"main.js"
			],
			"options": {
				"jshintrc": ".jshintrc"
			}
		},

		"buster" : {
			"all": {}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-buster");
	grunt.registerTask("test", [ "jshint", "buster" ]);
	grunt.registerTask("default", [ "test" ]);
};
