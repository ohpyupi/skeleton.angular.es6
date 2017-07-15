'use strict';
export default function Config ($urlRouterProvider, $locationProvider) {
	'ngInject';
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}
