'use strict';

var app = angular.module('inb-router', ['ui.router']);

var homeUrl = require('./tmpl/home.html');
var contactUrl = require('./tmpl/contact.html');
var productUrl = require('./tmpl/product.html');
var serviceUrl = require('./tmpl/service.html');

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
		templateUrl: productUrl
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
