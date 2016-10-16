(function(){
'use strict';

angular.module('Registration')
.service("RegistrationService", RegistrationService);

RegistrationService.$inject= [];
function RegistrationService() {
  var obj = [];
  this.updatePersonalInfo = function(object){
    console.log(object);
    obj.push(object);
  };
}

})();
