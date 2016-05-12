/**
* pierwszaApka Module
*
* Description
*/
angular.module('pierwszaApka', [])
.config([function () {
	
}])
.controller('ctrlNamed', [function () {
	this.name = "";
}])
.controller('ctrlAnon', ['$scope', function ($scope) {
	$scope.name = "";
}]);