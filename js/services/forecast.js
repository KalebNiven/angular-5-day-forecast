app.factory('forecast',['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-apiforecast.json').success(function(data) {
    return data;
  	})
  .error(function(err) {
    return err;
  });
}]);