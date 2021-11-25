import React, {Component} from 'react';
import {DoctorProfileBioScreenCard} from '../common';
export class Doctor4Screen extends Component {
  render() {
    return (
      <DoctorProfileBioScreenCard
        Name="Dr.ABCD"
        image={require('../../images/doctor4.png')}
        rating="⭐⭐⭐⭐⭐"
        clinicName="Health care Clinic"
        speciality="Meedicine and heart Specialist"
        description="The field includes medical diagnosis and treatment of congenital
        heart defects, coronary artery disease, heart failure, valvular
        heart disease and electrophysiology. Physicians who specialize
        in this field of medicine are called cardiologists, a specialty
        of internal medicine."
        reviews="2.4K"
        experience="5 Years"
        patients="8.1K"
      />
    );
  }
}

export default Doctor4Screen;
