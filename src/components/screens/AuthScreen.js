import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';

export class AuthScreen extends Component {
  render() {
    const {viewStyle, loginStyle, registerStyle, LRstyle} = styles;
    return (
      <View style={viewStyle}>
        <Text style={{fontSize: 40, color: 'white', marginBottom: '50%'}}>
          Welcome to the Teledermatology!
        </Text>
        <View style={LRstyle}>
          <TouchableOpacity
            style={loginStyle}
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('Login Screen');
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={registerStyle}
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('Register Screen');
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#2682D7',
    flexDirection: 'column',
  },
  loginStyle: {
    height: 40,
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerStyle: {
    height: 40,
    width: '80%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  LRstyle: {
    height: 200,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
