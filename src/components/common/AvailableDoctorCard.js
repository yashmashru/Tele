import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class AvailableDoctorCard extends Component {
  render() {
    const {mainViewStyle, leftViewStyle, rightViewStyle} = styles;
    const {
      DoctorName,
      Speciality,
      Rating,
      experience,
      NumberofPatients,
      image,
      detailsOnPress,
    } = this.props;
    return (
      <TouchableOpacity onPress={detailsOnPress}>
        <View style={mainViewStyle}>
          <View style={leftViewStyle}>
            <View
              style={{
                height: '50%',
                width: '100%',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  height: '60%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {DoctorName}
                </Text>
                <Text style={{color: 'black'}}>{Speciality}</Text>
              </View>
              <View
                style={{
                  height: '40%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text>{Rating}</Text>
              </View>
            </View>
            <View
              style={{
                height: '50%',
                width: '100%',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  height: '50%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Text style={{color: 'black'}}>Experience</Text>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {experience}
                  <Text style={{fontWeight: '600'}}> Years</Text>
                </Text>
              </View>
              <View
                style={{
                  height: '50%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Text style={{color: 'black'}}>Patients</Text>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {NumberofPatients}
                </Text>
              </View>
            </View>
          </View>
          <View style={rightViewStyle}>
            <Image
              source={image}
              style={{height: '100%', width: '100%', borderRadius: 10}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainViewStyle: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 10,
  },
  leftViewStyle: {
    height: '100%',
    width: '60%',
  },
  rightViewStyle: {
    height: '100%',
    width: '40%',
  },
});

// export default AvailableDoctorCard;
export {AvailableDoctorCard};
