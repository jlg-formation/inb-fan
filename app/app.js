'use strict';
require('angular/angular-csp.css');
require('./style.scss');

require('angular');
require('angular-ui-router');
require('./inb-router/inb-router.js');
require('./inb-stars/inb-stars.js');

var app = angular.module('main', ['inb-router', 'inb-stars']);

var inbHeaderUrl = require('./tmpl/inb-header.html');

app.directive('inbHeader', function () {
	return {
		restrict: 'E',
		templateUrl: inbHeaderUrl
	};
});

var inbBodyUrl = require('./tmpl/inb-body.html');

app.directive('inbBody', function () {
	return {
		restrict: 'E',
		templateUrl: inbBodyUrl
	};
});

var inbFooterUrl = require('./tmpl/inb-footer.html');

app.directive('inbFooter', function () {
	return {
		restrict: 'E',
		templateUrl: inbFooterUrl
	};
});
