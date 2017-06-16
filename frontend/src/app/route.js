'use strict';

angular.module('frontend').config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
     .when('/', {
        templateUrl: 'app/hmsort/sortNumbers.html',
        controller: 'sortController'
         /*resolve:{
        	getSortedList: function($resource, sortService, $rootScope, $route){
  			  return sortService.getSortedList($resource,$rootScope).query({id: $rootScope.user.uid}).$promise.then(function(data){
  				  return data;
  			  });
  		  }
  	  }*/
      }) 
     
	 /*.when('/change-control-record/:id', {
		templateUrl: 'app/changeControl/change-control-view.html',
        controller : 'ChangeControlController',
        resolve: {
        	changeControlObj : function ($resource, $route, changeControlRecordService, $rootScope) {
        		return changeControlRecordService.changeControlRecord($resource,$rootScope).get({ccgRecordId:$route.current.params.id,actionType:'view'}).$promise.then(function(changeControl){
        			return changeControl;
	          	}, function (data){
	          	})
	          	.finally(function() {
				});
            },
            proxyOwner : function(){
 	        	return null;
             }
        }
      })
      .when('/change-control-edit/:id', {
        templateUrl: 'app/changeControl/change-control-edit.html',
        controller : 'ChangeControlController',
        	 resolve: {
             	changeControlObj : function ($resource,$route,changeControlRecordService,$rootScope,$location) {
     	        	return changeControlRecordService.changeControlRecord($resource,$rootScope).get({ccgRecordId:$route.current.params.id, actionType:'edit'}).$promise.then(function(changeControl){
            			if((changeControl.owner != null && changeControl.owner.uid == $rootScope.user.uid) || 
            					(changeControl.configurationOwnerProxy != null && changeControl.configurationOwnerProxy.uid == $rootScope.user.uid)
            					|| $rootScope.user.role.indexOf('ROLE_ADMIN')>=0||$rootScope.user.role.indexOf('ROLE_SUPER_USER')>=0||
            					$rootScope.user.role.indexOf('ROLE_QTL_COST_BASIS_USER')>=0)
     	        		return changeControl;
            			else
            				$location.path('/403');
            				
     	          	});
     	        	
					 * if(changeRecord != null) return changeRecord; else
					 * $location.path('/403');
					 
                 },
                 proxyOwner : function($resource,changeControlRecordService,$rootScope){
     	        	return changeControlRecordService.proxyOwner($resource, $rootScope).query().$promise.then(function(proxyOwner){
     	        		return proxyOwner;
     	          	});
                 }
             }
      })  
      .when('/change-control-record-add',{
    	  templateUrl:'app/changeControl/change-control-add.html',
    	  controller : 'ChangeControlController',
    		  resolve: { 
              	changeControlObj : function () {
      	        	return null;
                  },
                  proxyOwner : function($resource,changeControlRecordService,$rootScope){
      	        	return changeControlRecordService.proxyOwner($resource, $rootScope).query().$promise.then(function(proxyOwner){
      	        		return proxyOwner;
      	          	});
                  }
              }
      }) 
      .when('/justification/:id',{
    	  templateUrl:'app/justification/justification.html',
    	  controller : 'JustificationController',
    	  resolve:{
    		  getJustificationContent: function($resource, justificationContent, $rootScope, $route){
    			  return justificationContent.getChangeRecord($resource,$rootScope).get({id:$route.current.params.id,encText:$route.current.params.encText,user:$rootScope.user.uid}).$promise.then(function(data){
    				  return data;
    			  });
    		  }
    	  }
      })      
      .when('/manage-listing/add',{
    	  templateUrl:'app/manageList/manage_listing.html',
    	  controller: 'ManageListController'
      })
      .when('/manage-listing',{
    	  templateUrl:'app/manageList/manage_listing_view.html',
    	  controller: 'ManageListController'
      })
      .when('/manage-listing/edit/:id',{
    	  templateUrl:'app/manageList/manage_listing.html',
    	  controller: 'ManageListController'
      })     
      .when('/generic-user',{
    	  templateUrl:'app/genericUser/generic_user.html',
    	  controller: 'GenericUserController'
      })
      .when('/search/:filter',{
    	  templateUrl:'app/search/search_ccg_listing.html',
    	  controller: 'SearchController',
    	  resolve: { 
                searchResult : function($resource,SearchService,$rootScope,$route){
                	return SearchService.searchList($rootScope).query({filters:$route.current.params.filter}).$promise.then(function(ccgSearchList){
    					return ccgSearchList;
    				});
    	          	}
                }
      })
      .when('/upload-attachment-s3',{
    	  templateUrl:'app/s3upload/new-attach.html',
    	  controller: 'AttachS3UploadCtrl'
      })
      .when('/thankyou',{
    	  templateUrl:'app/common/thanku.html'
      })
      .when ('/401', {
        templateUrl: '403.html'
      })
      .when ('/403', {
        templateUrl: '403.html'
      })
      .when ('/404', {
        templateUrl: '404.html'
      })
      .when ('/500', {
        templateUrl: '500.html'
      })
      .when ('/under-construction',{
    	templateUrl: 'underconstruction.html'
      })*/
      .otherwise({
        redirectTo: '404'
      });
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    
 // use the HTML5 History API
    /* $locationProvider.html5Mode(true); */
      
      
  });