(function(){
'use strict';

angular.module('Registration')
.service("RegistrationService", RegistrationService);

RegistrationService.$inject= ["$http"];
function RegistrationService($http) {
  var personalInfo = [];
  var healthHistory = [];
  var healthHistoryII =[];
  this.updatePersonalInfo = function(object){
    console.log(object);
    personalInfo.push(object);
  };
  this.updateHealthHistory = function(object){
    console.log(object);
    healthHistory.push(object);
  };
  this.updateHealthHistoryII = function(object){
    console.log(object);
    healthHistoryII.push(object);
    this.updateDatabase();
  }
  this.updateDatabase = function(){

    var health = {};
    for (var attrname in healthHistory[0]) { health[attrname] = healthHistory[0][attrname]; }
    for (var attrname in healthHistoryII[0]) { health[attrname] = healthHistoryII[0][attrname]; }
    var obj = JSON.stringify({tcm_basic_contact: personalInfo[0], tcm_patient_info: health})


    $http.post("https://salty-journey-18993.herokuapp.com/contacts", obj)
    .success(function(data, status, headers, config){
      console.log(data);
    }).error(function(data,status,headers,config){
      console.log(data);
    });
  }
}

})();
