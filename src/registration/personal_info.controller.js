(function () {
'use strict';

angular.module('Registration')
.controller('PersonalInfoController', PersonalInfoController);


PersonalInfoController.$inject = ['RegistrationService', '$location'];
function PersonalInfoController(RegistrationService, $location) {
  this.height_type="cm";
  this.weight_type="kg";

  this.saveInfo=function(){
    console.log("hi");
    var obj ={};
    obj.name=this.name;
    obj.occupation=this.occupation;
    obj.birth_date=this.birth_date;
    obj.height=this.height;
    obj.height_type=this.height_type;
    obj.weight=this.weight;
    obj.weight_type=this.weight_type;
    obj.address=this.address;
    obj.postal_code=this.postal_code;
    obj.city=this.city;
    obj.province=this.province;
    obj.home_phone=this.home_phone;
    obj.cell_phone=this.cell_phone;
    obj.work_phone=this.work_phone;
    obj.email=this.email;
    obj.preferred_contact=this.preferred_contact;
    obj.referral=this.referral;
    RegistrationService.updatePersonalInfo(obj);
    $location.path("/health_history");

  }

}

})();
