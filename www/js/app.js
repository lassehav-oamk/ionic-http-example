
angular.module('httpExample', ['ionic', 'httpExample.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('httpExampleCtrl', function($scope, DataService){
  // called when the button is clicked
  $scope.executeHttp = function()
  {
    // User our own service to get the data
    // this controller does not really care where the data is coming from.
    // It could come from local database, online rest api, file system whatever - the controller just uses the service
    DataService.all().then(function(data){
      $scope.items = data;
    });
  }
  
})
