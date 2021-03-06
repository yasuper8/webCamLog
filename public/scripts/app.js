console.log("app.js linked!");


angular
  .module('webcamlog', ['ngRoute'])
  .config(config);

  // var webcamlog = angular.module('webcamlog', ['ngRoute']);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/landing',
      controller: 'UsersIndexController',
      controllerAs: 'usersIndexCtrl'
    })
    .when('/users', {
      templateUrl: '/templates/users',
      controller: 'UsersIndexController',
      controllerAs: 'usersIndexCtrl'
    })
    .when('/users/:userId', {
      templateUrl: '/templates/user-show',
      controller: 'UsersShowController',
      controllerAs: 'usersShowCtrl'
    })
    .when('/video-rec', {
      templateUrl: '/templates/video-rec',
      controller: 'VideosIndexController',
      controllerAs: 'videosIndexCtrl'
    })
    .when('/videos', {
      templateUrl: '/templates/videos',
      controller: 'VideosIndexController',
      controllerAs: 'videosIndexCtrl'
    })
    .when('/videos/:videoId', {
      templateUrl: '/templates/video-show',
      controller: 'VideosShowController',
      controllerAs: 'videosShowCtrl'
    })


    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}


// webcamlog.controller('UserShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
//
//   $http({
//       method: 'GET',
//       url: '/api/user' + user._id
//   }).then(function successCb(res) {
//       $scope.user = res.data;
//   }, function errorCb(res) {
//       console.log('there was an error getting book data', res);
//   });
//
// }])
