var restoApp = angular.module('resto-app', ['resto-app.filters']);

restoApp.controller('resto-list-controller', function($scope, $http, $window) 
{
    $http.get('http://193.191.187.14:10078/Restaurants_Web/restaurant').success(function(data) 
    {
        $scope.list = data;
    });
    
    $scope.delete = function(id) 
    {
        console.log($scope.restaurant);
        $http.post('http://193.191.187.14:10078/Restaurants_Web/restaurant/remove/' + id).success(function(data) 
        {
            $http.get('http://193.191.187.14:10078/Restaurants_Web/restaurant').success(function(data) 
            {
                $scope.list = data;
            });
        });
    };
});

restoApp.controller('resto-create-controller', function($scope, $http, $window) 
{
    $http.get('http://193.191.187.14:10078/Restaurants_Web/restaurant/create').success(function(data) 
    {
        $scope.restaurant = data;
    });
    
    $scope.send = function() 
    {
        $http.post('http://193.191.187.14:10078/Restaurants_Web/restaurant', $scope.restaurant).success(function(data) 
        {
            $scope.errors = data;
            if(data.length == 0)
                $window.location.href = 'index.html';
        });
    };
});

restoApp.controller('resto-update-controller', function($scope, $http, $window, $location) 
{
    var id = $location.search().id;
    
    $http.get('http://193.191.187.14:10078/Restaurants_Web/restaurant/' + id).success(function(data) 
    {
        $scope.restaurant = data;
    });
    
    $scope.send = function() 
    {
        console.log($scope.restaurant);
        $http.post('http://193.191.187.14:10078/Restaurants_Web/restaurant/update', $scope.restaurant).success(function(data) 
        {
            $scope.errors = data;
            if(data.length == 0)
                $window.location.href = 'index.html';
        });
    };
    
    $scope.delete = function() 
    {
        console.log($scope.restaurant);
        $http.post('http://193.191.187.14:10078/Restaurants_Web/restaurant/remove/' + $scope.restaurant.id).success(function(data) 
        {
            $window.location.href = 'index.html';
        });
    };
});

angular.module('resto-app.filters', []).filter('searchMessage', function() 
{
    return function(input, searchword) 
    {
        if(input != null)
        {
            for(var i = 0; i < input.length; i++)
            {
                if(input[i].field == searchword)
                {
                    return input[i].defaultMessage;
                }
            }
        }
        return "";
    };
});