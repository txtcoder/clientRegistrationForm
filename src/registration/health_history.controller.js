(function(){
'user strict';

angular.module('Registration')
.controller('HealthHistoryController', HealthHistoryController);

HealthHistoryController.$inject =['RegistrationService','$location'];
function HealthHistoryController(RegistrationService,$location) {
  this.saveHealthHistory = function(){
    var obj={};
    obj.current_headaches = this.current_headaches;
    obj.previous_headaches = this.previous_headaches;

    obj.current_eye_problems = this.current_eye_problems;
    obj.previous_eye_problems = this.previous_eye_problems;

    obj.current_ear_problems = this.current_ear_problems;
    obj.previous_ear_problems = this.previous_ear_problems;

    obj.current_hearing_loss = this.current_hearing_loss;
    obj.previous_hearing_loss = this.previous_hearing_loss;


    obj.current_chronic_cough = this.current_chronic_cough;
    obj.previous_chronic_cough = this.previous_chronic_cough;

    obj.current_short_breath = this.current_short_breath;
    obj.previous_short_breath = this.previous_short_breath;

    obj.current_bronchitis = this.current_bronchitis;
    obj.previous_bronchitis = this.previous_bronchitis;

    obj.current_asthma = this.current_asthma;
    obj.previous_asthma = this.previous_asthma;

    obj.current_smoking = this.current_smoking;
    obj.previous_smoking = this.previous_smoking;


    obj.current_high_blood_pressure = this.current_high_blood_pressure;
    obj.previous_high_blood_pressure = this.previous_high_blood_pressure;

    obj.current_low_blood_pressure = this.current_low_blood_pressure;
    obj.previous_low_blood_pressure = this.previous_low_blood_pressure;

    obj.current_cchf = this.current_cchf;
    obj.previous_cchf = this.previous_cchf;

    obj.current_heart_attack = this.current_heart_attack;
    obj.previous_heart_attack = this.previous_heart_attack;

    obj.current_phlebitis = this.current_phlebitis;
    obj.previous_phlebitis = this.previous_phlebitis;

    obj.current_stroke_cva = this.current_stroke_cva;
    obj.previous_stroke_cva = this.previous_stroke_cva;

    obj.current_pacemaker_or_other = this.current_pacemaker_or_other;
    obj.previous_pacemaker_or_other = this.previous_pacemaker_or_other;


    obj.current_difficult_digestion = this.current_difficult_digestion;
    obj.previous_difficult_digestion = this.previous_difficult_digestion;

    obj.current_constipation = this.current_constipation;
    obj.previous_constipation = this.previous_constipation;

    obj.current_liver = this.current_liver;
    obj.previous_liver = this.previous_liver;
    obj.liver_problem = this.liver_problem;

    obj.current_gall_bladder = this.current_gall_bladder;
    obj.previous_gall_bladder = this.previous_gall_bladder;

    obj.current_kidney = this.current_kidney;
    obj.previous_kidney = this.previous_kidney;

    obj.current_bladder = this.current_bladder;
    obj.previous_bladder = this.previous_bladder;

    obj.current_diabetes_onset = this.current_diabetes_onset;
    obj.previous_diabetes_onset = this.previous_diabetes_onset;

    obj.current_sinus = this.current_sinus;
    obj.previous_sinus = this.previous_sinus;

    obj.current_allergies = this.current_allergies;
    obj.previous_allergies = this.previous_allergies;

    obj.current_insomnia = this.current_insomnia;
    obj.previous_insomnia = this.previous_insomnia;

    obj.current_cancer = this.current_cancer;
    obj.previous_cancer = this.previous_cancer;

    obj.current_arthritis = this.current_arthritis;
    obj.previous_arthritis = this.previous_arthritis;


    obj.current_hepatitis = this.current_hepatitis;
    obj.previous_hepatitis = this.previous_hepatitis;

    obj.current_herpes = this.current_herpes;
    obj.previous_herpes = this.previous_herpes;

    obj.current_tb = this.current_tb;
    obj.previous_tb = this.previous_tb;

    obj.current_hiv_aids = this.current_hiv_aids;
    obj.previous_hiv_aids = this.previous_hiv_aids;

    obj.current_infections_others = this.current_infections_others;
    obj.previous_infections_others = this.previous_infections_others;


    obj.current_menstrual_problems = this.current_menstrual_problems;
    obj.previous_menstrual_problems = this.previous_menstrual_problems;

    obj.current_gynaecological_surgery = this.current_gynaecological_surgery;
    obj.previous_gynaecological_surgery = this.previous_gynaecological_surgery;
    obj.gynaecological_surgery_problems = this.gynaecological_surgery_problems;

    obj.current_pregnant = this.current_pregnant;
    obj.previous_pregnant = this.previous_pregnant;
    obj.pregnant_day = this.pregnant_day;
    obj.pregnant_month = this.pregnant_month;
    obj.pregnant_year = this.pregnant_year;

    obj.current_menopausal_problems = this.current_menopausal_problems;
    obj.previous_menopausal_problems = this.previous_menopausal_problems;


    obj.current_skin_conditions = this.current_skin_conditions;
    obj.previous_skin_conditions = this.previous_skin_conditions;

    obj.current_bruise_easily = this.current_bruise_easily;
    obj.previous_bruise_easily = this.previous_bruise_easily;


    obj.current_pain_neck = this.current_pain_neck;
    obj.current_stiff_neck = this.current_stiff_neck;
    obj.previous_pain_neck = this.previous_pain_neck;
    obj.previous_stiff_neck = this.previous_stiff_neck;

    obj.current_pain_shoulders = this.current_pain_shoulders;
    obj.current_stiff_shoulders = this.current_stiff_shoulders;
    obj.previous_pain_shoulders = this.previous_pain_shoulders;
    obj.previous_stiff_shoulders = this.previous_stiff_shoulders;

    obj.current_pain_upper_back = this.current_pain_upper_back;
    obj.current_stiff_upper_back = this.current_stiff_upper_back;
    obj.previous_pain_upper_back = this.previous_pain_upper_back;
    obj.previous_stiff_upper_back = this.previous_stiff_upper_back;

    obj.current_pain_mid_back = this.current_pain_mid_back;
    obj.current_stiff_mid_back = this.current_stiff_mid_back;
    obj.previous_pain_mid_back = this.previous_pain_mid_back;
    obj.previous_stiff_mid_back = this.previous_stiff_mid_back;

    obj.current_pain_low_back = this.current_pain_low_back;
    obj.current_stiff_low_back = this.current_stiff_low_back;
    obj.previous_pain_low_back = this.previous_pain_low_back;
    obj.previous_stiff_low_back = this.previous_stiff_low_back;

    obj.current_pain_left_leg = this.current_pain_left_leg;
    obj.current_stiff_left_leg = this.current_stiff_left_leg;
    obj.previous_pain_left_leg = this.previous_pain_left_leg;
    obj.previous_stiff_left_leg = this.previous_stiff_left_leg;

    obj.current_pain_right_leg = this.current_pain_right_leg;
    obj.current_stiff_right_leg = this.current_stiff_right_leg;
    obj.previous_pain_right_leg = this.previous_pain_right_leg;
    obj.previous_stiff_right_leg = this.previous_stiff_right_leg;

    obj.current_pain_left_hip = this.current_pain_left_hip;
    obj.current_stiff_left_hip = this.current_stiff_left_hip;
    obj.previous_pain_left_hip = this.previous_pain_left_hip;
    obj.previous_stiff_left_hip = this.previous_stiff_left_hip;

    obj.current_pain_right_hip = this.current_pain_right_hip;
    obj.current_stiff_right_hip = this.current_stiff_right_hip;
    obj.previous_pain_right_hip = this.previous_pain_right_hip;
    obj.previous_stiff_right_hip = this.previous_stiff_right_hip;


    obj.current_pain_left_knee = this.current_pain_left_knee;
    obj.current_stiff_left_knee = this.current_stiff_left_knee;
    obj.previous_pain_left_knee = this.previous_pain_left_knee;
    obj.previous_stiff_left_knee = this.previous_stiff_left_knee;

    obj.current_pain_right_knee = this.current_pain_right_knee;
    obj.current_stiff_right_knee = this.current_stiff_right_knee;
    obj.previous_pain_right_knee = this.previous_pain_right_knee;
    obj.previous_stiff_right_knee = this.previous_stiff_right_knee;

    obj.current_pain_left_foot = this.current_pain_left_foot;
    obj.current_stiff_left_foot = this.current_stiff_left_foot;
    obj.previous_pain_left_foot = this.previous_pain_left_foot;
    obj.previous_stiff_left_foot = this.previous_stiff_left_foot;


    obj.current_pain_right_foot = this.current_pain_right_foot;
    obj.current_stiff_right_foot = this.current_stiff_right_foot;
    obj.previous_pain_right_foot = this.previous_pain_right_foot;
    obj.previous_stiff_right_foot = this.previous_stiff_right_foot;

    RegistrationService.updateHealthHistory(obj);
    $location.path("/health_historyII");
  }

}

})();
