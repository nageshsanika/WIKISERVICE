app.factory('wikiAPI', function($http) {
  var wikiAPI = {
    get: function(item) {
      return $http.jsonp('http://en.wikipedia.org/w/api.php?titles=' + item.name + '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK');
    }
  };
  return wikiAPI;
});
