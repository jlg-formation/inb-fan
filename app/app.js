(function() {
	'use strict';

	var app = angular.module('main', ['inb-router', 'inb-stars']);

	app.directive('inbHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/inb-header.html'
		};
	});
    app.directive('inbBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/inb-body.html'
		};
	});
    app.directive('inbFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/inb-footer.html'
		};
	});
})();