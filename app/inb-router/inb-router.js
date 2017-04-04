(function () {
	'use strict';

	var app = angular.module('inb-router', ['ui.router']);

	app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		'ngInject';

		$locationProvider
			.html5Mode(true);

		var homeState = {
			name: 'home',
			url: '/',
			templateUrl: './inb-router/tmpl/home.html'
		};

		var productState = {
			name: 'product',
			url: '/product',
			templateUrl: './inb-router/tmpl/product.html'
		};

		var serviceState = {
			name: 'service',
			url: '/service',
			templateUrl: './inb-router/tmpl/service.html'
		};

		var contactState = {
			name: 'contact',
			url: '/contact',
			templateUrl: './inb-router/tmpl/contact.html'
		};

		$stateProvider.state(homeState);
		$stateProvider.state(productState);
		$stateProvider.state(serviceState);
		$stateProvider.state(contactState);
		$urlRouterProvider.otherwise('/');
	});
})();