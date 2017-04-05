'use strict';

var app = angular.module('inb-router', ['ui.router', 'inb-log']);

var homeUrl = require('./tmpl/home.html');
var contactUrl = require('./tmpl/contact.html');
var productUrl = require('./tmpl/product.html');
var serviceUrl = require('./tmpl/service.html');

function ProductCtrl($http, $q, inbLogs) {
	'ngInject';
	console.log('ProductCtrl', this, arguments);
	var ctrl = this;
	ctrl.start = function(next) {
		console.log('start', arguments);
		$http.get('../ws/s1').then(function(response) {
			console.log('response', response);
			inbLogs.add(JSON.stringify(response.data));
			return $q.all([
				$http.get('../ws/s2').then(function(response) {
					console.log('response', response);
					inbLogs.add(JSON.stringify(response.data));
					return $http.get('../ws/s6')
				}),
				$http.get('../ws/s3'),
				$http.get('../ws/s4')
			]);
		}).then(function(responses) {
			console.log('responses', responses);
			inbLogs.add(JSON.stringify(responses[0].data));
			inbLogs.add(JSON.stringify(responses[1].data));
			inbLogs.add(JSON.stringify(responses[2].data));
			return $http.get('../ws/s5');
		}).then(function(response) {
			console.log('response', response);
			inbLogs.add(JSON.stringify(response.data));
		}).finally(function() {
			inbLogs.add('finished');
			next();
		}).catch(function(error) {
			console.error('error', error);
		});
	};
}

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	$locationProvider
		.html5Mode(true);

	var homeState = {
		name: 'home',
		url: '/',
		templateUrl: homeUrl
	};

	var productState = {
		name: 'product',
		url: '/product',
		templateUrl: productUrl,
		controller: ProductCtrl,
		controllerAs: '$ctrl'
	};

	var serviceState = {
		name: 'service',
		url: '/service',
		templateUrl: serviceUrl
	};

	var contactState = {
		name: 'contact',
		url: '/contact',
		templateUrl: contactUrl
	};

	$stateProvider.state(homeState);
	$stateProvider.state(productState);
	$stateProvider.state(serviceState);
	$stateProvider.state(contactState);
	$urlRouterProvider.otherwise('/');
});

app.component('inbButton', {
	bindings: {
		clickAction: '<'
	},
	controller: function($scope, $element, $compile) {
		'ngInject';
		var ctrl = this;
		ctrl.doAction = function() {
			console.log('on start');
			ctrl.state = 1;
			ctrl.clickAction(function() {
				console.log('on end');
				ctrl.state = 0;
			});

		};
		ctrl.state = 0;
		ctrl.$onInit = function() {
			ctrl.label = $element.text();
		};
		$scope.$watch('$ctrl.state', function() {
			var html;
			if (ctrl.state === 0) {
				html = '<button ng-click="$ctrl.doAction()">{{$ctrl.label}}</button>';
			} else {
				html = '<background-bar><foreground-bar></foreground-bar></background-bar>';
			}
			$element.html(html);
			$compile($element.contents())($scope);
			//$element.find('button').css('background-color', 'black');
		});
	}
});
