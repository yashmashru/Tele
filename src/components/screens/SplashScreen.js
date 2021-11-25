import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export class SplashScreen extends Component {
  componentDidMount() {
    console.log('This.props params', this.props.route);
  }

  render() {
    return (
      <View>
        <Text style={{color: 'black'}}> Welcome to spash Screen </Text>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
}

export default SplashScreen;
