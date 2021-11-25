import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class AppointmentsCard extends Component {
  render() {
    const {mainViewStyle, cardUpperStyle, cardBottomStyle} = styles;
    const {date, time, doctor, type, hospital} = this.props;
    return (
      <View style={mainViewStyle}>
        <View style={cardUpperStyle}>
          <View
            style={{
              height: '95%',
              width: '31%',
              marginHorizontal: '1%',
            }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                fontWeight: 'normal',
                marginHorizontal: '10%',
                marginVertical: '1%',
              }}>
              Date
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginHorizontal: '10%',
              }}>
              {date}
            </Text>
          </View>
          <View
            style={{
              height: '95%',
              width: '34%',
            }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                fontWeight: 'normal',
                marginHorizontal: '10%',
                marginVertical: '1%',
              }}>
              Time
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginHorizontal: '10%',
              }}>
              {time}
            </Text>
          </View>
          <View
            style={{
              height: '95%',
              width: '31%',
              marginHorizontal: '1%',
            }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                fontWeight: 'normal',
                marginHorizontal: '10%',
                marginVertical: '1%',
              }}>
              Doctor
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginHorizontal: '10%',
              }}>
              {doctor}
            </Text>
          </View>
        </View>
        <View style={cardBottomStyle}>
          <View
            style={{
              height: '95%',
              width: '30%',
              marginHorizontal: '1%',
            }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                fontWeight: 'normal',
                marginHorizontal: '10%',
                marginVertical: '1%',
              }}>
              Type
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginHorizontal: '10%',
              }}>
              {type}
            </Text>
          </View>
          <View
            style={{
              height: '95%',
              width: '36%',
            }}>
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                fontWeight: 'normal',
                marginHorizontal: '10%',
                marginVertical: '1%',
              }}>
              Place
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
                marginHorizontal: '10%',
              }}>
              {hospital}
            </Text>
          </View>
          <View
            style={{
              height: '95%',
              width: '30%',
              marginHorizontal: '1%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: '70%',
                width: '90%',
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'normal',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainViewStyle: {
    height: 120,
    width: '95%',
    alignSelf: 'center',
    marginVertical: '2%',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
  cardUpperStyle: {
    height: '40%',
    width: '100%',

    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBottomStyle: {
    height: '60%',
    width: '100%',

    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// export default AppointmentsCard;
export {AppointmentsCard};
