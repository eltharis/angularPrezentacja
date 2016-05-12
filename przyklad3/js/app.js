/**
* przyklad-trzeci Module
*
* Description
*/
angular.module('przykladTrzeci', ["ngRoute", "przykladTrzeci.httpModule"])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'tpl/landing.tpl.html'
	})
	.otherwise({ redirectTo: '/' });
}]);