/**
* przykladTrzeci.httpModule Module
*
* Description
*/
angular.module('przykladTrzeci.httpModule', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/httpModule', {
		templateUrl: 'tpl/httpModule.tpl.html',
		controller: 'HttpModuleCtrl',
		controllerAs: 'httpCtrl'
	});
}])
.controller('HttpModuleCtrl', ['$http', function ($http) {
	var me = this;
	me.values = [];
	$http.get('file.json').success(function (data) {
		me.values = data;
	});
}])
.directive('valueDirective', [function(){
	return {
		template: '<div class="alert alert-info">{{ model.text }} '
			+ '<span class="glyphicon" ng-click="model.active = !model.active" ng-class="{ \'glyphicon-star\': model.active, \'glyphicon-star-empty\': !model.active }">'
			+ '</span></div>',
		scope: {
			model: "="
		},
		restrict: 'AEC', // atrybut, element, class
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);;