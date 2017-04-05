'use strict';

var app = angular.module('inb-log', []);

app.service('inbLogs', function InbLogs($rootScope) {
	'ngInject';
	$rootScope.logs = [];
    this.add = function (line) {
        $rootScope.logs.push(line);
    };
});

app.component('inbLog', {
	bindings: {
		logs: '<'
	},
	template: '<div ng-repeat="line in $ctrl.logs track by $index">{{line}}</div>',


});
