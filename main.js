/**
 * json-replace
 * @license MIT http://mikael.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
(function (define) { "use strict"; define(function () {
	var _ = require("lodash");

	return function walk(node, replace) {
		if (_.isObject(node) && _.isObject(replace)) {
			_.each(node, function (value, key) {
				if (_.has(replace, key)) {
					node[key] = walk(node[key], replace[key]);
				}
			});
		}
		else {
			node = replace;
		}

		return node;
	};
}); })(typeof define === "function" && define.amd ? define : function (factory) { "use strict"; module.exports = factory(); });