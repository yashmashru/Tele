import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ScrollViewCard,
  BottomTabBar,
  CategoriesCard,
  AvailableDoctorCard,
  TopTabBar,
} from '../common';

export class PatientHomeScreen extends Component {
  render() {
    const {
      mainViewStyle,
      headerViewStyle,
      headerLeftStyle,
      headerRightStyle,
      scrollViewStyle,
    } = styles;
    return (
      <View style={mainViewStyle}>
        <TopTabBar
          Name="Specialist"
          heading="Find Your"
          image={require('../../images/search.png')}
          image2={require('../../images/chat.png')}
          detailsOnPress={() => {
            this.props.navigation.navigate('Search Screen');
          }}
        />
        <View
          style={{
            height: '25%',
            width: '100%',
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ScrollView
            horizontal={true}
            style={scrollViewStyle}
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}>
            <ScrollViewCard
              image={require('../../images/doctor3.jpg')}
              hospitalName="Jay Hospital"
              doctorName="Dr.ABCD"
              speciality="Health and cardiology"
              detailsOnPress={() => {
                this.props.navigation.navigate('Doctor3 Screen');
              }}
            />

            <ScrollViewCard
              image={require('../../images/doctor4.png')}
              hospitalName="Ramdev Hospital"
              doctorName="Dr.ABCD"
              speciality="Pathology"
              detailsOnPress={() => {
                this.props.navigation.navigate('Doctor4 Screen');
              }}
            />

            <ScrollViewCard
              image={require('../../images/doctor3.jpg')}
              hospitalName="Kiran Hospital"
              doctorName="Dr.ABCD"
              speciality="Pedetrition"
              detailsOnPress={() => {
                this.props.navigation.navigate('Doctor3 Screen');
              }}
            />

            <ScrollViewCard
              image={require('../../images/doctor4.png')}
              hospitalName="Venus Hospital"
              doctorName="Dr.ABCD"
              speciality="Physical fitness"
              detailsOnPress={() => {
                this.props.navigation.navigate('Doctor4 Screen');
              }}
            />

            <ScrollViewCard
              image={require('../../images/doctor3.jpg')}
              hospitalName="Sadguru Hospital"
              doctorName="Dr.ABCD"
              speciality="Neurology"
              detailsOnPress={() => {
                this.props.navigation.navigate('Doctor3 Screen');
              }}
            />
          </ScrollView>
        </View>
        <View
          style={{
            height: '23%',
            width: '100%',
            backgroundColor: 'transparent',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: '3%',
                // backgroundColor: 'grey',
                height: '15%',
                width: '100%',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '30%',
                  marginRight: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: 'black'}}>Categories</Text>
              </View>
              <View
                style={{
                  height: '100%',
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(this.props);
                    this.props.navigation.navigate('All Categories Screen');
                  }}>
                  <Text style={{fontSize: 18, color: 'blue'}}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              style={{flex: 1}}
              showsHorizontalScrollIndicator={false}>
              <CategoriesCard
                Name="Cardiology"
                image={require('../../images/heartbeat.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('All Categories Screen');
                }}
              />
              <CategoriesCard
                Name="Orthopadics"
                image={require('../../images/wc.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('All Categories Screen');
                }}
              />
              <CategoriesCard
                Name="Neurology"
                image={require('../../images/brain.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('All Categories Screen');
                }}
              />
              <CategoriesCard
                Name="Plastic Surgery"
                image={require('../../images/plasticsurgery.png')}
                detailsOnPress={() => {
                  this.props.navigation.navigate('All Categories Screen');
                }}
              />
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            height: '5%',
            width: '100%',
            // backgroundColor: 'black',
            flexDirection: 'row',

            marginVertical: '2%',
          }}>
          <View
            style={{
              height: '100%',
              width: '40%',
              marginRight: '40%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                marginLeft: 10,
                marginTop: '2%',
              }}>
              Available Doctor
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{marginTop: '2%'}}
              onPress={() => {
                console.log(this.props);
                this.props.navigation.navigate('Doctor Details Screen');
              }}>
              <Text style={{fontSize: 18, color: 'blue'}}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: '27%',
            width: '100%',
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5%',
          }}>
          <ScrollView
            horizontal={true}
            style={{height: '100%', width: '100%', flex: 1}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer2}>
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
          </ScrollView>
        </View>
        {/* <BottomTabBar /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#D8F9FF',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  scrollViewStyle: {
    height: '27%',
    width: '100%',
    backgroundColor: 'transparent',
    flex: 1,
  },
  scrollViewCardStyle: {
    height: '90%',
    width: 250,
    backgroundColor: '#0066cc',
    marginTop: '0.5%',
    // marginLeft: 10,
    borderRadius: 10,
  },
  contentContainer: {
    // paddingVertical: 10,
    backgroundColor: '#D8F9FF',
  },
  contentContainer2: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  scrollImageStyle: {
    height: '100%',
    width: '35%',
  },
});

export default PatientHomeScreen;
