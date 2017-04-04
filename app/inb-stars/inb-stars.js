(function () {
	'use strict';

	var app = angular.module('inb-stars', []);

	app.directive('inbStars', function () {
		return {
			restrict: 'E',
			template: function(element, attrs) {
				console.log('inbStars template', arguments);
				var result = '';
				for (let i = 0; i < 3; i++) {
					result += '<img src="./inb-stars/img/yellow_star.png"/>';
				}

				for (let i = 3; i < 5; i++) {
					result += '<img src="./inb-stars/img/white_star.png"/>';
				}
				return result;
			}
		};
	});
})();