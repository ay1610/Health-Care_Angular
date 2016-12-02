angular.module("healthcareApp").controller('healthcareController',function($scope,$http,$filter){
 $scope.reasons=['Healthcare MarketPlace','Technical suppoet','Website Feedback'];
 $scope.contact={};
 $scope.errMessage=true;
    $http.get("data/data.json")
    .then(function(response) {
        $scope.postsData = response.data;
        $scope.filteredpostData= $scope.postsData;
    });

    $http.get("data/glossaryData.json")
    .then(function(response) {
        $scope.glossaryData = response.data;
        $scope.filteredData= $scope.glossaryData;
    });
    $scope.filterSearch="";
    $scope.selectedLanguage=function(language){
        if(language){
            $scope.filteredpostData=$filter('filter')($scope.postsData, {postLanguage:language});
        }
        else{
           $scope.filteredpostData= $scope.postsData;
        }        
    }
    $scope.languageChanged=function(language){
        if(language){
            $scope.filteredData=$filter('filter')($scope.glossaryData, {glossaryLanguage:language});
        }
        else{
           $scope.filteredData= $scope.glossaryData;
        }        
    }

    $scope.openPost=function(url){
        window.open(url, '_blank');
    
    }
    $scope.validate=function(contactObject){
        if(contactObject && contactObject.name && contactObject.email && contactObject.message && contactObject.selectedReason){
            $scope.errMessage=false;
        }
        else{
            $scope.errMessage=true;
        }
        
    }

});