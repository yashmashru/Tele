import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';

class Four extends Component {
  render() {
    return (
      <View
        style={{
          height: '80%',
          width: '95%',
          alignSelf: 'center',
          backgroundColor: 'white',
          marginVertical: '10%',
        }}>
        <ScrollView style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginHorizontal: '1%',
                marginVertical: '2%',
                height: 160,
                width: 160,
              }}
            />
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginTop: '2%',
                marginLeft: '2%',
                height: 160,
                width: 160,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginHorizontal: '1%',
                marginVertical: '2%',
                height: 160,
                width: 160,
              }}
            />
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginTop: '2%',
                marginLeft: '2%',
                height: 160,
                width: 160,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginHorizontal: '1%',
                marginVertical: '2%',
                height: 160,
                width: 160,
              }}
            />
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginTop: '2%',
                marginLeft: '2%',
                height: 160,
                width: 160,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginHorizontal: '1%',
                marginVertical: '2%',
                height: 160,
                width: 160,
              }}
            />
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginTop: '2%',
                marginLeft: '2%',
                height: 160,
                width: 160,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginHorizontal: '1%',
                marginVertical: '2%',
                height: 160,
                width: 160,
              }}
            />
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginTop: '2%',
                marginLeft: '2%',
                height: 160,
                width: 160,
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginHorizontal: '1%',
                marginVertical: '2%',
                height: 160,
                width: 160,
              }}
            />
            <Image
              source={require('../../images/Hospital.jpg')}
              style={{
                marginTop: '2%',
                marginLeft: '2%',
                height: 160,
                width: 160,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default Four;
export {Four};
