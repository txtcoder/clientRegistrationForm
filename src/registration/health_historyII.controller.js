(function(){
'user strict';

angular.module('Registration')
.controller('HealthHistoryControllerII', HealthHistoryControllerII);

HealthHistoryControllerII.$inject =['RegistrationService','$location'];
function HealthHistoryControllerII(RegistrationService,$location) {
   this.saveHealthHistoryII = function () {
     obj={};

     obj.surgery_type = this.surgery_type;
     obj.surgery_date = this.surgery_date;
     obj.surgery_current_symptoms = this.surgery_current_symptoms;


     obj.injury_type = this.injury_type;
     obj.injury_date = this.injury_date;
     obj.injury_current_symptoms = this.injury_current_symptoms;


     obj.other_medical_conditions = this.other_medical_conditions;


     obj.of_special_note = this.of_special_note;



     obj.physician_name = this.physician_name;
     obj.physician_address = this.physician_address;
     obj.physician_phone = this.physician_phone;
     obj.physician_last_visit_day = this.physician_last_visit_day;
     obj.physician_last_visit_month = this.physician_last_visit_month;
     obj.physician_last_visit_year = this.physician_last_visit_year;


     obj.present_involvement_in_other_health_care = this.present_involvement_in_other_health_care;
     obj.involvement_in_chiropractic = this.involvement_in_chiropractic;
     obj.involvement_in_physiotherapy = this.involvement_in_physiotherapy;
     obj.involvement_in_tcm = this.involvement_in_tcm;
     obj.involvement_in_psychotherapy = this.involvement_in_psychotherapy;
     obj.involvement_in_massage_theraphy = this.involvement_in_massage_theraphy;
     obj.involvement_in_others = this.involvement_in_others;
     obj.involvmenet_in_others_text = this.involvmenet_in_others_text;



     obj.chemical_theraphy = this.chemical_theraphy;
     obj.radiotherapy = this.radiotherapy;

     obj.supplements = this.supplements;
     obj.chinese_herbals = this.chinese_herbals;
     RegistrationService.updateHealthHistoryII(obj);
   }

}

})();
