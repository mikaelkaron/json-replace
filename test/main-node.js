var buster = require("buster");
var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

var _ = require("lodash");
var json_replace = require("../main");

var JSON = {
	"test": {
		"deep": {
			"boolean": true
		},
		"number": 123
	}
};

buster.testCase("main", {
	"does nothing": function() {
		assert.equals(JSON, json_replace(JSON, {}));
	},

	"change deep": function () {
		var node = {
			"test": {
				"deep": {
					"boolean": false
				}
			}
		};
		var expected = _.merge({}, JSON, node);

		assert.equals(json_replace(JSON, node), expected);
	},

	"remove deep": function () {
		var expected = _.clone(JSON);

		delete expected.deep;

		assert.equals(json_replace(JSON, {
			"test": {
				"deep": undefined
			}
		}), expected);
	}
});