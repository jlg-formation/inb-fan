(function () {
	'use strict';

	var a = {
		x: 2,
		y: {
			z: 10
		}
	};

	var clone = function (o) {
		var result = {};
		for (var p in o) {
			if (o[p] !== null && typeof o[p] === 'object') {
				result[p] = clone(o[p]);
			} else {
				result[p] = o[p];
			}
		}
		return result;
	};

	var b = clone(a);

	console.log('a', a);
	console.log('b', b);
	b.x = 5;
	b.y.z = 12;
	console.log('a', a);
	console.log('b', b);
})();