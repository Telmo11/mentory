(function(){
	'use strict';

	angular.module('myapp',['ngResource'])
		.factory('apiUsers', apiUsers)
		.directive('cardUser', cardUser)
		.directive('menu', menu)
		.directive('headerHero',headerHero) 
		.controller('mycontroller', mycontroller);


	function cardUser(){
		var directive ={
			restrict: 'EA',
			templateUrl: '/partials/cardUser.html',
			scope : {
				data : '=',
			},
			controller: cardController,
			controllerAs: 'cardinfo',
			bindToController: true,
			replace: true
		};
		return directive;
	}

	function cardController(){
		var cardinfo= this;
		cardinfo.text = "hello world";
		cardinfo.alert = cardalert;

		function cardalert(params){
			console.log(params);
		}


	}

	function menu(){
		var directive ={
			restrict: 'E',
			templateUrl: '/partials/header.html',
			scope : {
				data : '=',
			},
			controller: menuController,
			controllerAs: 'menuinfo',
			bindToController: true,
			replace: true
		};
		return directive;

	}

	function menuController(){
		var cardinfo= this;
		cardinfo.text = "hello world";
		cardinfo.alert = cardalert;

	}

	function headerHero(){
		var directive ={
			restrict: 'E',
			templateUrl: '/partials/headerHero.html',
			scope : {
				data : '=',
			},
			controller: heroController,
			controllerAs: 'menuinfo',
			bindToController: true,
			replace: true
		};
		return directive;

	}

	function heroController(){
		var cardinfo= this;
		cardinfo.text = "hello world";
		cardinfo.alert = cardalert;

	}



	apiUsers.$inject = ['$resource'];
	function apiUsers($resource){
		return $resource('/users/:id', {},{});

	}


	mycontroller.$inject =['apiUsers'];
	function mycontroller(apiUsers){
		var mc = this;
		mc.users = apiUsers.query();

		
	}

})();