(function(){
	'use strict';

	angular.module('myappmenu',['ngResource'])
		.directive('menuNav', menuNav) 
		.controller('navcontroller', navcontroller);


	function menuNav(){
		var directive ={
			restrict: 'EA',
			templateUrl: '/partials/header.html',
			scope : {
				data : '=',
			},
			controller: menuController,
			controllerAs: 'menu',
			bindToController: true,
			replace: true
		};
		return directive;
	}

	function menuController(){
		var menu= this;
		


	}



	function navcontroller(){

	}



	

})();