(function () {
	'use strict';

	var app = angular.module('inb-stars', []);

	app.directive('inbStars', function () {
		return {
			restrict: 'E',
			template: function (element, attrs) {
				console.log('inbStars template', arguments);
				var note = ('note' in attrs) ? Number(attrs.note) : 3;
				note = (isNaN(note)) ? 3 : note;
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				var result = '';
				for (let i = 0; i < note; i++) {
					result += '<img src="./inb-stars/img/yellow_star.png"/>';
				}

				for (let i = note; i < 5; i++) {
					result += '<img src="./inb-stars/img/white_star.png"/>';
				}
				return result;
			}
		};
	});
})();