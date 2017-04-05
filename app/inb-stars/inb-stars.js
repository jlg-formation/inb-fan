(function () {
	'use strict';

	var app = angular.module('inb-stars', []);

	app.component('inbStars', {
		bindings: {
			n: '=?note'
		},
		controller: function ($scope, $element, $compile) {
			'ngInject';
			var ctrl = this;
			console.log('inbStars template', arguments);
			ctrl.update = function (newNote) {
				console.log('update xxx:', arguments);
				ctrl.n = newNote;
			};
			$scope.$watch('$ctrl.n', function () {
				var note = (ctrl.n !== undefined) ? Number(ctrl.n) : 3;
				note = (isNaN(note)) ? 3 : note;
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				var html = '';
				for (var i = 0; i < note; i++) {
					html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./inb-stars/img/yellow_star.png"/>';
				}

				for (i = note; i < 5; i++) {
					html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./inb-stars/img/white_star.png"/>';
				}
				$element.html(html);
				$compile($element.contents())($scope);
			});

		}
	});
})();