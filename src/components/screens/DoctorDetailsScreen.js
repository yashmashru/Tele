import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {AvailableDoctorCard, TopTabBar} from '../common';

export class DoctorDetailsScreen extends Component {
  render() {
    const {mainViewStyle, scrollCardStyle} = styles;
    return (
      <View style={mainViewStyle}>
        <TopTabBar
          Name="Specialist"
          heading="Available"
          image={require('../../images/search.png')}
          image2={require('../../images/chat.png')}
          detailsOnPress={() => {
            this.props.navigation.navigate('Search Screen');
          }}
        />
        <View style={{height: '88%'}}>
          <ScrollView>
            <View style={scrollCardStyle}>
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor3.jpg')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor3 Screen');
                }}
              />
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor4.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor4 Screen');
                }}
              />
            </View>
            <View style={scrollCardStyle}>
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor4.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor4 Screen');
                }}
              />
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor3.jpg')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor3 Screen');
                }}
              />
            </View>
            <View style={scrollCardStyle}>
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor3.jpg')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor3 Screen');
                }}
              />
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor4.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor4 Screen');
                }}
              />
            </View>
            <View style={scrollCardStyle}>
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor4.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor4 Screen');
                }}
              />
              <AvailableDoctorCard
                DoctorName="Dr.ABCDE"
                Speciality="Neurologist"
                Rating="⭐⭐⭐⭐⭐"
                experience="8"
                NumberofPatients="2K"
                image={require('../../images/doctor3.jpg')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Doctor3 Screen');
                }}
              />
            </View>
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
  scrollCardStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '2%',
  },
});

export default DoctorDetailsScreen;
