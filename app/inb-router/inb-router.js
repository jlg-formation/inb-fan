'use strict';

var app = angular.module('inb-router', ['ui.router']);

var homeUrl = require('./tmpl/home.html');
var contactUrl = require('./tmpl/contact.html');
var productUrl = require('./tmpl/product.html');
var serviceUrl = require('./tmpl/service.html');

function ProductCtrl($http, $q) {
	'ngInject';
	console.log('ProductCtrl', this, arguments);
	var ctrl = this;
	ctrl.start = function() {
		console.log('start', arguments);
		$http.get('../ws/s1').then(function(response) {
			console.log('response', response);
			return $q.all([
				$http.get('../ws/s2').then(function() {
					console.log('response', response);
					return $http.get('../ws/s6')
				}),
				$http.get('../ws/s3'),
				$http.get('../ws/s4')
			]);
		}).then(function(responses) {
			console.log('responses', responses);
			return $http.get('../ws/s5');
		}).then(function(response) {
			console.log('response', response);
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
		clickAction: '&'
	},
	controller: function($scope, $element, $compile) {
		'ngInject';
		var ctrl = this;
		ctrl.$onInit = function() {
			var html = '<button ng-click="$ctrl.clickAction()">{{$ctrl.label}}</button>';
			ctrl.label = $element.text();
			$element.html(html);
			$compile($element.contents())($scope);
		};
	}
});
