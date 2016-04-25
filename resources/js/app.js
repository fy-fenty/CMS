var myapp = angular.module('myapp', ['ngResource', 'ngRoute', 'myControl']);

myapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/commodity', {
			templateUrl: '/static/module/commodityList.html',
			controller: 'CommodityList'
		})
		.when('/commodity/:name', {
			templateUrl: '/static/module/commodityDetail.html',
			controller: 'CommodityDetail'
		})
		.otherwise({redirectTo: '/commodity'});
}]);