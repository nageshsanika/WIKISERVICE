'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
app.controller('MainController',['$scope','wikiAPI','$sce',function($scope,wikiAPI,$sce) {
  $scope.init = function () {
    var username='User';
    if(username==null)
      username='User';
    $scope.username='<h4 class="user_name">Welcome '+username+' <span class="glyphicon glyphicon-user"></span></h4>';
  };
  $scope.getItem=function() {
    $scope.dataFromWIKI='<center>Loading Please wait............. <span class="glyphicon glyphicon-repeat"></span></center>';
    var search_item=document.getElementById('search_item').value;
    search_item=search_item.replace(' ','_');
    search_item=encodeURIComponent(search_item);
    wikiAPI.get({ name: search_item }).then(function(data) {
      var a=data.data.query.pages;
      var myWikiProcessedData=[];
      for (var id in a) {
        myWikiProcessedData.push(a[id]['extract']);
      }
      if(typeof myWikiProcessedData['0']==='undefined')
        var resultData='<center>No Search Results <h2>&#9785;</h2></center>';
      else
        var resultData=myWikiProcessedData['0'];
      $scope.dataFromWIKI = $sce.trustAsHtml(resultData);
    });
  }
}]);

