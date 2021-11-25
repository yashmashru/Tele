import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class DoctorProfileBioScreenCard extends Component {
  render() {
    const {mainViewStyle, headerViewStyles, mainStyle} = styles;
    const {
      Name,
      image,
      rating,
      clinicName,
      speciality,
      description,
      reviews,
      experience,
      patients,
    } = this.props;
    return (
      <View style={mainViewStyle}>
        <View style={headerViewStyles}>
          <Text style={{color: 'black', fontSize: 25}}>{Name}</Text>
        </View>
        <View style={mainStyle}>
          <View
            style={{
              height: '35%',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '3%',
            }}>
            <Image
              source={image}
              style={{height: '100%', width: '50%', borderRadius: 10}}
            />
          </View>
          <View
            style={{
              height: '10%',
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: '80%',
                width: '31%',
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 0.5,
                elevation: 5,
              }}>
              <Image
                source={require('../../images/voicecall.png')}
                style={{height: '45%', width: '20%', marginRight: '5%'}}
              />
              <Text style={{color: 'blue', fontSize: 16}}>Voice call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '80%',
                width: '31%',
                backgroundColor: 'white',
                borderRadius: 10,
                marginHorizontal: '3%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 0.5,
                elevation: 5,
              }}>
              <Image
                source={require('../../images/videocall.png')}
                style={{height: '35%', width: '20%', marginRight: '5%'}}
              />
              <Text style={{color: 'blue', fontSize: 16}}>Video call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '80%',
                width: '31%',
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 0.5,
                elevation: 5,
              }}>
              <Image
                source={require('../../images/chat.png')}
                style={{height: '45%', width: '20%', marginRight: '5%'}}
              />
              <Text style={{color: 'blue', fontSize: 16}}>Message</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '50%',
              width: '90%',
              alignSelf: 'center',
              marginTop: '1%',
            }}>
            <View
              style={{
                height: '25%',
                width: '100%',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                {speciality}
              </Text>
              <Text style={{color: '#2682D7', marginVertical: '0.5%'}}>
                {clinicName}
              </Text>
              <Text>{rating}</Text>
            </View>
            <View
              style={{
                height: '35%',
                width: '100%',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                About {Name}
              </Text>
              <Text style={{color: 'black'}}>{description}</Text>
            </View>
            <View
              style={{
                height: '22%',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '90%',
                  width: '32%',
                  flexDirection: 'column',
                }}>
                <Text style={{fontSize: 18, color: '#2682D7'}}>Patients</Text>
                <Text style={{fontSize: 18, color: 'black'}}>{patients}</Text>
              </View>
              <View
                style={{
                  height: '90%',
                  width: '32%',

                  marginHorizontal: '2%',
                }}>
                <Text style={{fontSize: 18, color: '#2682D7'}}>Experience</Text>
                <Text style={{fontSize: 18, color: 'black'}}>{experience}</Text>
              </View>
              <View
                style={{
                  height: '90%',
                  width: '32%',
                }}>
                <Text style={{fontSize: 18, color: '#2682D7'}}>Reviews</Text>
                <Text style={{fontSize: 18, color: 'black'}}>{reviews}</Text>
              </View>
            </View>
            <View
              style={{
                height: '18%',
                width: '100%',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: '90%',
                  width: '90%',
                  backgroundColor: '#2682D7',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Book Appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#D8F9FF',
  },
  headerViewStyles: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
  },
  mainStyle: {
    height: '90%',
    width: '100%',
    backgroundColor: 'transparent',
  },
});

// export default DoctorProfileBioScreen;

export {DoctorProfileBioScreenCard};
