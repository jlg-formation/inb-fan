(function () {
	'use strict';

	var app = angular.module('inb-stars', []);

	app.directive('inbStars', function () {
		return {
			restrict: 'E',
			scope: {
				n: '=note'
			},
			link: function (scope, element) {
				console.log('inbStars template', arguments);
				scope.$watch('n', function () {
					var note = (scope.n !== undefined) ? Number(scope.n) : 3;
					note = (isNaN(note)) ? 3 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					var html = '';
					for (let i = 0; i < note; i++) {
						html += '<img src="./inb-stars/img/yellow_star.png"/>';
					}

					for (let i = note; i < 5; i++) {
						html += '<img src="./inb-stars/img/white_star.png"/>';
					}
					element.html(html);
				});

			}
		};
	});
})();