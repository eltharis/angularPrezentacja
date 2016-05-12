/**
* przykladDrugi Module
*
* Description
*/
angular.module('przykladDrugi', [])
.config([function () {
	
}])
.controller('SampleCtrl', [function () {
	this.title="Tytuł aplikacji";
	this.chosenThing = "Home";

	var fun1 = function() {
		alert('Funkcja 1');
	}

	var fun2 = function() {
		alert('Funkcja 2');
	}


	this.functionToPass = fun1;

	this.changeFunction = function() {
		if(this.functionToPass == fun1) {
			this.functionToPass = fun2;
		} else {
			this.functionToPass = fun1;
		}
	}
}])
.directive('navbarDirective', [function(){
	// Runs during compile
	return {
		// name: 'navbar-directive',
		// priority: 1,
		// terminal: true,
		scope: {
			title: "@",
			chosenThing: "=",
			functionPassed: "&"
		},
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'js/navbar.tpl.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);