var commodityService = angular.module('CommodityService', []);

commodityService.factory('Commodity', ['$resource', function($resource) {
	return $resource('/commodity/:name', {}, {});
}]);