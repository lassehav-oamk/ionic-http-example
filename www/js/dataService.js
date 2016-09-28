angular.module('httpExample.services', [])

.factory('DataService', function($q, $http) {
  
  return {
    all: function() {
      // return promise 
      return $q(function(resolve, reject){
          $http.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
              // do something with the response if necessary
              
              // here the response body (which contains the JSON data we are interested in) is returned
              resolve(response.data);
          });
      })
    } 
  };
});
