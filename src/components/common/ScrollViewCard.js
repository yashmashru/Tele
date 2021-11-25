import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class ScrollViewCard extends Component {
  render() {
    const {mainViewStyle, mainViewLeftStyle} = styles;
    const {image, hospitalName, doctorName, speciality, detailsOnPress} =
      this.props;
    return (
      <TouchableOpacity onPress={detailsOnPress}>
        <View style={mainViewStyle}>
          <View style={mainViewLeftStyle}>
            <View style={{height: 50, width: 140}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: '5%',
                  marginLeft: '9%',
                  fontSize: 15,
                }}>
                Lokking for desire specialist doctor?
              </Text>
            </View>

            <View style={{height: 80}}>
              <View
                style={{
                  marginLeft: '5%',
                  borderColor: 'white',
                  borderLeftWidth: 2,
                  marginTop: '2%',
                }}>
                <Text
                  style={{
                    color: 'lightblue',
                    marginTop: '0%',
                    marginLeft: '5%',
                    fontWeight: 'bold',
                  }}>
                  {doctorName}
                </Text>
                <Text
                  style={{marginTop: '2%', marginLeft: '5%', color: 'white'}}>
                  {speciality}
                </Text>
                <Text style={{marginLeft: '5%', color: 'lightblue'}}>
                  {hospitalName}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Image
              source={image}
              style={{height: 130, width: 110, borderRadius: 10}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    marginLeft: 10,
    marginTop: 10,
    height: 130,
    width: 250,
    backgroundColor: '#0066cc',
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 10,
  },
  mainViewLeftStyle: {
    height: 130,
    width: 140,
  },
});

// export default ScrollViewCard;

export {ScrollViewCard};
