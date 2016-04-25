var myController = angular.module('myControl', ['CommodityService']);

myController.controller('CommodityDetail', function($scope, $routeParams, Commodity) {
	Commodity.get({
		name: $routeParams.name
	}, function(data) {
		$scope.phone = data;
		$scope.mainImgUrl = data.images[0];
	});
	$scope.setImage = function(imageUrl) {
		$scope.mainImgUrl = imageUrl;
	}
	$scope.prev = function() {
		$('.carousel').carousel('prev');
	};
	$scope.next = function() {
		$('.carousel').carousel('next');
	};
});

myController.controller('CommodityList', function($scope, Commodity) {
	$scope.page = 1;
	$scope.query = function(page) {
		Commodity.query({
			page: page
		}, function(datas, getResponseHeaders) {
			$scope.datas = datas;
			$scope.page = page;
		});
	};
	$scope.query($scope.page);

	$scope.prev = function() {
		if($scope.page > 1) {
			$scope.query($scope.page - 1);
		}
	}
	$scope.next = function() {
		$scope.query($scope.page + 1);
	}
});