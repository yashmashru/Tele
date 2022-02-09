import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export class SplashScreen extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#2682D7',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}>
          <View style={{marginBottom: '70%'}}>
            <Text style={{color: 'white', fontSize: 40, marginBottom: 30}}>
              Welcome to the Teledermatology!
            </Text>
            {/* <Text style={{color: 'white', fontSize: 40}}>
              Meet India's best Doctors Online!
            </Text> */}
          </View>
          <ActivityIndicator size="large" color="black" />
        </View>
      </View>
    );
  }
}

export default SplashScreen;
