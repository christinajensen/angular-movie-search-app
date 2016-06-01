app.controller("homeController", ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.view = {};
  var baseSearchUrl = 'http://www.omdbapi.com/?s='
  var baseIdUrl = 'http://www.omdbapi.com/?i='
  
  $scope.searchMovie = function() {
    var movieTitle = $scope.view.movieInput;
    $http.get(baseSearchUrl + movieTitle).then(function(res) {
      $scope.view.movies = res.data.Search;
      $location.path('/');
    })
  }

  $scope.showMovieInfo = function(movie) {
    $http.get(baseIdUrl + movie.imdbID).then(function(res) {
      $scope.view.movieInfo = res.data;
      // console.log(res);
  })
  }
}])