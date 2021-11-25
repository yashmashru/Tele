import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {CategoriesCard2, TopTabBar} from '../common';

export class AllCategories extends Component {
  render() {
    const {mainViewStyle} = styles;
    return (
      <View style={mainViewStyle}>
        <TopTabBar heading="All" Name="Categories" />
        <View style={{height: '88%'}}>
          <ScrollView>
            <CategoriesCard2
              image={require('../../images/heartbeat.png')}
              category="Cardiology"
              description="Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology."
            />
            <CategoriesCard2
              image={require('../../images/wc.png')}
              category="Orthopadics"
              description="Orthopedic surgery or orthopedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. Orthopedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumors, and congenital disorders."
            />
            <CategoriesCard2
              image={require('../../images/brain.png')}
              category="Neurology"
              description="Neurology is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems, including their coverings, blood vessels, and all effector tissue, such as muscle."
            />
            <CategoriesCard2
              image={require('../../images/plasticsurgery.png')}
              category="Plastic Surgery"
              description="Plastic surgery is a surgical specialty involving the restoration, reconstruction, or alteration of the human body. It can be divided into two main categories: reconstructive surgery and cosmetic surgery. Reconstructive surgery includes craniofacial surgery, hand surgery, microsurgery, and the treatment of burns."
            />
            <CategoriesCard2
              image={require('../../images/doctoricon.png')}
              category="Psychiatry"
              description="Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of mental disorders. These include various maladaptations related to mood, behaviour, cognition, and perceptions. See glossary of psychiatry."
            />
            <CategoriesCard2
              image={require('../../images/pre.png')}
              category="Obstetrics and gynaecology"
              description="Obstetrics and gynaecology or obstetrics and gynecology is the medical specialty that encompasses the two subspecialties of obstetrics and gynecology. It is commonly abbreviated as OB-GYN or OB/GYN in US English and Canadian English, and as obs and gynae or O&G in British English."
            />
            <CategoriesCard2
              image={require('../../images/skin.png')}
              category="Dermatology"
              description="Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems."
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#D8F9FF',
  },
});

export default AllCategories;
